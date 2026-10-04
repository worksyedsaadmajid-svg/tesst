/**
 * Clearly-marked placeholder imagery block — replace with studio photography.
 */
export function Placeholder({
  label,
  ratio = "3/4",
  accent = "#c9a26b",
  className = "",
}: {
  label: string;
  ratio?: string;
  accent?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-dashed ${className}`}
      style={{
        aspectRatio: ratio,
        borderColor: `${accent}66`,
        background:
          `repeating-linear-gradient(135deg, ${accent}0f 0px, ${accent}0f 12px, transparent 12px, transparent 24px)`,
      }}
    >
      <div className="px-4 text-center">
        <p className="eyebrow" style={{ color: accent }}>
          Placeholder image
        </p>
        <p className="font-display mt-2 text-xl opacity-70">{label}</p>
      </div>
    </div>
  );
}
