import type { ReactNode } from "react";

type PhoneFrameProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ title, children, className = "" }: PhoneFrameProps) {
  return (
    <div className={`phone-frame ${className}`} aria-label={`${title}のスマートフォン画面モック`}>
      <div className="phone-frame__shell">
        <div className="phone-frame__speaker" aria-hidden="true" />
        <div className="phone-frame__screen">
          <div className="phone-frame__top">
            <span>COMPASS</span>
            <span>Live</span>
          </div>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}
