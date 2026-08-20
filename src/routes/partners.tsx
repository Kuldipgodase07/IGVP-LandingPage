import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PersonaHeader } from "@/components/persona-header";
import { PersonaFooter } from "@/components/persona-footer";
import { DiscordPreviewSection } from "@/components/discord-preview-section";
import { PainVsFixSection } from "@/components/pain-vs-fix-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Stethoscope,
  Share2,
  FileCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Institutional Partners Track · IGVP Institute" },
      {
        name: "description",
        content:
          "Hospitals, CROs, research labs, & tech transfer offices. Monetize trial capacity and license IP into pre-funded Accelerator ventures.",
      },
    ],
  }),
  component: PartnersPersonaPage,
});

function PartnersPersonaPage() {
  const [activeRegion, setActiveRegion] = useState<"asia" | "us">("asia");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <PersonaHeader currentTrack="Institutional Partners" />

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
        <div className="absolute top-0 left-1/3 h-[420px] w-[750px] rounded-full bg-primary/20 blur-[120px] pointer-events-none z-0" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-left">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2">
                <Building2 className="h-4 w-4" /> Institutional Partners Track
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Fill Clinical Trial Capacity.{" "}
                <span className="text-primary">Monetize Research IP.</span>
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Hospitals, CROs, research labs, and tech transfer offices: join the IGVP OS to run trials for venture-backed startups and commercialize lab IP globally.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                >
                  Register Institutional Site
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl border-border bg-card hover:bg-accent text-sm sm:text-base font-bold transition-all"
                >
                  View Tech Transfer Desk
                </Button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50 text-xs font-bold text-foreground/80">
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">CDSCO Clinical Trial Compliance</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">FDA Pre-Sub Support Desk</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">80/20 Tech Transfer Framework</span>
              </div>
            </div>

            {/* Right Interactive UI Mockup: Clinical Site & IP Matcher */}
            <div className="lg:col-span-5 xl:col-span-6 relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                      <Stethoscope className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground">Clinical Trial Site & IP Matcher</h3>
                      <p className="text-xs text-muted-foreground">Cross-Border Desk · Live Sourcing</p>
                    </div>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20 font-bold text-[10px] px-2.5 py-1">
                    ● Verified Sites
                  </Badge>
                </div>

                {/* Region Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                    <span>Select Partner Node Region:</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setActiveRegion("asia")}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          activeRegion === "asia"
                            ? "bg-primary text-white"
                            : "bg-surface-2 border border-border text-muted-foreground"
                        }`}
                      >
                        India / Asia Sites
                      </button>
                      <button
                        onClick={() => setActiveRegion("us")}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          activeRegion === "us"
                            ? "bg-primary text-white"
                            : "bg-surface-2 border border-border text-muted-foreground"
                        }`}
                      >
                        US / EU Sites
                      </button>
                    </div>
                  </div>

                  {activeRegion === "asia" ? (
                    <>
                      <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Stethoscope className="h-5 w-5 text-primary shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-foreground">AIIMS Cardiology Trial Wing</p>
                            <p className="text-[11px] text-muted-foreground">Matched with 3 Delaware C-Corp medtech ventures</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 rounded">60% Cost Reduction</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Share2 className="h-5 w-5 text-success shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-foreground">C-CAMP Licensing Desk</p>
                            <p className="text-[11px] text-muted-foreground">2 provisional patents under licensing review</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">Active Review</span>
                      </div>
                    </>
                  ) : (
                    <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-primary shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-foreground">Boston Bio-Hub Pre-Sub Desk</p>
                          <p className="text-[11px] text-muted-foreground">Co-development research agreements signed</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 rounded">FDA 510(k) Ready</span>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Co-Development Deal Pipeline</p>
                      <p className="text-[10px] text-muted-foreground">First-look access to top Accelerator ventures</p>
                    </div>
                  </div>
                  <Button size="sm" className="h-8 text-xs font-bold bg-primary hover:bg-primary-hover text-white rounded-lg">
                    Request Access
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pain vs Fix Section */}
      <PainVsFixSection
        sectionTag="Institutional Collaboration"
        sectionTitle="Why Institutional Partners Choose IGVP"
        sectionSubtitle="Monetize research infrastructure, clinical trial capacity, and university tech transfer IP"
        painTitle="Underutilized Trial Capacity & Idle Research IP"
        painDesc="Your institution has trial capacity, research infrastructure, or licensable IP sitting underutilized — but no structured channel to reach credible, investment-ready ventures on the other side of the border."
        painPoints={[
          { title: "Idle Clinical Capacity", desc: "Hospital trial wings operating under 50% capacity due to high Western sponsor costs." },
          { title: "Dormant University Patents", desc: "High-potential academic IP gathering dust without commercialization channels." },
          { title: "Friction in Cross-Border Contracting", desc: "Bureaucratic delay in executing CDSCO/FDA multi-center research agreements." },
        ]}
        fixTitle="Structured Cross-Border Clinical & Licensing Desk"
        fixDesc="IGVP integrates your institution directly into our Accelerator deal flow — filling trial capacity with pre-funded ventures and licensing institutional IP under standard 80/20 commercial terms."
        fixPoints={[
          { title: "Pre-Funded Sponsor Pipelines", desc: "Direct assignment of Delaware C-Corp ventures with pre-allocated trial budgets." },
          { title: "Commercial Tech Transfer", desc: "Standardized 80/20 IP licensing frameworks for university research labs." },
          { title: "Standardized CDSCO/FDA Desks", desc: "Fast-track legal and ethical board clearance with IGVP template agreements." },
        ]}
        fixCtaText="Partner With IGVP"
      />

      {/* Deliverables Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Program Deliverables</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">What You Get as an Institutional Partner</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Stethoscope,
                title: "Trial Capacity Sourcing",
                desc: "Direct placement of venture-backed startups into your clinical trial wards and patient registries.",
              },
              {
                icon: Share2,
                title: "IP Licensing Desk",
                desc: "Listing lab patents in front of IGVP Accelerator founders and LP syndicates seeking commercial IP.",
              },
              {
                icon: FileCheck,
                title: "Regulatory Fast-Track",
                desc: "Standardized CDSCO & FDA IRB/Ethics board clearance templates to slash onboarding delays.",
              },
              {
                icon: Building2,
                title: "Co-Development Grants",
                desc: "First-look access to joint research & grant funding programs sponsored by IGVP Bio Fund.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-0.5">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 border border-primary/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Gated Discord Architecture */}
      <DiscordPreviewSection
        personaTitle="Institutional Partners Track"
        categoryName="🏥 Institutional Partners Category"
        categoryIcon="🏥"
        verificationBadge="Institutional Accreditation Check"
        verificationDetail="Verified for verified CROs, hospital leads & Tech Transfer officers"
        channels={[
          { name: "clinical-trial-matching", desc: "Posting trial ward capacity & CRO site availability" },
          { name: "ip-licensing-board", desc: "List lab patents & spinout licensing terms" },
          { name: "regulatory-clearance-fda-cdsco", desc: "Cross-border IRB & CDSCO/FDA clearance desk", isShared: true },
          { name: "partner-direct-lounge", desc: "Direct coordination channel for institutional leads", isPrivate: true },
        ]}
        sampleMessages={[
          {
            author: "Dr. Ananya Roy (AIIMS Clinical Desk)",
            role: "🏥 Institutional Lead",
            roleColor: "bg-primary/10 text-primary border border-primary/20",
            avatar: "AR",
            time: "03:40 PM",
            content: "We have opened 20 cardiology trial slots for Q3 at the New Delhi campus. Looking for pre-funded Delaware C-Corp medtech ventures.",
            tag: "Trial Slots Open",
          },
          {
            author: "Marcus Vance (Founder, BioPulse)",
            role: "🚀 Accelerator Founder",
            roleColor: "bg-warning/10 text-warning border border-warning/20",
            avatar: "MV",
            time: "03:55 PM",
            content: "Dr. Roy! We just closed our $1.5M seed round and have our FDA pre-sub approved. Sending our trial protocol to your desk now.",
          },
        ]}
        primaryCtaText="Join Institutional Desk on Discord"
      />

      <PersonaFooter />
    </div>
  );
}
