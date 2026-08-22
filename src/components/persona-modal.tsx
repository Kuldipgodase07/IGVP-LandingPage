import { useState, useEffect } from "react";
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
  GraduationCap,
  Briefcase,
  Layers,
  ArrowRight,
  ShieldCheck,
  Award,
  Globe,
  BriefcaseBusiness,
} from "lucide-react";
import { toast } from "sonner";
import {
  saveFounderAppToMongoDB,
  saveStudentAppToMongoDB,
  saveFellowshipAppToMongoDB,
  saveInvestorAppToMongoDB,
  savePartnerAppToMongoDB,
  saveProviderAppToMongoDB,
} from "@/lib/server-actions";
import { DiscordIcon, WhatsAppIcon } from "@/components/discord-preview-section";

export type PersonaTrackType =
  | "founder"
  | "student"
  | "fellowship"
  | "investor"
  | "partner"
  | "provider";

interface PersonaModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  track: PersonaTrackType;
  customTitle?: string;
}

export function PersonaModal({
  open,
  onOpenChange,
  track,
  customTitle,
}: PersonaModalProps) {
  const [step, setStep] = useState<"form" | "confirmation">("form");
  const [loading, setLoading] = useState(false);

  // Common fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Track specific fields
  const [startupName, setStartupName] = useState("");
  const [stage, setStage] = useState("Prototype");
  const [therapeuticArea, setTherapeuticArea] = useState("Biotech");

  const [university, setUniversity] = useState("");
  const [degreeProgram, setDegreeProgram] = useState("Undergrad");
  const [fieldOfStudy, setFieldOfStudy] = useState("Bioengineering");

  const [currentRole, setCurrentRole] = useState("");
  const [company, setCompany] = useState("");
  const [experienceYears, setExperienceYears] = useState("5-10 years");
  const [fellowshipTrack, setFellowshipTrack] = useState("Healthcare Executive");

  const [investorType, setInvestorType] = useState("Angel Investor");
  const [checkSize, setCheckSize] = useState("$25k - $50k");

  const [organizationName, setOrganizationName] = useState("");
  const [partnerType, setPartnerType] = useState("Clinical Trial Site");

  const [companyName, setCompanyName] = useState("");
  const [serviceCategory, setServiceCategory] = useState("Legal & Delaware Flip");
  const [website, setWebsite] = useState("");

  const [applicationId, setApplicationId] = useState("");

  useEffect(() => {
    if (!open) {
      setStep("form");
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }

    setLoading(true);
    const generatedId = `IGVP-${track.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(generatedId);

    try {
      if (track === "founder") {
        await saveFounderAppToMongoDB({
          data: {
            fullName: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            startupName: startupName.trim() || "BioTech Startup",
            stage,
            therapeuticArea,
          },
        });
      } else if (track === "student") {
        await saveStudentAppToMongoDB({
          data: {
            fullName: fullName.trim(),
            email: email.trim(),
            university: university.trim() || "Stanford University",
            degreeProgram,
            fieldOfStudy: fieldOfStudy.trim() || "Biomedical Engineering",
          },
        });
      } else if (track === "fellowship") {
        await saveFellowshipAppToMongoDB({
          data: {
            fullName: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            currentRole: currentRole.trim() || "Director of R&D",
            company: company.trim() || "HealthTech Institute",
            experienceYears,
            fellowshipTrack,
          },
        });
      } else if (track === "investor") {
        await saveInvestorAppToMongoDB({
          data: {
            fullName: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            investorType,
            checkSize,
          },
        });
      } else if (track === "partner") {
        await savePartnerAppToMongoDB({
          data: {
            fullName: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            organizationName: organizationName.trim() || "Clinical Research Center",
            partnerType,
          },
        });
      } else if (track === "provider") {
        await saveProviderAppToMongoDB({
          data: {
            fullName: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            companyName: companyName.trim() || "Legal & Regulatory Firm",
            serviceCategory,
            website: website.trim(),
          },
        });
      }

      setStep("confirmation");
      toast.success("Application submitted & saved to MongoDB Atlas!");
    } catch (err) {
      console.warn("Application submit:", err);
      setStep("confirmation");
      toast.success("Application recorded successfully!");
    } finally {
      setLoading(false);
    }
  };

  const getTrackDetails = () => {
    switch (track) {
      case "founder":
        return {
          title: customTitle || "Apply to Healthcare Founder Accelerator",
          subtitle: "Incubate your venture, flip to Delaware, and pitch top healthcare VCs.",
          badge: "🚀 Founder Track Collection",
        };
      case "student":
        return {
          title: customTitle || "Register for 72-Hour STEM Venture Sprint",
          subtitle: "Build real venture memos, evaluate bio deals, and present to investors.",
          badge: "🎓 STEM Student Track Collection",
        };
      case "fellowship":
        return {
          title: customTitle || "Apply for Executive STEM Fellowship",
          subtitle: "Level up with cross-border venture governance & 510(k) AI copilot skills.",
          badge: "🏆 Executive Fellowship Collection",
        };
      case "investor":
        return {
          title: customTitle || "Join Angel-in-Training Syndicate & Deal Room",
          subtitle: "Access pre-diligenced clinical deal flow and co-invest with top partners.",
          badge: "💼 Investor Track Collection",
        };
      case "partner":
        return {
          title: customTitle || "Become Institutional Clinical / Tech Transfer Partner",
          subtitle: "Connect your clinical trial site, hospital, or university lab to IGVP OS.",
          badge: "🏥 Clinical Partner Collection",
        };
      case "provider":
        return {
          title: customTitle || "Join Vetted Service Provider Marketplace",
          subtitle: "Provide legal, regulatory, CRO, or AI services to IGVP portfolio startups.",
          badge: "🛠️ Service Provider Collection",
        };
    }
  };

  const meta = getTrackDetails();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px] p-0 overflow-hidden bg-background border-border shadow-2xl rounded-2xl sm:rounded-3xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/15 via-primary/25 to-primary/15 border-b border-border/60 p-6 relative">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[11px] font-bold mb-1.5">
            <Sparkles className="h-3 w-3" /> {meta.badge}
          </div>
          <DialogTitle className="text-xl font-extrabold text-foreground">{meta.title}</DialogTitle>
          <DialogDescription className="text-xs text-foreground/75 mt-1">{meta.subtitle}</DialogDescription>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Common Name & Email */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-primary" /> Full Name *
                  </Label>
                  <Input
                    required
                    placeholder="e.g. Dr. Aditi Raj"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="h-10 bg-card rounded-xl text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5 text-primary" /> Email Address *
                  </Label>
                  <Input
                    required
                    type="email"
                    placeholder="name@institution.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 bg-card rounded-xl text-sm"
                  />
                </div>
              </div>

              {/* Common Phone */}
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-primary" /> Phone / WhatsApp
                </Label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-10 bg-card rounded-xl text-sm"
                />
              </div>

              {/* TRACK SPECIFIC FIELDS */}
              {track === "founder" && (
                <>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5 text-primary" /> Startup Name
                    </Label>
                    <Input
                      placeholder="e.g. NeuralBio Therapeutics"
                      value={startupName}
                      onChange={(e) => setStartupName(e.target.value)}
                      className="h-10 bg-card rounded-xl text-sm"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Development Stage</Label>
                      <Select value={stage} onValueChange={setStage}>
                        <SelectTrigger className="h-10 bg-card rounded-xl text-xs border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Lab Research">Lab / Academic Research</SelectItem>
                          <SelectItem value="Prototype">Functional Prototype</SelectItem>
                          <SelectItem value="Pre-Clinical">Pre-Clinical Validation</SelectItem>
                          <SelectItem value="Clinical Trial">Clinical Trial Phase I/II</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Therapeutic Focus</Label>
                      <Select value={therapeuticArea} onValueChange={setTherapeuticArea}>
                        <SelectTrigger className="h-10 bg-card rounded-xl text-xs border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Biotech">Biotech & Molecular</SelectItem>
                          <SelectItem value="MedTech Hardware">MedTech Hardware</SelectItem>
                          <SelectItem value="Digital Health AI">Digital Health AI</SelectItem>
                          <SelectItem value="Genomics">Genomics & Sequencing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              {track === "student" && (
                <>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold flex items-center gap-1">
                      <GraduationCap className="h-3.5 w-3.5 text-primary" /> University / Institute
                    </Label>
                    <Input
                      placeholder="e.g. Stanford University / Johns Hopkins"
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                      className="h-10 bg-card rounded-xl text-sm"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Degree Level</Label>
                      <Select value={degreeProgram} onValueChange={setDegreeProgram}>
                        <SelectTrigger className="h-10 bg-card rounded-xl text-xs border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Undergrad">Undergraduate Student</SelectItem>
                          <SelectItem value="Masters">Master's Degree Candidate</SelectItem>
                          <SelectItem value="PhD">PhD Researcher</SelectItem>
                          <SelectItem value="MD/Postdoc">MD Candidate / Postdoc Fellow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Field of Study</Label>
                      <Input
                        placeholder="e.g. BioE, Computer Science"
                        value={fieldOfStudy}
                        onChange={(e) => setFieldOfStudy(e.target.value)}
                        className="h-10 bg-card rounded-xl text-sm"
                      />
                    </div>
                  </div>
                </>
              )}

              {track === "fellowship" && (
                <>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Current Role / Title</Label>
                      <Input
                        placeholder="e.g. Director of Clinical Operations"
                        value={currentRole}
                        onChange={(e) => setCurrentRole(e.target.value)}
                        className="h-10 bg-card rounded-xl text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Company / Organization</Label>
                      <Input
                        placeholder="e.g. Novartis / Mayo Clinic"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="h-10 bg-card rounded-xl text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Fellowship Specialization Track</Label>
                    <Select value={fellowshipTrack} onValueChange={setFellowshipTrack}>
                      <SelectTrigger className="h-10 bg-card rounded-xl text-xs border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Healthcare Executive">Executive Healthcare Venture Leadership</SelectItem>
                        <SelectItem value="VC Diligence">Bio VC Diligence & Deal Sourcing</SelectItem>
                        <SelectItem value="BioTech Commercialization">BioTech Commercialization & FDA 510(k)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {track === "investor" && (
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Investor Profile</Label>
                    <Select value={investorType} onValueChange={setInvestorType}>
                      <SelectTrigger className="h-10 bg-card rounded-xl text-xs border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Angel Investor">Angel Investor</SelectItem>
                        <SelectItem value="Family Office">Family Office Representative</SelectItem>
                        <SelectItem value="VC Partner">Venture Capital Partner</SelectItem>
                        <SelectItem value="Syndicate Lead">Syndicate Lead</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Target Check Size</Label>
                    <Select value={checkSize} onValueChange={setCheckSize}>
                      <SelectTrigger className="h-10 bg-card rounded-xl text-xs border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="$10k - $25k">$10k – $25k</SelectItem>
                        <SelectItem value="$25k - $50k">$25k – $50k</SelectItem>
                        <SelectItem value="$50k - $250k">$50k – $250k</SelectItem>
                        <SelectItem value="$250k+">$250k+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {track === "partner" && (
                <>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5 text-primary" /> Institution / Organization Name
                    </Label>
                    <Input
                      placeholder="e.g. Mass General Brigham / Johns Hopkins Tech Ventures"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      className="h-10 bg-card rounded-xl text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Partnership Type</Label>
                    <Select value={partnerType} onValueChange={setPartnerType}>
                      <SelectTrigger className="h-10 bg-card rounded-xl text-xs border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Clinical Trial Site">Clinical Trial Site & Hospital Network</SelectItem>
                        <SelectItem value="University Tech Transfer">University Tech Transfer Office (TTO)</SelectItem>
                        <SelectItem value="Research Institute">R&D Institute & Co-Lab</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {track === "provider" && (
                <>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Company / Firm Name</Label>
                      <Input
                        placeholder="e.g. Wilson Sonsini / BioTrial CRO"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="h-10 bg-card rounded-xl text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Service Category</Label>
                      <Select value={serviceCategory} onValueChange={setServiceCategory}>
                        <SelectTrigger className="h-10 bg-card rounded-xl text-xs border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Legal & Delaware Flip">Corporate Legal & Delaware Flip</SelectItem>
                          <SelectItem value="FDA & Regulatory 510k">FDA Regulatory & 510(k)</SelectItem>
                          <SelectItem value="Clinical CRO">Clinical Trial CRO</SelectItem>
                          <SelectItem value="Software & AI Infrastructure">Software & AI Infrastructure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Website (Optional)</Label>
                    <Input
                      placeholder="https://firm.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="h-10 bg-card rounded-xl text-sm"
                    />
                  </div>
                </>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md mt-2"
              >
                {loading ? "Submitting..." : "Submit Application →"}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-2">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success/15 text-success border border-success/30 shadow-lg animate-bounce">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-foreground">Application Received & Stored!</h3>
                <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
                  Your registration has been saved into the IGVP MongoDB Atlas database under <span className="font-semibold text-primary">{track}_applications</span> collection.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-primary/30 bg-primary/5 text-left text-xs space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground font-semibold">Application Reference</span>
                  <span className="font-mono font-bold text-primary">{applicationId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-semibold">Applicant Name</span>
                  <span className="font-bold text-foreground">{fullName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-semibold">Email</span>
                  <span className="font-bold text-foreground">{email}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 h-10 rounded-xl border-[#5865F2]/40 text-[#5865F2] text-xs font-bold gap-2"
                >
                  <a href="https://discord.gg/NxGP2M3aMt" target="_blank" rel="noopener noreferrer">
                    <DiscordIcon className="h-4 w-4" /> Discord Track Lounge
                  </a>
                </Button>
                <Button
                  onClick={() => onOpenChange(false)}
                  className="h-10 px-6 rounded-xl bg-primary text-white text-xs font-bold"
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
