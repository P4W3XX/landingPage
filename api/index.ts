import { VercelRequest, VercelResponse } from "@vercel/node";

let handler: any = null;

async function loadHandler() {
  if (!handler) {
    try {
      // @ts-ignore - The file is strictly generated during the build step
      const mod = await import("../dist/server/index.js");
      handler = mod.default;
    } catch (e) {
      console.error("Failed to load handler:", e);
      throw e;
    }
  }
  return handler;
}

function vercelRequestToFetch(req: VercelRequest): Request {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const url = new URL(req.url || "/", `${protocol}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === "string") {
      headers.set(key, value);
    } else if (Array.isArray(value)) {
      headers.set(key, value[0]);
    }
  }

  let body: any = null;
  if (req.method !== "GET" && req.method !== "HEAD" && req.body) {
    if (typeof req.body === "string") {
      body = req.body;
    } else if (Buffer.isBuffer(req.body)) {
      body = req.body;
    } else {
      body = JSON.stringify(req.body);
    }
  }

  return new Request(url, {
    method: req.method,
    headers,
    body,
  });
}

async function fetchToVercelResponse(response: Response, res: VercelResponse) {
  res.status(response.status);

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() !== "content-encoding") {
      res.setHeader(key, value);
    }
  });

  const body = await response.text();
  res.send(body);
}

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const appHandler = await loadHandler();
    const request = vercelRequestToFetch(req);
    const response = await appHandler.fetch(request, {}, {});
    await fetchToVercelResponse(response, res);
  } catch (error) {
    console.error("API handler error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};
