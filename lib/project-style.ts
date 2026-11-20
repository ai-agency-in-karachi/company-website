import type { ProjectStage } from "@/content/projects";

/**
 * The stage behind each project's mockup. Two calm surfaces alternate,
 * deep pine and light stone, so the product visuals carry the colour.
 */
export const stages: Record<ProjectStage, { panel: string; text: string; soft: string; chip: string }> = {
  pine: { panel: "bg-pine", text: "text-paper", soft: "text-paper/70", chip: "border-paper/25" },
  stone: { panel: "bg-stone", text: "text-ink", soft: "text-ink/70", chip: "border-ink/20" },
};
