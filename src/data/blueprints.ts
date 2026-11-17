export interface BlueprintMeta {
  slug: string;
  episode: number;
  title: string;
  summary: string;
  postSlug: string;
  bullets: [string, string, string];
  stack: string[];
  estimatedSavings: string;
}

export const BLUEPRINTS: BlueprintMeta[] = [
  {
    slug: "n8n-production-stack",
    episode: 1,
    title: "n8n Queue-Mode Production Blueprint",
    summary:
      "Production-ready Docker Compose stack with Postgres, Redis queue mode, dedicated worker replicas, Traefik TLS, and the Python/CSV cost-modeling spreadsheet comparing Make.com vs self-hosted n8n from 10k to 5M ops/month.",
    postSlug: "ep01-n8n-vs-make-100k-ops",
    bullets: [
      "Production docker-compose.yml (n8n main + worker + Redis + Postgres 16)",
      "Hardened .env.example with encryption keys, execution pruning, and webhook URLs",
      "Break-even CSV calculator (Make.com tiers vs Hetzner/VPS + backups)",
    ],
    stack: ["n8n", "Redis", "PostgreSQL", "Docker Compose"],
    estimatedSavings: "Save $1,152/mo at 100k ops",
  },
  {
    slug: "signoz-docker-blueprint",
    episode: 2,
    title: "SigNoz Self-Hosted Observability Blueprint",
    summary:
      "Single-node and scaled ClickHouse + OpenTelemetry Collector deployment blueprint with retention policies, disk sizing math, and the Datadog vs SigNoz ingestion/host cost model CSV.",
    postSlug: "ep02-datadog-vs-signoz-observability-math",
    bullets: [
      "Production docker-compose.yml (SigNoz, ClickHouse, OTel Collector, Zookeeper)",
      "Tuned .env.example with 14-day/30-day TTL retention and memory limits",
      "Observability TCO CSV calculator (hosts, custom metrics, log GB/day)",
    ],
    stack: ["SigNoz", "ClickHouse", "OpenTelemetry", "Docker Compose"],
    estimatedSavings: "Save $2,460/mo at 500 GB logs",
  },
];

export const BLUEPRINT_MAP: Record<string, BlueprintMeta> = Object.fromEntries(
  BLUEPRINTS.map(bp => [bp.slug, bp])
);
