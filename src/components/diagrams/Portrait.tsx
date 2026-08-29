import { HudFrame } from "@/components/diagrams/HeroSchema";
import { site } from "@/lib/site";

export function Portrait() {
  return (
    <HudFrame className="portrait-frame">
      <svg viewBox="0 0 320 400" className="schema-svg" role="img" aria-label={`Схематичный портрет: ${site.director.name}`}>
        <text x="18" y="28" style={{ fontSize: 9 }}>
          ID / DIRECTOR
        </text>
        <circle cx="160" cy="132" r="48" className="building" />
        <path d="M96 250 C96 198 224 198 224 250 L224 330 L96 330 Z" className="building" />
        <line className="link" x1="20" y1="70" x2="300" y2="70" />
        <line className="link" x1="20" y1="360" x2="300" y2="360" />
        <circle className="post" cx="40" cy="70" r="3" />
        <circle className="post" cx="280" cy="360" r="3" />
        <text x="18" y="384">{site.director.name.toUpperCase()}</text>
      </svg>
    </HudFrame>
  );
}
