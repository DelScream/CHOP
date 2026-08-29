export function HudFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`hud ${className}`.trim()}>
      <span className="hud-corners" aria-hidden>
        <span />
        <span />
      </span>
      {children}
    </div>
  );
}

export function HeroSchema() {
  return (
    <HudFrame className="hero-schema">
      <div style={{ position: "relative", padding: "28px 20px 20px" }}>
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
          <span>ОБЪЕКТ №041</span>
          <span>
            <i className="status-dot" />
            АКТИВЕН
          </span>
        </div>
        <svg className="schema-svg" viewBox="0 0 420 280" role="img" aria-label="Схема охраняемого объекта">
          <rect className="perimeter" x="18" y="18" width="384" height="244" />
          <text x="28" y="40">
            ПЕРИМЕТР
          </text>
          <rect className="building" x="148" y="86" width="124" height="88" />
          <text x="178" y="134">
            ЗДАНИЕ
          </text>
          <line className="link" x1="86" y1="130" x2="148" y2="130" />
          <line className="link" x1="272" y1="130" x2="338" y2="130" />
          <circle className="post" cx="86" cy="78" r="5" />
          <text x="98" y="82">
            ПОСТ 01
          </text>
          <circle className="post" cx="86" cy="214" r="5" />
          <text x="98" y="218">
            ПОСТ 02
          </text>
          <circle className="post" cx="338" cy="130" r="5" />
          <circle className="post" cx="318" cy="214" r="5" />
          <text x="330" y="218">
            КПП
          </text>
          <text x="28" y="252">
            55.7558 N · 37.6173 E
          </text>
        </svg>
      </div>
    </HudFrame>
  );
}
