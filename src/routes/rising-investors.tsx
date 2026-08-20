import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PersonaHeader } from "@/components/persona-header";
import { PersonaFooter } from "@/components/persona-footer";
import { DiscordPreviewSection, DiscordIcon, WhatsAppIcon } from "@/components/discord-preview-section";
import { PainVsFixSection } from "@/components/pain-vs-fix-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  FileCheck,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { PersonaSuccessStories } from "@/components/persona-success-stories";

export const Route = createFileRoute("/rising-investors")({
  head: () => ({
    meta: [
      { title: "Rising Investors Track (Angel-in-Training) · IGVP Syndicate" },
      {
        name: "description",
        content:
          "Learn to write the term sheet, not just read it. Train as an angel investor on real deals, build investment memos, and earn co-investment rights.",
      },
    ],
  }),
  component: RisingInvestorsPersonaPage,
});

function RisingInvestorsPersonaPage() {
  const [activeScoreMetric, setActiveScoreMetric] = useState<"regulatory" | "clinical" | "cap">("regulatory");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <PersonaHeader currentTrack="Rising Investors" />

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
                <TrendingUp className="h-4 w-4" /> Rising Investors (Angel-in-Training)
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Learn to Write the Term Sheet,{" "}
                <span className="text-primary">Not Just Read It.</span>
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Train as an angel investor on real deals — build investment memos, sit in on due diligence, and earn co-investment rights before you write your first solo check.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                >
                  Apply to Angel Syndicate Track
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="flex-1 sm:w-44 min-h-12 sm:h-14 px-3 rounded-xl border-[#5865F2]/40 text-[#5865F2] hover:bg-[#5865F2]/10 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <a href="https://discord.gg/NxGP2M3aMt" target="_blank" rel="noopener noreferrer">
                      <DiscordIcon className="h-4 w-4 shrink-0" />
                      <span>Join Discord</span>
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="flex-1 sm:w-44 min-h-12 sm:h-14 px-3 rounded-xl border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <a href="https://chat.whatsapp.com/CtRWQX4dAWRL9xGz2g0i15" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
                      <span>Join WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                <div className="p-3 rounded-xl bg-card border border-border/60">
                  <p className="text-xl sm:text-2xl font-extrabold text-foreground">12+</p>
                  <p className="text-[11px] text-muted-foreground">Live DD Rotations</p>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border/60">
                  <p className="text-xl sm:text-2xl font-extrabold text-primary">$25K</p>
                  <p className="text-[11px] text-muted-foreground">Co-Invest Reserve</p>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border/60">
                  <p className="text-xl sm:text-2xl font-extrabold text-foreground">200+</p>
                  <p className="text-[11px] text-muted-foreground">LP Syndicate Network</p>
                </div>
              </div>
            </div>

            {/* Right Interactive UI Mockup: Angel Due Diligence Console */}
            <div className="lg:col-span-5 xl:col-span-6 relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground">Angel Due Diligence Inspector</h3>
                      <p className="text-xs text-muted-foreground">Deal #204 · AI Diagnostic Venture</p>
                    </div>
                  </div>
                  <Badge className="bg-warning/10 text-warning border-warning/20 font-bold text-[10px] px-2.5 py-1">
                    Diligence Active
                  </Badge>
                </div>

                {/* Scorecard Metric Switcher */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-muted-foreground pb-1">
                    <span>Risk Scorecard Vectors</span>
                    <span className="text-foreground">Overall: 88/100</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "regulatory", label: "FDA Pre-Sub" },
                      { id: "clinical", label: "Trial Cost" },
                      { id: "cap", label: "Cap Table" },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setActiveScoreMetric(btn.id as any)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border ${
                          activeScoreMetric === btn.id
                            ? "bg-primary text-white border-primary shadow-xs"
                            : "bg-surface-2 border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Active Vector Details */}
                  {activeScoreMetric === "regulatory" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span>FDA 510(k) Pre-Submission Clearance</span>
                        <span className="text-success font-mono">Passed</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        Predicate device identified with 94% predicate match score. Verified by IGVP FDA Council.
                      </p>
                    </div>
                  )}

                  {activeScoreMetric === "clinical" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Indian Clinical Trial Protocol Match</span>
                        <span className="text-primary font-mono">Verified</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        CDSCO compliant hospital site assigned at 40% lower cost than US trial equivalents.
                      </p>
                    </div>
                  )}

                  {activeScoreMetric === "cap" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Delaware C-Corp Cap Table Score</span>
                        <span className="text-warning font-mono">Clean SAFE</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        $1.2M cap structured via Delaware entity. Zero unvested co-founder overhang.
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Co-Investment Allocation Unlocked</p>
                      <p className="text-[10px] text-muted-foreground">$25K SAFE co-investment slot reserved for Trainee Analyst</p>
                    </div>
                  </div>
                  <Button size="sm" className="h-8 text-xs font-bold bg-primary hover:bg-primary-hover text-white rounded-lg">
                    Reserve Check
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pain vs Fix Section */}
      <PainVsFixSection
        sectionTag="Venture Capital Training"
        sectionTitle="Why Rising Investors Choose IGVP"
        sectionSubtitle="Transition from theoretical investing books to participating in live due diligence & syndicate deals"
        painTitle="Books & Courses Teach Frameworks, Not Real Judgment"
        painDesc="You want to break into venture investing, but no one lets you practice on real deals — courses teach frameworks, not judgment, and you have zero track record to join a syndicate."
        painPoints={[
          { title: "Zero Live Deal Access", desc: "Online venture courses only analyze 10-year-old case studies." },
          { title: "No Syndicate Allocation", desc: "No access to deal flow or check-writing reserves in early-stage rounds." },
          { title: "Lack of Mentorship", desc: "No direct feedback from active GP partners on due diligence memos." },
        ]}
        fixTitle="Paired Placement on Live Accelerator Deal Flow"
        fixDesc="IGVP's 'Angel-in-Training' Syndicate pairs you directly with Accelerator founders to build live investment memos and run real due diligence, turning theory into a portfolio."
        fixPoints={[
          { title: "12+ Live DD Rotations", desc: "Hands-on due diligence rotations on active healthtech seed applications." },
          { title: "Co-Investment Allocation", desc: "Guaranteed $25K-$50K SAFE allocation reserves on top syndicate deals." },
          { title: "Partner Memo Reviews", desc: "Direct feedback from IGVP Venture Partners on your investment memos." },
        ]}
        fixCtaText="Apply to Angel Track"
      />

      {/* Deliverables Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Program Deliverables</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">What You Get as a Rising Investor</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileCheck,
                title: "Live Due Diligence Access",
                desc: "Participate in real diligence calls, tech stack teardowns, and cap table audits for active deal flow.",
              },
              {
                icon: ShieldCheck,
                title: "Co-Investment Rights",
                desc: "Guaranteed allocation rights alongside IGVP Bio Fund in vetted cross-border rounds.",
              },
              {
                icon: TrendingUp,
                title: "Syndicate Deal Teardowns",
                desc: "Weekly live teardowns of investment memos, term sheet negotiations, and valuation models.",
              },
              {
                icon: Award,
                title: "Venture Partner Mentorship",
                desc: "Direct guidance from experienced GPs on writing investment memos and managing LP syndicates.",
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
        personaTitle="Rising Investors Track"
        categoryName="📈 Rising Investors Category"
        categoryIcon="📈"
        verificationBadge="Angel-in-Training Accreditation Verification"
        verificationDetail="Verified upon syndicate application or portfolio check"
        channels={[
          { name: "due-diligence-teardowns", desc: "Live memo reviews & technical due diligence reports" },
          { name: "deal-flow-sharing", desc: "Weekly curated seed & pre-seed cross-border deals", isShared: true },
          { name: "term-sheet-sandbox", desc: "SAFE vs Convertible note structuring & cap table modeling" },
          { name: "co-investor-lounge", desc: "Private channel for angel syndicate check reserves", isPrivate: true },
        ]}
        sampleMessages={[
          {
            author: "Liam Thorne (Angel Fellow)",
            role: "📈 Rising Investor",
            roleColor: "bg-primary/10 text-primary border border-primary/20",
            avatar: "LT",
            time: "04:10 PM",
            content: "Just submitted the DD memo for the Indian trial site of Cardio-Sensing #04. Regulatory risk score came back at 88/100!",
            tag: "DD Memo Submitted",
          },
          {
            author: "Samantha Wu",
            role: "💼 Angel LP",
            roleColor: "bg-warning/10 text-warning border border-warning/20",
            avatar: "SW",
            time: "04:25 PM",
            content: "Great teardown Liam! The CDSCO trial cost reduction makes this valuation very attractive. Participating in the syndicate check.",
          },
        ]}
        primaryCtaText="Join Investor Syndicate on Discord"
      />

      <PersonaSuccessStories
        badge="Angel & Syndicate Track Record"
        title="High-Yield Pre-Vetted Healthtech Deal Flow"
        subtitle="See how emerging angels and rising syndicate leads co-invest alongside institutional VC funds and achieve outsized portfolio returns."
        stories={[
          {
            quote: "As an emerging angel investor, IGVP deal flow is pre-diligenced with clinical validation. My syndicate conversion rate tripled in 6 months.",
            name: "Elena Kowalski",
            role: "Syndicate Lead · Emerald Health",
            metric: "12 INVESTMENTS",
          },
          {
            quote: "I wrote my first $25K healthtech check into an IGVP incubator graduate that went on to raise a $14M Series A backed by top tier VCs.",
            name: "Marcus Vance",
            role: "Angel Investor & Tech Executive",
            metric: "4.2X MOIC MARGIN",
          },
          {
            quote: "The weekly IC memo teardowns on Discord give me institutional-grade due diligence data that would normally require a full analyst team.",
            name: "Samantha Wu",
            role: "Managing Partner · NextGen Bio Angels",
            metric: "IC MEMO ACCELERATED",
          },
          {
            quote: "Co-investing with the IGVP Syndicate gave our angel network access to high-conviction FDA cleared medical device deals.",
            name: "David H. Park",
            role: "Principal · Apex Syndicate",
            metric: "$1.8M DEPLOYED",
          },
        ]}
      />

      <PersonaFooter />
    </div>
  );
}
