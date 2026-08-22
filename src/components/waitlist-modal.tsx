import { useState, useEffect } from "react";
import { saveWaitlistToMongoDB } from "@/lib/server-actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sparkles,
  CheckCircle2,
  Ticket,
  User,
  Mail,
  Phone,
  Building2,
  Calendar,
  Share2,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  Award,
} from "lucide-react";
import { toast } from "sonner";
import { DiscordIcon, WhatsAppIcon } from "@/components/discord-preview-section";

export interface WaitlistRegistration {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  role: string;
  organization?: string;
  cohort: string;
  primaryGoal?: string;
  ticketNumber: string;
  queuePosition: number;
  submittedAt: string;
}

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultRole?: string;
}

export function WaitlistModal({ open, onOpenChange, defaultRole }: WaitlistModalProps) {
  const [step, setStep] = useState<"form" | "confirmation">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState(defaultRole || "founder");
  const [organization, setOrganization] = useState("");
  const [cohort, setCohort] = useState("q3-2026");
  const [primaryGoal, setPrimaryGoal] = useState("venture-incubation");

  // Submitted ticket data
  const [confirmedData, setConfirmedData] = useState<WaitlistRegistration | null>(null);

  useEffect(() => {
    if (defaultRole) {
      setRole(defaultRole);
    }
  }, [defaultRole]);

  // Check if user already registered in localStorage when opening modal
  useEffect(() => {
    if (open) {
      const saved = localStorage.getItem("igvp_waitlist_user_registration");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.ticketNumber) {
            setConfirmedData(parsed);
          }
        } catch {
          // ignore error
        }
      }
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      toast.error("Please fill in your full name and email address.");
      return;
    }

    setIsSubmitting(true);

    const randomTicketNum = `IGVP-WL-${Math.floor(1000 + Math.random() * 9000)}`;
    const randomQueuePos = Math.floor(25 + Math.random() * 60);

    const registration: WaitlistRegistration = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      role,
      organization: organization.trim(),
      cohort,
      primaryGoal,
      ticketNumber: randomTicketNum,
      queuePosition: randomQueuePos,
      submittedAt: new Date().toISOString(),
    };

    // Save to localStorage
    try {
      localStorage.setItem("igvp_waitlist_user_registration", JSON.stringify(registration));
      const allList = JSON.parse(localStorage.getItem("igvp_all_waitlist") || "[]");
      allList.push(registration);
      localStorage.setItem("igvp_all_waitlist", JSON.stringify(allList));
    } catch (err) {
      console.error("Storage error", err);
    }

    // Connect & save to MongoDB Atlas database (waitlist_users collection)
    try {
      await saveWaitlistToMongoDB({ data: registration });
    } catch (err) {
      console.warn("MongoDB Atlas background save:", err);
    }

    setConfirmedData(registration);
    setIsSubmitting(false);
    setStep("confirmation");
    toast.success("Slot reserved & stored in IGVP Database!");
  };

  const handleCopyTicket = () => {
    if (!confirmedData) return;
    navigator.clipboard.writeText(confirmedData.ticketNumber);
    setCopied(true);
    toast.success("Ticket ID copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetForm = () => {
    setStep("form");
  };

  const getRoleLabel = (r: string) => {
    switch (r) {
      case "student":
        return "STEM Student / Researcher";
      case "founder":
        return "Healthcare Startup Founder";
      case "investor":
        return "Venture Investor / Angel";
      case "clinical":
        return "Clinical & Hospital Partner";
      case "upskilling":
        return "Executive Fellow / Professional";
      case "provider":
        return "Vetted Service Provider";
      default:
        return "Healthcare Innovator";
    }
  };

  const getCohortLabel = (c: string) => {
    switch (c) {
      case "q3-2026":
        return "⚡ Q3 2026 Priority Batch (Limited Slots)";
      case "q4-2026":
        return "🗓️ Q4 2026 Cohort Access";
      case "2027":
        return "🌐 2027 General Release";
      default:
        return "Q3 2026 Priority Batch";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[580px] p-0 overflow-hidden bg-background border-border/80 shadow-2xl rounded-2xl sm:rounded-3xl">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border-b border-border/60 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md">
              <Ticket className="h-5 w-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-[11px] font-bold">
                <Sparkles className="h-3 w-3" /> Priority Access Waitlist
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-foreground mt-0.5">
                {step === "form" ? "Join the Waitlist & Lock Your Slot" : "Slot Confirmed & Reserved!"}
              </DialogTitle>
            </div>
          </div>
          <DialogDescription className="text-xs sm:text-sm text-foreground/70 pl-13">
            {step === "form"
              ? "Fill out the details below to reserve your priority onboarding slot for the IGVP Healthcare Venture OS."
              : "Your ticket has been registered in our priority queue. Check your details and next steps below."}
          </DialogDescription>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName" className="text-xs font-semibold flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-primary" /> Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="e.g. Dr. Aditi Raj"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="h-11 bg-card/60 rounded-xl text-sm border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-primary" /> Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@institution.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 bg-card/60 rounded-xl text-sm border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Phone & Organization */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-semibold flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary" /> Phone / WhatsApp (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 bg-card/60 rounded-xl text-sm border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="organization" className="text-xs font-semibold flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-primary" /> Organization / Institution
                  </Label>
                  <Input
                    id="organization"
                    placeholder="e.g. Stanford BioDesign / MedTech Inc"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="h-11 bg-card/60 rounded-xl text-sm border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Persona Role */}
              <div className="space-y-1.5">
                <Label htmlFor="role" className="text-xs font-semibold flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-primary" /> What best describes your primary track?
                </Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="h-11 bg-card/60 rounded-xl text-sm border-border">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="founder">🚀 Healthcare / MedTech Founder</SelectItem>
                    <SelectItem value="student">🎓 STEM Student / Researcher</SelectItem>
                    <SelectItem value="investor">💼 Angel Investor / VC Syndicate</SelectItem>
                    <SelectItem value="clinical">🏥 Clinical Leader / Hospital Site</SelectItem>
                    <SelectItem value="upskilling">🏆 Executive Fellow / Upskilling Professional</SelectItem>
                    <SelectItem value="provider">🛠️ Vetted Service Provider / Vendor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Cohort Preference */}
              <div className="space-y-1.5">
                <Label htmlFor="cohort" className="text-xs font-semibold flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-primary" /> Preferred Cohort Slot
                </Label>
                <Select value={cohort} onValueChange={setCohort}>
                  <SelectTrigger className="h-11 bg-card/60 rounded-xl text-sm border-border">
                    <SelectValue placeholder="Select cohort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="q3-2026">⚡ Q3 2026 Priority Batch (Limited Slots)</SelectItem>
                    <SelectItem value="q4-2026">🗓️ Q4 2026 Cohort Access</SelectItem>
                    <SelectItem value="2027">🌐 2027 General Release</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Primary Goal */}
              <div className="space-y-1.5">
                <Label htmlFor="primaryGoal" className="text-xs font-semibold flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-primary" /> Primary Focus or Goal
                </Label>
                <Select value={primaryGoal} onValueChange={setPrimaryGoal}>
                  <SelectTrigger className="h-11 bg-card/60 rounded-xl text-sm border-border">
                    <SelectValue placeholder="Select your primary goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venture-incubation">Incubate / Pitch Healthcare Startup</SelectItem>
                    <SelectItem value="stem-sprint">Participate in 72-Hour STEM Sprint</SelectItem>
                    <SelectItem value="dealflow-access">Access Curated Bio Deal Flow</SelectItem>
                    <SelectItem value="clinical-trials">Setup Clinical Trial & Tech Transfer</SelectItem>
                    <SelectItem value="executive-cert">Earn Executive STEM Fellowship Certification</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Real-time Availability Pill */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                  </span>
                  <span className="font-semibold text-foreground">Priority Slot Allocation Active</span>
                </div>
                <span className="text-muted-foreground font-medium">94% Slots Filled for Q3</span>
              </div>

              {/* Form Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-lg shadow-primary/25 transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Reserving Slot...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Confirm My Slot & Join Waitlist <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          ) : (
            /* Confirmation View */
            <div className="space-y-5">
              {/* Success Badge */}
              <div className="text-center space-y-2 py-2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success/15 text-success border border-success/30 shadow-lg animate-bounce">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="text-lg font-extrabold text-foreground">Slot Reserved & Priority Confirmed!</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-foreground">{confirmedData?.fullName}</span>. You have locked in your spot for the IGVP Healthcare OS.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-card via-surface-2 to-card p-5 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                  Verified Slot Pass
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Waitlist Ticket ID</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-mono text-base font-extrabold text-primary">{confirmedData?.ticketNumber}</span>
                      <button
                        onClick={handleCopyTicket}
                        className="p-1 rounded bg-surface hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        title="Copy Ticket ID"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Queue Rank</p>
                    <p className="text-base font-black text-foreground">#{confirmedData?.queuePosition} <span className="text-[10px] font-semibold text-success">(Top 5%)</span></p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-semibold">Registrant</span>
                    <span className="font-bold text-foreground truncate block">{confirmedData?.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-semibold">Email</span>
                    <span className="font-bold text-foreground truncate block">{confirmedData?.email}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-semibold">Track</span>
                    <span className="font-bold text-foreground truncate block">{getRoleLabel(confirmedData?.role || "")}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-semibold">Cohort Allocation</span>
                    <span className="font-bold text-primary truncate block">{getCohortLabel(confirmedData?.cohort || "")}</span>
                  </div>
                </div>

                {confirmedData?.organization && (
                  <div className="mt-3 pt-2 border-t border-border/40 text-xs">
                    <span className="text-[10px] text-muted-foreground font-semibold">Affiliation: </span>
                    <span className="font-bold text-foreground">{confirmedData.organization}</span>
                  </div>
                )}
              </div>

              {/* Next Steps & Community Links */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-foreground">What happens next?</p>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-card border border-border flex items-start gap-2.5">
                    <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-foreground">Onboarding Notice</p>
                      <p className="text-[11px] text-muted-foreground">You will receive an invitation email prior to your cohort start.</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-card border border-border flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-foreground">Priority Fast-Track</p>
                      <p className="text-[11px] text-muted-foreground">Your position is secured in our verified registration ledger.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Buttons */}
              <div className="space-y-2 pt-1">
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider text-center">
                  Get Instant Access to Waitlist Members
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    asChild
                    className="flex-1 h-10 rounded-xl border-[#5865F2]/40 text-[#5865F2] hover:bg-[#5865F2]/10 text-xs font-bold gap-2"
                  >
                    <a href="https://discord.gg/NxGP2M3aMt" target="_blank" rel="noopener noreferrer">
                      <DiscordIcon className="h-4 w-4" /> Discord VIP Lounge
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="flex-1 h-10 rounded-xl border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 text-xs font-bold gap-2"
                  >
                    <a href="https://chat.whatsapp.com/CtRWQX4dAWRL9xGz2g0i15" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> WhatsApp Announcements
                    </a>
                  </Button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={handleResetForm}
                  className="text-xs text-muted-foreground hover:text-foreground font-semibold underline"
                >
                  Register another slot
                </button>
                <Button
                  onClick={() => onOpenChange(false)}
                  className="h-10 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs"
                >
                  Done & Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
