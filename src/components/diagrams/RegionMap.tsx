import { HudFrame } from "@/components/diagrams/HeroSchema";
import { site } from "@/lib/site";

export function RegionMap() {
  return (
    <HudFrame>
      <div style={{ position: "relative", padding: 24, minHeight: 360 }}>
        <div className="scan-line" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.16em",
            color: "var(--steel)",
            marginBottom: 12,
          }}
        >
          <span>SECTOR MOSCOW</span>
          <span>HQ.24</span>
        </div>
        <svg className="schema-svg" viewBox="0 0 520 340" role="img" aria-label="Схема расположения головного офиса">
          <path
            className="perimeter"
            d="M40 80 C90 30 160 40 210 70 C270 28 340 50 390 90 C450 70 490 120 480 180 C500 240 450 290 380 300 C300 330 220 310 150 290 C80 300 30 240 40 180 Z"
          />
          <line className="link" x1="80" y1="160" x2="440" y2="160" />
          <line className="link" x1="260" y1="60" x2="260" y2="300" />
          <circle className="post" cx="268" cy="168" r="7" />
          <text x="286" y="164">
            ГОЛОВНОЙ ОФИС
          </text>
          <text x="286" y="180">
            {site.city.toUpperCase()}
          </text>
          <text x="40" y="328">
            {site.fullAddress.toUpperCase()}
          </text>
        </svg>
      </div>
    </HudFrame>
  );
}
