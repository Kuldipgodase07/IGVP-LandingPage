import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Activity,
  CheckCircle2,
  Fingerprint,
  KeyRound,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in · IGVP" },
      { name: "description", content: "Sign in to the IGVP Healthcare Venture Operating System." },
    ],
  }),
  component: LoginPage,
});

function SsoButton({ label, svg }: { label: string; svg: React.ReactNode }) {
  return (
    <Button
      variant="outline"
      className="h-12 border-border/80 bg-card/80 hover:bg-accent/80 justify-center gap-3 text-xs sm:text-sm font-medium w-full shadow-xs transition-all hover:scale-[1.01]"
    >
      {svg}
      {label}
    </Button>
  );
}

function LoginPage() {
  return (
    <div className="h-screen grid lg:grid-cols-[1fr_1fr] bg-background w-full overflow-hidden">

      {/* ── LEFT RAIL ─────────────────────────────────────────── */}
      <div className="relative hidden lg:flex flex-col h-screen overflow-hidden border-r border-border/60
        bg-gradient-to-br from-[#c8e8f5] via-white to-[#64748b]
        dark:from-[#102a43] dark:via-[#0e2a40] dark:to-[#0b1f33]">

        {/* Background grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #049FD9 1px, transparent 1px), linear-gradient(to bottom, #049FD9 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Inner padded container */}
        <div className="relative flex flex-col h-full px-10 py-8 xl:px-14 xl:py-10">

          {/* Top: Logo + badge */}
          <div className="flex items-center justify-between shrink-0">
            <BrandLogo size="login" />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              border border-primary/30 dark:border-white/20
              bg-primary/10 dark:bg-white/10
              backdrop-blur-sm
              text-primary dark:text-white/90
              text-[11px] font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Console v4.2 · SOC 2
            </div>
          </div>

          {/* Middle: headline + features + stats */}
          <div className="flex-1 flex flex-col justify-center gap-6">

            {/* Headline */}
            <div className="space-y-2.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary/80">
                IGVP Healthcare Venture OS
              </p>
              <h1 className="text-[28px] xl:text-[34px] font-extrabold tracking-tight leading-[1.15]
                text-foreground dark:text-white">
                Sign in to your<br />
                <span className="text-primary">Healthcare Venture</span> workspace.
              </h1>
              <p className="text-[13px] leading-relaxed max-w-sm
                text-foreground/60 dark:text-white/60">
                Unified console for clinical trial governance, portfolio diligence, IRB protocols, and AI copilots.
              </p>
            </div>

            {/* Feature list */}
            <div className="grid gap-3">
              {[
                { i: ShieldCheck, t: "Zero-Trust Architecture", d: "Least-privilege RBAC & role-scoped data isolation" },
                { i: Fingerprint, t: "FIDO2 & Hardware Passkeys", d: "YubiKey & WebAuthn passwordless authentication" },
                { i: Lock, t: "HIPAA & PHI Compliance", d: "End-to-end BAA coverage with encrypted audit trails" },
              ].map((f) => (
                <div
                  key={f.t}
                  className="flex items-center gap-4 rounded-2xl px-5 py-4 transition-all
                    border border-white/80 dark:border-white/10
                    bg-white dark:bg-white/8
                    shadow-md shadow-black/5
                    hover:shadow-lg hover:shadow-black/10 hover:-translate-y-[1px]"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <f.i className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-gray-900 dark:text-white">{f.t}</p>
                    <p className="text-[11.5px] text-gray-500 dark:text-white/50 mt-0.5">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "99.99%", l: "Uptime SLA" },
                { v: "2,400+", l: "Clinicians" },
                { v: "HIPAA BAA", l: "Active" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex flex-col items-center justify-center rounded-2xl py-4 gap-1
                    border border-white/80 dark:border-white/10
                    bg-white dark:bg-white/8
                    shadow-md shadow-black/5"
                >
                  <span className="text-[14px] font-extrabold text-gray-900 dark:text-white">{s.v}</span>
                  <span className="text-[10.5px] font-medium text-primary dark:text-white/50">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="shrink-0 flex items-center justify-between pt-5 font-medium text-[11px]
            border-t border-primary/20 dark:border-white/10
            text-foreground/45 dark:text-white/40">
            <span>© 2026 IGVP · Healthcare OS</span>
            <div className="flex gap-4">
              <a href="/" className="hover:text-foreground dark:hover:text-white/70 transition-colors">Trust Center</a>
              <a href="/" className="hover:text-foreground dark:hover:text-white/70 transition-colors">Status</a>
              <a href="/" className="hover:text-foreground dark:hover:text-white/70 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ───────────────────────────────────────── */}
      <div className="flex flex-col h-screen overflow-hidden bg-background">

        {/* Top bar */}
        <div className="flex items-center justify-between shrink-0 px-8 xl:px-12 pt-6 pb-3">
          <div className="lg:hidden">
            <BrandLogo size="md" />
          </div>
          <div className="ml-auto flex items-center gap-3 text-[12px] text-muted-foreground font-medium">
            <span>New to IGVP?</span>
            <Link to="/" className="font-semibold text-primary hover:underline">Request access</Link>
            <Separator orientation="vertical" className="h-4 mx-1" />
            <ThemeToggle />
          </div>
        </div>

        {/* Form — vertically centered */}
        <div className="flex-1 flex flex-col justify-center px-8 xl:px-12 pb-4">
          <div className="w-full max-w-md mx-auto">

            {/* Card */}
            <div className="bg-card border border-border/80 rounded-2xl p-7 shadow-xl">

              {/* Header */}
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10.5px] font-bold tracking-wider uppercase mb-3">
                  <Activity className="h-3 w-3" />
                  Institute Console
                </div>
                <h2 className="text-[22px] font-extrabold tracking-tight text-foreground">Welcome back</h2>
                <p className="mt-0.5 text-[12px] text-muted-foreground">Sign in to your IGVP workspace to continue.</p>
              </div>

              {/* SSO */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <SsoButton label="Google" svg={<GoogleIcon />} />
                <SsoButton label="Microsoft" svg={<MsIcon />} />
                <SsoButton label="LinkedIn" svg={<LinkedInIcon />} />
                <SsoButton label="Apple" svg={<AppleIcon />} />
              </div>

              {/* Divider */}
              <div className="relative mb-4">
                <Separator />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-card px-3 text-[10.5px] font-medium uppercase tracking-wider text-muted-foreground border border-border/70 rounded-full py-0.5">
                    or continue with email
                  </span>
                </span>
              </div>

              {/* Form */}
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-[12px] font-semibold text-foreground">Work email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@institute.health"
                      className="h-10 pl-10 text-[13px] bg-background border-border focus:border-primary rounded-xl"
                      defaultValue="aditi.raj@igvp.health"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-[12px] font-semibold text-foreground">Password</Label>
                    <a href="/" className="text-[11px] font-medium text-primary hover:underline">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="h-10 pl-10 text-[13px] bg-background border-border focus:border-primary rounded-xl"
                      defaultValue="••••••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <label className="flex items-center gap-2 text-[12px] text-muted-foreground cursor-pointer select-none">
                    <Checkbox className="h-3.5 w-3.5 border-border rounded data-[state=checked]:bg-primary data-[state=checked]:border-primary" defaultChecked />
                    Keep me signed in on this device
                  </label>
                </div>

                <Button
                  asChild
                  className="w-full h-10 text-[13px] font-semibold bg-primary hover:bg-primary-hover gap-2 shadow-lg shadow-primary/20 rounded-xl transition-all hover:scale-[1.01]"
                >
                  <Link to="/">
                    Sign in
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="h-9 gap-1.5 text-[11.5px] font-medium rounded-xl border-border/80 bg-card hover:bg-accent">
                    <Fingerprint className="h-3.5 w-3.5 text-primary" />
                    Passkey login
                  </Button>
                  <Button variant="outline" className="h-9 gap-1.5 text-[11.5px] font-medium rounded-xl border-border/80 bg-card hover:bg-accent">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    Magic link
                  </Button>
                </div>
              </form>

              <p className="mt-4 text-center text-[10.5px] text-muted-foreground leading-relaxed pt-3 border-t border-border/50">
                Protected by IGVP zero-trust architecture. By continuing, you agree to our{" "}
                <a className="text-foreground font-medium underline underline-offset-2 hover:text-primary" href="/">Terms</a>
                {" "}and{" "}
                <a className="text-foreground font-medium underline underline-offset-2 hover:text-primary" href="/">Acceptable Use Policy</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom caption */}
        <div className="shrink-0 text-center text-[11px] text-muted-foreground py-3 border-t border-border/40">
          IGVP Healthcare Venture Operating System · SOC 2 Type II Certified
        </div>
      </div>
    </div>
  );
}



function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
function MsIcon() {
  return (
    <svg viewBox="0 0 23 23" className="h-4 w-4">
      <path fill="#f25022" d="M1 1h10v10H1z" />
      <path fill="#00a4ef" d="M1 12h10v10H1z" />
      <path fill="#7fba00" d="M12 1h10v10H12z" />
      <path fill="#ffb900" d="M12 12h10v10H12z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#0A66C2">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-foreground" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
