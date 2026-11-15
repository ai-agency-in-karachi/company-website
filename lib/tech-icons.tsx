import { Braces, Webhook } from "lucide-react";
import type { ReactNode } from "react";
import {
  siCss,
  siDocker,
  siExpress,
  siFigma,
  siFirebase,
  siFlutter,
  siGoogle,
  siGooglecloud,
  siHtml5,
  siKotlin,
  siLangchain,
  siLaravel,
  siMake,
  siMongodb,
  siMysql,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siShopify,
  siStorybook,
  siStripe,
  siSwift,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVercel,
  siVuedotjs,
  siWhatsapp,
  siWoocommerce,
  siWordpress,
  siZapier,
  type SimpleIcon,
} from "simple-icons";

const icons: Record<string, SimpleIcon> = {
  React: siReact,
  "React Native": siReact,
  "Next.js": siNextdotjs,
  "Vue.js": siVuedotjs,
  TypeScript: siTypescript,
  HTML: siHtml5,
  CSS: siCss,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  Python: siPython,
  PHP: siPhp,
  Laravel: siLaravel,
  "Express.js": siExpress,
  Flutter: siFlutter,
  Kotlin: siKotlin,
  Swift: siSwift,
  TensorFlow: siTensorflow,
  LangChain: siLangchain,
  n8n: siN8n,
  Make: siMake,
  Zapier: siZapier,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Redis: siRedis,
  Firebase: siFirebase,
  "Google Cloud": siGooglecloud,
  Docker: siDocker,
  Vercel: siVercel,
  Figma: siFigma,
  FigJam: siFigma,
  Shopify: siShopify,
  Stripe: siStripe,
  WordPress: siWordpress,
  WooCommerce: siWoocommerce,
  Storybook: siStorybook,
  "WhatsApp API": siWhatsapp,
  "Google Workspace": siGoogle,
};

/** Typographic marks for tools whose logos are not in simple-icons. */
const monograms: Record<string, string> = {
  OpenAI: "AI",
  AWS: "aws",
  Azure: "Az",
  "Adobe Creative Cloud": "Cc",
  Twilio: "Tw",
  Maze: "Mz",
};

const glyphs: Record<string, ReactNode> = {
  "REST APIs": <Braces strokeWidth={2.25} className="size-[55%]" />,
  Webhooks: <Webhook strokeWidth={2.25} className="size-[55%]" />,
};

/**
 * Logo for a technology, drawn monochrome in currentColor so the logos read
 * as one calm system: the simple-icons path, a lucide glyph, or a monogram.
 */
export function TechIcon({ name }: { name: string }) {
  const icon = icons[name];
  if (icon) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="size-[52%]" fill="currentColor">
        <path d={icon.path} />
      </svg>
    );
  }
  const glyph = glyphs[name];
  if (glyph) return <span className="flex size-full items-center justify-center">{glyph}</span>;
  return (
    <span aria-hidden="true" className="font-display text-[0.8125em] leading-none font-extrabold tracking-[-0.04em]">
      {monograms[name] ?? name.slice(0, 2)}
    </span>
  );
}
