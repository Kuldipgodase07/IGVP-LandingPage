import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Video,
  Award,
  Users,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  Share2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  Tag,
  Ticket,
  X,
  QrCode,
  Bell,
  SlidersHorizontal,
} from "lucide-react";
import { toast } from "sonner";

export interface Speaker {
  name: string;
  role: string;
  org: string;
  avatar: string;
}

export interface EventItem {
  id: string;
  type: "Summit" | "Webinar" | "Workshop" | "Roundtable";
  typeBadge: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  format: "Virtual" | "Hybrid" | "In-Person" | "VC Gated";
  location: string;
  attendees: string;
  spotsLeft?: number;
  isFeatured?: boolean;
  isLiveNow?: boolean;
  gradient: string;
  speakers: Speaker[];
  tags: string[];
  description: string;
  agenda?: string[];
}

const EVENTS_DATA: EventItem[] = [
  {
    id: "summit-2026",
    type: "Summit",
    typeBadge: "GLOBAL SUMMIT",
    title: "IGVP Global Bio-Innovation & Healthtech Summit 2026",
    subtitle: "Connecting 500+ Bio-Founders, FDA Regulators, Health System CMOs & Tier-1 VCs",
    date: "OCT 14 - 16, 2026",
    time: "9:00 AM - 5:00 PM EST",
    format: "Hybrid",
    location: "Boston Convention Center & IGVP Live-Stream",
    attendees: "3,400+ Registered",
    spotsLeft: 42,
    isFeatured: true,
    gradient: "from-primary/30 via-chart-4/20 to-primary/5",
    speakers: [
      {
        name: "Dr. Sarah Jenkins",
        role: "VP of Regulatory",
        org: "Genentech",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80",
      },
      {
        name: "Elena Kowalski",
        role: "General Partner",
        org: "Emerald VC",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      },
      {
        name: "Prof. Marcus Vance",
        role: "Director of Bio-Design",
        org: "Stanford",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      },
      {
        name: "Dr. Aris Thorne",
        role: "Chief Innovation Officer",
        org: "Mayo Clinic",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
      },
    ],
    tags: ["Bio-Tech", "FDA Sandbox", "VC Pitch Final", "Keynote"],
    description:
      "The annual flagship gathering bringing together leaders across STEM, clinical medicine, regulatory affairs, and venture capital. Includes 1-on-1 VC speed dating and live FDA regulatory Q&A.",
    agenda: [
      "09:00 AM - Keynote: The Next 10 Years of Bio-Innovations",
      "11:30 AM - FDA Sandbox & Software-as-a-Medical-Device Panel",
      "02:00 PM - IGVP Venture Demo Day Pitch Finals",
      "04:30 PM - Gated LP & VC Networking Lounge",
    ],
  },
  {
    id: "webinar-fda-ai",
    type: "Webinar",
    typeBadge: "LIVE WEBINAR",
    title: "FDA 510(k) AI/ML Software Clearance Masterclass",
    subtitle: "Step-by-step regulatory submission playbook for MedTech founders & clinical engineers",
    date: "SEP 04, 2026",
    time: "2:00 PM - 3:30 PM EST",
    format: "Virtual",
    location: "IGVP Virtual Auditorium",
    attendees: "1,240 Registered",
    isLiveNow: false,
    gradient: "from-info/20 via-primary/15 to-transparent",
    speakers: [
      {
        name: "Dr. Aris Thorne",
        role: "Former FDA Reviewer",
        org: "Mayo Clinic",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
      },
      {
        name: "Maya Lin",
        role: "Regulatory Counsel",
        org: "IGVP OS",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      },
    ],
    tags: ["FDA Clearance", "Generative AI", "MedTech", "Compliance"],
    description:
      "Learn how to navigate SaMD (Software as a Medical Device) submissions, Good Machine Learning Practice (GMLP), and risk management standards under ISO 14971.",
  },
  {
    id: "summit-demo-day",
    type: "Summit",
    typeBadge: "VC SYNDICATE SUMMIT",
    title: "Fall 2026 Bio-Incubator Demo Day & Syndicate Summit",
    subtitle: "Watch 16 top-performing healthtech startups pitch live for $50M+ co-investment capital",
    date: "SEP 18, 2026",
    time: "10:00 AM - 4:00 PM EST",
    format: "VC Gated",
    location: "IGVP Gated Deal Room",
    attendees: "350 Vetted VCs",
    spotsLeft: 14,
    gradient: "from-success/20 via-primary/10 to-transparent",
    speakers: [
      {
        name: "David Chen",
        role: "Managing Director",
        org: "Nexus Capital",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      },
      {
        name: "Dr. Priya Ravindran",
        role: "Founder & CEO",
        org: "NeuroGen Bio",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80",
      },
    ],
    tags: ["Demo Day", "Series A", "Syndicate", "Gated VC"],
    description:
      "Exclusive deal-room session featuring Track B Incubator cohort graduates with lab-validated IP, FDA clearance roadmaps, and signed health system LOIs.",
  },
  {
    id: "workshop-delaware-flip",
    type: "Workshop",
    typeBadge: "BIO-DESIGN WORKSHOP",
    title: "Lab-to-Market Delaware Flip & IP Commercialization",
    subtitle: "Interactive sprint on converting university patents into venture-backed C-Corps",
    date: "SEP 25, 2026",
    time: "1:00 PM - 5:00 PM EST",
    format: "Virtual",
    location: "Interactive Live Studio",
    attendees: "890 Registered",
    gradient: "from-warning/20 via-chart-4/15 to-transparent",
    speakers: [
      {
        name: "Marcus Okafor, MD",
        role: "Co-Founder",
        org: "Cardia Health",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      },
      {
        name: "Jonathan Vance",
        role: "Partner",
        org: "BioTech Legal Group",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      },
    ],
    tags: ["Delaware Flip", "Cap Table", "IP Transfer", "Legal"],
    description:
      "A practical tactical workshop covering spinout licensing agreements, founder equity splits, Delaware C-Corp flips, and avoiding cap table debt during early angel rounds.",
  },
  {
    id: "webinar-clinical-trials",
    type: "Webinar",
    typeBadge: "CLINICAL WEBINAR",
    title: "Clinical Trial Site Matching & EHR Data Pipeline Integration",
    subtitle: "Deploying zero-friction clinical trial protocols across 40+ hospital networks",
    date: "OCT 02, 2026",
    time: "4:00 PM - 5:30 PM EST",
    format: "Virtual",
    location: "IGVP CME Stream",
    attendees: "650 Clinicians",
    gradient: "from-chart-4/20 via-primary/10 to-transparent",
    speakers: [
      {
        name: "Dr. Sarah Jenkins",
        role: "Chief Medical Officer",
        org: "Cardia Health",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80",
      },
      {
        name: "Prof. Marcus Vance",
        role: "Director of Bio-Design",
        org: "Stanford Medicine",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      },
    ],
    tags: ["Clinical Trials", "EHR Data", "CME Accredited", "Hospitals"],
    description:
      "Explore clinical trial acceleration techniques, IRB approval templates, and synthetic patient dataset usage for training medical AI diagnostic models.",
  },
  {
    id: "roundtable-reimbursement",
    type: "Roundtable",
    typeBadge: "EXECUTIVE ROUNDTABLE",
    title: "Digital Health Reimbursement & CPT Coding Strategy 2027",
    subtitle: "Closed-door panel with payers and CMS advisors on securing insurance coverage",
    date: "OCT 09, 2026",
    time: "11:00 AM - 1:00 PM EST",
    format: "Hybrid",
    location: "Virtual & Washington D.C. Hub",
    attendees: "450 Executive Guests",
    spotsLeft: 18,
    gradient: "from-primary/20 via-warning/15 to-transparent",
    speakers: [
      {
        name: "Elena Kowalski",
        role: "General Partner",
        org: "Emerald VC",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      },
      {
        name: "Dr. Aris Thorne",
        role: "Former CMS Policy Advisor",
        org: "Mayo Clinic",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
      },
    ],
    tags: ["Reimbursement", "CPT Codes", "Payer Strategy", "CMS"],
    description:
      "Deep dive into securing Category I & III CPT codes, commercial payer contracting, and demonstrating economic value ROI for hospital procurement committees.",
  },
];

