import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PersonaHeader } from "@/components/persona-header";
import { PersonaFooter } from "@/components/persona-footer";
import { PersonaModal } from "@/components/persona-modal";
import { DiscordPreviewSection, DiscordIcon, WhatsAppIcon } from "@/components/discord-preview-section";
import { PainVsFixSection } from "@/components/pain-vs-fix-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Zap,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  FileText,
} from "lucide-react";

import { PersonaSuccessStories } from "@/components/persona-success-stories";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "STEM Students Track · IGVP Institute" },
      {
        name: "description",
        content:
          "Don't wait for a PhD to enter the deal room. Join 72-Hour Bio-Design Sprints, build live investment memos, and get discovered by accelerator teams.",
      },
    ],
  }),
  component: StudentsPersonaPage,
});

function StudentsPersonaPage() {
  const [activeSprintFilter, setActiveSprintFilter] = useState<"all" | "clinician" | "ai">("all");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <PersonaHeader currentTrack="Students" />
      <PersonaModal open={modalOpen} onOpenChange={setModalOpen} track="student" />

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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[750px] rounded-full bg-primary/20 blur-[120px] pointer-events-none z-0" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-left">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> STEM Students Track
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Don't Wait for a PhD to Enter the{" "}
                <span className="text-primary">Deal Room.</span>
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Get hands-on with real venture mechanics — build investment memos, join founder sprints, and get discovered by accelerator teams before you graduate.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Button
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                >
                  Register for 72-Hour Venture Sprint
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

              {/* Social Proof Badges */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  Built with student chapters & innovation cells at
                </p>
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold text-foreground/80">
                  <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Johns Hopkins BME</span>
                  <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Boston University</span>
                  <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">UCSF Bio-E</span>
                  <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">IIT Biotech</span>
                  <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">AIIMS Cell</span>
                </div>
              </div>
            </div>

            {/* Right Interactive UI Mockup: Bio-Design Sprint & Memo Sandbox */}
            <div className="lg:col-span-5 xl:col-span-6 relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground">72-Hour Bio-Design Sprint Matcher</h3>
                      <p className="text-xs text-muted-foreground">Sprint #08 · Live Sourcing & Memo Board</p>
                    </div>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20 font-bold text-[10px] px-2.5 py-1">
                    ● Active Registration
                  </Badge>
                </div>

                {/* Interactive Filter Pills */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-muted-foreground">Filter Teams:</span>
                  {[
                    { id: "all", label: "All Teams" },
                    { id: "clinician", label: "Clinician-Led" },
                    { id: "ai", label: "AI Diagnostics" },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setActiveSprintFilter(f.id as any)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        activeSprintFilter === f.id
                          ? "bg-primary text-white"
                          : "bg-surface-2 border border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Team Sourcing Cards */}
                <div className="space-y-3">
                  {(activeSprintFilter === "all" || activeSprintFilter === "clinician") && (
                    <div className="p-4 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold border border-primary/30">
                          MD
                        </div>
                        <div>
                          <p className="text-xs font-bold text-foreground">Cardio-Sensing Team #04</p>
                          <p className="text-[11px] text-muted-foreground">Cardiologist + BME Student + AI Lead</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20">
                        1 Analyst Seat Open
                      </span>
                    </div>
                  )}

                  {(activeSprintFilter === "all" || activeSprintFilter === "ai") && (
                    <div className="p-4 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-warning/20 text-warning flex items-center justify-center text-xs font-bold border border-warning/30">
                          AI
                        </div>
                        <div>
                          <p className="text-xs font-bold text-foreground">Neuro-Tech Diagnostics</p>
                          <p className="text-[11px] text-muted-foreground">Lab validated · Seeking Student Memo Lead</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-success/10 text-success px-2.5 py-1 rounded-full border border-success/20">
                        Fast-Tracked
                      </span>
                    </div>
                  )}

                  <div className="p-3.5 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-foreground">Live Investment Memo Sandbox</p>
                        <p className="text-[11px] text-muted-foreground">32 student memos drafted & reviewed by LPs</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">Active</span>
                  </div>
                </div>

                {/* Live Activity Metric */}
                <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Direct Accelerator Discovery</p>
                      <p className="text-[10px] text-muted-foreground">Top 3 sprint performers bypass cold applications</p>
                    </div>
                  </div>
                  <Button size="sm" className="h-8 text-xs font-bold bg-primary hover:bg-primary-hover text-white rounded-lg">
                    Join Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pain vs Fix Section */}
      <PainVsFixSection
        sectionTag="STEM Venture Acceleration"
        sectionTitle="Why STEM Students Choose IGVP"
        sectionSubtitle="Bridging the gap between academic theory and real-world venture capital deal flow"
        painTitle="Coursework Teaches Theory, Not Venture Mechanics"
        painDesc="Your university teaches bio-engineering and clinical fundamentals, while connected peers are already building startups and raising rounds. You have the technical chops, but zero track record or deal room network to prove it."
        painPoints={[
          { title: "No Verified Track Record", desc: "No portfolio of investment memos or due diligence work to show venture teams." },
          { title: "Network Disadvantage", desc: "Stuck in campus labs with zero access to MDs, LPs, or Accelerator partners." },
          { title: "Academic Silos", desc: "Coursework ends at exam papers rather than shipping prototypes to investors." },
        ]}
        fixTitle="Inside Live Deal Flow From Week One"
        fixDesc="IGVP puts you directly inside active healthtech deal flow — sourcing real ventures, drafting investment memos alongside clinicians, and building a portfolio that accelerator teams and venture partners actively review."
        fixPoints={[
          { title: "72-Hour Sprint Entry", desc: "Pair up with clinicians & bio-engineers to ship live prototypes in a weekend." },
          { title: "Direct VC Discovery", desc: "Top sprint performers receive fast-tracked interview slots with Accelerator teams." },
          { title: "Credentialed Portfolio", desc: "Graduate with real investment memos and due diligence credits on your resume." },
        ]}
        fixCtaText="Register for Venture Sprint"
      />

      {/* Program Deliverables */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Program Deliverables</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">What You Get in the STEM Student Track</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "72-Hour Bio-Design Sprint",
                desc: "Free entry to group up with clinicians & bio-engineers, shipping a validated prototype over one weekend.",
              },
              {
                icon: Users,
                title: "Campus Ambassador Track",
                desc: "Priority access to #co-founder-matching and #healthtech-dealflow channels on Discord.",
              },
              {
                icon: GraduationCap,
                title: "Certificate Pathway",
                desc: "Direct credit into the $2k Bio-Venture Fellowship at exclusive student pricing.",
              },
              {
                icon: Award,
                title: "Accelerator Fast-Track",
                desc: "Top sprint performers receive direct interview slots with IGVP Accelerator venture partners.",
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
        personaTitle="STEM Students Track"
        categoryName="🎓 STEM Students Category"
        categoryIcon="🎓"
        verificationBadge="Low-Friction Student Verification"
        verificationDetail="Optional .edu email check or student chapter referral"
        channels={[
          { name: "students-start-here", desc: "Orientation & sprint onboarding desk" },
          { name: "sprint-challenges", desc: "Live 72-Hour Bio-Design Sprint problem statements" },
          { name: "resource-library", desc: "Investment memo templates & due diligence frameworks" },
          { name: "campus-ambassadors", desc: "University chapter leads & event coordination" },
          { name: "co-founder-matching", desc: "Shared channel pairing students with clinicians & PhDs", isShared: true },
        ]}
        sampleMessages={[
          {
            author: "Maya Lin (BME Senior, JHU)",
            role: "🎓 Student Ambassador",
            roleColor: "bg-primary/10 text-primary border border-primary/20",
            avatar: "ML",
            time: "11:05 AM",
            content: "Looking for an MD co-lead or bio-engineer for the upcoming 72-Hour Sprint! We have an AI cardiac imaging concept pre-validated.",
            tag: "Sprint Team Match",
          },
          {
            author: "Dr. Vikram Seth",
            role: "📈 Upskilling Clinician",
            roleColor: "bg-success/10 text-success border border-success/20",
            avatar: "VS",
            time: "11:20 AM",
            content: "Hey Maya! I'm a cardiologist in the Upskilling cohort. Happy to join your team as clinical lead for the sprint.",
          },
        ]}
        primaryCtaText="Join Student Community on Discord"
      />

      <PersonaSuccessStories
        badge="Student Breakthroughs"
        title="From Campus Research to Funded Venture"
        subtitle="See how student fellows and researchers turned academic ideas into venture-backed healthtech startups."
        stories={[
          {
            quote: "Participating in the IGVP Bio-Design Sprint gave us direct access to Johns Hopkins clinical PIs. We built our AI triage MVP and filed a provisional patent in 8 weeks.",
            name: "Ananya Sharma",
            role: "M.S. Bioengineering · Stanford",
            metric: "PROVISIONAL PATENT",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          },
          {
            quote: "As a student fellow, IGVP connected me with a VC mentor who helped us turn our university research project into a backed pre-seed startup.",
            name: "Liam Vance",
            role: "Ph.D. Candidate · MIT BioLab",
            metric: "$500K PRE-SEED",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          },
          {
            quote: "The Discord workspace matched me with a cardiologist co-founder in 48 hours. IGVP provided the exact runway and institutional backing we needed.",
            name: "Maya Lin",
            role: "B.S. Computer Science · UC Berkeley",
            metric: "CO-FOUNDER MATCHED",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          },
          {
            quote: "Winning the IGVP Student Innovation Award opened doors to 12 venture partners and guaranteed lab space for our clinical trial.",
            name: "Carlos Rodriguez",
            role: "Bio-Design Fellow · Harvard Medical",
            metric: "DEMO DAY WINNER",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          },
        ]}
      />

      <PersonaFooter />
    </div>
  );
}
