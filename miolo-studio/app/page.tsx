import { Header } from "@/components/Header";
import { PlannerStudio } from "@/components/PlannerStudio";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-8 max-w-2xl">
          <h1 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Gere miolos personalizados para seus planners e cadernos
          </h1>
          <p className="mt-3 text-base leading-relaxed text-stone-600">
            Escolha o papel, o estilo da página e as cores. A prévia mostra como o miolo ficará
            antes de imprimir.
          </p>
        </div>
        <PlannerStudio />
      </main>
    </>
  );
}
