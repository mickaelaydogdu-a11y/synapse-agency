"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { mainNav, ctaLabel, ctaHref } from "@/lib/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
        <nav className="glass px-6 py-4">
          <div className="relative flex min-h-16 items-center justify-end lg:justify-between">
            {/* Logo: absolutely centered on mobile so its natural width can't be squeezed by sibling elements, back in normal flow on desktop */}
            <Link
              href="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0 flex items-center"
            >
              <Image
                src="/images/Logo-SynapseAgency.png"
                alt="Synapse Agency"
                width={300}
                height={300}
                className="h-16 w-auto brightness-0 invert"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-300 hover:text-primary-light transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href={ctaHref}>
                <Button size="sm" variant="secondary">
                  {ctaLabel}
                </Button>
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div
            id="mobile-menu"
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300",
              isOpen ? "max-h-80 mt-4" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              {mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-300 hover:text-primary-light transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
              <Link href={ctaHref} onClick={() => setIsOpen(false)}>
                <Button size="sm" variant="secondary" className="w-full">
                  {ctaLabel}
                </Button>
              </Link>
            </div>
          </div>
        </nav>
    </header>
  );
}
