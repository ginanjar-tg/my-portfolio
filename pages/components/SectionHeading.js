export default function SectionHeading({ index, title }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="eyebrow">/{index}</span>
      <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}
