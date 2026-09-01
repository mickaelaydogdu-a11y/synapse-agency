"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SkipLink() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    main.id = "main-content";
    main.setAttribute("tabindex", "-1");
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("main-content")?.focus();
  };

  return (
    <nav aria-label="Accès rapide">
      <a
        href="#main-content"
        onClick={handleClick}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
      >
        Aller au contenu
      </a>
    </nav>
  );
}
