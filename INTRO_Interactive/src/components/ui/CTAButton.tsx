import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
};

export function CTAButton({ href, children, className = "", ...props }: CTAButtonProps) {
  return (
    <a className={`cta-button ${className}`} href={href} {...props}>
      {children}
    </a>
  );
}
