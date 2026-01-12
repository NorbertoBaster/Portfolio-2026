"use client";

import useMagnetic from "@/hooks/useMagnetic";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  href,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useMagnetic<HTMLButtonElement>();
  const anchorRef = useMagnetic<HTMLAnchorElement>();

  const buttonClass =
    "inline-block relative px-8 py-4 border border-[var(--accent)] rounded-md font-medium text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300";

  if (href) {
    return (
      <a ref={anchorRef} href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button ref={buttonRef} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
