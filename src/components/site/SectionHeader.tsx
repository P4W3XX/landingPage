export function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <div className="label flex items-start gap-3 md:col-span-4">
        <span>{index}</span>
        <span>— {eyebrow}</span>
      </div>
      <div className="md:col-span-8">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-2xl text-muted-foreground">{intro}</p>}
      </div>
    </div>
  );
}
