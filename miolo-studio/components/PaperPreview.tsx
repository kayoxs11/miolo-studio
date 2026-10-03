import { getPaperSize, type PlannerConfig } from "@/lib/planner-config";

interface PaperPreviewProps {
  config: PlannerConfig;
}

const MARGIN_MM = 10;
const LINE_SPACING_MM = 7;
const DOT_SPACING_MM = 5;
const GRID_SPACING_MM = 5;
const CHECK_ROW_MM = 9;
const CHECK_BOX_MM = 3.5;

export function PaperPreview({ config }: PaperPreviewProps) {
  const paper = getPaperSize(config.paperSize);
  const { widthMm: w, heightMm: h } = paper;
  const ratio = w / h;
  const contentW = w - MARGIN_MM * 2;
  const contentH = h - MARGIN_MM * 2;
  const color = config.lineColor;

  return (
    <figure className="flex flex-col items-center gap-4">
      <div
        className="bg-white shadow-[0_1px_2px_rgba(28,25,23,0.12),0_12px_32px_-8px_rgba(28,25,23,0.25)]"
        style={{
          aspectRatio: `${w} / ${h}`,
          width: `min(100%, calc(min(66vh, 620px) * ${ratio}))`,
        }}
      >
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="block h-full w-full"
          role="img"
          aria-label={`Prévia de página ${paper.label}, miolo ${config.interiorType}`}
        >
          <defs>
            <pattern id="p-lined" width={contentW} height={LINE_SPACING_MM} patternUnits="userSpaceOnUse" x={MARGIN_MM} y={MARGIN_MM}>
              <line x1="0" x2={contentW} y1={LINE_SPACING_MM - 0.15} y2={LINE_SPACING_MM - 0.15} stroke={color} strokeWidth="0.3" />
            </pattern>
            <pattern id="p-dotted" width={DOT_SPACING_MM} height={DOT_SPACING_MM} patternUnits="userSpaceOnUse" x={MARGIN_MM} y={MARGIN_MM}>
              <circle cx={DOT_SPACING_MM / 2} cy={DOT_SPACING_MM / 2} r="0.35" fill={color} />
            </pattern>
            <pattern id="p-graph" width={GRID_SPACING_MM} height={GRID_SPACING_MM} patternUnits="userSpaceOnUse" x={MARGIN_MM} y={MARGIN_MM}>
              <path d={`M ${GRID_SPACING_MM} 0 L 0 0 0 ${GRID_SPACING_MM}`} fill="none" stroke={color} strokeWidth="0.2" />
            </pattern>
            <pattern id="p-checklist" width={contentW} height={CHECK_ROW_MM} patternUnits="userSpaceOnUse" x={MARGIN_MM} y={MARGIN_MM}>
              <rect x="0.15" y={(CHECK_ROW_MM - CHECK_BOX_MM) / 2 - 0.5} width={CHECK_BOX_MM} height={CHECK_BOX_MM} rx="0.6" fill="none" stroke={color} strokeWidth="0.3" />
              <line x1={CHECK_BOX_MM + 2.5} x2={contentW} y1={CHECK_ROW_MM - 0.15} y2={CHECK_ROW_MM - 0.15} stroke={color} strokeWidth="0.3" />
            </pattern>
          </defs>

          <rect width={w} height={h} fill={config.backgroundColor} />

          {config.interiorType !== "blank" && (
            <rect
              x={MARGIN_MM}
              y={MARGIN_MM}
              width={contentW}
              height={contentH}
              fill={`url(#p-${config.interiorType})`}
            />
          )}
        </svg>
      </div>
      <figcaption className="text-sm text-stone-500">
        {paper.label} · {paper.widthMm} × {paper.heightMm} mm
      </figcaption>
    </figure>
  );
}
