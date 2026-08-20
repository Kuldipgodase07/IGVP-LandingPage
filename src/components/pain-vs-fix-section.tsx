import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export interface FeaturePoint {
  title: string;
  desc: string;
}

interface PainVsFixSectionProps {
  sectionTag?: string;
  sectionTitle: string;
  sectionSubtitle?: string;
  painTitle: string;
  painDesc: string;
  painPoints: FeaturePoint[];
  fixTitle: string;
  fixDesc: string;
  fixPoints: FeaturePoint[];
  fixCtaText?: string;
  onFixCtaClick?: () => void;
}

export function PainVsFixSection({
  sectionTag = "Ecosystem Comparison",
  sectionTitle,
  sectionSubtitle,
  painTitle,
  painDesc,
  painPoints,
  fixTitle,
  fixDesc,
  fixPoints,
  fixCtaText,
  onFixCtaClick,
}: PainVsFixSectionProps) {
  const [activeTab, setActiveTab] = useState<"side" | "pain" | "fix">("side");

  return (
    <section className="py-24 bg-surface/50 border-y border-border/80 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 h-80 w-80 rounded-full bg-destructive/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5" /> {sectionTag}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {sectionSubtitle}
            </p>
          )}
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch relative">
          {/* Central Transformation Badge for Desktop */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-card border-2 border-border shadow-xl items-center justify-center text-xs font-black text-primary font-mono">
            VS
          </div>

          {/* LEFT CARD: The Pain Point / Legacy Bottlenecks */}
          <div className="lg:col-span-6 rounded-3xl border border-destructive/25 bg-card/90 backdrop-blur-xl p-6 sm:p-8 shadow-xl shadow-destructive/5 relative overflow-hidden flex flex-col justify-between group hover:border-destructive/40 transition-all">
            {/* Top red accent line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-destructive/80 to-destructive/20" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center font-bold border border-destructive/20 shrink-0">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-destructive">
                      Legacy Approach
                    </span>
                    <h3 className="font-extrabold text-sm text-foreground">
                      Traditional Market Friction
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-destructive/10 text-destructive border border-destructive/20 px-2.5 py-1 rounded-full">
                  ● High Risk
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                  {painTitle}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {painDesc}
                </p>
              </div>

              {/* Feature Points List */}
              <div className="space-y-3 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Common Obstacles & Bottlenecks:
                </p>
                {painPoints.map((point, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-2xl border border-destructive/15 bg-destructive/5 flex items-start gap-3"
                  >
                    <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-foreground">
                        {point.title}
                      </h5>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-normal">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Footer */}
            <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-destructive font-semibold">
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" /> Slow Acceleration
              </span>
              <span className="text-[11px] text-muted-foreground font-mono">Status: Bottlenecked</span>
            </div>
          </div>

          {/* RIGHT CARD: The IGVP Enterprise Fix */}
          <div className="lg:col-span-6 rounded-3xl border-2 border-emerald-500/35 bg-card/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-emerald-500/10 relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/60 transition-all">
            {/* Top green glowing gradient accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-primary to-emerald-400" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold border border-emerald-500/30 shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
                      IGVP Enterprise Engine
                    </span>
                    <h3 className="font-extrabold text-sm text-foreground">
                      Structured Operating System
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full animate-pulse">
                  ● Verified Solution
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                  {fixTitle}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {fixDesc}
                </p>
              </div>

              {/* Feature Points List */}
              <div className="space-y-3 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  IGVP System Advantages:
                </p>
                {fixPoints.map((point, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-3 hover:bg-emerald-500/10 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-foreground">
                        {point.title}
                      </h5>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-normal">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA & Status Footer */}
            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <Sparkles className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>10x Execution Speed</span>
              </div>

              {fixCtaText && (
                <Button
                  onClick={onFixCtaClick}
                  className="w-full sm:w-auto h-11 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-lg shadow-primary/25 transition-all"
                >
                  {fixCtaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
