"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/pc/components/link";
import { HEADER_LINKS } from "@/config/links";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {HEADER_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.key} className="relative flex items-center justify-center">
              <Link
                href={link.href}
                className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>

              {isActive && (
                <>
                  <div className="absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-nav-link-indicator" />
                  <div className="absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-sm bg-[rgb(255_122_151)] blur-sm dark:bg-[rgb(223_29_72)]" />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
