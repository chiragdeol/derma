import { Link, useLocation } from "@tanstack/react-router";
import { Home, LayoutGrid, Sparkles, Phone, MessageCircle, Calendar, ShieldCheck, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export function MobileAppBottomNav() {
  const location = useLocation();
  const path = location.pathname;
  const [showPWAInstall, setShowPWAInstall] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPWAInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowPWAInstall(false);
      }
      setDeferredPrompt(null);
    } else {
      alert("To install app: Tap your browser menu (⋮ or Share icon) and select 'Add to Home Screen'");
    }
  };

  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: Home,
      isActive: path === "/",
    },
    {
      to: "/services",
      label: "Services",
      icon: LayoutGrid,
      isActive: path === "/services" || path.startsWith("/services/"),
    },
    {
      to: "/services/injectables",
      label: "Treatments",
      icon: Sparkles,
      isActive: path === "/services/injectables" || path === "/services/skin",
    },
    {
      to: "/contact",
      label: "Book",
      icon: Calendar,
      isActive: path === "/contact",
    },
  ];

  return (
    <>
      {/* PWA INSTALL BANNER ON MOBILE */}
      {showPWAInstall && (
        <div className="fixed bottom-16 inset-x-3 z-50 md:hidden bg-card border border-[#974d08]/40 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#974d08] flex items-center justify-center text-white shrink-0 shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Install Al Nemah App</p>
              <p className="text-[10px] text-muted-foreground">Add to phone home screen for 1-tap access</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleInstallPWA}
              className="px-3 py-1.5 rounded-lg bg-[#974d08] text-white text-xs font-bold shadow-sm cursor-pointer hover:opacity-90"
            >
              Install
            </button>
            <button
              onClick={() => setShowPWAInstall(false)}
              className="px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* FIXED MOBILE BOTTOM APPLICATION NAVIGATION BAR */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border/80 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="grid grid-cols-5 items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
                  item.isActive
                    ? "text-[#974d08] font-bold"
                    : "text-muted-foreground/80 hover:text-foreground"
                }`}
              >
                <div className={`p-1.5 rounded-xl transition-transform ${item.isActive ? "bg-[#974d08]/15 scale-110" : ""}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
              </Link>
            );
          })}

          {/* WHATSAPP APP TRIGGER */}
          <a
            href="https://wa.me/971500999324"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 text-green-600 font-bold transition-all cursor-pointer"
          >
            <div className="p-1.5 rounded-xl bg-green-500/15 scale-105">
              <MessageCircle className="w-5 h-5 fill-green-600 text-white" />
            </div>
            <span className="text-[10px] tracking-tight mt-0.5">WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
