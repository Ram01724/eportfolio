"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const initials = site.shortName
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function Nav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  const is = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href) ? "true" : undefined;

  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <Link href="/" className="brand">
          <span className="brand-dot">{initials}</span>
          {site.shortName}
        </Link>
        <div className="nav-links">
          <Link href="/" data-active={pathname === "/" ? "true" : undefined}>
            Home
          </Link>
          <Link href="/about" data-active={is("/about")}>
            About
          </Link>
          <Link href="/courses" data-active={is("/courses")}>
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
}
