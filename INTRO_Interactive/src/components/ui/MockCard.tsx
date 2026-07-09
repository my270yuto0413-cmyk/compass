import type { ReactNode } from "react";

type MockCardProps = {
  label?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function MockCard({ label, title, children, className = "" }: MockCardProps) {
  return (
    <article className={`mock-card ${className}`}>
      {label && <p className="mock-card__label">{label}</p>}
      <h3>{title}</h3>
      <div className="mock-card__body">{children}</div>
    </article>
  );
}
