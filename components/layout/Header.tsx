"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Cpu, Smartphone, Camera } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Solutions IA", href: "/solutions-ia", icon: Cpu },
  { name: "Applications web et mobile", href: "/applications", icon: Smartphone },
  { name: "Production Visuelle", href: "/production-visuelle", icon: Camera },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
        <nav className="glass px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo-SynapseAgency.png"
                alt="Synapse Agency"
                width={300}
                height={300}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <Button size="sm" variant="secondary">
                  Contactez-nous
                </Button>
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              className="lg:hidden text-slate-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300",
              isOpen ? "max-h-80 mt-4" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-slate-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button size="sm" variant="secondary" className="w-full">
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </div>
        </nav>
    </header>
  );
}
