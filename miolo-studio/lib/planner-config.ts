export type PaperSizeId = "a4" | "a5" | "a6" | "14x21" | "18x21";
export type InteriorTypeId = "lined" | "dotted" | "graph" | "blank" | "checklist";

export interface PlannerConfig {
  paperSize: PaperSizeId;
  interiorType: InteriorTypeId;
  backgroundColor: string;
  lineColor: string;
}

export interface PaperSizeOption {
  id: PaperSizeId;
  label: string;
  /** Largura e altura em milímetros (retrato). */
  widthMm: number;
  heightMm: number;
}

export interface InteriorTypeOption {
  id: InteriorTypeId;
  label: string;
}

export const PAPER_SIZES: PaperSizeOption[] = [
  { id: "a4", label: "A4", widthMm: 210, heightMm: 297 },
  { id: "a5", label: "A5", widthMm: 148, heightMm: 210 },
  { id: "a6", label: "A6", widthMm: 105, heightMm: 148 },
  { id: "14x21", label: "14 × 21 cm", widthMm: 140, heightMm: 210 },
  { id: "18x21", label: "18 × 21 cm", widthMm: 180, heightMm: 210 },
];

export const INTERIOR_TYPES: InteriorTypeOption[] = [
  { id: "lined", label: "Pautado" },
  { id: "dotted", label: "Pontilhado" },
  { id: "graph", label: "Quadriculado" },
  { id: "blank", label: "Em branco" },
  { id: "checklist", label: "Checklist" },
];

export const DEFAULT_CONFIG: PlannerConfig = {
  paperSize: "a5",
  interiorType: "lined",
  backgroundColor: "#ffffff",
  lineColor: "#a8b0be",
};

export function getPaperSize(id: PaperSizeId): PaperSizeOption {
  return PAPER_SIZES.find((size) => size.id === id) ?? PAPER_SIZES[1];
}
