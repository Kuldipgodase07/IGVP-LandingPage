import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PersonaHeader } from "@/components/persona-header";
import { PersonaFooter } from "@/components/persona-footer";
import { PersonaModal } from "@/components/persona-modal";
import { DiscordPreviewSection } from "@/components/discord-preview-section";
import { PainVsFixSection } from "@/components/pain-vs-fix-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Search,
  CheckCircle2,
  Building,
  Zap,
  ArrowRight,
  Shield,
  Briefcase,
  FileCheck,
} from "lucide-react";

import { PersonaSuccessStories } from "@/components/persona-success-stories";

export const Route = createFileRoute("/service-providers")({
  head: () => ({
    meta: [
      { title: "Service Providers Track · IGVP Institute" },
      {
        name: "description",
        content:
          "Law firms, FDA consultants, CDMOs, CROs, & IP attorneys. Get listed as a vetted vendor in front of pre-funded bio founders.",
      },
    ],
  }),
  component: ServiceProvidersPersonaPage,
});

function ServiceProvidersPersonaPage() {
  const [activeCategory, setActiveCategory] = useState<"legal" | "regulatory" | "cdmo">("legal");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <PersonaHeader currentTrack="Service Providers" />
      <PersonaModal open={modalOpen} onOpenChange={setModalOpen} track="provider" />

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
                <Wrench className="h-4 w-4" /> Service Providers Track
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Become the Vetted Vendor for{" "}
                <span className="text-primary">Pre-Funded Bio Founders.</span>
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Law firms, FDA consultants, CDMOs, CROs, and IP attorneys: get featured directly inside the IGVP Accelerator founder workflow when critical vendor decisions are made.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Button
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Apply for Vetted Vendor Listing
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl border-border bg-card hover:bg-accent text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  See Founder Directory View
                </Button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50 text-xs font-bold text-foreground/80">
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Vetted Partner Seal</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Direct Founder Inquiries</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Cross-Border Deal Pipeline</span>
              </div>
            </div>

            {/* Right Interactive UI Mockup: Vetted Vendor Directory Console */}
            <div className="lg:col-span-5 xl:col-span-6 relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                      <Search className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground">Vetted Vendor Directory Console</h3>
                      <p className="text-xs text-muted-foreground">Internal IGVP OS Founder View</p>
                    </div>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20 font-bold text-[10px] px-2.5 py-1">
                    Verified Directory
                  </Badge>
                </div>

                {/* Category Switcher */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                    <span>Directory Service Categories:</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "legal", label: "Legal & Flips" },
                      { id: "regulatory", label: "FDA Pre-Sub" },
                      { id: "cdmo", label: "CDMO & Labs" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id as any)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${
                          activeCategory === cat.id
                            ? "bg-primary text-white border-primary shadow-xs"
                            : "bg-surface-2 border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {activeCategory === "legal" && (
                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground">Gunderson Dettmer / US Desk</span>
                        <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">Featured Vendor</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        Cross-border Delaware C-Corp flip package for IGVP cohort founders.
                      </p>
                    </div>
                  )}

                  {activeCategory === "regulatory" && (
                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground">BioReg Global Consultants</span>
                        <span className="text-[10px] font-bold bg-success/10 text-success px-2 py-0.5 rounded">FDA Verified</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        Specializing in 510(k) pre-submissions & Breakthrough Device designation.
                      </p>
                    </div>
                  )}

                  {activeCategory === "cdmo" && (
                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground">Syngene / Biological CDMO</span>
                        <span className="text-[10px] font-bold bg-warning/10 text-warning px-2 py-0.5 rounded">GMP Certified</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        Pilot scale-up & peptide synthesis for early-stage Accelerator ventures.
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Inbound Founder Requests</p>
                      <p className="text-[10px] text-muted-foreground">18 active requests queued for Q4 Accelerator ventures</p>
                    </div>
                  </div>
                  <Button size="sm" className="h-8 text-xs font-bold bg-primary hover:bg-primary-hover text-white rounded-lg">
                    View Inquiries
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pain vs Fix Section */}
      <PainVsFixSection
        sectionTag="Vendor Network & Business Development"
        sectionTitle="Why Service Providers Choose IGVP"
        sectionSubtitle="Replace cold outreach with verified placement inside active founder workflows"
        painTitle="Slow, Relationship-Dependent Sales Cycles"
        painDesc="You have the regulatory, manufacturing, or legal expertise founders desperately need, but sales cycles into biotech/medtech startups are slow, relationship-dependent, and hard to break into as an outside vendor."
        painPoints={[
          { title: "High Customer Acquisition Cost", desc: "Spending months attending conferences with low conversion on early founders." },
          { title: "Unfunded Prospect Risk", desc: "Pitching early-stage startups that lack capital to pay retainer fees." },
          { title: "Unstructured Contracting", desc: "Repeatedly educating founders on basic Delaware flip and FDA pre-sub requirements." },
        ]}
        fixTitle="Recommended at the Exact Moment of Founder Need"
        fixDesc="IGVP curates a vetted vendor directory surfaced directly inside founder workflows — Delaware flip prep, FDA clearance, manufacturing scale-up — so you're the recommended provider when decisions get made."
        fixPoints={[
          { title: "Pre-Funded Founder Pipeline", desc: "Ventures with dedicated Accelerator funding allocated for legal, regulatory, & trial costs." },
          { title: "Workflow Embedded Listing", desc: "Featured placement in #recommended-vendors and Delaware flip toolkits." },
          { title: "Warm Inbound Inquiries", desc: "Direct inbound requests from founders needing immediate scope execution." },
        ]}
        fixCtaText="Apply for Vetted Listing"
      />

      {/* Deliverables Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Vendor Placement Benefits</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">What You Get as a Service Provider</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: "Vetted Vendor Directory Listing",
                desc: "Permanent placement in the internal IGVP OS vendor portal surfaced to all active cohort founders.",
              },
              {
                icon: Building,
                title: "Pre-Funded Founder Pipeline",
                desc: "Connect with ventures that have already secured seed funding with dedicated budget for professional services.",
              },
              {
                icon: Shield,
                title: "IGVP Recommended Seal",
                desc: "Display the IGVP Vetted Partner seal on your site and marketing materials for cross-border credibility.",
              },
              {
                icon: Briefcase,
                title: "Direct Discord Channel Access",
                desc: "Listing in #recommended-vendors and direct access to #ask-a-lawyer or #ask-fda-expert channels.",
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
        personaTitle="Service Providers Track"
        categoryName="💼 Service Providers Category"
        categoryIcon="💼"
        verificationBadge="Vetted Vendor Audit Verification"
        verificationDetail="Verified for vetted law firms, CROs, CDMOs & FDA consultants"
        channels={[
          { name: "vendor-announcements", desc: "Broadcast new service packages & partner discounts" },
          { name: "recommended-vendors", desc: "Featured directory of vetted partners for founders", isShared: true },
          { name: "ask-a-lawyer", desc: "Q&A desk for Delaware flips & cross-border IP transfer" },
          { name: "fda-regulatory-desk", desc: "Q&A desk for 510(k), PMA & pre-sub clearance strategy" },
        ]}
        sampleMessages={[
          {
            author: "Elena Rostova (FDA Regulatory Partner)",
            role: "💼 Vetted Provider",
            roleColor: "bg-primary/10 text-primary border border-primary/20",
            avatar: "ER",
            time: "01:20 PM",
            content: "We just published an updated 2026 FDA Pre-Sub Template for AI medical devices in #fda-regulatory-desk. Free for all IGVP cohort founders!",
            tag: "Template Released",
          },
          {
            author: "David Chen (Founder, MedSense)",
            role: "🚀 Accelerator Founder",
            roleColor: "bg-success/10 text-success border border-success/20",
            avatar: "DC",
            time: "01:35 PM",
            content: "Thanks Elena! Downloading this now for our Q3 pre-sub filing.",
          },
        ]}
        primaryCtaText="Join Vendor Network on Discord"
      />

      <PersonaSuccessStories
        badge="Vendor Partner Success"
        title="High-Intent Healthtech Client Pipeline"
        subtitle="See how specialized law firms, CROs, and regulatory consultancies connect directly with funded IGVP founders."
        stories={[
          {
            quote: "As an IP law firm, joining IGVP's recommended vendor portal connected us with 15 funded healthtech startups needing Delaware C-Corp flips and patent filings.",
            name: "Elena Vance, Esq.",
            role: "Partner · HealthTech Legal Group",
            metric: "15 NEW CLIENTS",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          },
          {
            quote: "We published our FDA Pre-Sub guidance in the IGVP vendor channel and signed 4 regulatory advisory retainers in our first month.",
            name: "Dr. Marcus Thorne",
            role: "Principal · MedReg Solutions",
            metric: "4 RETAINERS SIGNED",
            avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
          },
          {
            quote: "IGVP founders are pre-funded and ready to execute. Our CRO converted 80% of diligence leads into active clinical trial contracts.",
            name: "Sarah Jenkins",
            role: "VP Business Dev · BioTrial CRO",
            metric: "80% CONVERSION RATE",
            avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80",
          },
          {
            quote: "The internal IGVP vendor directory gave our software agency permanent placement in front of active cohort founders building AI healthtech MVPs.",
            name: "Michael Chang",
            role: "Founder · MedSoft Studio",
            metric: "PERMANENT PLACEMENT",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          },
        ]}
      />

      <PersonaFooter />
    </div>
  );
}
