import { Bot, CodeXml, Globe, PenTool, Plug, ShoppingBag, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import type { ServiceIconName } from "@/content/services";

export const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  code: CodeXml,
  bot: Bot,
  workflow: Workflow,
  globe: Globe,
  smartphone: Smartphone,
  "shopping-bag": ShoppingBag,
  "pen-tool": PenTool,
  plug: Plug,
};

/**
 * One calm treatment for every service: services are told apart by name,
 * number and icon, not by colour. Ink surfaces with sage as the accent.
 */
export const serviceStyle = {
  /** Feature surface (the panel on the home page, hover band on the index). */
  surface: "bg-pine",
  onSurface: "text-paper",
  /** Small accents: icon tiles, check marks, rule marks. */
  accent: "bg-sage",
  onAccent: "text-white",
} as const;
