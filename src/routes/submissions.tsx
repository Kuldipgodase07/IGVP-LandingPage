import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Database,
  RefreshCw,
  Search,
  Filter,
  Users,
  Ticket,
  Rocket,
  GraduationCap,
  Award,
  Briefcase,
  Building2,
  Mail,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Download,
  Eye,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { fetchAllSubmissionsFromMongoDB } from "@/lib/server-actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/submissions")({
  head: () => ({
    meta: [
      { title: "Real-Time Submissions Explorer · IGVP OS Console" },
      {
        name: "description",
        content:
          "Live real-time project submissions & applicant leads collected across IGVP OS landing pages and MongoDB Atlas collections.",
      },
    ],
  }),
  component: SubmissionsExplorerPage,
});

export interface SubmissionItem {
  id: string;
  sourceCollection: string;
  applicantName: string;
  email: string;
  phone?: string;
  roleOrTrack: string;
  organization?: string;
  details: string;
  ticketNumber?: string;
  submittedAt: string;
  raw: any;
}

function SubmissionsExplorerPage() {
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastRefreshed, setLastRefreshed] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const [submissions, setSubmissions] = useState<SubmissionItem[]>([]);
  const [counts, setCounts] = useState({
    total: 0,
    waitlist: 0,
    founders: 0,
    students: 0,
    fellows: 0,
    investors: 0,
    partners: 0,
    providers: 0,
    newsletter: 0,
  });

  const [selectedItem, setSelectedItem] = useState<SubmissionItem | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchAllSubmissionsFromMongoDB();
      let allItems: SubmissionItem[] = [];

      // Combine MongoDB data
      if (res.data) {
        const d = res.data;

        // 1. Waitlist
        d.waitlist.forEach((item: any) => {
          allItems.push({
            id: item._id || item.id,
            sourceCollection: "waitlist_users",
            applicantName: item.fullName || "Anonymous Registrant",
            email: item.email || "",
            phone: item.phone,
            roleOrTrack: `Waitlist: ${item.role || "General"}`,
            organization: item.organization,
            details: `Cohort: ${item.cohort || "Q3 2026"} | Goal: ${item.primaryGoal || "Incubation"}`,
            ticketNumber: item.ticketNumber,
            submittedAt: item.submittedAt || new Date().toISOString(),
            raw: item,
          });
        });

        // 2. Founders
        d.founders.forEach((item: any) => {
          allItems.push({
            id: item._id || item.id,
            sourceCollection: "founder_applications",
            applicantName: item.fullName || "Bio Founder",
            email: item.email || "",
            phone: item.phone,
            roleOrTrack: "🚀 Founder Accelerator",
            organization: item.startupName || "Stealth Venture",
            details: `Stage: ${item.stage || "Pre-Clinical"} | Field: ${item.therapeuticArea || "Biotech"}`,
            submittedAt: item.submittedAt || new Date().toISOString(),
            raw: item,
          });
        });

        // 3. Students
        d.students.forEach((item: any) => {
          allItems.push({
            id: item._id || item.id,
            sourceCollection: "student_applications",
            applicantName: item.fullName || "STEM Student",
            email: item.email || "",
            roleOrTrack: "🎓 STEM Sprint Analyst",
            organization: item.university || "University",
            details: `Degree: ${item.degreeProgram || "Undergrad"} | Field: ${item.fieldOfStudy || "BioE"}`,
            submittedAt: item.submittedAt || new Date().toISOString(),
            raw: item,
          });
        });

        // 4. Fellows
        d.fellows.forEach((item: any) => {
          allItems.push({
            id: item._id || item.id,
            sourceCollection: "fellowship_applications",
            applicantName: item.fullName || "Executive Fellow",
            email: item.email || "",
            phone: item.phone,
            roleOrTrack: "🏆 Executive Fellowship",
            organization: item.company || "Healthcare Firm",
            details: `Role: ${item.currentRole || "Executive"} | Track: ${item.fellowshipTrack || "Leadership"}`,
            submittedAt: item.submittedAt || new Date().toISOString(),
            raw: item,
          });
        });

        // 5. Investors
        d.investors.forEach((item: any) => {
          allItems.push({
            id: item._id || item.id,
            sourceCollection: "investor_applications",
            applicantName: item.fullName || "Venture Investor",
            email: item.email || "",
            phone: item.phone,
            roleOrTrack: "💼 Angel Syndicate",
            organization: item.investorType || "Angel Investor",
            details: `Check Size: ${item.checkSize || "$25k"} | Target: ${item.targetSectors || "MedTech"}`,
            submittedAt: item.submittedAt || new Date().toISOString(),
            raw: item,
          });
        });

        // 6. Partners
        d.partners.forEach((item: any) => {
          allItems.push({
            id: item._id || item.id,
            sourceCollection: "partner_applications",
            applicantName: item.fullName || "Institutional Lead",
            email: item.email || "",
            phone: item.phone,
            roleOrTrack: "🏥 Clinical & TTO Partner",
            organization: item.organizationName || "Clinical Site",
            details: `Type: ${item.partnerType || "Hospital"} | Goal: ${item.partnershipGoal || "Trials"}`,
            submittedAt: item.submittedAt || new Date().toISOString(),
            raw: item,
          });
        });

        // 7. Providers
        d.providers.forEach((item: any) => {
          allItems.push({
            id: item._id || item.id,
            sourceCollection: "provider_applications",
            applicantName: item.fullName || "Vetted Vendor",
            email: item.email || "",
            phone: item.phone,
            roleOrTrack: "🛠️ Vetted Service Provider",
            organization: item.companyName || "Legal/Regulatory Firm",
            details: `Category: ${item.serviceCategory || "Delaware Flip"} | Web: ${item.website || "N/A"}`,
            submittedAt: item.submittedAt || new Date().toISOString(),
            raw: item,
          });
        });

        // 8. Newsletter
        d.newsletter.forEach((item: any) => {
          allItems.push({
            id: item._id || item.id,
            sourceCollection: "newsletter_subscribers",
            applicantName: "Subscriber",
            email: item.email || "",
            roleOrTrack: "📧 Newsletter Memo",
            organization: "Venture Memos",
            details: "Subscribed to Weekly Cross-Border Memos",
            submittedAt: item.subscribedAt || new Date().toISOString(),
            raw: item,
          });
        });

        setCounts({
          total: allItems.length,
          waitlist: d.waitlist.length,
          founders: d.founders.length,
          students: d.students.length,
          fellows: d.fellows.length,
          investors: d.investors.length,
          partners: d.partners.length,
          providers: d.providers.length,
          newsletter: d.newsletter.length,
        });
      }

      // Also merge any local registrations if present
      try {
        const localUser = localStorage.getItem("igvp_waitlist_user_registration");
        if (localUser) {
          const parsed = JSON.parse(localUser);
          if (parsed && parsed.email && !allItems.some((i) => i.email === parsed.email)) {
            allItems.unshift({
              id: parsed.id || Date.now().toString(),
              sourceCollection: "waitlist_users",
              applicantName: parsed.fullName,
              email: parsed.email,
              phone: parsed.phone,
              roleOrTrack: `Waitlist: ${parsed.role}`,
              organization: parsed.organization || "Personal Registration",
              details: `Cohort: ${parsed.cohort} | Goal: ${parsed.primaryGoal}`,
              ticketNumber: parsed.ticketNumber,
              submittedAt: parsed.submittedAt || new Date().toISOString(),
              raw: parsed,
            });
          }
        }
      } catch (err) {
        // ignore
      }

      // Sort newest first
      allItems.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

      setSubmissions(allItems);
      setLastRefreshed(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Submissions load error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    // Auto-refresh interval every 6 seconds for real-time live feed experience
    const interval = setInterval(() => {
      if (autoRefresh) {
        loadData();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const filteredItems = submissions.filter((item) => {
    const matchesFilter =
      selectedFilter === "all" || item.sourceCollection === selectedFilter;
    const matchesSearch =
      !searchQuery.trim() ||
      item.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.organization && item.organization.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.ticketNumber && item.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const getCollectionBadgeColor = (coll: string) => {
    switch (coll) {
      case "waitlist_users":
        return "bg-primary/10 text-primary border-primary/30";
      case "founder_applications":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
      case "student_applications":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
      case "fellowship_applications":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30";
      case "investor_applications":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
      case "partner_applications":
        return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30";
      case "provider_applications":
        return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30";
      default:
        return "bg-surface text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white pb-20">
      {/* Header Bar */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl px-6 py-4">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90">
              <BrandLogo size="md" />
            </Link>
            <div className="h-5 w-px bg-border hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-extrabold text-foreground tracking-tight">
                  Real-Time Project Submissions Console
                </h1>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Connected to Database <code className="font-mono text-primary font-bold">igvp_institute_db</code> on MongoDB Atlas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={loadData}
              disabled={loading}
              className="h-9 gap-2 rounded-xl text-xs font-bold border-border"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh Live Feed
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`h-9 gap-2 rounded-xl text-xs font-bold ${
                autoRefresh ? "border-success/40 bg-success/10 text-success" : "border-border"
              }`}
            >
              <Clock className="h-3.5 w-3.5" />
              {autoRefresh ? "Live Syncing (6s)" : "Paused"}
            </Button>

            <ThemeToggle />

            <Button asChild size="sm" className="h-9 rounded-xl bg-primary text-white text-xs font-bold">
              <Link to="/">
                <ArrowLeft className="h-3.5 w-3.5 mr-1.5" /> Main OS Hub
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 space-y-6">

        {/* Analytics Top Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3.5">
          <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-[11px] font-bold uppercase tracking-wider">Total Leads</span>
              <Database className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-2">
              <p className="text-2xl sm:text-3xl font-black text-foreground">{counts.total}</p>
              <p className="text-[11px] text-success font-semibold flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="h-3 w-3" /> Live in Atlas
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-[11px] font-bold uppercase tracking-wider">Waitlist Users</span>
              <Ticket className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-2">
              <p className="text-2xl sm:text-3xl font-black text-foreground">{counts.waitlist}</p>
              <p className="text-[11px] text-muted-foreground font-semibold">Priority Slots Reserved</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-[11px] font-bold uppercase tracking-wider">Founders</span>
              <Rocket className="h-4 w-4 text-amber-500" />
            </div>
            <div className="mt-2">
              <p className="text-2xl sm:text-3xl font-black text-foreground">{counts.founders}</p>
              <p className="text-[11px] text-muted-foreground font-semibold">Accelerator Applicants</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-[11px] font-bold uppercase tracking-wider">STEM Students</span>
              <GraduationCap className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-2">
              <p className="text-2xl sm:text-3xl font-black text-foreground">{counts.students}</p>
              <p className="text-[11px] text-muted-foreground font-semibold">Sprint Participants</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs flex flex-col justify-between col-span-2 sm:col-span-4 lg:col-span-1">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-[11px] font-bold uppercase tracking-wider">Investors & Partners</span>
              <Building2 className="h-4 w-4 text-blue-500" />
            </div>
            <div className="mt-2">
              <p className="text-2xl sm:text-3xl font-black text-foreground">{counts.investors + counts.partners}</p>
              <p className="text-[11px] text-muted-foreground font-semibold">Clinical & VC Decks</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border/80">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: "all", label: `All (${submissions.length})` },
              { id: "waitlist_users", label: `🎟️ Waitlist (${counts.waitlist})` },
              { id: "founder_applications", label: `🚀 Founders (${counts.founders})` },
              { id: "student_applications", label: `🎓 Students (${counts.students})` },
              { id: "fellowship_applications", label: `🏆 Fellows (${counts.fellows})` },
              { id: "investor_applications", label: `💼 Investors (${counts.investors})` },
              { id: "partner_applications", label: `🏥 Partners (${counts.partners})` },
              { id: "provider_applications", label: `🛠️ Vendors (${counts.providers})` },
              { id: "newsletter_subscribers", label: `📧 Memos (${counts.newsletter})` },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedFilter === f.id
                    ? "bg-primary text-white font-bold shadow-xs"
                    : "text-foreground/70 hover:text-foreground hover:bg-surface"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, org..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 pl-9 text-xs bg-background rounded-xl border-border"
            />
          </div>
        </div>

        {/* Submissions Data Table */}
        <div className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xl">
          <div className="p-4 border-b border-border flex items-center justify-between bg-surface/50">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                Live Submissions Stream
              </span>
              <Badge variant="outline" className="text-[10px] font-bold">
                {filteredItems.length} Records Found
              </Badge>
            </div>
            {lastRefreshed && (
              <span className="text-[11px] text-muted-foreground">
                Last synced at <span className="font-semibold text-foreground">{lastRefreshed}</span>
              </span>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <Database className="h-10 w-10 text-muted-foreground mx-auto opacity-50" />
              <p className="text-sm font-semibold text-foreground">No submissions found matching criteria</p>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                Submit any form on the IGVP landing page or persona tracks to watch real-time entries appear here instantly!
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-[11px] uppercase font-bold text-muted-foreground">
                    <th className="py-3 px-4">Applicant Name</th>
                    <th className="py-3 px-4">Contact Info</th>
                    <th className="py-3 px-4">Collection / Track</th>
                    <th className="py-3 px-4">Organization</th>
                    <th className="py-3 px-4">Details / Ticket</th>
                    <th className="py-3 px-4">Date & Time</th>
                    <th className="py-3 px-4 text-right">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 font-medium">
                  {filteredItems.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-surface/70 transition-colors cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-foreground block">{item.applicantName}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-foreground block truncate max-w-[180px]">{item.email}</span>
                        {item.phone && <span className="text-[10px] text-muted-foreground block">{item.phone}</span>}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-bold ${getCollectionBadgeColor(item.sourceCollection)}`}>
                          {item.roleOrTrack}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-foreground truncate block max-w-[160px]">
                          {item.organization || "Personal Entry"}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-foreground/80 truncate block max-w-[200px]">{item.details}</span>
                        {item.ticketNumber && (
                          <span className="font-mono text-[10px] text-primary font-bold">{item.ticketNumber}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-muted-foreground text-[11px] whitespace-nowrap">
                        {new Date(item.submittedAt).toLocaleDateString()} · {new Date(item.submittedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground hover:text-primary"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedItem(item);
                          }}
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Submission Detail Inspection Modal */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="sm:max-w-[540px] p-0 overflow-hidden bg-background border-border shadow-2xl rounded-2xl">
            <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border-b border-border/60 p-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[11px] font-bold mb-1">
                <Database className="h-3 w-3" /> MongoDB Atlas Document Inspection
              </div>
              <DialogTitle className="text-xl font-extrabold text-foreground">
                {selectedItem.applicantName}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Stored in MongoDB Collection: <code className="font-mono font-bold text-primary">{selectedItem.sourceCollection}</code>
              </DialogDescription>
            </div>

            <div className="p-6 space-y-4 text-xs max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-card border border-border">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">Email Address</span>
                  <span className="font-bold text-foreground text-sm truncate block">{selectedItem.email}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">Phone</span>
                  <span className="font-bold text-foreground text-sm">{selectedItem.phone || "Not provided"}</span>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">Track / Role</span>
                  <span className="font-bold text-primary">{selectedItem.roleOrTrack}</span>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">Organization</span>
                  <span className="font-bold text-foreground">{selectedItem.organization || "Personal"}</span>
                </div>
              </div>

              {selectedItem.ticketNumber && (
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-between">
                  <span className="font-bold text-foreground">Verified Ticket ID</span>
                  <span className="font-mono font-extrabold text-primary text-sm">{selectedItem.ticketNumber}</span>
                </div>
              )}

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase text-muted-foreground">Raw Atlas JSON Payload</span>
                <pre className="p-3 rounded-xl bg-muted/60 border border-border font-mono text-[11px] overflow-x-auto text-foreground">
                  {JSON.stringify(selectedItem.raw, null, 2)}
                </pre>
              </div>

              <div className="pt-2 flex justify-end">
                <Button
                  onClick={() => setSelectedItem(null)}
                  className="h-9 px-5 rounded-xl bg-primary text-white text-xs font-bold"
                >
                  Close Inspection
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
