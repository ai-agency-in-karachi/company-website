import type { JSX } from "react";
import type { ProjectVisual } from "@/content/projects";
import { DashboardMockup } from "./DashboardMockup";
import { EcommerceMockup } from "./EcommerceMockup";
import { MockupStage } from "./MockupStage";
import { MobileAppMockup } from "./MobileAppMockup";
import { VoiceAgentMockup } from "./VoiceAgentMockup";
import { WhatsAppMockup } from "./WhatsAppMockup";
import { WorkflowMockup } from "./WorkflowMockup";

const mockups: Record<ProjectVisual, () => JSX.Element> = {
  whatsapp: WhatsAppMockup,
  voice: VoiceAgentMockup,
  dashboard: DashboardMockup,
  ecommerce: EcommerceMockup,
  mobile: MobileAppMockup,
  workflow: WorkflowMockup,
};

/** The coded product visual for a project. Decorative: the project text carries the content. */
export function ProjectMockup({ visual }: { visual: ProjectVisual }) {
  const Mockup = mockups[visual];
  return (
    <MockupStage>
      <Mockup />
    </MockupStage>
  );
}
