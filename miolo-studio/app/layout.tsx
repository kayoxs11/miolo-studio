import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miolo Studio",
  description: "Gere miolos personalizados para planners, cadernos e agendas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
