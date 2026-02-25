import { Link, useLocation } from "wouter";
import { Phone } from "lucide-react";

export function FloatingCTA() {
  const [location] = useLocation();

  if (location.startsWith("/admin") || location === "/login") return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      <Link href="/book" data-testid="floating-button-estimate">
        <div className="group relative flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-3.5 rounded-full shadow-[0_8px_32px_rgba(197,165,114,0.45)] cursor-pointer transition-all duration-300 hover:shadow-[0_12px_40px_rgba(197,165,114,0.65)] hover:-translate-y-1 active:translate-y-0">
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30 pointer-events-none" />
          <Phone className="h-4 w-4 shrink-0" />
          <span className="text-sm tracking-wide whitespace-nowrap">FREE ESTIMATE</span>
        </div>
      </Link>
    </div>
  );
}
