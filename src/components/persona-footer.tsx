import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { Globe, ArrowRight, ShieldCheck, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiscordIcon, WhatsAppIcon } from "@/components/discord-preview-section";

export function PersonaFooter() {
  const discordUrl = "https://discord.gg/NxGP2M3aMt";
  const whatsappUrl = "https://chat.whatsapp.com/CtRWQX4dAWRL9xGz2g0i15";

  const personaLinks = [
    { title: "STEM Students", path: "/students", desc: "Sprints & Deal Room" },
    { title: "Founders", path: "/founders", desc: "Delaware Flips & VC Pitch" },
    { title: "Upskilling Professionals", path: "/upskilling", desc: "Executive Fellowships" },
    { title: "Rising Investors", path: "/rising-investors", desc: "Angel-in-Training Syndicate" },
    { title: "Institutional Partners", path: "/partners", desc: "Clinical Sites & Tech Transfer" },
    { title: "Service Providers", path: "/service-providers", desc: "Vetted Vendor Marketplace" },
    { title: "Institutional Investors", path: "/investors", desc: "Pre-Diligenced Bio Deal Flow" },
  ];

  return (
    <footer className="bg-surface border-t border-border mt-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo size="xl" />
            <p className="text-sm text-foreground/70 leading-relaxed max-w-sm">
              Ingenious Global Venture Partners. Unifying STEM education, clinical research, startup incubation, and venture capital into a single operating system.
            </p>
            
            {/* Trust Badges & Community Platforms */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-xs font-bold">
                <ShieldCheck className="h-3.5 w-3.5" /> SOC 2 Type II Certified
              </span>
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/30 text-[#5865F2] text-xs font-bold transition-all"
              >
                <DiscordIcon className="h-3.5 w-3.5" /> Join Discord Community
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold transition-all"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" /> Join WhatsApp Community
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </div>

            <div className="pt-2">
              <p className="text-xs font-bold text-foreground mb-2">Subscribe to Cross-Border Venture Memos</p>
              <div className="flex items-center gap-2 max-w-sm">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-10 pl-9 pr-3 rounded-xl border border-border bg-card text-xs text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <Button className="h-10 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Persona quick links */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                Persona Track Directory
              </p>
              <span className="text-xs text-muted-foreground">7 Segmented Paths</span>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {personaLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group bg-card/60 hover:bg-card border border-border/80 hover:border-primary/50 p-4 rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    {item.title}
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-6 flex-wrap">
            <span>© Copyright 2026 IGVP, Inc. All rights reserved.</span>
            <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-primary transition-colors">Security & Trust</Link>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground">Worldwide Cross-Border OS · US & Asia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
