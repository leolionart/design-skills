type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--theme-muted)]">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--theme-font-display)] text-3xl leading-[1.02] tracking-[-0.04em] sm:text-5xl text-[var(--theme-text)]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--theme-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
