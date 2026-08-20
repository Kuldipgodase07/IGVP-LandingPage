import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  ShieldCheck,
  Hash,
  Lock,
  UserCheck,
  Zap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export function DiscordIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
    </svg>
  );
}

export interface DiscordChannelInfo {
  name: string;
  desc: string;
  isShared?: boolean;
  isPrivate?: boolean;
}

export interface DiscordMessageInfo {
  author: string;
  role: string;
  roleColor: string;
  avatar: string;
  time: string;
  content: string;
  tag?: string;
}

interface DiscordPreviewSectionProps {
  personaTitle: string;
  categoryName: string;
  categoryIcon: string;
  verificationBadge: string;
  verificationDetail: string;
  channels: DiscordChannelInfo[];
  sampleMessages: DiscordMessageInfo[];
  primaryCtaText?: string;
  discordUrl?: string;
  whatsappUrl?: string;
}

export function DiscordPreviewSection({
  personaTitle,
  categoryName,
  categoryIcon,
  verificationBadge,
  verificationDetail,
  channels,
  sampleMessages,
  primaryCtaText = "Join Discord Community",
  discordUrl = "https://discord.gg/NxGP2M3aMt",
  whatsappUrl = "https://chat.whatsapp.com/CtRWQX4dAWRL9xGz2g0i15",
}: DiscordPreviewSectionProps) {
  const [activeChannelIndex, setActiveChannelIndex] = useState(0);
  const activeChannel = channels[activeChannelIndex] || channels[0];

  return (
    <section className="py-16 md:py-20 bg-surface border-t border-border/80 relative overflow-hidden">
      {/* Subtle Discord blur glow */}
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#5865F2]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Badge className="bg-[#5865F2]/10 text-[#5865F2] border-[#5865F2]/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5" /> IGVP Community Architecture · {personaTitle}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Role-Gated Discord & WhatsApp Communities
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
              Self-segment upon entry into verified channels designed to accelerate co-founder matching, clinical trials, due diligence, and capital deployment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-card border border-border flex items-center gap-3 text-xs font-medium">
              <ShieldCheck className="h-5 w-5 text-success shrink-0" />
              <div>
                <p className="font-bold text-foreground">{verificationBadge}</p>
                <p className="text-[11px] text-muted-foreground">{verificationDetail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Discord UI Wrapper */}
        <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden grid lg:grid-cols-12 min-h-[480px]">
          {/* Channel Sidebar (Left 4 cols) */}
          <div className="lg:col-span-4 bg-surface-2 border-r border-border p-4 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <h3 className="font-extrabold text-sm text-foreground uppercase tracking-wider">
                {categoryName}
              </h3>
              <Badge className="bg-[#5865F2] text-white text-[10px] font-bold px-2 py-0.5">
                Role Verified
              </Badge>
            </div>

            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-1">
                Category Channels
              </p>
              {channels.map((chan, idx) => {
                const isActive = activeChannelIndex === idx;
                return (
                  <button
                    key={chan.name}
                    onClick={() => setActiveChannelIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left transition-all ${
                      isActive
                        ? "bg-[#5865F2]/15 text-[#5865F2] font-bold border border-[#5865F2]/30 shadow-xs"
                        : "text-foreground/75 hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {chan.isPrivate ? (
                        <Lock className="h-3.5 w-3.5 text-warning shrink-0" />
                      ) : (
                        <Hash className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      )}
                      <span className="truncate">{chan.name}</span>
                    </div>
                    {chan.isShared && (
                      <span className="text-[9px] font-bold uppercase bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                        Shared
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-border/80 space-y-3">
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Cross-Pollination Engine:</strong> Members collide across co-founder matching and deal-flow channels to fuel the Tri-Engine Flywheel.
              </p>
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#5865F2]/10 hover:bg-[#5865F2]/20 text-[#5865F2] border border-[#5865F2]/30 text-xs font-bold transition-all w-full"
                >
                  <DiscordIcon className="h-4 w-4 shrink-0" />
                  <span>Join Discord Community</span>
                  <ExternalLink className="h-3 w-3 opacity-70 ml-auto" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all w-full"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
                  <span>Join WhatsApp Community</span>
                  <ExternalLink className="h-3 w-3 opacity-70 ml-auto" />
                </a>
              </div>
            </div>
          </div>

          {/* Active Channel Chat Window (Right 8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-card p-6">
            <div>
              {/* Channel Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-primary" />
                  <span className="font-extrabold text-base text-foreground">{activeChannel.name}</span>
                  <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">
                    — {activeChannel.desc}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  <span>Live Community Feed</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {sampleMessages.map((msg, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-border/60 bg-surface-2/40 hover:bg-surface-2 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs border border-primary/30">
                          {msg.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-foreground">{msg.author}</span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${msg.roleColor}`}
                            >
                              {msg.role}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                    </div>

                    <p className="text-xs text-foreground/80 leading-relaxed pl-10">
                      {msg.content}
                    </p>

                    {msg.tag && (
                      <div className="pl-10 pt-1">
                        <span className="text-[10px] font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20 inline-flex items-center gap-1">
                          <Zap className="h-3 w-3" /> {msg.tag}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Join CTA with EQUAL LENGTH BUTTONS */}
            <div className="pt-6 border-t border-border mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <UserCheck className="h-4 w-4 text-success" />
                <span>Auto-Verification Enabled for Approved Members</span>
              </div>

              {/* EQUAL LENGTH BUTTONS: Both w-full sm:w-64 h-12 with brand icons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Button
                  asChild
                  className="w-full sm:w-64 h-12 px-5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-bold shadow-lg shadow-[#5865F2]/25 transition-all flex items-center justify-center gap-2.5"
                >
                  <a href={discordUrl} target="_blank" rel="noopener noreferrer">
                    <DiscordIcon className="h-4 w-4 shrink-0" />
                    <span className="truncate">Join Discord Community</span>
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full sm:w-64 h-12 px-5 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold shadow-lg shadow-[#25D366]/25 transition-all flex items-center justify-center gap-2.5"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    <span className="truncate">Join WhatsApp Community</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
