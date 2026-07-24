interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700">
        {highlight}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 rounded-full bg-accent-500 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
