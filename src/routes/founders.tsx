import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PersonaHeader } from "@/components/persona-header";
import { PersonaFooter } from "@/components/persona-footer";
import { DiscordPreviewSection } from "@/components/discord-preview-section";
import { PainVsFixSection } from "@/components/pain-vs-fix-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Building2,
  Activity,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ShieldCheck,
  Globe,
  DollarSign,
  FileCheck,
  Zap,
  Users,
  ChevronRight,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      { title: "Founders Track · IGVP Institute Accelerator" },
      {
        name: "description",
        content:
          "Your breakthrough is ready. Your cap table isn't. Take lab-validated innovation cross-border with Delaware flips, FDA playbooks, and syndicate VC introductions.",
      },
    ],
  }),
  component: FoundersPersonaPage,
});

function FoundersPersonaPage() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"cap" | "fda" | "syndicate">("cap");
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <PersonaHeader currentTrack="Founders" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <div
          className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.25] pointer-events-none [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-1/4 h-[420px] w-[750px] rounded-full bg-primary/20 blur-[120px] pointer-events-none z-0" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-left">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2">
                <Rocket className="h-4 w-4" /> Founders Track (PhDs, MDs, Bio-Engineers)
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Your Breakthrough Is Ready.{" "}
                <span className="text-primary">Your Cap Table Isn't.</span>
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Take your lab-validated innovation cross-border — with the regulatory playbook, corporate structure, and investor introductions to actually close a round.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                >
                  Apply to the Accelerator
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl border-border bg-card hover:bg-accent text-sm sm:text-base font-bold transition-all"
                >
                  Register for 72-Hour Sprint
                </Button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                <div className="p-3 rounded-xl bg-card border border-border/60">
                  <p className="text-2xl font-extrabold text-foreground">$50K</p>
                  <p className="text-xs text-muted-foreground font-medium">Non-Dilutive Grant</p>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border/60">
                  <p className="text-2xl font-extrabold text-success">$250K</p>
                  <p className="text-xs text-muted-foreground font-medium">SAFE Syndicate Match</p>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border/60">
                  <p className="text-2xl font-extrabold text-primary">200+</p>
                  <p className="text-xs text-muted-foreground font-medium">Vetted Bio VCs</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Delaware Flip & Cap Table Console */}
            <div className="lg:col-span-5 xl:col-span-6 relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-6 space-y-5">
                {/* Console Header */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground">Delaware Flip & Cap Table Console</h3>
                      <p className="text-xs text-muted-foreground">NeuroGen Bio Inc. · Cross-Border Entity</p>
                    </div>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20 font-bold text-[10px] px-2.5 py-1">
                    ● Delaware Flip Verified
                  </Badge>
                </div>

                {/* Console Interactive Tabs */}
                <div className="flex items-center gap-2 bg-surface-2 p-1 rounded-xl border border-border">
                  {[
                    { id: "cap", label: "Cap Table" },
                    { id: "fda", label: "FDA Pre-Sub" },
                    { id: "syndicate", label: "Syndicate Round" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveConsoleTab(tab.id as any)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        activeConsoleTab === tab.id
                          ? "bg-primary text-white shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content Display */}
                {activeConsoleTab === "cap" && (
                  <div className="space-y-3 animate-in fade-in-50 duration-200">
                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 space-y-2">
                      <div className="flex justify-between text-xs font-bold text-foreground">
                        <span>Founders & Lab Equity (Delaware C-Corp)</span>
                        <span className="text-primary">70%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-[70%]" />
                      </div>
                      <p className="text-[11px] text-muted-foreground">80/20 IP Transfer & 4-Year Reverse Vesting active.</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 space-y-2">
                      <div className="flex justify-between text-xs font-bold text-foreground">
                        <span>IGVP Syndicate & Angel Pool</span>
                        <span className="text-success">20%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-success rounded-full w-[20%]" />
                      </div>
                      <p className="text-[11px] text-muted-foreground">$1.2M SAFE allocation locked at $8M valuation cap.</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-foreground font-mono">Delaware Flip Completed</p>
                          <p className="text-[11px] text-muted-foreground">Cross-border tax & legal compliance signed</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 rounded">Active</span>
                    </div>
                  </div>
                )}

                {activeConsoleTab === "fda" && (
                  <div className="space-y-3 animate-in fade-in-50 duration-200">
                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileCheck className="h-5 w-5 text-primary shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-foreground">FDA 510(k) Pre-Sub Dossier</p>
                          <p className="text-[11px] text-muted-foreground">Drafted with IGVP Regulatory Counsel</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">In Review</span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Activity className="h-5 w-5 text-success shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-foreground">Indian Trial Site Matching</p>
                          <p className="text-[11px] text-muted-foreground">Matched with AIIMS & CDSCO CRO Vetted Network</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 rounded">Matched</span>
                    </div>
                  </div>
                )}

                {activeConsoleTab === "syndicate" && (
                  <div className="space-y-3 animate-in fade-in-50 duration-200">
                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-warning shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-foreground">Syndicate Lead Check</p>
                          <p className="text-[11px] text-muted-foreground">$250,000 committed from IGVP Bio Fund</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-warning bg-warning/10 px-2 py-0.5 rounded">Committed</span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-foreground">Cap Table Speed Dating Slot</p>
                          <p className="text-[11px] text-muted-foreground">Matched with 14 bio angel LPs this Thursday</p>
                        </div>
                      </div>
                      <Button size="sm" className="h-7 text-[11px] font-bold bg-primary text-white rounded-lg">
                        Confirmed
                      </Button>
                    </div>
                  </div>
                )}

                <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Accelerator Pitch Batch #14</p>
                      <p className="text-[10px] text-muted-foreground">Applications close September 1st · Limited to 10 ventures</p>
                    </div>
                  </div>
                  <Button size="sm" className="h-8 text-xs font-bold bg-primary hover:bg-primary-hover text-white rounded-lg">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pain vs Fix Section */}
      <PainVsFixSection
        sectionTag="Cross-Border Acceleration"
        sectionTitle="The Cross-Border Founder Dilemma"
        sectionSubtitle="Why generic tech incubators fail deep-tech & healthcare founders with lab IP"
        painTitle="Stuck in Regulatory & Cross-Border Cap Table Traps"
        painDesc="You have lab-validated IP, maybe a provisional patent, but you're stuck navigating complex FDA pathways, Delaware C-Corp flips, and Western VC expectations with no cross-border precedent to follow."
        painPoints={[
          { title: "Messy Cap Tables", desc: "Complex local holding structures rejected by Western seed VC syndicates." },
          { title: "Regulatory Deadlocks", desc: "Overpaying for trial sites and FDA consulting without pre-sub guidance." },
          { title: "Cold Syndicate Outreach", desc: "Spending 6+ months emailing VCs who don't understand cross-border biotech." },
        ]}
        fixTitle="Structured Path from Local Lab to Global Round"
        fixDesc="IGVP's Accelerator pairs you with seasoned founders who've already flipped entities and closed cross-border rounds, delivering regulatory playbooks and direct syndicate capital."
        fixPoints={[
          { title: "Delaware Flip Support", desc: "Complete legal restructuring, 80/20 IP transfer, and Delaware C-Corp setup." },
          { title: "Clinical Trial Matching", desc: "Save 60% on trial costs with pre-vetted CDSCO CROs and hospital partners." },
          { title: "Syndicate Speed Dating", desc: "Direct pitch slots with 200+ bio angels and $250K SAFE match funding." },
        ]}
        fixCtaText="Apply to Accelerator"
      />

      {/* 4-Step Accelerator Blueprint Stepper */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Execution Blueprint</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">From Lab IP to Closed Round in 90 Days</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Delaware Flip Support",
                desc: "Complete corporate restructuring guidance and Delaware C-Corp flip support for cross-border IP.",
                icon: Building2,
              },
              {
                step: "02",
                title: "Clinical Trial Matching",
                desc: "Cost-effective trial site matching with pre-vetted CRO and hospital partners across US & India.",
                icon: Activity,
              },
              {
                step: "03",
                title: "Syndicate Pitch Slots",
                desc: "Direct pitch slots with the IGVP Syndicate and exclusive access to Speed-Dating cap table mixers.",
                icon: TrendingUp,
              },
              {
                step: "04",
                title: "MVP & Financial Sprints",
                desc: "Dedicated support from upskilling cohort teams to build financial models and pitch decks.",
                icon: Sparkles,
              },
            ].map((s, idx) => (
              <div
                key={s.step}
                onClick={() => setActiveStep(idx + 1)}
                className={`cursor-pointer rounded-2xl border p-6 transition-all ${
                  activeStep === idx + 1
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-primary font-mono">{s.step}</span>
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Founder Testimonials */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Portfolio Success</p>
            <h2 className="text-3xl font-extrabold text-foreground">Backed Founders Speak</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
              <Quote className="h-8 w-8 text-primary opacity-40" />
              <p className="text-sm text-foreground/80 italic leading-relaxed">
                "We had lab IP at IIT and a provisional patent, but no US entity. IGVP handled our Delaware flip in 14 days and introduced us to syndicate angels who led our $1.4M Seed round."
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
                  DR
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Dr. Rohan Kulkarni, PhD</h4>
                  <p className="text-[11px] text-muted-foreground">Founder, CardioSense MedTech (Flipped to DE)</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
              <Quote className="h-8 w-8 text-primary opacity-40" />
              <p className="text-sm text-foreground/80 italic leading-relaxed">
                "Running clinical trials in India through IGVP's partner hospital network cut our trial costs by 60% while maintaining full FDA Pre-Sub compliance. Game changer."
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-10 w-10 rounded-full bg-success/20 text-success flex items-center justify-center font-bold text-xs">
                  MD
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Dr. Ananya Roy, MD</h4>
                  <p className="text-[11px] text-muted-foreground">Co-Founder, NeuroGnostics Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Gated Discord Architecture */}
      <DiscordPreviewSection
        personaTitle="Founders Track"
        categoryName="🚀 Founders Category"
        categoryIcon="🚀"
        verificationBadge="Founder Verification Required"
        verificationDetail="Checked against Accelerator application or provisional patent filing"
        channels={[
          { name: "founders-lounge", desc: "Peer discussion for active cohort founders" },
          { name: "healthtech-dealflow", desc: "Live venture sourcing and Syndicate introductions", isShared: true },
          { name: "regulatory-fda", desc: "FDA 510(k) & De Novo pre-sub strategy channel" },
          { name: "clinical-trials-india", desc: "CRO & hospital trial site matching desk" },
          { name: "delaware-flip-help", desc: "Cap table, 80/20 IP transfer & legal flip Q&A" },
          { name: "pitch-practice", desc: "Mock pitch reviews before Syndicate speed dating" },
        ]}
        sampleMessages={[
          {
            author: "Dr. Alex Chen, PhD",
            role: "🚀 Founder",
            roleColor: "bg-primary/10 text-primary border border-primary/20",
            avatar: "AC",
            time: "10:14 AM",
            content: "Just submitted our FDA 510(k) Pre-Sub package! Special thanks to the #regulatory-fda team for reviewing our predicate device comparison table.",
            tag: "FDA Pre-Sub Milestone",
          },
          {
            author: "Sarah Jenkins",
            role: "💰 Syndicate Lead",
            roleColor: "bg-success/10 text-success border border-success/20",
            avatar: "SJ",
            time: "10:28 AM",
            content: "Looking for 2 more healthtech ventures with validated in-vitro data for our upcoming Thursday Speed-Dating mixer. Drop your memos in #healthtech-dealflow!",
          },
        ]}
        primaryCtaText="Join Founders Channel on Discord"
      />

      <PersonaFooter />
    </div>
  );
}
