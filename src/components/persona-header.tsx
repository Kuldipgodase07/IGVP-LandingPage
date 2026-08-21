import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, ChevronDown, Layers } from "lucide-react";

interface PersonaHeaderProps {
  currentTrack?: string;
}

export function PersonaHeader({ currentTrack }: PersonaHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tracks = [
    { label: "Students", path: "/students", tag: "STEM Sprints" },
    { label: "Founders", path: "/founders", tag: "Delaware Flip" },
    { label: "Upskilling", path: "/upskilling", tag: "Fellowship" },
    { label: "Partners", path: "/partners", tag: "Clinical Sites" },
    { label: "Investors", path: "/investors", tag: "Syndicate" },
    { label: "Books", path: "/books/the-venture-framework-for-stem", tag: "New Book" },
  ];

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto flex h-[68px] w-full max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/85 backdrop-blur-xl px-5 sm:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300 relative">
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0">
            <BrandLogo size="md" />
          </Link>

          {/* Desktop track selector navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-2/80 p-1 rounded-full border border-border/40">
            {tracks.map((track) => {
              const isActive = currentTrack === track.label;
              return (
                <Link
                  key={track.path}
                  to={track.path}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all relative flex items-center gap-1.5 ${
                    isActive
                      ? "bg-primary text-white shadow-sm font-bold"
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  )}
                  {track.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Track Selector Button */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border text-xs font-bold text-foreground"
            >
              <Layers className="h-3.5 w-3.5 text-primary" />
              <span>{currentTrack || "Tracks"}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileMenuOpen && (
              <div className="absolute top-10 left-0 w-56 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-2 shadow-2xl z-50 space-y-1">
                <p className="px-3 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Select Persona Track
                </p>
                {tracks.map((t) => (
                  <Link
                    key={t.path}
                    to={t.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      currentTrack === t.label
                        ? "bg-primary text-white font-bold"
                        : "text-foreground/80 hover:bg-accent"
                    }`}
                  >
                    <span>{t.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      currentTrack === t.label ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                    }`}>
                      {t.tag}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <div className="h-5 w-px bg-border hidden sm:block mx-1" />
          <Button
            variant="outline"
            asChild
            className="h-10 rounded-full border-border/80 bg-card hover:bg-accent text-xs font-bold gap-1.5 shadow-xs transition-all hover:scale-105"
          >
            <Link to="/">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Main OS Hub</span>
            </Link>
          </Button>
        </div>
      </header>
    </div>
  );
}

