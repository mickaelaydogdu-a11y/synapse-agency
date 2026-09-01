"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const GTM_ID = "GTM-TVFBBRCV";
const CONSENT_KEY = "cookie-consent";
const REOPEN_EVENT = "cookie-preferences:open";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function loadGTM() {
  if (document.getElementById("gtm-script")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function clearAnalyticsCookies() {
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name.startsWith("_ga") || name === "_gid" || name.startsWith("_gat")) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
  });
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") {
      loadGTM();
    } else if (!consent) {
      setShowBanner(true);
    }

    const reopen = () => setShowBanner(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGTM();
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    clearAnalyticsCookies();
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">
                🍪 Gestion des cookies
              </h3>
              <p className="text-sm text-slate-300">
                Nous utilisons Google Analytics pour mesurer l&apos;audience du site. Ce traceur n&apos;est déposé
                que si vous cliquez sur « Accepter ».{" "}
                <Link href="/confidentialite" className="text-primary-light underline underline-offset-2">
                  En savoir plus
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button
                size="sm"
                variant="secondary"
                onClick={rejectCookies}
                className="w-full sm:w-auto"
              >
                Refuser
              </Button>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Accepter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))}
      className={cn(
        "text-slate-400 hover:text-primary-light text-sm transition-colors",
        className
      )}
    >
      Gérer les cookies
    </button>
  );
}
