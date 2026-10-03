import type { ReactNode } from "react";

export interface Choice<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
}

interface OptionGroupProps<T extends string> {
  name: string;
  legend: string;
  value: T;
  choices: Choice<T>[];
  onChange: (value: T) => void;
}

export function OptionGroup<T extends string>({
  name,
  legend,
  value,
  choices,
  onChange,
}: OptionGroupProps<T>) {
  return (
    <fieldset>
      <legend className="sr-only">{legend}</legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {choices.map((choice) => (
          <label key={choice.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={choice.value}
              checked={value === choice.value}
              onChange={() => onChange(choice.value)}
              className="peer sr-only"
            />
            <span className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 transition-colors hover:border-stone-400 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
              {choice.icon}
              {choice.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
