import React, { useEffect, useState } from "react";
import "./DevCredit.css";

const GITHUB_URL = "https://github.com/MrBereketK";
const GITHUB_REPO = "https://github.com/MrBereketK/NetflixUI-Replica";

export default function DevCredit() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    // Console Easter Egg — fires once on mount
    const styles = [
      "color: #fff; background: linear-gradient(135deg, #1a1a2e, #16213e); font-size: 14px; padding: 10px 20px; border-radius: 4px; font-weight: bold;",
      "color: #0066cc; font-size: 12px; padding: 5px 0;",
      "color: #86868b; font-size: 11px;",
    ];

    console.log("%c🍎 Netflix UI — Replicated by Bereket K.", styles[0]);
    console.log(
      "%c→ https://github.com/MrBereketK/NetflixUI-Replica",
      styles[1],
    );
    console.log(
      "%cThis is a front-end study project. Not affiliated with Netflix, Inc.",
      styles[2],
    );

    // Delayed badge entrance
    const timer = setTimeout(() => setShowBadge(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── Floating GitHub Badge (bottom-right corner) ── */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`dev-badge ${showBadge ? "visible" : ""}`}
        title="View developer's GitHub"
      >
        <svg
          className="dev-badge-icon"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
            2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21
            2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04
            2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82
            2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
            0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        <span className="dev-badge-label">MrBereketK</span>
      </a>

      {/* ── Footer Credit Bar ── */}
      <div className="dev-credit-bar">
        <div className="dev-credit-inner">
          <span className="dev-credit-text">
            <span className="dev-credit-prefix">⚡ Replicated by</span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="dev-credit-name"
            >
              Bereket K.
            </a>
          </span>
          <span className="dev-credit-separator">•</span>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="dev-credit-repo"
          >
            View Source on GitHub →
          </a>
        </div>
      </div>
    </>
  );
}
