"use client";

import { useState } from "react";
import { ConfigPanel } from "./ConfigPanel";
import { PaperPreview } from "./PaperPreview";
import { DEFAULT_CONFIG, type PlannerConfig } from "@/lib/planner-config";

export function PlannerStudio() {
  const [config, setConfig] = useState<PlannerConfig>(DEFAULT_CONFIG);

  const updateConfig = <K extends keyof PlannerConfig>(key: K, value: PlannerConfig[K]) =>
    setConfig((current) => ({ ...current, [key]: value }));

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:items-start">
      <div className="order-2 lg:order-1">
        <ConfigPanel config={config} onChange={updateConfig} />
      </div>
      <div className="order-1 rounded-xl border border-stone-200 bg-stone-200/60 px-4 py-8 sm:px-8 sm:py-10 lg:order-2 lg:sticky lg:top-6">
        <PaperPreview config={config} />
      </div>
    </div>
  );
}
