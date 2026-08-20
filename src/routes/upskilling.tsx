import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PersonaHeader } from "@/components/persona-header";
import { PersonaFooter } from "@/components/persona-footer";
import { DiscordPreviewSection } from "@/components/discord-preview-section";
import { PainVsFixSection } from "@/components/pain-vs-fix-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  BookOpen,
  Award,
  Shield,
  ArrowRight,
  Sparkles,
  Clock,
  MessageSquare,
} from "lucide-react";

import { PersonaSuccessStories } from "@/components/persona-success-stories";

export const Route = createFileRoute("/upskilling")({
  head: () => ({
    meta: [
      { title: "Upskilling Professionals Track · IGVP Institute" },
      {
        name: "description",
        content:
          "Keep your practice or job. Learn to build ventures or advisory on the side with part-time Bio-Entrepreneurship executive masterclasses.",
      },
    ],
  }),
  component: UpskillingPersonaPage,
});

function UpskillingPersonaPage() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { title: "Clinical Valuation & Cap Tables", hours: "4 Hours", desc: "Structuring healthtech equity, SAFE notes, and revenue share models." },
    { title: "FDA & Regulatory Strategy", hours: "6 Hours", desc: "510(k), De Novo, and PMA pathways with pre-sub submission templates." },
    { title: "Angel-in-Training DD Rotation", hours: "12 Hours", desc: "Live due diligence placement on active IGVP Accelerator applicant ventures." },
    { title: "Board & Advisory Placement", hours: "4 Hours", desc: "Positioning clinical expertise for venture board seats & equity compensation." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <PersonaHeader currentTrack="Upskilling" />

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
                <Briefcase className="h-4 w-4" /> Upskilling Professionals (Clinicians & Executives)
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Keep Your Practice or Job.{" "}
                <span className="text-primary">Build Ventures on the Side.</span>
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                A part-time, cohort-based path for clinicians and executives to master venture and business skills without stepping away from patients or payroll.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                >
                  Apply to Executive Cohort
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-h-12 sm:h-14 px-5 sm:px-6 rounded-xl border-border bg-card hover:bg-accent text-sm sm:text-base font-bold transition-all"
                >
                  Download Fellowship Curriculum
                </Button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/50 text-xs text-muted-foreground font-semibold">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> Evening / Weekend Format (4 hrs/wk)
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-success" /> Bio-Venture Fellowship Credential
                </div>
              </div>
            </div>

            {/* Right Interactive UI Mockup: Executive Learning Navigator */}
            <div className="lg:col-span-5 xl:col-span-6 relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground">Bio-Entrepreneurship Masterclass</h3>
                      <p className="text-xs text-muted-foreground">Executive Cohort · Week 6 of 12</p>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-bold text-[10px] px-2.5 py-1">
                    Part-Time Cohort
                  </Badge>
                </div>

                {/* Module Navigator */}
                <div className="space-y-2.5">
                  {modules.map((mod, index) => {
                    const isSelected = activeModule === index;
                    return (
                      <div
                        key={mod.title}
                        onClick={() => setActiveModule(index)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-xs"
                            : "border-border bg-surface-2/60 hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              isSelected ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                            }`}>
                              {index + 1}
                            </span>
                            <p className="text-xs font-bold text-foreground">{mod.title}</p>
                          </div>
                          <span className="text-[10px] font-mono text-muted-foreground">{mod.hours}</span>
                        </div>
                        {isSelected && (
                          <p className="text-[11px] text-muted-foreground mt-2 pl-9 leading-relaxed">
                            {mod.desc}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Next Live Masterclass Session</p>
                      <p className="text-[10px] text-muted-foreground">FDA Regulatory Pathways · Sat 10:00 AM EST</p>
                    </div>
                  </div>
                  <Button size="sm" className="h-8 text-xs font-bold bg-primary hover:bg-primary-hover text-white rounded-lg">
                    Reserve Slot
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Pain vs Fix Section */}
      <PainVsFixSection
        sectionTag="Executive Education & Advisory"
        sectionTitle="Why Upskilling Professionals Choose IGVP"
        sectionSubtitle="Master healthcare venture mechanics without sacrificing clinical practice or career momentum"
        painTitle="Full-Time MBAs Demand Years; Generic Video Courses Lack Real Deal Mechanics"
        painDesc="You want equity upside and advisory roles in healthtech innovation, but multi-year MBA programs demand full-time commitment, while generic online video courses never touch real deal mechanics."
        painPoints={[
          { title: "Excessive Time Commitment", desc: "Traditional MBA programs demand 20+ hours/week and full-time attendance." },
          { title: "Theoretical Video Content", desc: "Online recorded courses lack live deal teardowns and practitioner feedback." },
          { title: "No Equity Exposure", desc: "Zero placement on active due diligence teams or startup advisory boards." },
        ]}
        fixTitle="Compressed Practitioner Cohorts That Fit Clinical Schedules"
        fixDesc="IGVP's Institute delivers evening/weekend cohorts taught by active venture partners, placing you directly on live accelerator due diligence teams to earn credentials and advisory positions."
        fixPoints={[
          { title: "Part-Time Executive Cadence", desc: "4 hours per week in evening & weekend formats tailored for clinicians." },
          { title: "Live Diligence Placement", desc: "Placements on active Accelerator venture due diligence teams." },
          { title: "Fellowship Credential", desc: "Bio-Venture Fellowship certification for LinkedIn and advisory roles." },
        ]}
        fixCtaText="Apply to Executive Cohort"
      />

      {/* Deliverables Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Program Deliverables</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">What You Get in the Executive Track</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Bio-Entrepreneurship Masterclass",
                desc: "Evening & weekend cohort-based masterclasses covering deal structuring, clinical valuation, and FDA strategy.",
              },
              {
                icon: Award,
                title: "Bio-Venture Fellowship Credential",
                desc: "Credentialed cross-border venture training certificate upon completion for LinkedIn & advisory resume.",
              },
              {
                icon: Shield,
                title: "Angel-in-Training Placement",
                desc: "Placement on live Accelerator due-diligence teams to gain hands-on advisory & equity exposure.",
              },
              {
                icon: MessageSquare,
                title: "Peer & Expert Discord Access",
                desc: "Ongoing access to #regulatory-fda and #clinical-trials-india channels for peer learning.",
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
        personaTitle="Upskilling Professionals Track"
        categoryName="📈 Upskilling Category"
        categoryIcon="📈"
        verificationBadge="Cohort Enrollment Verification"
        verificationDetail="Confirmed upon cohort registration or clinician credential check"
        channels={[
          { name: "cohort-general", desc: "Cohort coordination & weekend live session Q&A" },
          { name: "investment-memo-workshop", desc: "Weekly clinical valuation teardowns & memo reviews" },
          { name: "career-transitions", desc: "Moving from clinical practice to VC advisory & board seats" },
          { name: "clinical-to-venture", desc: "Cross-disciplinary collaboration with Accelerator founders" },
        ]}
        sampleMessages={[
          {
            author: "Dr. Vikram Vance, MD",
            role: "📈 Upskilling Clinician",
            roleColor: "bg-primary/10 text-primary border border-primary/20",
            avatar: "VV",
            time: "02:15 PM",
            content: "Just completed the Angel-in-Training due diligence rotation for a Series A medtech venture. The clinical valuation framework from Module 1 made all the difference!",
            tag: "DD Rotation Complete",
          },
          {
            author: "Elena Rostova, PharmD",
            role: "📈 Fellowship Alum",
            roleColor: "bg-success/10 text-success border border-success/20",
            avatar: "ER",
            time: "02:30 PM",
            content: "Sharing our latest advisory agreement template in #clinical-to-venture for anyone taking equity advisory roles in healthtech startups.",
          },
        ]}
        primaryCtaText="Join Upskilling Cohort on Discord"
      />

      <PersonaSuccessStories
        badge="Clinician & Executive Growth"
        title="Transforming Medical Expertise into Venture Leadership"
        subtitle="See how practicing MDs, clinical PIs, and healthcare executives earn CME credits, join board desks, and spin out healthtech startups."
        stories={[
          {
            quote: "As a practicing Chief of Surgery, the evening upskilling modules gave me the exact venture diligence toolkit to evaluate digital health deals and join an AI fund IC.",
            name: "Dr. Robert Sterling",
            role: "Chief of Surgery & Venture Advisor",
            metric: "VC BOARD MEMBER",
          },
          {
            quote: "The CME-accredited healthtech modules were a game-changer. I transitioned from clinical practice to Chief Medical Officer of a funded bio-tech startup.",
            name: "Dr. Elena Rostova",
            role: "Chief Medical Officer · OncoTech",
            metric: "CMO APPOINTMENT",
          },
          {
            quote: "IGVP gave me direct advisory placement on live due-diligence teams. I earned advisory equity in 3 portfolio companies in 6 months.",
            name: "David Kim, PharmD",
            role: "Regulatory Consultant & Advisor",
            metric: "3 ADVISORY DESKS",
          },
          {
            quote: "The executive cohort allowed me to complete clinical valuation models on weekends without interrupting my hospital duties.",
            name: "Dr. Meera Patel",
            role: "Clinical PI & Executive Cohort Alum",
            metric: "CME ACCREDITED",
          },
        ]}
      />

      <PersonaFooter />
    </div>
  );
}
