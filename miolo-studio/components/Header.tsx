import { BookOpen } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-2.5 px-4 py-3.5 sm:px-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-white">
          <BookOpen className="h-4 w-4" aria-hidden />
        </span>
        <span className="font-serif text-lg font-semibold tracking-tight text-stone-900">
          Miolo Studio
        </span>
      </div>
    </header>
  );
}
