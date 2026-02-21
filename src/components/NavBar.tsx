"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#surveillance", label: "Surveillance" },
  { href: "/services#background-checks", label: "Background Checks" },
  { href: "/services#infidelity", label: "Infidelity" },
  { href: "/services#missing-persons", label: "Missing Persons" },
  { href: "/services#workers-comp", label: "Workers' Comp" },
  { href: "/services#skip-tracing", label: "Skip Tracing" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const showServiceStrip = pathname.startsWith("/services");

  return (
    <header className="w-full">
      <div className="bg-stone-900 text-zinc-100">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 lg:grid-cols-[1fr_auto_1fr] lg:px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-[120px]">
              <Image
                src="/ShiningBlue_logo.png"
                alt="Shining Blue Investigations logo"
                width={240}
                height={80}
                className="absolute left-0 top-1/2 h-20 w-auto -translate-y-1/2"
              />
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-200">
              SHINING BLUE INVESTIGATIONS LLC
            </span>
          </div>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    if (link.label === "Home" && pathname === "/") {
                      event.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    isActive
                      ? "border-b border-zinc-200 pb-1 text-white"
                      : "text-zinc-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-100 hover:bg-stone-800 lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`${isOpen ? "block" : "hidden"} border-t border-zinc-800 px-4 pb-4 lg:hidden`}
        >
          <nav className="flex flex-col gap-2 pt-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    if (link.label === "Home" && pathname === "/") {
                      event.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                    setIsOpen(false);
                  }}
                  className={`rounded px-2 py-2 text-sm ${
                    isActive
                      ? "bg-stone-800 text-white"
                      : "text-zinc-300 hover:bg-stone-800 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {showServiceStrip ? (
        <div className="bg-stone-700 text-zinc-100">
          <nav className="overflow-x-auto whitespace-nowrap px-4 py-3 lg:px-6">
            <div className="mx-auto flex max-w-7xl items-center gap-7 lg:justify-center">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-zinc-100/75 transition-colors hover:text-zinc-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

