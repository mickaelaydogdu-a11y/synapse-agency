"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Bot, Cpu, Smartphone, Gift } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Agents IA", href: "/agents-ia", icon: Bot },
  { name: "Solutions IA", href: "/solutions-ia", icon: Cpu },
  { name: "Applications web et mobile", href: "/applications", icon: Smartphone },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <nav className="glass rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">Synapse</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/audit-gratuit">
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  <Gift className="w-4 h-4 mr-2" />
                  Audit gratuit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="sm" variant="secondary">
                  Contactez-nous
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              isOpen ? "max-h-80 mt-4" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
              <Link href="/audit-gratuit" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  <Gift className="w-4 h-4 mr-2" />
                  Audit gratuit
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button size="sm" variant="secondary" className="w-full">
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
