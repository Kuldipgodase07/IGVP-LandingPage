import { createFileRoute, Link } from "@tanstack/react-router";
import { CopilotWidget } from "@/components/copilot-widget";
import {
  ArrowRight,
  ShieldCheck,
  Brain,
  Stethoscope,
  Building2,
  TrendingUp,
  Users,
  Sparkles,
  CheckCircle2,
  Play,
  Globe,
  Lock,
  Zap,
  BarChart3,
  Server,
  Activity,
  Terminal,
  Network,
  GraduationCap,
  Briefcase,
  Layers,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BrandLogo } from "@/components/brand-logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IGVP · Healthcare Venture Operating System" },
      {
        name: "description",
        content:
          "IGVP unifies STEM education, healthcare startup incubation, and venture capital into a single enterprise platform.",
      },
      { property: "og:title", content: "IGVP · Healthcare Venture Operating System" },
      {
        property: "og:description",
        content: "The enterprise OS powering the world's STEM & Healthcare Venture Institute.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Floating Pill Header */}
      <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <header className="pointer-events-auto flex h-[68px] w-full max-w-6xl items-center justify-between rounded-full border border-border/50 bg-background/80 backdrop-blur-xl px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300">
          <div className="flex items-center gap-8">
            <BrandLogo size="md" />
            <nav className="hidden md:flex items-center gap-7">
              {[
                { l: "Products", h: "/" },
                { l: "Solutions", h: "/" },
                { l: "Learning", h: "/" },
                { l: "Support", h: "/" },
                { l: "Company", h: "/" },
              ].map((n) => (
                <a
                  key={n.l}
                  href={n.h}
                  className="text-[14px] font-semibold text-foreground/70 hover:text-foreground hover:scale-105 transition-all"
                >
                  {n.l}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="h-5 w-px bg-border hidden sm:block mx-1" />
            <Button
              variant="ghost"
              asChild
              className="hidden sm:flex h-10 rounded-full text-[14px] font-bold text-foreground/80 hover:text-primary"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="h-10 px-6 rounded-full bg-primary hover:bg-primary-hover text-[14px] font-bold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link to="/login">Try for free</Link>
            </Button>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Thematic Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.25] pointer-events-none [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Core Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/15 dark:bg-primary/20 blur-[100px] pointer-events-none z-0" />

        <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none z-0" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="mb-4">
                <span className="text-xl font-['Fraunces'] font-semibold italic text-foreground">
                  From Lab to Ledger
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                The Healthcare Venture <span className="text-primary">Operating System.</span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-10 max-w-xl">
                Power more connected, data-driven experiences by bringing together STEM education,
                clinical partnerships, and venture capital. Unify your entire institute on one
                platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto h-14 px-8 rounded-md bg-primary hover:bg-primary-hover text-base font-bold shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Link to="/login">Watch demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto h-14 px-8 rounded-md border-2 border-primary text-primary hover:bg-primary/5 text-base font-bold transition-all hover:-translate-y-0.5"
                >
                  <Link to="/login">Try for free</Link>
                </Button>
              </div>
            </div>

            {/* Hero Graphic / Mockup (Apple Window with Dark Mode Support) */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none perspective-1000">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background transform-gpu rotate-y-[-5deg] rotate-x-[2deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out flex flex-col h-[480px]">
                {/* Mockup Header (Apple Window) */}
                <div className="bg-surface border-b border-border flex items-center px-4 py-3 gap-3 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="bg-background border border-border rounded-md px-3 py-1 flex-1 text-xs text-center text-muted-foreground font-medium shadow-sm flex items-center justify-center gap-2">
                    <Lock className="h-3 w-3" /> console.igvp.health/programs
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full" />
                    <div className="h-3 w-3 rounded-full" />
                  </div>
                </div>

                {/* Mockup Body (Programs Dashboard UI) */}
                <div className="flex flex-1 overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-1/4 min-w-[180px] border-r border-border bg-surface/50 p-4 flex flex-col gap-5 overflow-hidden">
                    <div className="flex items-center gap-2 px-2 whitespace-nowrap">
                      <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-bold text-sm text-foreground truncate">
                        Education Cloud
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between px-2 py-1.5 bg-primary/10 rounded-md text-primary font-medium text-xs whitespace-nowrap">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <Activity className="h-3.5 w-3.5 shrink-0" />{" "}
                          <span className="truncate">Active Cohort</span>
                        </div>
                        <span className="bg-primary/20 px-1.5 py-0.5 rounded text-[9px] shrink-0 ml-1">
                          42
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 text-foreground/60 font-medium text-xs hover:bg-foreground/5 rounded-md transition-colors whitespace-nowrap">
                        <Briefcase className="h-3.5 w-3.5 shrink-0" />{" "}
                        <span className="truncate">Curriculum</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 text-foreground/60 font-medium text-xs hover:bg-foreground/5 rounded-md transition-colors whitespace-nowrap">
                        <Users className="h-3.5 w-3.5 shrink-0" />{" "}
                        <span className="truncate">Mentor Network</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 text-foreground/60 font-medium text-xs hover:bg-foreground/5 rounded-md transition-colors whitespace-nowrap">
                        <Sparkles className="h-3.5 w-3.5 shrink-0" />{" "}
                        <span className="truncate">Capstone AI</span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2 whitespace-nowrap truncate">
                        Past Cohorts
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 px-2 whitespace-nowrap">
                          <div className="h-1.5 w-1.5 rounded-full bg-success shrink-0" />
                          <span className="text-xs text-foreground/70 truncate">Spring 2026</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 whitespace-nowrap">
                          <div className="h-1.5 w-1.5 rounded-full bg-border shrink-0" />
                          <span className="text-xs text-foreground/70 truncate">Fall 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Dashboard Area */}
                  <div className="flex-1 p-5 bg-background flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                          Track B · Incubator
                        </p>
                        <h3 className="text-lg font-bold text-foreground">Fall 2026 Cohort</h3>
                      </div>
                      <div className="flex items-center gap-1.5 bg-success/10 px-2 py-1 rounded-md border border-success/20">
                        <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                        <span className="text-[10px] font-bold text-success uppercase tracking-wider">
                          Week 4 / 16
                        </span>
                      </div>
                    </div>

                    {/* Top Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-card border border-border rounded-lg p-3 shadow-sm">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                          Founders
                        </p>
                        <div className="flex items-end gap-2">
                          <span className="text-lg font-bold text-foreground leading-none">42</span>
                          <span className="text-[10px] font-bold text-success leading-none mb-[2px]">
                            +12%
                          </span>
                        </div>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-3 shadow-sm">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                          Completion
                        </p>
                        <div className="flex items-end gap-2">
                          <span className="text-lg font-bold text-foreground leading-none">
                            84%
                          </span>
                          <span className="text-[10px] font-bold text-warning leading-none mb-[2px]">
                            On Track
                          </span>
                        </div>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-3 shadow-sm">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                          Milestone
                        </p>
                        <div className="flex items-end gap-2">
                          <span className="text-[11px] font-bold text-foreground leading-none mb-1">
                            FDA Pathway
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress / Chart Area */}
                    <div className="flex-1 border border-border rounded-lg bg-card shadow-sm p-4 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-xs font-bold text-foreground">Curriculum Progress</p>
                        <Button
                          variant="ghost"
                          className="h-5 text-[10px] px-2 text-primary hover:bg-primary/10"
                        >
                          View Syllabus
                        </Button>
                      </div>
                      <div className="flex-1 relative w-full flex items-center justify-center px-4">
                        {/* Mock Progress Timeline */}
                        <div className="absolute w-[calc(100%-2rem)] h-1 bg-border rounded-full top-1/2 -translate-y-1/2" />
                        <div className="absolute w-[35%] h-1 bg-primary rounded-full top-1/2 -translate-y-1/2 left-4 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />

                        <div className="relative w-full flex justify-between items-center">
                          {[
                            { step: 1, label: "Ideation", active: true },
                            { step: 2, label: "Regulatory", active: true, current: true },
                            { step: 3, label: "Clinical", active: false },
                            { step: 4, label: "Capital", active: false },
                          ].map((s, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                              <div
                                className={`h-4 w-4 rounded-full border-[2px] flex items-center justify-center bg-card z-10 ${s.active ? "border-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]" : "border-border"}`}
                              >
                                {s.active && !s.current && (
                                  <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                                )}
                                {s.current && (
                                  <div className="h-2 w-2 bg-primary rounded-full animate-ping" />
                                )}
                              </div>
                              <span
                                className={`text-[9px] font-bold uppercase tracking-wider absolute mt-6 ${s.active ? "text-foreground" : "text-muted-foreground"}`}
                              >
                                {s.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Alert */}
                    <div className="border border-primary/20 bg-primary/5 rounded-lg p-3 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-md shadow-primary/20 shrink-0">
                          <Play className="h-3.5 w-3.5 ml-0.5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-foreground">
                            Live Session: FDA Strategy
                          </p>
                          <p className="text-[9px] text-foreground/70">
                            Dr. Sarah Jenkins · Starting in 5 mins
                          </p>
                        </div>
                      </div>
                      <Button className="h-6 bg-foreground text-background hover:bg-foreground/90 text-[10px] font-bold rounded px-3">
                        Join
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl shadow-2xl p-4 flex items-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-300 z-20">
                <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center text-success">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Active Cohort Growth</p>
                  <p className="text-2xl font-extrabold text-success">+24%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud (Marquee) */}
      <section className="bg-surface border-y border-border py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trailblazing institutions put IGVP at the center of the constituent experience.
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-marquee gap-16 pr-16">
              {/* Duplicated list to create the seamless infinite scroll effect */}
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-16">
                  {[
                    "Mayo Clinic",
                    "Genentech",
                    "Cleveland Clinic",
                    "Stanford Medicine",
                    "Ascend VC",
                    "Karolinska",
                    "Mayo Clinic",
                    "Genentech",
                    "Cleveland Clinic",
                    "Stanford Medicine",
                    "Ascend VC",
                    "Karolinska",
                  ].map((name, index) => (
                    <span
                      key={`${groupIndex}-${index}`}
                      className="whitespace-nowrap text-xl font-bold tracking-tight text-foreground/40 hover:text-foreground/90 transition-colors duration-300 cursor-default"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Persona-Based Landing Page Hub Directory */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Segmented By Constituent Profile
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mt-4">
              Explore Your Dedicated Persona Landing Page
            </h2>
            <p className="mt-4 text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Select your role in the ecosystem to access customized deal flow, regulatory playbooks, and specialized program tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "STEM Students",
                path: "/students",
                tagline: "Don't Wait for a PhD to Enter the Deal Room.",
                badge: "72-Hour Sprint & Memos",
                icon: GraduationCap,
                color: "text-primary",
                desc: "Join bio-design sprints, build live investment memos, and get discovered by accelerator teams before graduation.",
              },
              {
                title: "Founders",
                path: "/founders",
                tagline: "Your Breakthrough Is Ready. Your Cap Table Isn't.",
                badge: "Delaware Flip & VC Pitch",
                icon: Briefcase,
                color: "text-success",
                desc: "Take lab-validated IP cross-border with corporate restructuring, FDA regulatory strategy, and syndicate capital.",
              },
              {
                title: "Upskilling Professionals",
                path: "/upskilling",
                tagline: "Keep Your Practice or Job. Build Ventures on the Side.",
                badge: "Executive Masterclasses",
                icon: Stethoscope,
                color: "text-warning",
                desc: "Part-time, evening & weekend Bio-Entrepreneurship cohorts for clinicians and executives seeking advisory & equity upside.",
              },
              {
                title: "Rising Investors",
                path: "/rising-investors",
                tagline: "Learn to Write the Term Sheet, Not Just Read It.",
                badge: "Angel-in-Training Syndicate",
                icon: TrendingUp,
                color: "text-primary",
                desc: "Train as an angel investor on real deals, build investment memos, and earn co-investment rights.",
              },
              {
                title: "Institutional Partners",
                path: "/partners",
                tagline: "Turn Your Lab's Pipeline Into a Deal Engine.",
                badge: "Clinical Sites & Tech Transfer",
                icon: Building2,
                color: "text-info",
                desc: "Vetted clinical trial site matching, tech transfer desks, and co-development access for hospitals and research labs.",
              },
              {
                icon: Layers,
                title: "Service Providers",
                path: "/service-providers",
                tagline: "Get in Front of Every Founder Before They Pick a Vendor.",
                badge: "Vetted Vendor Marketplace",
                color: "text-chart-4",
                desc: "Join the IGVP vendor directory surfaced directly during founder onboarding, FDA prep, and Delaware flip workflows.",
              },
              {
                icon: ShieldCheck,
                title: "Institutional Investors",
                path: "/investors",
                tagline: "Cross-Border Bio-Deal Flow, Pre-Vetted & Diligenced.",
                badge: "Gated Syndicate Deal Room",
                color: "text-success",
                desc: "Co-invest alongside the IGVP Syndicate in top pre-screened healthtech & deep-tech ventures.",
              },
            ].map((persona, i) => (
              <Link
                key={persona.path}
                to={persona.path}
                className="group bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-11 w-11 rounded-xl bg-primary/10 ${persona.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <persona.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-surface-2 border border-border px-2.5 py-1 rounded-full text-foreground/80">
                      {persona.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {persona.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary mb-3 italic">
                    "{persona.tagline}"
                  </p>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                    {persona.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-primary pt-3 border-t border-border/40">
                  <span>Enter {persona.title} Landing Page</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zig-Zag Features */}

      {/* Feature 1: Image Left, Text Right */}
      <section className="py-20 md:py-32 overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -rotate-3 scale-105" />
              <div className="relative bg-card border border-border shadow-2xl rounded-3xl p-8 aspect-[4/3] flex flex-col items-center justify-center text-center">
                <Brain className="h-24 w-24 text-primary opacity-20 mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-2">STEM Learning Portal</h3>
                <div className="w-full max-w-xs space-y-3 mt-4">
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded" />
                  <div className="h-3 w-5/6 bg-slate-100 dark:bg-slate-800 rounded mx-auto" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                STEM & Clinical Education
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                Deliver CME-accredited tracks, cohort-based learning, and personalized AI tutors
                designed specifically for clinicians, researchers, and technical founders scaling
                healthcare solutions. Maximize staff impact institution-wide.
              </p>
              <div className="flex items-center gap-4">
                <Button
                  asChild
                  className="h-12 px-6 rounded-md bg-primary font-bold shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <a href="#">Watch demo</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-6 rounded-md border-border font-bold hover:bg-surface transition-all"
                >
                  <a href="#">Learn more</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Text Left, Image Right */}
      <section className="py-20 md:py-32 overflow-hidden bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-chart-4/10 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative bg-card border border-border shadow-2xl rounded-3xl p-8 aspect-[4/3] flex flex-col items-center justify-center text-center">
                <BarChart3 className="h-24 w-24 text-chart-4 opacity-20 mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Venture Analytics</h3>
                <div className="flex gap-4 w-full max-w-xs mt-4 items-end justify-center h-24">
                  <div className="w-8 bg-chart-4/40 rounded-t h-12" />
                  <div className="w-8 bg-chart-4/60 rounded-t h-16" />
                  <div className="w-8 bg-chart-4/80 rounded-t h-20" />
                  <div className="w-8 bg-chart-4 rounded-t h-24" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                Venture Capital OS
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                Manage your entire healthcare portfolio in one place. Automate deal flow tracking,
                streamline investment committee memos, and generate real-time LP reporting
                seamlessly integrated with your CRM.
              </p>
              <div className="flex items-center gap-4">
                <Button
                  asChild
                  className="h-12 px-6 rounded-md bg-primary font-bold shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <a href="#">Watch demo</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-6 rounded-md border-border font-bold hover:bg-background transition-all"
                >
                  <a href="#">Get the datasheet</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Image Left, Text Right */}
      <section className="py-20 md:py-32 overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-success/5 rounded-3xl transform -rotate-2 scale-105" />
              <div className="relative bg-card border border-border shadow-2xl rounded-3xl p-8 aspect-[4/3] flex flex-col items-center justify-center text-center">
                <Sparkles className="h-24 w-24 text-success opacity-20 mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Agentforce AI</h3>
                <div className="mt-6 flex flex-col gap-3 w-full max-w-xs">
                  <div className="bg-success/10 border border-success/20 p-3 rounded-lg text-left shadow-sm">
                    <div className="h-2 w-3/4 bg-success/40 rounded mb-2" />
                    <div className="h-2 w-1/2 bg-success/40 rounded" />
                  </div>
                  <div className="bg-surface border border-border p-3 rounded-lg text-left shadow-sm ml-8">
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded mb-2" />
                    <div className="h-2 w-5/6 bg-slate-200 dark:bg-slate-700 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                Agentforce: AI Copilot Suite
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                Engage prospective founders and deliver instant, personalized support. Use our FDA
                regulatory assistant, pitch coach, grant writer, and intelligent founder-matching
                agents to scale your operations 24/7.
              </p>
              <div className="flex items-center gap-4">
                <Button
                  asChild
                  className="h-12 px-6 rounded-md bg-primary font-bold shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <a href="#">Explore AI</a>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="text-primary font-bold text-base h-auto p-0 hover:no-underline hover:text-primary-hover group"
                >
                  <a href="#">
                    Learn how it works{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PLATFORM SECTION */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-[13px] font-bold tracking-widest text-primary uppercase mb-4">
            The Platform
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-16 leading-[1.1]">
            One operating system.
            <br />
            <span className="text-foreground/60">Every role, every workflow.</span>
          </h2>

          <div className="relative mx-auto w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
            {/* Mac Window Header */}
            <div className="bg-surface border-b border-border flex items-center px-4 py-3 gap-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11px] font-medium text-muted-foreground tracking-wide font-mono flex-1 text-left flex items-center justify-between">
                <span>igvp.app / founder / neurogen-bio</span>
                <span className="flex items-center gap-1.5 text-success/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                  Live - Investor round in progress
                </span>
              </div>
            </div>

            {/* Dashboard Layout */}
            <div className="flex flex-col md:flex-row h-auto md:h-[600px] text-left">
              {/* Sidebar */}
              <div className="w-full md:w-64 border-r border-border p-4 space-y-6 flex-shrink-0 bg-background/50">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-foreground/5 text-foreground font-medium text-sm">
                    <Activity className="h-4 w-4" /> Workspace
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-lg cursor-pointer transition text-sm">
                    <span className="flex items-center gap-3">
                      <TrendingUp className="h-4 w-4" /> Fundraising
                    </span>
                    <span className="bg-success/20 text-success text-[10px] px-1.5 rounded font-bold">
                      7
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-lg cursor-pointer transition text-sm">
                    <Stethoscope className="h-4 w-4" /> Clinical Model
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-lg cursor-pointer transition text-sm">
                    <Sparkles className="h-4 w-4" /> AI Copilot
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 mb-2">
                    Portfolio
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg cursor-pointer transition text-sm">
                      <div className="h-2 w-2 rounded-full bg-success" /> NeuroGen Bio
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-lg cursor-pointer transition text-sm">
                      <div className="h-2 w-2 rounded-full bg-info" /> Cardia Health
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-lg cursor-pointer transition text-sm">
                      <div className="h-2 w-2 rounded-full bg-warning" /> Oncora Labs
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 flex flex-col gap-6 bg-card">
                {/* Top Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { l: "Round Size", v: "$12.0M", m: "+18%", t: "success" },
                    { l: "Committed", v: "$8.4M", m: "70%", t: "info" },
                    { l: "Investors", v: "14", m: "+3", t: "warning" },
                    { l: "Close ETA", v: "42d", m: "on track", t: "success" },
                  ].map((s, i) => (
                    <div key={i} className="border border-border rounded-xl p-4 bg-background/50">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                        {s.l}
                      </p>
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-bold text-foreground">{s.v}</span>
                        <span className={`text-xs font-medium text-${s.t}`}>{s.m}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts & Lists */}
                <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
                  {/* Fundraising Velocity */}
                  <div className="flex-1 border border-border rounded-xl bg-background/50 p-5 flex flex-col relative overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                          Fundraising Velocity
                        </p>
                        <p className="text-2xl font-bold text-foreground">$8.4M / $12M</p>
                      </div>
                      <span className="bg-primary/10 text-primary border border-primary/20 text-xs px-2 py-1 rounded-md font-bold">
                        Series A
                      </span>
                    </div>
                    <div className="flex-1 relative mt-4">
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent bottom-0"
                        style={{
                          clipPath:
                            "polygon(0 100%, 0 80%, 20% 75%, 40% 65%, 60% 55%, 80% 40%, 100% 20%, 100% 100%)",
                        }}
                      />
                      <svg
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 100"
                      >
                        <path
                          d="M0,80 Q10,78 20,75 T40,65 T60,55 T80,40 T100,20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-primary"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Investor Pipeline */}
                  <div className="w-full lg:w-80 border border-border rounded-xl bg-background/50 p-5 flex flex-col">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6">
                      Investor Pipeline
                    </p>
                    <div className="space-y-4 flex-1">
                      {[
                        { n: "Andreessen Horowitz", s: "Term sheet", c: "success" },
                        { n: "GV", s: "Diligence", c: "info" },
                        { n: "Sequoia Health", s: "IC review", c: "warning" },
                        { n: "NEA", s: "Intro call", c: "success" },
                      ].map((inv, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-3">
                            <div className={`h-2 w-2 rounded-full bg-${inv.c}`} />
                            <span className="text-foreground font-medium">{inv.n}</span>
                          </div>
                          <span className="text-muted-foreground text-xs">{inv.s}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button
                        variant="ghost"
                        className="w-full h-8 text-xs text-muted-foreground hover:text-foreground rounded-md border border-border bg-background/50"
                      >
                        View all 14 investors <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Notification Toast */}
                <div className="mt-auto border border-primary/20 bg-primary/10 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        IGVP AI · Investment memo drafted
                      </p>
                      <p className="text-xs text-foreground/70">
                        Based on 14 investor conversations & clinical milestones · 2 min ago
                      </p>
                    </div>
                  </div>
                  <Button className="h-8 bg-foreground text-background hover:bg-foreground/90 text-xs font-bold rounded-full px-5">
                    Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[13px] font-bold tracking-widest text-primary uppercase mb-4">
              Programs
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
              Two tracks. One shared
              <br />
              operating system.
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From clinical curiosity to funded venture — pick the arc that matches where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Track A */}
            <div className="bg-card border border-border rounded-[2rem] p-8 flex flex-col">
              <p className="text-[11px] font-bold text-foreground/60 uppercase tracking-widest mb-4">
                Track A · Fellowship
              </p>
              <h3 className="text-3xl font-extrabold text-foreground mb-2">
                The Clinical Innovator
              </h3>
              <p className="text-sm text-foreground/60 mb-10">12 weeks</p>

              <ul className="space-y-6 mb-12 flex-1">
                {[
                  "Core curriculum · healthtech, regulatory, capital markets",
                  "1:1 clinician mentor + weekly office hours",
                  "CME credits recognized by ACGME partners",
                  "Capstone: validated MVP + investor deck",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full h-14 rounded-xl border-border hover:bg-surface text-foreground font-bold"
              >
                Apply to Track A
              </Button>
            </div>

            {/* Track B (Highlighted) */}
            <div className="relative bg-card border border-primary/40 rounded-[2rem] p-8 flex flex-col shadow-[0_0_60px_rgba(var(--primary-rgb),0.15)] transform md:-translate-y-4">
              <div className="absolute top-0 right-8 -translate-y-1/2">
                <span className="bg-warning/20 text-warning text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-warning/30 backdrop-blur-sm">
                  Most Popular
                </span>
              </div>
              <p className="text-[11px] font-bold text-foreground/60 uppercase tracking-widest mb-4">
                Track B · Incubator
              </p>
              <h3 className="text-3xl font-extrabold text-foreground mb-2">The Founder Studio</h3>
              <p className="text-sm text-foreground/60 mb-10">16 weeks</p>

              <ul className="space-y-6 mb-12 flex-1">
                {[
                  "Everything in Track A",
                  "$50K non-dilutive seed grant + $250K SAFE match",
                  "Dedicated venture partner + FDA advisor",
                  "Demo Day with 200+ vetted investors",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full h-14 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-bold shadow-lg shadow-primary/20">
                Apply to Track B
              </Button>
            </div>

            {/* Enterprise */}
            <div className="bg-card border border-border rounded-[2rem] p-8 flex flex-col">
              <p className="text-[11px] font-bold text-foreground/60 uppercase tracking-widest mb-4">
                Enterprise
              </p>
              <h3 className="text-3xl font-extrabold text-foreground mb-2">
                Institutional License
              </h3>
              <p className="text-sm text-foreground/60 mb-10">Custom</p>

              <ul className="space-y-6 mb-12 flex-1">
                {[
                  "Whitelabel curriculum for your institution",
                  "Dedicated cohort infrastructure",
                  "Faculty training & co-authored research",
                  "SLA, SSO, audit logs, HIPAA add-ons",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full h-14 rounded-xl border-border hover:bg-surface text-foreground font-bold"
              >
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources / Spotlights */}
      <section className="py-24 md:py-32 bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-foreground mb-16">
            Featured Spotlight
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Resource Card 1 */}
            <div className="group bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Layers className="h-20 w-20 text-primary opacity-40" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Reimagining the Operating System
                </h3>
                <p className="text-foreground/70 mb-8 flex-1">
                  Explore our vision for building a next-gen operating system tailored for
                  healthcare venture ecosystems.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-primary font-bold text-base h-auto p-0 justify-start hover:no-underline"
                >
                  <a href="#">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            {/* Resource Card 2 */}
            <div className="group bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="aspect-video bg-gradient-to-br from-chart-2/20 to-chart-2/5 flex items-center justify-center">
                <Users className="h-20 w-20 text-chart-2 opacity-40" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Connected Ecosystem Report
                </h3>
                <p className="text-foreground/70 mb-8 flex-1">
                  Discover global insights from founders, clinicians, and LPs in our latest
                  Connected Ecosystem Report.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-primary font-bold text-base h-auto p-0 justify-start hover:no-underline"
                >
                  <a href="#">
                    Read the report <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[13px] font-bold tracking-widest text-primary uppercase mb-4">
              Success Stories
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Ventures born inside IGVP.
            </h2>
          </div>

          {/* Running Testimonial Marquee */}
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] mt-12 py-10 -my-10">
            <div className="flex w-max animate-marquee gap-8 pr-8 hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-8">
                  {[
                    {
                      q: `"IGVP compressed five years of trial-and-error into one cohort. We closed our Series A ninety days after Demo Day."`,
                      n: "Dr. Priya Ravindran",
                      t: "Founder & CEO · NeuroGen Bio",
                      m: "$14M SERIES A",
                    },
                    {
                      q: `"The only place where I could pitch to a Kaiser CMO on Monday and an a16z partner on Wednesday — in one workspace."`,
                      n: "Marcus Okafor, MD",
                      t: "Co-founder · Cardia Health",
                      m: "3 HOSPITAL LOIS",
                    },
                    {
                      q: `"As an investor, IGVP deal flow is pre-vetted, pre-diligenced and pre-clinical-validated. Our conversion tripled."`,
                      n: "Elena Kowalski",
                      t: "Partner · Emerald Health Ventures",
                      m: "12 INVESTMENTS",
                    },
                    {
                      q: `"We gained unparalleled access to clinical advisors who helped us navigate FDA hurdles in record time."`,
                      n: "Sarah Jenkins",
                      t: "CTO · MedTech Solutions",
                      m: "FDA CLEARED",
                    },
                    {
                      q: `"The platform is our source of truth for all LP communications. It's transformed how we raise and deploy capital."`,
                      n: "David Chen",
                      t: "Managing Director · Nexus Capital",
                      m: "FUND II CLOSED",
                    },
                  ].map((story, i) => (
                    <div
                      key={`${groupIndex}-${i}`}
                      className="relative w-[400px] sm:w-[450px] bg-card/80 backdrop-blur-xl border border-border/60 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/50 hover:shadow-[0_8px_40px_-12px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 hover:-translate-y-2 cursor-default group overflow-hidden"
                    >
                      {/* Accent Top Border */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <Quote className="h-12 w-12 text-primary/10 absolute top-6 right-6 transform -scale-x-100 group-hover:text-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />

                      <p className="text-lg text-foreground/80 leading-relaxed mb-12 group-hover:text-foreground transition-colors relative z-10 font-medium">
                        {story.q}
                      </p>

                      <div className="relative z-10">
                        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-lg border border-primary/20 shadow-inner shrink-0 group-hover:scale-110 transition-transform duration-500">
                              {story.n.charAt(0)}
                            </div>
                            <div>
                              <p className="text-foreground font-bold text-base">{story.n}</p>
                              <p className="text-xs text-foreground/60 mt-0.5 font-medium">
                                {story.t}
                              </p>
                            </div>
                          </div>
                          <div className="bg-warning/10 border border-warning/20 px-4 py-1.5 rounded-full backdrop-blur-md shrink-0 shadow-sm group-hover:bg-warning/15 transition-colors">
                            <p className="text-[10px] font-bold text-warning uppercase tracking-widest whitespace-nowrap">
                              {story.m}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 md:grid-cols-5 lg:grid-cols-6">
            <div className="md:col-span-2">
              <BrandLogo size="xl" />
              <p className="mt-6 text-[15px] text-foreground/70 max-w-xs leading-relaxed">
                Ingenious Global Venture Partners.
                <br />
                We bring companies and customers together.
              </p>
              <div className="flex gap-3 mt-8">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" },
                  { icon: Github, label: "GitHub" },
                ].map((Social, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:bg-accent hover:scale-110 cursor-pointer transition-all duration-300"
                  >
                    <span className="sr-only">{Social.label}</span>
                    <Social.icon className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>
            {[
              { h: "Products", l: ["Education Cloud", "Agentforce", "Venture OS", "Integrations"] },
              { h: "Company", l: ["About IGVP", "Customer Stories", "Careers", "Security"] },
              {
                h: "Popular Links",
                l: ["New Release", "Developer Center", "Certification", "Contact Us"],
              },
            ].map((c) => (
              <div key={c.h} className="lg:col-span-1">
                <p className="text-base font-bold text-foreground mb-6">{c.h}</p>
                <ul className="space-y-4">
                  {c.l.map((i) => (
                    <li key={i}>
                      <a
                        href="/"
                        className="text-[15px] text-foreground/70 hover:text-primary transition-colors"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-foreground/60">
            <div className="flex flex-wrap items-center gap-4">
              <span>© Copyright 2026 IGVP, Inc. All rights reserved.</span>
              <a href="/" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="/" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="/" className="hover:text-primary transition-colors">
                Trust
              </a>
              <a href="/" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="font-medium">Worldwide</span>
            </div>
          </div>
        </div>
      </footer>
      <CopilotWidget />
    </div>
  );
}