export function EventsSection() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Registration Modal State
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);
  const [registrantName, setRegistrantName] = useState("");
  const [registrantEmail, setRegistrantEmail] = useState("");
  const [registrantRole, setRegistrantRole] = useState("Founder");
  const [ticketIssued, setTicketIssued] = useState(false);

  // Proposal Modal State
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [proposalTopic, setProposalTopic] = useState("");
  const [proposalEmail, setProposalEmail] = useState("");

  const filteredEvents = EVENTS_DATA.filter((event) => {
    // Type Filter
    if (selectedType !== "All" && event.type !== selectedType) {
      return false;
    }
    // Format Filter
    if (selectedFormat !== "All" && event.format !== selectedFormat) {
      return false;
    }
    // Search Query Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchTitle = event.title.toLowerCase().includes(q);
      const matchSubtitle = event.subtitle.toLowerCase().includes(q);
      const matchTags = event.tags.some((t) => t.toLowerCase().includes(q));
      const matchSpeakers = event.speakers.some(
        (s) => s.name.toLowerCase().includes(q) || s.org.toLowerCase().includes(q)
      );
      return matchTitle || matchSubtitle || matchTags || matchSpeakers;
    }
    return true;
  });

  const featuredEvent = EVENTS_DATA.find((e) => e.isFeatured) || EVENTS_DATA[0];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registrantName || !registrantEmail) {
      toast.error("Please fill in your name and email address.");
      return;
    }
    setTicketIssued(true);
    toast.success(`Registration Confirmed! Ticket sent to ${registrantEmail}`);
  };

  const handleAddToCalendar = (eventTitle: string, date: string) => {
    toast.info(`Calendar invite for "${eventTitle}" downloaded!`, {
      description: `Event Date: ${date}. Check your calendar app to save.`,
    });
  };

  const handleShareEvent = (eventTitle: string) => {
    navigator.clipboard.writeText(window.location.href);
    toast.success(`Share link copied for "${eventTitle}"!`, {
      description: "Link copied to clipboard.",
    });
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposalTopic || !proposalEmail) {
      toast.error("Please provide your email and proposal summary.");
      return;
    }
    setIsProposalOpen(false);
    setProposalTopic("");
    setProposalEmail("");
    toast.success("Event Proposal Submitted!", {
      description: "Our IGVP Academic & Venture Board will review your proposal within 48 hours.",
    });
  };

  return (
    <section id="events-section" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border/60">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-chart-4/10 dark:bg-chart-4/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
              Global Events, Webinars & Summits
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            Where Healthtech Leaders & <span className="text-gradient-brand">Venture Capital Converge.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/75 leading-relaxed">
            Participate in CME-accredited webinars, exclusive LP deal-room summits, FDA regulatory workshops, and bio-design pitch sprints.
          </p>
        </div>

        {/* HERO SPOTLIGHT FEATURED EVENT CARD */}
        {featuredEvent && (
          <div className="mb-16 relative group rounded-3xl p-1 bg-gradient-to-r from-primary via-chart-4 to-success shadow-2xl hover:shadow-[0_20px_50px_rgba(4,159,217,0.25)] transition-all duration-500">
            <div className="relative rounded-[22px] bg-card border border-border/80 p-6 md:p-10 overflow-hidden flex flex-col lg:flex-row gap-8 items-stretch">
              
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart-4/5 to-transparent opacity-80 pointer-events-none" />

              {/* Left Column: Event Core Info */}
              <div className="flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-primary text-primary-foreground font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md shadow-primary/30 flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5" /> {featuredEvent.typeBadge}
                    </span>
                    <span className="bg-warning/20 border border-warning/30 text-warning font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                      <FlameIcon className="h-3.5 w-3.5 text-warning animate-bounce" /> {featuredEvent.spotsLeft} VIP Passes Left
                    </span>
                    <span className="bg-surface-2 border border-border text-foreground/80 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary" /> {featuredEvent.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors">
                    {featuredEvent.title}
                  </h3>

                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 font-medium">
                    {featuredEvent.subtitle}
                  </p>

                  {/* Agenda Highlights list */}
                  {featuredEvent.agenda && (
                    <div className="mb-6 bg-surface/80 border border-border/60 rounded-xl p-4 space-y-2 backdrop-blur-sm">
                      <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary" /> Agenda Highlights
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {featuredEvent.agenda.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-foreground/90">
                            <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Speaker Avatars */}
                <div className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3 overflow-hidden p-0.5">
                      {featuredEvent.speakers.map((s, i) => (
                        <img
                          key={i}
                          src={s.avatar}
                          alt={s.name}
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover shadow-sm"
                          title={`${s.name} (${s.org})`}
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">Keynote & VC Panelists</p>
                      <p className="text-[11px] text-foreground/60">
                        {featuredEvent.speakers.map((s) => s.name.split(" ")[0]).join(", ")} + 20 more
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      onClick={() => {
                        setActiveModalEvent(featuredEvent);
                        setTicketIssued(false);
                      }}
                      className="h-12 px-6 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                    >
                      <Ticket className="mr-2 h-4 w-4" /> Reserve VIP Pass
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleAddToCalendar(featuredEvent.title, featuredEvent.date)}
                      className="h-12 px-4 rounded-full border-border hover:bg-surface font-bold text-foreground"
                    >
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: Event Date & Badge Widget */}
              <div className="w-full lg:w-80 bg-surface/90 border border-border/80 rounded-2xl p-6 flex flex-col justify-between relative z-10 backdrop-blur-md">
                <div>
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center mb-6">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Summit Date</p>
                    <p className="text-xl font-extrabold text-foreground">{featuredEvent.date}</p>
                    <p className="text-xs text-foreground/70 font-semibold mt-0.5">{featuredEvent.time}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-semibold">Attendee Format:</span>
                      <span className="font-extrabold text-foreground bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                        {featuredEvent.format}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-semibold">Total Registrations:</span>
                      <span className="font-bold text-success flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-success animate-ping" /> {featuredEvent.attendees}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-semibold">Gated Accreditation:</span>
                      <span className="font-bold text-foreground flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-primary" /> CME + VC Syndicate
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 text-center">
                  <p className="text-[11px] text-foreground/60 mb-3">
                    Already registered for the summit?
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShareEvent(featuredEvent.title)}
                    className="w-full h-9 rounded-lg text-xs font-bold text-primary hover:bg-primary/10"
                  >
                    <Share2 className="mr-1.5 h-3.5 w-3.5" /> Share Event Link
                  </Button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SEARCH BAR & CATEGORY TABS */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 bg-surface/60 border border-border p-4 rounded-2xl backdrop-blur-md">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: "All Gatherings", value: "All", icon: Sparkles },
              { label: "Global Summits", value: "Summit", icon: Award },
              { label: "Live Webinars", value: "Webinar", icon: Video },
              { label: "Bio Workshops", value: "Workshop", icon: Calendar },
              { label: "Executive Roundtables", value: "Roundtable", icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedType === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setSelectedType(tab.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30 scale-105"
                      : "bg-card border border-border/70 text-foreground/80 hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Format Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events, speakers, FDA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-10 rounded-full text-xs bg-card border-border/80 focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="h-10 px-3 rounded-full text-xs font-bold bg-card border border-border/80 text-foreground focus:ring-1 focus:ring-primary outline-none cursor-pointer"
            >
              <option value="All">All Formats</option>
              <option value="Virtual">Virtual Stream</option>
              <option value="Hybrid">Hybrid / Boston</option>
              <option value="VC Gated">VC Gated</option>
            </select>
          </div>
        </div>

        {/* EVENTS CARDS GRID */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-card border border-border rounded-2xl p-8">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-40" />
            <h4 className="text-xl font-bold text-foreground mb-2">No matching events found</h4>
            <p className="text-xs text-foreground/60 mb-6">
              Try adjusting your search query or switching filters to view upcoming webinars and summits.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedType("All");
                setSelectedFormat("All");
                setSearchQuery("");
              }}
              className="h-10 px-6 rounded-full text-xs font-bold"
            >
              Reset All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-card border border-border/80 hover:border-primary/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative"
              >
                {/* Header Mesh Gradient */}
                <div className={`h-24 bg-gradient-to-r ${event.gradient} p-4 flex items-start justify-between relative`}>
                  <span className="bg-card/90 backdrop-blur-md border border-border/60 text-foreground font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    {event.type === "Summit" && <Award className="h-3 w-3 text-primary" />}
                    {event.type === "Webinar" && <Video className="h-3 w-3 text-info" />}
                    {event.type === "Workshop" && <Calendar className="h-3 w-3 text-warning" />}
                    {event.type === "Roundtable" && <ShieldCheck className="h-3 w-3 text-success" />}
                    {event.typeBadge}
                  </span>

                  <span className="bg-background/90 backdrop-blur-md border border-border/60 text-foreground font-extrabold text-[11px] px-3 py-1 rounded-full shadow-sm">
                    {event.date}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Time & Format Info */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-foreground/70 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-primary" /> {event.time}
                      </span>
                      <span className="bg-surface-2 border border-border px-2 py-0.5 rounded text-[10px] uppercase">
                        {event.format}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {event.title}
                    </h4>

                    <p className="text-xs text-foreground/70 leading-relaxed mb-5 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Speakers */}
                    <div className="mb-5">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        Featured Speaker{event.speakers.length > 1 ? "s" : ""}
                      </p>
                      <div className="space-y-2">
                        {event.speakers.map((spk, idx) => (
                          <div key={idx} className="flex items-center gap-2.5">
                            <img
                              src={spk.avatar}
                              alt={spk.name}
                              className="h-7 w-7 rounded-full object-cover ring-1 ring-border"
                            />
                            <div className="overflow-hidden">
                              <p className="text-xs font-bold text-foreground truncate">{spk.name}</p>
                              <p className="text-[10px] text-foreground/60 truncate">{spk.role} · {spk.org}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {event.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-surface border border-border/60 text-foreground/75 text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-success">
                      <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                      <span className="truncate">{event.attendees}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleAddToCalendar(event.title, event.date)}
                        className="h-9 w-9 rounded-full hover:bg-surface border border-border/40 text-foreground/70 hover:text-foreground"
                        title="Add to Calendar"
                      >
                        <Calendar className="h-4 w-4" />
                      </Button>

                      <Button
                        onClick={() => {
                          setActiveModalEvent(event);
                          setTicketIssued(false);
                        }}
                        className="h-9 px-4 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold shadow-md hover:shadow-lg transition-all"
                      >
                        Reserve Spot
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* REGISTRATION TICKET MODAL */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-surface border-b border-border p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <Ticket className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">IGVP Event Pass</p>
                  <h4 className="text-base font-bold text-foreground truncate max-w-[280px]">
                    {activeModalEvent.title}
                  </h4>
                </div>
              </div>
              <button
                onClick={() => setActiveModalEvent(null)}
                className="h-8 w-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {!ticketIssued ? (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="bg-surface-2 border border-border/80 rounded-xl p-4 text-xs space-y-1.5">
                    <div className="flex justify-between font-bold text-foreground">
                      <span>Date & Time:</span>
                      <span className="text-primary">{activeModalEvent.date} · {activeModalEvent.time}</span>
                    </div>
                    <div className="flex justify-between text-foreground/80 font-medium">
                      <span>Access Format:</span>
                      <span>{activeModalEvent.format} ({activeModalEvent.location})</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Full Name *</label>
                    <Input
                      required
                      placeholder="e.g. Dr. Alex Morgan"
                      value={registrantName}
                      onChange={(e) => setRegistrantName(e.target.value)}
                      className="h-10 text-xs rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Work Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="alex@healthventure.com"
                      value={registrantEmail}
                      onChange={(e) => setRegistrantEmail(e.target.value)}
                      className="h-10 text-xs rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Your Ecosystem Role</label>
                    <select
                      value={registrantRole}
                      onChange={(e) => setRegistrantRole(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg text-xs font-semibold bg-background border border-border text-foreground outline-none"
                    >
                      <option value="Founder">Healthcare / STEM Founder</option>
                      <option value="Clinician">Clinician / MD / Researcher</option>
                      <option value="Investor">Venture Capital / Angel Investor</option>
                      <option value="Student">STEM Student / Fellow</option>
                      <option value="Partner">Institutional Partner / Executive</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full h-12 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-bold shadow-lg shadow-primary/20"
                    >
                      Confirm Registration & Claim Pass
                    </Button>
                  </div>
                </form>
              ) : (
                /* Ticket Confirmation Card */
                <div className="text-center py-4 space-y-5 animate-in fade-in duration-300">
                  <div className="h-16 w-16 bg-success/10 border border-success/30 rounded-full flex items-center justify-center mx-auto text-success">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div>
                    <span className="bg-success/20 text-success text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-success/30">
                      VIP Access Pass Confirmed
                    </span>
                    <h4 className="text-xl font-extrabold text-foreground mt-3">You're Registered!</h4>
                    <p className="text-xs text-foreground/70 max-w-sm mx-auto mt-1">
                      We've dispatched your calendar invitation and live access URL to <strong className="text-foreground">{registrantEmail}</strong>.
                    </p>
                  </div>

                  <div className="bg-surface-2 border border-border/80 rounded-2xl p-4 flex items-center justify-between text-left">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Pass Holder</p>
                      <p className="text-sm font-bold text-foreground">{registrantName}</p>
                      <p className="text-[11px] text-primary font-semibold">{registrantRole} Pass · Code #IGVP-2026-X9</p>
                    </div>
                    <QrCode className="h-14 w-14 text-foreground/80 p-1 bg-background border border-border rounded-lg" />
                  </div>

                  <Button
                    onClick={() => setActiveModalEvent(null)}
                    className="w-full h-10 rounded-xl bg-surface border border-border text-foreground hover:bg-surface-2 font-bold text-xs"
                  >
                    Close Window
                  </Button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* PROPOSAL MODAL */}
      {isProposalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
            <div className="bg-surface border-b border-border p-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">IGVP Academic & Venture Board</p>
                <h4 className="text-lg font-bold text-foreground">Propose an Event or Session</h4>
              </div>
              <button
                onClick={() => setIsProposalOpen(false)}
                className="h-8 w-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-foreground/70 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleProposalSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">Your Email Address *</label>
                <Input
                  required
                  type="email"
                  placeholder="speaker@institution.org"
                  value={proposalEmail}
                  onChange={(e) => setProposalEmail(e.target.value)}
                  className="h-10 text-xs rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">Proposed Topic / Title *</label>
                <Input
                  required
                  placeholder="e.g. AI-Assisted Clinical Trials in Oncology"
                  value={proposalTopic}
                  onChange={(e) => setProposalTopic(e.target.value)}
                  className="h-10 text-xs rounded-lg"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-bold shadow-lg"
              >
                Submit Event Proposal
              </Button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 23c-4.97 0-9-3.582-9-8 0-4.07 3.32-7.85 7.15-9.67.36-.17.78.07.82.47.24 2.5 1.5 4.3 3.03 4.8 1.94.63 3.65-1.12 3.65-2.7 0-.74-.29-1.46-.78-2.02-.27-.3-.08-.77.31-.8 3.51-.25 6.82 2.45 6.82 6.92 0 6.075-4.03 11-12 11z" />
    </svg>
  );
}
