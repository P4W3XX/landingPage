import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  id: string;
  name: string;
  email: string;
  phone?: string;
  budget?: string;
  scope?: string[];
  care: string;
  post_launch?: string[];
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const payload: ContactPayload = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const TO_EMAIL = Deno.env.get("CONTACT_TO_EMAIL") ?? "pawelsarzynski51@gmail.com";
    // Resend requires a verified domain for custom addresses. Until studiokresa.pl
    // is verified, use onboarding@resend.dev (or set RESEND_FROM_EMAIL in secrets).
    const FROM_EMAIL =
      Deno.env.get("RESEND_FROM_EMAIL") ?? "Studio Kresa <onboarding@resend.dev>";

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const scopeList = payload.scope?.length ? payload.scope.join(", ") : "—";
    const postLaunchList = payload.post_launch?.length ? payload.post_launch.join(", ") : "—";
    const careLabel: Record<string, string> = {
      free: "1 miesiąc gratis (standard)",
      paid: "200 zł / mies. — stała opieka",
      later: "Zdecyduję później",
    };

    const name = escapeHtml(payload.name);
    const email = escapeHtml(payload.email);
    const message = escapeHtml(payload.message).replace(/\n/g, "<br/>");

    const html = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8" />
  <title>Nowe zapytanie — Studio Kresa</title>
  <style>
    body { font-family: 'Inter', Arial, sans-serif; background: #f5f3f0; margin: 0; padding: 32px 16px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0ddd8; }
    .header { background: #1a1611; color: #f5f3f0; padding: 28px 32px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0; font-size: 12px; color: #a09880; text-transform: uppercase; letter-spacing: 0.1em; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #7a7060; margin-bottom: 4px; }
    .value { font-size: 15px; color: #1a1611; line-height: 1.5; }
    .divider { border: none; border-top: 1px solid #e0ddd8; margin: 24px 0; }
    .message-box { background: #faf8f5; border-left: 3px solid #b87a3a; padding: 16px 20px; font-size: 14px; color: #2a2015; line-height: 1.6; }
    .footer { padding: 16px 32px; border-top: 1px solid #e0ddd8; font-size: 11px; color: #9a8f7a; text-transform: uppercase; letter-spacing: 0.1em; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Nowe zapytanie projektowe</h1>
      <p>Studio Kresa · ${new Date().toLocaleDateString("pl-PL", { day: "2-digit", month: "long", year: "numeric" })}</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Imię i nazwisko</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">E-mail</div>
        <div class="value"><a href="mailto:${email}" style="color:#b87a3a">${email}</a></div>
      </div>
      ${payload.phone ? `<div class="field"><div class="label">Telefon</div><div class="value">${escapeHtml(payload.phone)}</div></div>` : ""}
      ${payload.budget ? `<div class="field"><div class="label">Budżet</div><div class="value">${escapeHtml(payload.budget)}</div></div>` : ""}
      <div class="field">
        <div class="label">Zakres projektu</div>
        <div class="value">${escapeHtml(scopeList)}</div>
      </div>
      <div class="field">
        <div class="label">Opieka po wdrożeniu</div>
        <div class="value">${escapeHtml(careLabel[payload.care] ?? payload.care)}</div>
      </div>
      <div class="field">
        <div class="label">Zmiany po wdrożeniu</div>
        <div class="value">${escapeHtml(postLaunchList)}</div>
      </div>
      <hr class="divider" />
      <div class="field">
        <div class="label">Opis projektu</div>
        <div class="message-box">${message}</div>
      </div>
    </div>
    <div class="footer">ID zapytania: ${escapeHtml(payload.id)}</div>
  </div>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: payload.email,
        subject: `Nowe zapytanie od ${payload.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Resend error:", res.status, errBody);
      return new Response(
        JSON.stringify({
          error: "Failed to send email",
          resend_status: res.status,
          detail: errBody,
        }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
