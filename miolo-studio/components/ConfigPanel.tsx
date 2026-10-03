import { AlignJustify, Grid3x3, Grip, ListChecks, Square, FileDown } from "lucide-react";
import type { ReactNode } from "react";
import { ColorField } from "./ColorField";
import { ConfigSection } from "./ConfigSection";
import { OptionGroup, type Choice } from "./OptionGroup";
import {
  INTERIOR_TYPES,
  PAPER_SIZES,
  type InteriorTypeId,
  type PaperSizeId,
  type PlannerConfig,
} from "@/lib/planner-config";

interface ConfigPanelProps {
  config: PlannerConfig;
  onChange: <K extends keyof PlannerConfig>(key: K, value: PlannerConfig[K]) => void;
}

const ICON_CLASS = "h-4 w-4 shrink-0";

const INTERIOR_ICONS: Record<InteriorTypeId, ReactNode> = {
  lined: <AlignJustify className={ICON_CLASS} aria-hidden />,
  dotted: <Grip className={ICON_CLASS} aria-hidden />,
  graph: <Grid3x3 className={ICON_CLASS} aria-hidden />,
  blank: <Square className={ICON_CLASS} aria-hidden />,
  checklist: <ListChecks className={ICON_CLASS} aria-hidden />,
};

const paperChoices: Choice<PaperSizeId>[] = PAPER_SIZES.map((size) => ({
  value: size.id,
  label: size.label,
}));

const interiorChoices: Choice<InteriorTypeId>[] = INTERIOR_TYPES.map((type) => ({
  value: type.id,
  label: type.label,
  icon: INTERIOR_ICONS[type.id],
}));

export function ConfigPanel({ config, onChange }: ConfigPanelProps) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="space-y-6">
        <ConfigSection title="Tamanho do papel" description="Formato da página impressa.">
          <OptionGroup
            name="paperSize"
            legend="Tamanho do papel"
            value={config.paperSize}
            choices={paperChoices}
            onChange={(value) => onChange("paperSize", value)}
          />
        </ConfigSection>

        <ConfigSection title="Tipo de miolo" description="Estilo da página interna.">
          <OptionGroup
            name="interiorType"
            legend="Tipo de miolo"
            value={config.interiorType}
            choices={interiorChoices}
            onChange={(value) => onChange("interiorType", value)}
          />
        </ConfigSection>

        <ConfigSection title="Cores">
          <div className="space-y-3">
            <ColorField
              id="backgroundColor"
              label="Cor de fundo"
              value={config.backgroundColor}
              onChange={(value) => onChange("backgroundColor", value)}
            />
            <ColorField
              id="lineColor"
              label="Cor das linhas e pontos"
              value={config.lineColor}
              onChange={(value) => onChange("lineColor", value)}
            />
          </div>
        </ConfigSection>
      </div>

      <div className="mt-6 border-t border-stone-200 pt-6">
        <button
          type="button"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <FileDown className="h-4 w-4" aria-hidden />
          Gerar PDF
        </button>
        <p className="mt-2 text-center text-xs text-stone-500">
          A geração do PDF será liberada em uma próxima fase.
        </p>
      </div>
    </div>
  );
}
