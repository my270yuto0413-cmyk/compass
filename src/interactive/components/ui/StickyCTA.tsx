"use client";

import { useEffect, useState } from "react";
import { links } from "../../content/interactiveContent";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("top");
      const finalCTA = document.getElementById("start");

      if (!hero || !finalCTA || dismissed) {
        setVisible(false);
        return;
      }

      const heroPassed = hero.getBoundingClientRect().bottom < 120;
      const finalCTAReached = finalCTA.getBoundingClientRect().top < window.innerHeight * 0.82;
      setVisible(heroPassed && !finalCTAReached);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [dismissed]);

  return (
    <aside className={`sticky-experience-cta ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <button className="sticky-experience-cta__close" type="button" tabIndex={visible ? 0 : -1} aria-label="体験への案内を閉じる" onClick={() => setDismissed(true)}>
        ×
      </button>
      <div className="sticky-experience-cta__copy">
        <span>登録不要・約3分</span>
        <strong>未来の講義を、いま体験。</strong>
      </div>
      <div className="sticky-experience-cta__actions">
        <a className="sticky-experience-cta__primary" data-cta-location="mobile-sticky-demo" href={links.demo} tabIndex={visible ? 0 : -1}>体験する <span aria-hidden="true">→</span></a>
        <a className="sticky-experience-cta__secondary" data-cta-location="mobile-sticky-code-join" href={links.join} tabIndex={visible ? 0 : -1}>コードで参加</a>
      </div>
    </aside>
  );
}
