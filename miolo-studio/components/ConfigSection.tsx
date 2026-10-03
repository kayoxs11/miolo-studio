import type { ReactNode } from "react";

interface ConfigSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ConfigSection({ title, description, children }: ConfigSectionProps) {
  return (
    <section className="space-y-3 border-b border-stone-200 pb-6 last:border-b-0 last:pb-0">
      <div>
        <h2 className="text-sm font-semibold text-stone-900">{title}</h2>
        {description ? <p className="mt-0.5 text-sm text-stone-500">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
