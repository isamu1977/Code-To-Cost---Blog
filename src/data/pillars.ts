import type { PILLAR_VALUES } from "@/content.config";

export type PillarSlug = (typeof PILLAR_VALUES)[number];

export interface PillarMeta {
  slug: PillarSlug;
  name: string;
  shortName: string;
  description: string;
}

export const PILLARS: PillarMeta[] = [
  {
    slug: "scale-math",
    name: "The Scale Math",
    shortName: "Scale Math",
    description: "What SaaS pricing really does at volume",
  },
  {
    slug: "saas-replacement",
    name: "SaaS Replacement & Self-Hosting",
    shortName: "SaaS Replacement",
    description: "Swap the subscription for a Docker stack",
  },
  {
    slug: "production-blueprints",
    name: "Production Blueprints",
    shortName: "Production Blueprints",
    description: "Real architectures, queues, errors and all",
  },
  {
    slug: "pricing-postmortems",
    name: "Pricing & License Post-Mortems",
    shortName: "Pricing Post-Mortems",
    description: "When vendors change the rules",
  },
];

export const PILLAR_MAP: Record<PillarSlug, PillarMeta> = Object.fromEntries(
  PILLARS.map(pillar => [pillar.slug, pillar])
) as Record<PillarSlug, PillarMeta>;
