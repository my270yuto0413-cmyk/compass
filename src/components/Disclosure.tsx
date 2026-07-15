"use client";

import { type ReactNode, useId, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

type DisclosureProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  label: string;
  openLabel?: string;
  preserveMobileContent?: boolean;
};

export function Disclosure({
  children,
  className = "",
  id,
  label,
  openLabel = "閉じる",
  preserveMobileContent = false
}: DisclosureProps) {
  const generatedId = useId();
  const contentId = id ?? generatedId;
  const isDesktop = useMediaQuery("(min-width: 901px)");
  const [open, setOpen] = useState(false);
  const expanded = preserveMobileContent && !isDesktop ? true : open;

  return (
    <div className={`react-disclosure ${className}`.trim()}>
      <button
        className="react-disclosure__toggle"
        type="button"
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{label}</span>
        <strong>{expanded ? openLabel : "詳細を見る"}</strong>
      </button>
      <div id={contentId} className="react-disclosure__body" hidden={!expanded}>
        {children}
      </div>
    </div>
  );
}
