import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PersonaHeader } from "@/components/persona-header";
import { PersonaFooter } from "@/components/persona-footer";
import { DiscordPreviewSection } from "@/components/discord-preview-section";
import { PainVsFixSection } from "@/components/pain-vs-fix-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  Sparkles,
  Building2,
  Users,
  ArrowRight,
  ShieldCheck,
  FileText,
  Lock,
} from "lucide-react";

import { PersonaSuccessStories } from "@/components/persona-success-stories";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Institutional Investors Track · IGVP Syndicate" },
      {
        name: "description",
        content:
          "Pre-diligenced cross-border bio deal flow. Co-invest alongside IGVP Bio Fund with Delaware flip structure & clinical trial validation.",
      },
    ],
  }),
  component: InvestorsPersonaPage,
});

function InvestorsPersonaPage() {
  const [activeDealIndex, setActiveDealIndex] = useState(0);

  const deals = [
    { name: "NeuroPulse Diagnostics", stage: "Seed ($1.5M)", val: "$6M Post", desc: "AI-based EEG diagnostic platform. Indian clinical trial completed (60% savings)." },
    { name: "CardioSensing Therapeutics", stage: "Pre-Seed ($600K)", val: "$3.5M Cap", desc: "Wearable troponin sensor. Delaware C-Corp flip completed." },
    { name: "OncoTarget Bio", stage: "Seed ($2.0M)", val: "$8M Post", desc: "Targeted peptide delivery. Provisional patents licensed via C-CAMP." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <PersonaHeader currentTrack="Investors" />

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
        <div className="absolute top-0 right-1/3 h-[420px] w-[750px] rounded-full bg-primary/20 blur-[120px] pointer-events-none z-0" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-left">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2">
                <DollarSign className="h-4 w-4" /> Institutional Investors Track
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Pre-Diligenced Cross-Border{" "}
                <span className="text-primary">Bio Deal Flow.</span>
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Access curated seed & pre-seed healthtech ventures with Delaware flip structures, CDSCO clinical validation, and pre-negotiated co-investment terms.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                >
                  Request Accredited Data Room Access
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl border-border bg-card hover:bg-accent text-sm sm:text-base font-bold transition-all"
                >
                  View Syndicate Term Sheet
                </Button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50 text-xs font-bold text-foreground/80">
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Accredited LPs Only</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Pre-Diligenced Memos</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Delaware SAFE Co-Investment</span>
              </div>
            </div>

            {/* Right Interactive UI Mockup: Accredited Syndicate Deal Room */}
            <div className="lg:col-span-5 xl:col-span-6 relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground">Accredited Syndicate Deal Room</h3>
                      <p className="text-xs text-muted-foreground">IGVP Bio Fund · Q3 Pipeline</p>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-bold text-[10px] px-2.5 py-1">
                    Verified Deal Room
                  </Badge>
                </div>

                {/* Deal Shortlist Switcher */}
                <div className="space-y-2.5">
                  {deals.map((deal, idx) => {
                    const isSelected = activeDealIndex === idx;
                    return (
                      <div
                        key={deal.name}
                        onClick={() => setActiveDealIndex(idx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-xs"
                            : "border-border bg-surface-2/60 hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-foreground">{deal.name}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">{deal.stage}</span>
                            <span className="text-[10px] font-mono text-muted-foreground">{deal.val}</span>
                          </div>
                        </div>
                        {isSelected && (
                          <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                            {deal.desc}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Full Data Room Access</p>
                      <p className="text-[10px] text-muted-foreground">Cap table, clinical protocols, & memo audit included</p>
                    </div>
                  </div>
                  <Button size="sm" className="h-8 text-xs font-bold bg-primary hover:bg-primary-hover text-white rounded-lg">
                    Unlock Room
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pain vs Fix Section */}
      <PainVsFixSection
        sectionTag="Institutional Sourcing Engine"
        sectionTitle="Why Institutional Investors Choose IGVP"
        sectionSubtitle="Access pre-diligenced cross-border deal flow with structured terms and validated trial metrics"
        painTitle="Fragmented Cross-Border Sourcing & Costly Solo Diligence"
        painDesc="You want exposure to Global-US cross-border biotech deal flow, but sourcing is fragmented, diligence is expensive to run solo, and most emerging market deal flow arrives late and unvetted."
        painPoints={[
          { title: "High Diligence Cost", desc: "Spending $20k+ on legal and FDA pre-sub reviews for unvalidated seed deals." },
          { title: "Messy Cap Table Risk", desc: "Non-standard local company structures that fail Western VC investment committees." },
          { title: "Late Sourcing Entry", desc: "Receiving deal access only after primary seed allocation is exhausted." },
        ]}
        fixTitle="Shortlisted, Memo-Backed Ventures with Pre-Structured Terms"
        fixDesc="IGVP Accelerator and Syndicate run structured sourcing and diligence upstream — you get access to shortlisted, memo-backed ventures with syndicate co-investment terms already pre-structured."
        fixPoints={[
          { title: "Delaware C-Corp Standard", desc: "100% clean cap tables flipped into US Delaware holding structures." },
          { title: "Pre-Diligenced Memos", desc: "Comprehensive investment memos built by IGVP Venture Partners & Clinicians." },
          { title: "Guaranteed Syndicate Allocation", desc: "First-look co-investment rights on every Accelerator cohort graduate." },
        ]}
        fixCtaText="Request Data Room Access"
      />

      {/* Deliverables Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Syndicate Benefits</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">What You Get as an Institutional Investor</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Syndicate Co-Investment",
                desc: "Syndicate co-investment rights alongside vetted Accelerator ventures, with memos pre-built by trained analysts.",
              },
              {
                icon: Sparkles,
                title: "First-Look Sprint Access",
                desc: "First-look access to the top 3 ventures fast-tracked out of each 72-Hour Bio-Design Sprint.",
              },
              {
                icon: Building2,
                title: "Direct Pipeline Visibility",
                desc: "Direct pipeline visibility into India-based biotech/medtech deal flow alongside US chapters.",
              },
              {
                icon: Users,
                title: "Founder Speed Dating Mixers",
                desc: "Invitations to Founder & Investor Mixers for direct founder access ahead of formal rounds.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/95 dark:bg-white text-slate-900 border border-slate-200/80 hover:border-[#049fd9] rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(4,159,217,0.25)] hover:-translate-y-2 transition-all duration-300 ease-out relative overflow-hidden ring-1 ring-black/5 hover:ring-2 hover:ring-[#049fd9]/40"
              >
                {/* Top Ambient Blue Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#049fd9] opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Header with Badge & Floating Blue Icon */}
                <div className="flex items-center justify-between mb-5 pt-1">
                  <span className="text-xs font-extrabold text-[#049fd9] font-mono tracking-widest bg-sky-50 border border-sky-200/80 px-2.5 py-0.5 rounded-full">
                    0{i + 1}
                  </span>
                  <div className="text-[#049fd9] group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <item.icon className="h-8 w-8 stroke-[1.75]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2.5 group-hover:text-[#0288c7] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Gated Discord Architecture */}
      <DiscordPreviewSection
        personaTitle="Institutional Investors Track"
        categoryName="💼 Institutional Investors Category"
        categoryIcon="💼"
        verificationBadge="Accredited Investor Check"
        verificationDetail="Verified for accredited angel LPs, family offices & VC partners"
        channels={[
          { name: "accredited-dealroom", desc: "Shortlisted seed ventures with live data room links", isPrivate: true },
          { name: "term-sheet-reviews", desc: "Pre-negotiated SAFE caps & valuation models" },
          { name: "syndicate-allocations", desc: "Reserving co-investment checks alongside IGVP Bio Fund", isShared: true },
          { name: "lp-investor-lounge", desc: "Private channel for GP & LP co-investment discussions", isPrivate: true },
        ]}
        sampleMessages={[
          {
            author: "Harrison Vance (Managing Partner, IGVP Bio)",
            role: "💼 Fund GP",
            roleColor: "bg-primary/10 text-primary border border-primary/20",
            avatar: "HV",
            time: "10:15 AM",
            content: "We have opened the $500K syndicate allocation for NeuroPulse Diagnostics. Delaware flip completed, CDSCO trial verified at 60% savings. Data room is live in #accredited-dealroom.",
            tag: "Syndicate Open",
          },
          {
            author: "Dr. Rachel Croft",
            role: "💼 Accredited LP",
            roleColor: "bg-success/10 text-success border border-success/20",
            avatar: "RC",
            time: "10:30 AM",
            content: "Reviewed the memo — clinical trial cost efficiency is outstanding. Reserving a $50K allocation for our family office.",
          },
        ]}
        primaryCtaText="Join Investor Deal Room on Discord"
      />

      <PersonaSuccessStories
        badge="Institutional LP & VC Track Record"
        title="Deploying Capital into Pre-Diligenced Healthtech"
        subtitle="See how institutional VCs, family offices, and LP partners source top-tier founders and deploy capital via IGVP."
        stories={[
          {
            quote: "The platform is our single source of truth for LP deal-room communications. It transformed how we source, diligence, and deploy Fund II capital.",
            name: "David Chen",
            role: "Managing Director · Nexus Capital",
            metric: "FUND II CLOSED",
          },
          {
            quote: "IGVP deal flow comes pre-backed with clinical PIs and FDA regulatory roadmaps. We co-invested in 4 Series A healthtech rounds this year.",
            name: "Victoria Sterling",
            role: "General Partner · BioHealth VC",
            metric: "4 CO-INVESTMENTS",
          },
          {
            quote: "Reserving syndicate allocations through IGVP gave our family office direct access to Series A healthtech deals previously locked in Tier-1 VCs.",
            name: "Richard Cross",
            role: "Chief Investment Officer · Cross Family Office",
            metric: "$5M CAPITAL ALLOCATED",
          },
          {
            quote: "Demo Day on IGVP connects us directly with pre-screened bio-design founders. Our due diligence timeline was slashed by 60%.",
            name: "Sophia Martinez",
            role: "Partner · Frontier Health Fund",
            metric: "60% FASTER DILIGENCE",
          },
        ]}
      />

      <PersonaFooter />
    </div>
  );
}
