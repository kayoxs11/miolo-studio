interface ColorFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function ColorField({ id, label, value, onChange }: ColorFieldProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <label htmlFor={id} className="text-sm text-stone-700">
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-lg border border-stone-300 bg-white py-1 pl-1 pr-3">
        <input
          id={id}
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-8 w-8 cursor-pointer rounded-md border border-stone-200 bg-transparent p-0"
        />
        <span className="w-16 font-mono text-xs uppercase text-stone-500">{value}</span>
      </div>
    </div>
  );
}
