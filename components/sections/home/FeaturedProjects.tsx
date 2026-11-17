"use client";

import { Check } from "lucide-react";
import { useEffect, useRef, type FocusEvent } from "react";
import { home } from "@/content/site";
import { projects, type Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { stages } from "@/lib/project-style";
import { useMediaQuery } from "@/lib/use-media-query";
import { useMounted } from "@/lib/use-mounted";
import { MaskedText } from "@/components/motion/MaskedText";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectMockup } from "@/components/mockups";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Where the pinned horizontal scroll is used: wide and tall enough screens
 * for a full panel to fit, and only when the visitor hasn't asked for
 * reduced motion. Everywhere else the projects are a vertical list.
 */
const HORIZONTAL = "(min-width: 64rem) and (min-height: 760px) and (prefers-reduced-motion: no-preference)";

const pad = (value: number) => String(value).padStart(2, "0");

function ProjectPanel({ project, index, horizontal }: { project: Project; index: number; horizontal: boolean }) {
  const content = home.projects;
  const stage = stages[project.stage];
  const flip = !horizontal && index % 2 === 1;
  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className={cn(
        "grid grid-cols-1 gap-10 overflow-hidden rounded-panel p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:p-10 xl:p-12",
        horizontal ? "h-full" : "lg:min-h-[min(80vh,46rem)]",
        stage.panel,
        stage.text,
      )}
    >
      <div className={cn("lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}>
        <p className={cn("eyebrow flex flex-wrap items-center gap-x-3 gap-y-1", stage.soft)}>
          <span className="numeral">
            {content.projectLabel} {project.index}
          </span>
          <span aria-hidden="true" className="h-px w-6 bg-current" />
          <span>{project.category}</span>
        </p>
        <h3 id={`project-${project.slug}`} className="mt-5 text-h3">
          {project.title}
        </h3>
        <p className={cn("mt-4 max-w-[30rem] text-lead", stage.soft)}>{project.summary}</p>

        <p className="eyebrow mt-7">{content.featuresLabel}</p>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-small font-medium">
              <Check aria-hidden="true" strokeWidth={2.5} className="mt-0.5 size-4 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <p className="sr-only">{content.stackLabel}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tool) => (
            <li key={tool} className={cn("rounded-full border px-3 py-1 text-[0.8125rem] font-semibold", stage.chip)}>
              {tool}
            </li>
          ))}
        </ul>

        <ArrowLink href={`/projects/${project.slug}`} className="mt-6">
          {content.viewLabel}
          <span className="sr-only">: {project.title}</span>
        </ArrowLink>
      </div>

      <div className={cn("relative lg:col-span-7", flip && "lg:order-1 lg:col-start-1")}>
        <div className="mx-auto max-w-[44rem] py-4 lg:py-2">
          <ProjectMockup visual={project.visual} />
        </div>
      </div>
    </article>
  );
}

/**
 * Selected work.
 *
 * Large screens: a pinned horizontal scroll. When the section reaches the
 * top of the screen it pins, and scrolling down pans the project panels
 * from right to left (GSAP ScrollTrigger, scrubbed and mapped 1:1 to the
 * scroll distance, with light smoothing). Once the last project is fully in
 * view it unpins and the page carries on. A progress line and counter show
 * where you are; keyboard focus on a panel scrolls it into view.
 *
 * Everywhere else, and always on the server and during hydration, the
 * projects are a plain vertical list. The horizontal layout is only rendered
 * after the component has mounted (useMounted), so the HTML React hydrates
 * always matches what the server sent.
 */
export function FeaturedProjects() {
  const content = home.projects;
  const mounted = useMounted();
  const wide = useMediaQuery(HORIZONTAL);
  const horizontal = mounted && wide;

  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<{ start: number; end: number } | null>(null);

  useEffect(() => {
    if (!horizontal) return;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    let cancelled = false;
    let revert: (() => void) | undefined;

    const setup = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const distance = () => Math.max(0, track.scrollWidth - pin.clientWidth);
      const context = gsap.context(() => {
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // The pin adds scroll space, so it is measured before later triggers.
            refreshPriority: 1,
            onUpdate: (self) => {
              triggerRef.current = { start: self.start, end: self.end };
              if (fillRef.current) fillRef.current.style.transform = `scaleX(${self.progress})`;
              if (counterRef.current) {
                counterRef.current.textContent = pad(Math.round(self.progress * (projects.length - 1)) + 1);
              }
            },
            onRefresh: (self) => {
              triggerRef.current = { start: self.start, end: self.end };
            },
          },
        });
      }, pin);
      ScrollTrigger.refresh();
      revert = () => context.revert();
    };

    void setup();
    return () => {
      cancelled = true;
      revert?.();
      triggerRef.current = null;
    };
  }, [horizontal]);

  // Keyboard: tabbing into a panel that is off to the side scrolls the page
  // to the point where that panel is in view.
  const onFocus = (event: FocusEvent<HTMLOListElement>) => {
    const range = triggerRef.current;
    const item = (event.target as HTMLElement).closest<HTMLElement>("[data-panel-index]");
    if (!range || !item) return;
    const index = Number(item.dataset.panelIndex);
    const target = range.start + (range.end - range.start) * (index / Math.max(1, projects.length - 1));
    window.scrollTo({ top: target, behavior: "auto" });
  };

  return (
    <section id="work" aria-labelledby="work-title" className="section-y relative">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <MaskedText id="work-title" lines={content.title} className="mt-6 text-h2 text-fg" />
          </div>
          <Reveal className="lg:col-span-3 lg:col-start-10" delay={120}>
            <p className="text-lead text-fg-soft">{content.description}</p>
          </Reveal>
        </div>
      </div>

      {horizontal ? (
        <div ref={pinRef} className="mt-6 flex h-svh flex-col justify-center overflow-hidden">
          <ol
            ref={trackRef}
            onFocus={onFocus}
            className="flex w-max gap-6 px-[max(var(--gutter),calc((100vw-var(--container-wide))/2))] will-change-transform xl:gap-8"
          >
            {projects.map((project, index) => (
              <li
                key={project.slug}
                data-panel-index={index}
                className="h-[min(78svh,46rem)] w-[min(84vw,74rem)] shrink-0"
              >
                <ProjectPanel project={project} index={index} horizontal />
              </li>
            ))}
          </ol>
          <div className="container-wide mt-6 flex items-center gap-5" aria-hidden="true">
            <span className="numeral text-small font-semibold text-fg">
              <span ref={counterRef}>01</span>
              <span className="text-fg-soft"> / {pad(projects.length)}</span>
            </span>
            <span className="relative h-px flex-1 overflow-hidden bg-line">
              <span ref={fillRef} className="absolute inset-0 origin-left scale-x-0 bg-cobalt" />
            </span>
          </div>
        </div>
      ) : (
        <div className="container-wide">
          <ol className="mt-12 space-y-6 lg:mt-16 lg:space-y-8">
            {projects.map((project, index) => (
              <li key={project.slug}>
                <ProjectPanel project={project} index={index} horizontal={false} />
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
