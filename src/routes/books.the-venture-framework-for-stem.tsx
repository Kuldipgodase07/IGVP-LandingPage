import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  Sparkles,
  Stethoscope,
  Building2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  Calendar,
  Mail,
  ArrowUpRight,
  X,
  Check,
  BookMarked,
  Info,
  ExternalLink,
  Sliders,
  Calculator,
  HelpCircle,
  ChevronDown,
  Eye,
  Bookmark,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BrandLogo } from "@/components/brand-logo";
import { PersonaHeader } from "@/components/persona-header";

export const Route = createFileRoute("/books/the-venture-framework-for-stem")({
  head: () => ({
    meta: [
      { title: "The Venture Framework for STEM | IGVP Institute" },
      {
        name: "description",
        content:
          "The Venture Framework for STEM is a practical workbook for scientists, clinicians, engineers, and venture professionals navigating healthcare commercialization, regulation, reimbursement, and capital.",
      },
      { property: "og:title", content: "The Venture Framework for STEM | IGVP Institute" },
      {
        property: "og:description",
        content:
          "Technically Brilliant. Commercially Armed. The hands-on engineering-minded workbook for healthcare innovation leaders.",
      },
      { property: "og:type", content: "book" },
    ],
  }),
  component: BookLandingPage,
});

function BookLandingPage() {
  const [getModalOpen, setGetModalOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("STEM Graduate Student / Postdoc");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Interactive Live Simulator State
  const [simTab, setSimTab] = useState<"captable" | "fda" | "reimbursement">("captable");
  const [safeAmount, setSafeAmount] = useState(500000);
  const [postCap, setPostCap] = useState(4000000);
  const [fdaIsSaMD, setFdaIsSaMD] = useState(true);
  const [fdaPredicate, setFdaPredicate] = useState(true);
  const [reimbursementType, setReimbursementType] = useState<"CPT1" | "CPT3" | "MAC">("CPT1");

  // Chapter Accordion State
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);

  // Calculate Cap Table Math dynamically
  const safeDilution = ((safeAmount / postCap) * 100).toFixed(1);
  const founderEquity = (80 - Number(safeDilution)).toFixed(1);

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userEmail) {
      setDownloadSuccess(true);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] dark:bg-[#0B1F33] text-[#102A43] dark:text-white font-sans selection:bg-[#049FD9] selection:text-white">
      {/* Floating Persona Header with Books Track */}
      <PersonaHeader currentTrack="Books" />

      {/* Main Content Padding for Fixed Header */}
      <main className="pt-24 md:pt-28 relative overflow-hidden">
        {/* Top Seamless Scientific Grid Background */}
        <div
          className="absolute inset-x-0 top-0 h-[800px] z-0 opacity-[0.25] dark:opacity-[0.16] pointer-events-none [mask-image:radial-gradient(ellipse_100%_80%_at_50%_0%,#000_85%,transparent_100%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #049FD9 1px, transparent 1px), linear-gradient(to bottom, #049FD9 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Subtle Breadcrumb Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#5B6B7A] dark:text-slate-400">
            <Link to="/" className="hover:text-[#049FD9] transition-colors">
              IGVP Institute
            </Link>
            <ChevronRight className="h-3 w-3 text-[#D6E4F0] dark:text-slate-600" />
            <Link to="/books" className="text-[#049FD9] hover:underline font-bold">
              Books
            </Link>
            <ChevronRight className="h-3 w-3 text-[#D6E4F0] dark:text-slate-600" />
            <span className="text-[#102A43] dark:text-white truncate">
              The Venture Framework for STEM
            </span>
          </nav>
        </div>

        {/* ================================================== */}
        {/* HERO SECTION WITH MODERN 3D MOCKUP & HIGHLIGHT BADGES */}
        {/* ================================================== */}
        <section className="relative overflow-hidden pt-4 pb-20 md:pt-8 md:pb-28">

          {/* Glowing Atmospheric Lights */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 h-[420px] w-[550px] rounded-full bg-[#049FD9]/15 dark:bg-[#049FD9]/20 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 h-[350px] w-[450px] rounded-full bg-[#0077B6]/10 blur-[110px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* LEFT COLUMN: Hero Copy & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E6F4FB] dark:bg-[#0E3A5A] border border-[#049FD9]/30 text-[#0077B6] dark:text-[#049FD9] text-xs font-bold tracking-wider uppercase shadow-xs">
                  <Sparkles className="h-3.5 w-3.5 text-[#049FD9] animate-pulse" />
                  <span>IGVP INSTITUTE • FLAGSHIP WORKBOOK</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2ECC71]" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102A43] dark:text-white leading-[1.08]">
                  TECHNICALLY BRILLIANT.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049FD9] via-[#0288C7] to-[#0077B6]">
                    COMMERCIALLY ARMED.
                  </span>
                </h1>

                <div className="border-l-3 border-[#049FD9] pl-4 py-1 space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] dark:text-slate-100">
                    The Venture Framework for STEM
                  </h2>
                  <p className="text-xs font-mono text-[#049FD9] uppercase tracking-widest font-semibold">
                    Strategies for Building & Scaling Tech Enterprises
                  </p>
                </div>

                <p className="text-base sm:text-lg text-[#5B6B7A] dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                  “The hands-on, engineering-minded workbook built for the scientists, clinicians,
                  and engineers ready to lead the next generation of healthcare innovation.”
                </p>

                {/* Key Feature Metric Highlights */}
                <div className="grid grid-cols-3 gap-3 max-w-lg pt-1">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] shadow-xs">
                    <span className="block text-lg font-bold font-mono text-[#049FD9]">6 Modules</span>
                    <span className="text-[11px] text-[#5B6B7A] dark:text-slate-400">Venture Literacy</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] shadow-xs">
                    <span className="block text-lg font-bold font-mono text-[#049FD9]">FDA 510(k)</span>
                    <span className="text-[11px] text-[#5B6B7A] dark:text-slate-400">SaMD & De Novo</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] shadow-xs">
                    <span className="block text-lg font-bold font-mono text-[#2ECC71]">Cap Table</span>
                    <span className="text-[11px] text-[#5B6B7A] dark:text-slate-400">Excel Math Models</span>
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    onClick={() => setGetModalOpen(true)}
                    className="h-13 px-8 rounded-full bg-[#049FD9] hover:bg-[#0288C7] active:bg-[#0077B6] text-white text-base font-bold shadow-[0_8px_24px_rgba(4,159,217,0.4)] transition-all hover:shadow-[0_12px_30px_rgba(4,159,217,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                  >
                    <BookOpen className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span>GET THE BOOK</span>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-13 px-7 rounded-full border-[#D6E4F0] dark:border-[#2C4A66] bg-white dark:bg-[#16324F] hover:bg-[#E6F4FB] dark:hover:bg-[#0E3A5A] text-[#102A43] dark:text-white text-sm font-bold shadow-xs transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <a href="#live-simulator">
                      <Calculator className="h-4 w-4 text-[#049FD9]" />
                      <span>TRY LIVE SIMULATOR</span>
                    </a>
                  </Button>
                </div>

                {/* Micro Message */}
                <div className="pt-3 flex items-center gap-3">
                  <div className="h-px w-12 bg-[#049FD9]/40" />
                  <p className="font-serif italic text-lg text-[#0077B6] dark:text-[#049FD9]">
                    From Lab to Ledger
                  </p>
                  <span className="text-xs text-[#5B6B7A] dark:text-slate-400 font-mono">
                    — IGVP Operating Principle
                  </span>
                </div>
              </div>

              {/* RIGHT COLUMN: Realistic 3D Hardcover Mockup */}
              <div className="lg:col-span-5 flex justify-center relative">
                <div className="relative group max-w-md w-full">
                  {/* Glowing backdrop shadow */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#049FD9]/25 via-transparent to-[#102A43]/30 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Physical 3D Book Elevation Box */}
                  <div className="relative rounded-2xl bg-white dark:bg-[#16324F] p-3.5 border border-[#D6E4F0] dark:border-[#2C4A66] shadow-[0_25px_60px_rgba(16,42,67,0.18)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_35px_70px_rgba(4,159,217,0.3)]">
                    <div className="relative overflow-hidden rounded-xl bg-[#102A43] aspect-[3/4]">
                      <img
                        src="/venture_framework_stem_book_cover.jpg"
                        alt="The Venture Framework for STEM Hardcover Book"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      {/* Overlay Lightbox Button */}
                      <button
                        onClick={() => setPreviewModalOpen("cover")}
                        className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-[#102A43]/90 backdrop-blur-md border border-[#049FD9]/50 text-white text-[11px] font-mono font-bold flex items-center gap-1.5 hover:bg-[#049FD9] transition-all shadow-md"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Zoom Cover</span>
                      </button>

                      {/* Bottom Banner Badge */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#102A43]/95 backdrop-blur-md border border-[#049FD9]/40 text-white text-xs flex items-center justify-between shadow-lg">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#2ECC71] animate-pulse" />
                          <span className="font-mono text-[11px] text-slate-200 font-bold">
                            1st Edition • Hardcover & Digital PDF
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-[#5B6B7A] dark:text-slate-300">
                      <span className="font-semibold">340 Pages • Actionable Checklists</span>
                      <span className="font-mono text-[#049FD9] font-bold">ISBN 978-1-989-102A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* TRUST / POSITIONING STRIP */}
        {/* ================================================== */}
        <section className="border-y border-[#D6E4F0] dark:border-[#2C4A66] bg-white dark:bg-[#0E2238] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#5B6B7A] dark:text-slate-300 shrink-0">
                BUILT FOR THE PEOPLE BUILDING THE FUTURE OF HEALTHCARE
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {[
                  "STEM",
                  "CLINICAL",
                  "VENTURE",
                  "REGULATORY",
                  "CAPITAL",
                  "COMMERCIALIZATION",
                ].map((cat) => (
                  <span
                    key={cat}
                    className="px-3.5 py-1.5 rounded-md bg-[#F4F7FA] dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] text-[11px] font-mono font-bold text-[#102A43] dark:text-slate-200 hover:border-[#049FD9] transition-colors"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* NEW INTERACTIVE LIVE WORKBOOK SIMULATOR WIDGET */}
        {/* ================================================== */}
        <section id="live-simulator" className="py-20 md:py-24 bg-[#102A43] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-3 mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#049FD9]/20 text-[#049FD9] font-mono text-xs font-bold uppercase tracking-wider">
                <Calculator className="h-3.5 w-3.5" />
                INTERACTIVE WORKBOOK SAMPLE WIDGET
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                TRY THE WORKBOOK FRAMEWORKS LIVE
              </h2>
              <p className="text-base text-slate-300">
                Test 3 of the real operational calculators and decision trees included inside the workbook right now.
              </p>
            </div>

            {/* Simulator Container */}
            <div className="rounded-3xl bg-[#0E2238] border border-[#049FD9]/40 p-6 sm:p-10 shadow-2xl space-y-8">
              {/* Tab Selector */}
              <div className="flex items-center gap-3 border-b border-[#2C4A66] pb-4 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setSimTab("captable")}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    simTab === "captable"
                      ? "bg-[#049FD9] text-white shadow-md"
                      : "bg-[#16324F] text-slate-300 hover:bg-[#1B3B5A]"
                  }`}
                >
                  <Sliders className="h-4 w-4" />
                  <span>Module 04: Cap Table Dilution</span>
                </button>

                <button
                  onClick={() => setSimTab("fda")}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    simTab === "fda"
                      ? "bg-[#049FD9] text-white shadow-md"
                      : "bg-[#16324F] text-slate-300 hover:bg-[#1B3B5A]"
                  }`}
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>Module 02: FDA Decision Tree</span>
                </button>

                <button
                  onClick={() => setSimTab("reimbursement")}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    simTab === "reimbursement"
                      ? "bg-[#049FD9] text-white shadow-md"
                      : "bg-[#16324F] text-slate-300 hover:bg-[#1B3B5A]"
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span>Module 03: Reimbursement Audit</span>
                </button>
              </div>

              {/* Tab 1: Cap Table Dilution Simulator */}
              {simTab === "captable" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-xl font-bold text-white">
                      Pre-Seed SAFE Dilution & Founder Retention Calculator
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Adjust your target Pre-Seed SAFE raising amount and Valuation Cap to see founder equity retention after Series A conversion.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-2">
                          <span className="text-slate-300">SAFE Capital Raised:</span>
                          <span className="font-bold text-[#049FD9]">${safeAmount.toLocaleString()} USD</span>
                        </div>
                        <input
                          type="range"
                          min="250000"
                          max="2000000"
                          step="50000"
                          value={safeAmount}
                          onChange={(e) => setSafeAmount(Number(e.target.value))}
                          className="w-full accent-[#049FD9]"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-2">
                          <span className="text-slate-300">Valuation Cap (Post-Money):</span>
                          <span className="font-bold text-[#049FD9]">${postCap.toLocaleString()} USD</span>
                        </div>
                        <input
                          type="range"
                          min="2000000"
                          max="10000000"
                          step="500000"
                          value={postCap}
                          onChange={(e) => setPostCap(Number(e.target.value))}
                          className="w-full accent-[#049FD9]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#16324F] p-6 rounded-2xl border border-[#049FD9]/40 space-y-4 font-mono">
                    <div className="text-xs text-[#049FD9] font-bold uppercase">DYNAMIC CAP TABLE OUTPUT</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-slate-300 pb-1 border-b border-slate-700">
                        <span>SAFE Dilution %:</span>
                        <span className="font-bold text-[#F4B942]">{safeDilution}%</span>
                      </div>
                      <div className="flex justify-between text-slate-300 pb-1 border-b border-slate-700">
                        <span>Option Pool Reservation:</span>
                        <span className="font-bold text-white">10.0%</span>
                      </div>
                      <div className="flex justify-between text-white font-bold pt-2 text-sm">
                        <span>Defended Founder Equity:</span>
                        <span className="text-[#2ECC71]">{founderEquity}%</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0E2238] text-[11px] text-slate-300 font-sans">
                      Includes pre-built Excel formula templates with full SAFE to Series A conversion math inside Chapter 8.
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: FDA Decision Tree Simulator */}
              {simTab === "fda" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-xl font-bold text-white">
                      Interactive FDA Regulatory Pathway Decision Tree
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Select your healthcare software/device parameters to determine your FDA submission classification and clinical evidence requirement.
                    </p>

                    <div className="space-y-4 text-xs font-mono">
                      <div className="p-4 rounded-xl bg-[#16324F] border border-[#2C4A66] flex items-center justify-between">
                        <span>Is product Software as a Medical Device (SaMD)?</span>
                        <button
                          onClick={() => setFdaIsSaMD(!fdaIsSaMD)}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                            fdaIsSaMD ? "bg-[#049FD9] text-white" : "bg-slate-700 text-slate-300"
                          }`}
                        >
                          {fdaIsSaMD ? "YES" : "NO"}
                        </button>
                      </div>

                      <div className="p-4 rounded-xl bg-[#16324F] border border-[#2C4A66] flex items-center justify-between">
                        <span>Does a substantially equivalent predicate device exist?</span>
                        <button
                          onClick={() => setFdaPredicate(!fdaPredicate)}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                            fdaPredicate ? "bg-[#049FD9] text-white" : "bg-slate-700 text-slate-300"
                          }`}
                        >
                          {fdaPredicate ? "YES (510k)" : "NO (De Novo)"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#16324F] p-6 rounded-2xl border border-[#049FD9]/40 space-y-4 font-mono">
                    <div className="text-xs text-[#049FD9] font-bold uppercase">CLASSIFICATION RESULT</div>
                    <div className="space-y-2 text-xs">
                      <div className="text-sm font-bold text-[#2ECC71]">
                        {fdaPredicate ? "FDA 510(k) Premarket Notification" : "FDA De Novo Classification Request"}
                      </div>
                      <p className="text-[11px] text-slate-300 font-sans">
                        {fdaPredicate
                          ? "Demonstrate substantial equivalence to predicate. Typical timeline: 90-180 days."
                          : "Establish risk-benefit profile without existing predicate. Requires clinical safety evidence."}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Reimbursement Audit */}
              {simTab === "reimbursement" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-xl font-bold text-white">
                      CPT Reimbursement & Value-Based Care Audit Sheet
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Toggle clinical payor contract models to inspect CPT category eligibility and hospital procurement requirements.
                    </p>

                    <div className="flex gap-2">
                      {(["CPT1", "CPT3", "MAC"] as const).map((type) => (
                        <button
                          key={type}
                          onClick={() => setReimbursementType(type)}
                          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold ${
                            reimbursementType === type ? "bg-[#049FD9] text-white" : "bg-[#16324F] text-slate-300"
                          }`}
                        >
                          {type === "CPT1" ? "CPT Category I" : type === "CPT3" ? "CPT Category III" : "MAC LCD Audit"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#16324F] p-6 rounded-2xl border border-[#049FD9]/40 space-y-3 font-mono text-xs">
                    <div className="text-xs text-[#049FD9] font-bold uppercase">REIMBURSEMENT STRATEGY</div>
                    <p className="text-slate-300 font-sans text-xs">
                      {reimbursementType === "CPT1" && "Active established fee-for-service coding. Requires multi-center clinical utility evidence."}
                      {reimbursementType === "CPT3" && "Emerging technology tracking code. Useful for collecting clinical payor utilization data."}
                      {reimbursementType === "MAC" && "Regional Medicare Administrative Contractor Local Coverage Determination audit guidelines."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* THE PROBLEM SECTION */}
        {/* ================================================== */}
        <section className="py-20 md:py-28 bg-[#F4F7FA] dark:bg-[#0B1F33] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-bold text-[#049FD9] uppercase tracking-widest font-mono">
                THE STRUCTURAL GAP
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] dark:text-white leading-tight">
                SCIENCE CAN SOLVE THE PROBLEM.
                <br />
                <span className="text-[#0077B6] dark:text-[#049FD9]">
                  BUT CAN YOU COMMERCIALIZE THE SOLUTION?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#5B6B7A] dark:text-slate-300 leading-relaxed font-medium">
                “STEM education trains you to solve complex technical problems, but leaves you blind
                to the commercial realities of the healthcare venture ecosystem.”
              </p>
              <p className="text-sm text-[#5B6B7A] dark:text-slate-400">
                Existing business books stay surface-level, and generic startup platforms ignore
                healthcare-specific regulatory complexities.
              </p>
            </div>

            {/* Editorial Contrast Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
              {/* LEFT: WHAT STEM TEACHES */}
              <div className="md:col-span-5 rounded-2xl bg-white dark:bg-[#16324F] p-8 border border-[#D6E4F0] dark:border-[#2C4A66] shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-2 w-full bg-slate-300 dark:bg-slate-700" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    01 • ACADEMIC FOUNDATION
                  </span>
                  <GraduationCap className="h-5 w-5 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#102A43] dark:text-white">
                  WHAT STEM TEACHES
                </h3>
                <ul className="space-y-3">
                  {[
                    "Deep Technical Research & Analysis",
                    "Rigorous Engineering & Lab Methodologies",
                    "Pure Scientific Knowledge Discovery",
                    "Clinical Physiology & Disease Pathology",
                    "Siloed Technical Problem Solving",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-[#5B6B7A] dark:text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-slate-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CENTER CONNECTING BRIDGE */}
              <div className="md:col-span-1 flex flex-col items-center justify-center my-4 md:my-0">
                <div className="hidden md:block h-12 w-px bg-[#049FD9]" />
                <div className="px-4 py-2 rounded-full bg-[#102A43] text-white text-[10px] font-mono font-bold uppercase tracking-wider text-center border border-[#049FD9] shadow-lg">
                  THE VENTURE FRAMEWORK FOR STEM
                </div>
                <div className="hidden md:block h-12 w-px bg-[#049FD9]" />
              </div>

              {/* RIGHT: WHAT VENTURES REQUIRE */}
              <div className="md:col-span-5 rounded-2xl bg-white dark:bg-[#16324F] p-8 border border-[#049FD9]/40 dark:border-[#049FD9]/50 shadow-md space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-2 w-full bg-[#049FD9]" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#049FD9] uppercase tracking-wider">
                    02 • VENTURE EXECUTION
                  </span>
                  <TrendingUp className="h-5 w-5 text-[#049FD9]" />
                </div>
                <h3 className="text-2xl font-bold text-[#102A43] dark:text-white">
                  WHAT VENTURES REQUIRE
                </h3>
                <ul className="space-y-3">
                  {[
                    "Healthcare Commercial Strategy & Go-To-Market",
                    "De-Risked FDA Regulatory Pathways (SaMD, 510k, De Novo)",
                    "CPT Reimbursement & Value-Based Care Models",
                    "Capitalization Table Modeling & Equity Defense",
                    "Institutional Investor Readiness & Diligence",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#102A43] dark:text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-[#049FD9] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* THE SOLUTION — 6 MODULES + CHAPTER INDEX */}
        {/* ================================================== */}
        <section className="py-20 md:py-28 bg-white dark:bg-[#0E2238] border-y border-[#D6E4F0] dark:border-[#2C4A66]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3 mb-16">
              <span className="text-xs font-bold text-[#049FD9] uppercase tracking-widest font-mono">
                STRUCTURED WORKBOOK CURRICULUM
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] dark:text-white">
                6 MODULES OF TRUE VENTURE LITERACY
              </h2>
              <p className="text-base sm:text-lg text-[#5B6B7A] dark:text-slate-300">
                “Go beyond theory. This workbook gives you actionable checklists you can run this
                quarter and frameworks pulled from real venture capital operations.”
              </p>
            </div>

            {/* 6 Numbered Editorial Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Module 01 */}
              <div className="group rounded-2xl bg-[#F9FBFD] dark:bg-[#16324F] p-8 border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] transition-all duration-300 hover:shadow-lg relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#049FD9] group-hover:scale-110 transition-transform">
                      01
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#E6F4FB] dark:bg-[#0E3A5A] text-[10px] font-mono font-bold text-[#0077B6] dark:text-[#049FD9] uppercase">
                      COMMERCIAL BLIND SPOTS
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white mb-2">
                    Audit Commercial Blind Spots
                  </h3>
                  <p className="text-sm text-[#5B6B7A] dark:text-slate-300 leading-relaxed">
                    Identify lethal commercial flaws before venture investors do. Learn how to map customer personas, clinical decision makers, and procurement friction points.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D6E4F0] dark:border-[#2C4A66] flex items-center justify-between text-xs font-mono text-[#049FD9]">
                  <span>Chapters 1-3 • Checklists Included</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Module 02 */}
              <div className="group rounded-2xl bg-[#F9FBFD] dark:bg-[#16324F] p-8 border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] transition-all duration-300 hover:shadow-lg relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#049FD9] group-hover:scale-110 transition-transform">
                      02
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#E6F4FB] dark:bg-[#0E3A5A] text-[10px] font-mono font-bold text-[#0077B6] dark:text-[#049FD9] uppercase">
                      FDA / REGULATORY
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white mb-2">
                    De-Risk FDA Approvals
                  </h3>
                  <p className="text-sm text-[#5B6B7A] dark:text-slate-300 leading-relaxed">
                    Navigate SaMD, 510(k), De Novo, and PCCP (Predetermined Change Control Plan) frameworks confidently without burning venture capital on avoidable delays.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D6E4F0] dark:border-[#2C4A66] flex items-center justify-between text-xs font-mono text-[#049FD9]">
                  <span>Chapters 4-6 • Decision Trees</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Module 03 */}
              <div className="group rounded-2xl bg-[#F9FBFD] dark:bg-[#16324F] p-8 border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] transition-all duration-300 hover:shadow-lg relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#049FD9] group-hover:scale-110 transition-transform">
                      03
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#E6F4FB] dark:bg-[#0E3A5A] text-[10px] font-mono font-bold text-[#0077B6] dark:text-[#049FD9] uppercase">
                      ECONOMICS
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white mb-2">
                    Secure the Economics
                  </h3>
                  <p className="text-sm text-[#5B6B7A] dark:text-slate-300 leading-relaxed">
                    Master commercial insurance reimbursement models, CPT/HCPCS code assignments, MAC coverage decisions, and value-based healthcare economics.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D6E4F0] dark:border-[#2C4A66] flex items-center justify-between text-xs font-mono text-[#049FD9]">
                  <span>Chapters 7-9 • Audit Sheets</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Module 04 */}
              <div className="group rounded-2xl bg-[#F9FBFD] dark:bg-[#16324F] p-8 border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] transition-all duration-300 hover:shadow-lg relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#049FD9] group-hover:scale-110 transition-transform">
                      04
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#E6F4FB] dark:bg-[#0E3A5A] text-[10px] font-mono font-bold text-[#0077B6] dark:text-[#049FD9] uppercase">
                      CAPITALIZATION
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white mb-2">
                    Own Your Equity
                  </h3>
                  <p className="text-sm text-[#5B6B7A] dark:text-slate-300 leading-relaxed">
                    Build, manipulate, and defend your capitalization table through Pre-Seed, SAFEs, Series A dilution, option pools, and investor anti-dilution provisions.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D6E4F0] dark:border-[#2C4A66] flex items-center justify-between text-xs font-mono text-[#049FD9]">
                  <span>Chapters 10-12 • Excel Formulas</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Module 05 (CMS Placeholder) */}
              <div className="group rounded-2xl bg-white/60 dark:bg-[#16324F]/40 p-8 border border-dashed border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] transition-all duration-300 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-slate-400 group-hover:text-[#049FD9]">
                      05
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 uppercase">
                      CMS PLACEHOLDER
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-400 dark:text-slate-500 mb-2">
                    MODULE CONTENT
                  </h3>
                  <p className="text-sm text-slate-400 dark:text-slate-500 italic">
                    Coming Soon — Reserved for upcoming advanced clinical trial design & multi-site governance module.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>IGVP CMS Editable Slot</span>
                  <Info className="h-4 w-4" />
                </div>
              </div>

              {/* Module 06 (CMS Placeholder) */}
              <div className="group rounded-2xl bg-white/60 dark:bg-[#16324F]/40 p-8 border border-dashed border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] transition-all duration-300 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-slate-400 group-hover:text-[#049FD9]">
                      06
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 uppercase">
                      CMS PLACEHOLDER
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-400 dark:text-slate-500 mb-2">
                    MODULE CONTENT
                  </h3>
                  <p className="text-sm text-slate-400 dark:text-slate-500 italic">
                    Coming Soon — Reserved for institutional exit strategies, M&A diligence, and strategic buyer positioning.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>IGVP CMS Editable Slot</span>
                  <Info className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* SEARCHABLE CHAPTER ACCORDION INDEX */}
            <div className="p-8 rounded-3xl bg-[#F9FBFD] dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D6E4F0] dark:border-[#2C4A66] pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#049FD9] uppercase">TABLE OF CONTENTS</span>
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white">
                    Explore Chapters & Framework Checklists
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#5B6B7A] dark:text-slate-400">
                  14 Detailed Chapters Across 6 Modules
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { ch: 1, title: "Chapter 1: Mapping the Healthcare Commercial Landscape", module: "Module 01", desc: "Understanding hospital purchasing committees, clinical decision-makers, and payor alignment." },
                  { ch: 2, title: "Chapter 2: Identifying Lethal Commercial Blind Spots", module: "Module 01", desc: "Audit checklist for customer acquisition costs, clinical integration friction, and sales cycle realities." },
                  { ch: 5, title: "Chapter 5: FDA Regulatory Compliance & Classification", module: "Module 02", desc: "Decision tree matrix for SaMD, 510(k) predicate equivalence, and De Novo submission pathways." },
                  { ch: 8, title: "Chapter 8: Reimbursement Economics & CPT Coding", module: "Module 03", desc: "CPT Category I vs III strategy, MAC Local Coverage Determinations, and RVU hospital ROI modeling." },
                  { ch: 11, title: "Chapter 11: Capitalization Table Dilution & Equity Math", module: "Module 04", desc: "Simulating SAFEs, option pools, and Series A anti-dilution provisions with downloadable Excel formulas." },
                ].map((item) => (
                  <div
                    key={item.ch}
                    onClick={() => setExpandedChapter(expandedChapter === item.ch ? null : item.ch)}
                    className="cursor-pointer rounded-xl bg-white dark:bg-[#0E2238] p-4 border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded bg-[#E6F4FB] dark:bg-[#0E3A5A] text-[#0077B6] dark:text-[#049FD9] text-xs font-mono font-bold">
                          {item.module}
                        </span>
                        <h4 className="text-sm font-bold text-[#102A43] dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-[#049FD9] transition-transform ${
                          expandedChapter === item.ch ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {expandedChapter === item.ch && (
                      <p className="mt-3 text-xs text-[#5B6B7A] dark:text-slate-300 pt-2 border-t border-[#D6E4F0] dark:border-[#2C4A66]">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* BOOK EXPERIENCE (WORKBOOK PREVIEWS) */}
        {/* ================================================== */}
        <section className="py-20 md:py-28 bg-[#F4F7FA] dark:bg-[#0B1F33]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3 mb-16">
              <span className="text-xs font-bold text-[#049FD9] uppercase tracking-widest font-mono">
                ACTUAL WORKBOOK SPREADS & TOOLS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] dark:text-white">
                NOT ANOTHER BUSINESS BOOK.
              </h2>
              <p className="text-base sm:text-lg text-[#5B6B7A] dark:text-slate-300">
                “A practical, no-nonsense workbook for turning advanced scientific capability into healthcare venture fluency.”
              </p>
            </div>

            {/* 3 Realistic Workbook Previews */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Preview 1: FDA Regulatory Spread */}
              <div
                onClick={() => setPreviewModalOpen("fda")}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-[#16324F] p-4 border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[4/3] mb-4">
                  <img
                    src="/workbook_preview_spread.jpg"
                    alt="Workbook Page 42 - FDA Regulatory Decision Matrix"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#102A43]/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    PREVIEW • PAGE 42
                  </div>
                  <div className="absolute inset-0 bg-[#049FD9]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white text-[#102A43] text-xs font-bold shadow-lg flex items-center gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5 text-[#049FD9]" />
                      Expand Spread
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#102A43] dark:text-white mb-1">
                  FDA Regulatory De-Risking Matrix
                </h4>
                <p className="text-xs text-[#5B6B7A] dark:text-slate-300">
                  Flowcharts for SaMD, 510(k) predicate identification, and De Novo submission prep.
                </p>
              </div>

              {/* Preview 2: Cap Table Sheet */}
              <div
                onClick={() => setPreviewModalOpen("captable")}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-[#16324F] p-4 border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#102A43] aspect-[4/3] mb-4 p-5 flex flex-col justify-between border border-[#049FD9]/30">
                  <div className="flex items-center justify-between text-xs text-[#049FD9] font-mono">
                    <span>CAP TABLE CALCULATOR</span>
                    <span className="px-2 py-0.5 rounded bg-[#049FD9]/20 text-white text-[10px]">
                      PREVIEW • PAGE 114
                    </span>
                  </div>
                  <div className="space-y-2 font-mono text-[11px] text-slate-200">
                    <div className="flex justify-between border-b border-slate-700 pb-1">
                      <span>Founders Pool (Pre-SAFE)</span>
                      <span className="font-bold text-[#2ECC71]">80.0% (8,000,000 sh)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700 pb-1">
                      <span>Option Pool (Unallocated)</span>
                      <span className="font-bold">10.0% (1,000,000 sh)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700 pb-1 text-[#049FD9]">
                      <span>Institutional SAFE Conversion</span>
                      <span className="font-bold">10.0% ($2.5M Post)</span>
                    </div>
                    <div className="flex justify-between pt-1 text-white font-bold">
                      <span>Post-Series A Target Retention</span>
                      <span className="text-[#F4B942]">54.2% Defended</span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    Interactive Excel / Google Sheets formula templates included with book code.
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#102A43] dark:text-white mb-1">
                  Cap Table Dilution Defense Matrix
                </h4>
                <p className="text-xs text-[#5B6B7A] dark:text-slate-300">
                  Pre-built equity models to simulate SAFE conversions and Series A anti-dilution.
                </p>
              </div>

              {/* Preview 3: Reimbursement Audit */}
              <div
                onClick={() => setPreviewModalOpen("reimbursement")}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-[#16324F] p-4 border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[4/3] mb-4 p-5 flex flex-col justify-between border border-[#2C4A66]">
                  <div className="flex items-center justify-between text-xs text-[#049FD9] font-mono">
                    <span>REIMBURSEMENT CHECKLIST</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-white text-[10px]">
                      PREVIEW • PAGE 168
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#2ECC71]" />
                      <span>CPT Category I vs Category III Mapping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#2ECC71]" />
                      <span>Medicare Administrative Contractor (MAC) LCD Audit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#2ECC71]" />
                      <span>Commercial Payor Pilot Contract Requirements</span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-[#049FD9] pt-2">
                    Actionable clinical economics checklist ready to execute this quarter.
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#102A43] dark:text-white mb-1">
                  Healthcare Reimbursement Audit Sheet
                </h4>
                <p className="text-xs text-[#5B6B7A] dark:text-slate-300">
                  Step-by-step audit for CPT coding, MAC coverage, and hospital value-based care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* WHO IS THIS FOR? (AUDIENCE PERSONAS) */}
        {/* ================================================== */}
        <section className="py-20 md:py-28 bg-white dark:bg-[#0E2238] border-y border-[#D6E4F0] dark:border-[#2C4A66]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3 mb-16">
              <span className="text-xs font-bold text-[#049FD9] uppercase tracking-widest font-mono">
                TARGET AUDIENCE FLUENCY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] dark:text-white">
                BUILT FOR THE TECHNICALLY BRILLIANT.
              </h2>
            </div>

            {/* 5 Persona Editorial Groups */}
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "STEM GRADUATE STUDENTS & POSTDOCS",
                  desc: "Actively weighing an academic career against a venture path. Gain the commercial terminology and venture literacy required to evaluate technology licensing, spinouts, and founder equity.",
                  icon: GraduationCap,
                },
                {
                  num: "02",
                  title: "CLINICIANS (MDs, RNs, PHARMACISTS, DENTISTS)",
                  desc: "Translating front-line clinical insights into scalable ventures. Master FDA classification, hospital procurement workflows, and healthcare economics without leaving clinical practice behind.",
                  icon: Stethoscope,
                },
                {
                  num: "03",
                  title: "EARLY-CAREER VC / PE ANALYSTS",
                  desc: "Seeking technical and commercial fluency for deep-tech healthcare diligence. Use the workbook's audit frameworks to rapidly evaluate incoming pitch decks and scientific founder teams.",
                  icon: TrendingUp,
                },
                {
                  num: "04",
                  title: "TECH-TRANSFER OFFICES (TTOs)",
                  desc: "Looking for rigorous venture education frameworks to train faculty, postdocs, and researchers on de-risking patents and accelerating spinout deal velocity.",
                  icon: Building2,
                },
                {
                  num: "05",
                  title: "HEALTHCARE INCUBATORS & ACCELERATORS",
                  desc: "Looking for a structured foundation for institutional venture education. Deploy the workbook as standard-issue curriculum across cohort onboarding.",
                  icon: Users,
                },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.num}
                    className="p-6 md:p-8 rounded-2xl bg-[#F9FBFD] dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="flex items-start gap-5">
                      <span className="text-2xl font-extrabold font-mono text-[#049FD9] shrink-0 pt-1">
                        {p.num}
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-[#0077B6] dark:text-[#049FD9]" />
                          <h3 className="text-lg md:text-xl font-bold text-[#102A43] dark:text-white">
                            {p.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[#5B6B7A] dark:text-slate-300 max-w-4xl leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#E6F4FB] dark:bg-[#0E3A5A] text-[11px] font-mono font-bold text-[#0077B6] dark:text-[#049FD9] shrink-0">
                      Tailored Frameworks
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* THE VENTURE JOURNEY */}
        {/* ================================================== */}
        <section className="py-20 md:py-28 bg-[#F4F7FA] dark:bg-[#0B1F33] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-bold text-[#049FD9] uppercase tracking-widest font-mono">
                THE HEALTHCARE VENTURE JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] dark:text-white">
                FROM SCIENCE TO SCALE
              </h2>
              <p className="text-sm text-[#5B6B7A] dark:text-slate-400">
                A continuous, 6-stage operational pipeline for healthcare innovation leaders.
              </p>
            </div>

            {/* Horizontal Connected Pipeline */}
            <div className="relative">
              {/* Connecting Cyan Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#049FD9]/30 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
                {[
                  { step: "01", label: "DISCOVER", sub: "Lab IP & Patent Strategy" },
                  { step: "02", label: "VALIDATE", sub: "Clinical Needs Assessment" },
                  { step: "03", label: "REGULATE", sub: "FDA Pathway & Clearance" },
                  { step: "04", label: "COMMERCIALIZE", sub: "Payor Reimbursement & GTM" },
                  { step: "05", label: "CAPITALIZE", sub: "Cap Table & Institutional VC" },
                  { step: "06", label: "SCALE", sub: "Health System Adoption" },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="rounded-2xl bg-white dark:bg-[#16324F] p-5 border border-[#D6E4F0] dark:border-[#2C4A66] text-center space-y-2 hover:border-[#049FD9] shadow-sm transition-all hover:-translate-y-1"
                  >
                    <div className="h-10 w-10 mx-auto rounded-full bg-[#E6F4FB] dark:bg-[#0E3A5A] border border-[#049FD9]/40 flex items-center justify-center text-[#049FD9] font-mono font-bold text-sm">
                      {s.step}
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold font-mono tracking-wider text-[#102A43] dark:text-white">
                      {s.label}
                    </h4>
                    <p className="text-[11px] text-[#5B6B7A] dark:text-slate-400 leading-tight">
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* QUOTE / EDITORIAL TESTIMONIAL */}
        {/* ================================================== */}
        <section className="py-20 md:py-24 bg-[#102A43] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-[#049FD9]/20 blur-3xl" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            <span className="text-5xl font-serif text-[#049FD9] leading-none select-none">“</span>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic leading-relaxed text-slate-100 max-w-4xl mx-auto">
              “The Venture Framework for STEM is a practical, no-nonsense workbook that bridges the
              massive gap between advanced scientific capability and healthcare commercialization.
              Unlike generic startup advice, it provides engineering-minded professionals with the
              exact tools, cap tables, FDA regulatory pathways, and reimbursement frameworks needed to
              turn raw science into high-valuation healthcare ventures.”
            </blockquote>

            <div className="pt-4 flex flex-col items-center">
              <div className="h-0.5 w-16 bg-[#049FD9] mb-3" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#049FD9] uppercase">
                FEATURED POSITIONING REVIEW
              </span>
              <span className="text-sm font-semibold text-slate-300 mt-1">
                STEM PROFESSIONAL & HEALTHCARE VENTURE FELLOW
              </span>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* BOOK + IGVP ECOSYSTEM BRIDGE */}
        {/* ================================================== */}
        <section id="ecosystem-bridge" className="py-20 md:py-28 bg-white dark:bg-[#0E2238]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3 mb-16 text-center mx-auto">
              <span className="text-xs font-bold text-[#049FD9] uppercase tracking-widest font-mono">
                THE CONTINUOUS LEARNING ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] dark:text-white">
                THE BOOK IS YOUR STARTING POINT.
                <br />
                <span className="text-[#0077B6] dark:text-[#049FD9]">
                  THE IGVP ECOSYSTEM TAKES YOU FURTHER.
                </span>
              </h2>
            </div>

            {/* Visual Pathway Strip */}
            <div className="mb-14 flex items-center justify-center gap-2 sm:gap-4 text-xs font-mono font-bold text-[#102A43] dark:text-white flex-wrap">
              {["READ", "LEARN", "BUILD", "CONNECT", "INVEST"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2 sm:gap-4">
                  <span className="px-4 py-2 rounded-full bg-[#E6F4FB] dark:bg-[#0E3A5A] border border-[#049FD9]/40 text-[#0077B6] dark:text-[#049FD9]">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-[#049FD9] font-extrabold">→</span>
                  )}
                </div>
              ))}
            </div>

            {/* 5 Clickable Ecosystem Hub Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "IGVP COURSES",
                  desc: "Hands-on Cohorts on FDA & Reimbursement",
                  link: "#course-cta",
                  badge: "Active Cohorts",
                },
                {
                  title: "IGVP PROGRAMS",
                  desc: "Commercialization Fellowships for STEM",
                  link: "#course-cta",
                  badge: "Annual Fellowships",
                },
                {
                  title: "IGVP COMMUNITY",
                  desc: "Global Network of Scientists & VCs",
                  link: "#community-cta",
                  badge: "2,500+ Members",
                },
                {
                  title: "IGVP EVENTS",
                  desc: "Healthcare Venture Summits & Diligence Clinics",
                  link: "#events-section",
                  badge: "Monthly Summits",
                },
                {
                  title: "IGVP OTHER BOOKS",
                  desc: "Upcoming STEM & Healthcare Library",
                  link: "/books",
                  badge: "Library CMS",
                },
              ].map((hub) => (
                <a
                  key={hub.title}
                  href={hub.link}
                  className="group rounded-2xl bg-[#F9FBFD] dark:bg-[#16324F] p-6 border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E6F4FB] dark:bg-[#0E3A5A] text-[#0077B6] dark:text-[#049FD9] inline-block">
                      {hub.badge}
                    </span>
                    <h3 className="text-base font-extrabold font-mono text-[#102A43] dark:text-white group-hover:text-[#049FD9] transition-colors">
                      {hub.title}
                    </h3>
                    <p className="text-xs text-[#5B6B7A] dark:text-slate-300">{hub.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#D6E4F0] dark:border-[#2C4A66] flex items-center justify-between text-xs font-bold text-[#049FD9]">
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* COURSE CTA */}
        {/* ================================================== */}
        <section id="course-cta" className="py-20 md:py-24 bg-[#F4F7FA] dark:bg-[#0B1F33]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#102A43] via-[#0E2238] to-[#16324F] p-8 sm:p-12 border border-[#049FD9]/40 shadow-2xl text-white text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#049FD9]/20 blur-2xl pointer-events-none" />

              <span className="inline-block px-3 py-1 rounded-full bg-[#049FD9]/20 border border-[#049FD9]/40 text-[#049FD9] font-mono text-xs font-bold uppercase tracking-wider">
                DEEPEN YOUR FLUENCY
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                READY TO GO BEYOND THE WORKBOOK?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                “Turn venture literacy into hands-on experience through IGVP Institute courses,
                programs, and ecosystem opportunities.”
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-[#049FD9] hover:bg-[#0288C7] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <Link to="/upskilling">
                    <span>EXPLORE IGVP COURSES</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-8 rounded-full border-slate-600 bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all"
                >
                  <Link to="/students">
                    <span>EXPLORE PROGRAMS</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* OTHER BOOKS (CMS SECTION) */}
        {/* ================================================== */}
        <section id="other-books" className="py-20 md:py-28 bg-white dark:bg-[#0E2238] border-y border-[#D6E4F0] dark:border-[#2C4A66]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#049FD9] uppercase tracking-widest font-mono">
                  IGVP PUBLICATIONS LIBRARY
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] dark:text-white">
                  MORE FROM IGVP INSTITUTE
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#5B6B7A] dark:text-slate-400 font-mono">
                <Info className="h-4 w-4 text-[#049FD9]" />
                <span>Dynamic CMS Editorial Grid</span>
              </div>
            </div>

            {/* CMS Editorial Book Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Featured Book (Current) */}
              <div className="rounded-2xl bg-[#F9FBFD] dark:bg-[#16324F] p-6 border-2 border-[#049FD9] shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="px-2.5 py-1 rounded bg-[#049FD9] text-white text-[10px] font-mono font-bold uppercase">
                    CURRENT TITLE
                  </span>
                  <div className="h-48 rounded-xl bg-[#102A43] flex items-center justify-center p-4 border border-[#049FD9]/40">
                    <BookMarked className="h-12 w-12 text-[#049FD9]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white">
                    The Venture Framework for STEM
                  </h3>
                  <p className="text-xs text-[#5B6B7A] dark:text-slate-300">
                    The foundational operating workbook for STEM professionals entering healthcare venture.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D6E4F0] dark:border-[#2C4A66]">
                  <span className="text-xs font-bold text-[#049FD9]">Active Page</span>
                </div>
              </div>

              {/* CMS Placeholder Book 02 */}
              <div className="rounded-2xl bg-white/60 dark:bg-[#16324F]/40 p-6 border border-dashed border-[#D6E4F0] dark:border-[#2C4A66] flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-mono font-bold uppercase">
                    CMS PLACEHOLDER
                  </span>
                  <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center p-4 text-center">
                    <BookOpen className="h-10 w-10 text-slate-400 mb-2" />
                    <span className="text-xs font-mono text-slate-400">Future Publication Slot</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-400 dark:text-slate-500">
                    Healthcare AI Venture Handbook
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                    Upcoming title on SaMD AI algorithms, clinical validation, and HIPAA enterprise sales.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>IGVP CMS Slot 02</span>
                  <span className="text-[10px] uppercase">Coming Soon</span>
                </div>
              </div>

              {/* CMS Placeholder Book 03 */}
              <div className="rounded-2xl bg-white/60 dark:bg-[#16324F]/40 p-6 border border-dashed border-[#D6E4F0] dark:border-[#2C4A66] flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-mono font-bold uppercase">
                    CMS PLACEHOLDER
                  </span>
                  <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center p-4 text-center">
                    <BookOpen className="h-10 w-10 text-slate-400 mb-2" />
                    <span className="text-xs font-mono text-slate-400">Future Publication Slot</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-400 dark:text-slate-500">
                    The Clinical Translation Playbook
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                    Upcoming title on multi-center trial design, IRB approvals, and hospital pilot contracts.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>IGVP CMS Slot 03</span>
                  <span className="text-[10px] uppercase">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* EVENTS / WEBINARS (CMS SECTION) */}
        {/* ================================================== */}
        <section id="events-section" className="py-20 md:py-28 bg-[#F4F7FA] dark:bg-[#0B1F33]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#049FD9] uppercase tracking-widest font-mono">
                  LIVE ECOSYSTEM ENGAGEMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] dark:text-white">
                  CONTINUE THE CONVERSATION
                </h2>
              </div>
              <span className="text-xs font-mono text-[#5B6B7A] dark:text-slate-400">
                Dynamic / CMS-Ready Event Feed
              </span>
            </div>

            {/* Premium Event List */}
            <div className="space-y-4">
              {[
                {
                  date: "OCTOBER 14, 2026",
                  type: "GLOBAL WEBINAR",
                  title: "FDA SaMD & 510(k) De-Risking Masterclass",
                  desc: "Live interactive breakdown of Module 02 regulatory decision trees with former FDA reviewers and IGVP venture fellows.",
                },
                {
                  date: "NOVEMBER 08, 2026",
                  type: "FOUNDER WORKSHOP",
                  title: "Cap Table Math & SAFE Dilution Defense Clinic",
                  desc: "Hands-on spreadsheet session modeling Pre-Seed to Series A dilution matrices from Module 04.",
                },
                {
                  date: "DECEMBER 02, 2026",
                  type: "ANNUAL SUMMIT",
                  title: "IGVP Healthcare Commercialization Summit",
                  desc: "Keynote ecosystem gathering bringing together STEM founders, clinicians, TTO directors, and deep-tech VCs.",
                },
              ].map((ev, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] hover:border-[#049FD9] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-[#049FD9] font-bold">{ev.date}</span>
                      <span className="text-slate-300">•</span>
                      <span className="px-2 py-0.5 rounded bg-[#E6F4FB] dark:bg-[#0E3A5A] text-[#0077B6] dark:text-[#049FD9] font-bold">
                        {ev.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#102A43] dark:text-white">
                      {ev.title}
                    </h3>
                    <p className="text-sm text-[#5B6B7A] dark:text-slate-300 max-w-3xl">
                      {ev.desc}
                    </p>
                  </div>

                  <Button
                    onClick={() => setGetModalOpen(true)}
                    variant="outline"
                    className="h-10 px-5 rounded-full border-[#049FD9] text-[#049FD9] hover:bg-[#049FD9] hover:text-white text-xs font-bold shrink-0 transition-all"
                  >
                    REGISTER →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* EMAIL / COMMUNITY CTA */}
        {/* ================================================== */}
        <section id="community-cta" className="py-20 md:py-24 bg-white dark:bg-[#0E2238] border-t border-[#D6E4F0] dark:border-[#2C4A66]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs font-bold text-[#049FD9] uppercase tracking-widest font-mono">
              STAY INFORMED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] dark:text-white">
              STAY CONNECTED TO THE VENTURE ECOSYSTEM
            </h2>
            <p className="text-base text-[#5B6B7A] dark:text-slate-300 max-w-xl mx-auto">
              “Get updates on IGVP Institute courses, events, publications, and healthcare venture opportunities.”
            </p>

            {newsletterSubmitted ? (
              <div className="p-4 rounded-2xl bg-[#E6F4FB] dark:bg-[#0E3A5A] border border-[#049FD9] text-[#0077B6] dark:text-[#049FD9] font-semibold text-sm max-w-md mx-auto flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#2ECC71]" />
                <span>You are now subscribed to IGVP Institute updates!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your institutional email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-full bg-[#F4F7FA] dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] text-sm text-[#102A43] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#049FD9]"
                />
                <Button
                  type="submit"
                  className="w-full sm:w-auto h-12 px-6 rounded-full bg-[#049FD9] hover:bg-[#0288C7] text-white text-xs font-bold shrink-0 transition-all shadow-md"
                >
                  STAY CONNECTED →
                </Button>
              </form>
            )}
          </div>
        </section>

        {/* ================================================== */}
        {/* FINAL CTA */}
        {/* ================================================== */}
        <section className="py-24 md:py-32 bg-[#102A43] text-white relative overflow-hidden">
          {/* Subtle network lines / scientific background motifs */}
          <div
            className="absolute inset-0 z-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#049FD9 1px, transparent 1px), linear-gradient(to right, #049FD9 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              TECHNICALLY BRILLIANT.
              <br />
              <span className="text-[#049FD9]">NOW GET COMMERCIALLY ARMED.</span>
            </h2>

            <p className="text-lg text-slate-300 font-medium">
              Start with the workbook. Continue with the ecosystem.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setGetModalOpen(true)}
                className="h-14 px-9 rounded-full bg-[#049FD9] hover:bg-[#0288C7] text-white text-base font-bold shadow-xl transition-all hover:scale-105 flex items-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>GET THE BOOK →</span>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 px-8 rounded-full border-slate-500 bg-transparent hover:bg-white/10 text-white text-sm font-bold transition-all"
              >
                <Link to="/">EXPLORE IGVP INSTITUTE →</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================== */}
      {/* FOOTER */}
      {/* ================================================== */}
      <footer className="bg-[#081826] border-t border-[#12283D] text-slate-300 py-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-white uppercase tracking-wider text-[11px]">
                EXPLORE
              </h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-[#049FD9] transition-colors">About IGVP</Link></li>
                <li><Link to="/students" className="hover:text-[#049FD9] transition-colors">Programs</Link></li>
                <li><Link to="/partners" className="hover:text-[#049FD9] transition-colors">Ecosystem</Link></li>
                <li><Link to="/rising-investors" className="hover:text-[#049FD9] transition-colors">Community</Link></li>
                <li><a href="#events-section" className="hover:text-[#049FD9] transition-colors">Events</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono font-bold text-white uppercase tracking-wider text-[11px]">
                RESOURCES
              </h4>
              <ul className="space-y-2">
                <li><Link to="/books" className="text-[#049FD9] font-bold">Books Library</Link></li>
                <li><Link to="/upskilling" className="hover:text-[#049FD9] transition-colors">Courses</Link></li>
                <li><a href="#" className="hover:text-[#049FD9] transition-colors">Reports</a></li>
                <li><a href="#" className="hover:text-[#049FD9] transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-[#049FD9] transition-colors">Guides</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono font-bold text-white uppercase tracking-wider text-[11px]">
                LEGAL
              </h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#049FD9] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#049FD9] transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-[#049FD9] transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono font-bold text-white uppercase tracking-wider text-[11px]">
                STAY CONNECTED
              </h4>
              <p className="text-slate-400">
                Ingenious Global Venture Partners — Enterprise Operating System for Healthcare Innovation.
              </p>
              <div className="pt-2 flex items-center gap-3 text-slate-400">
                <a href="#" className="hover:text-[#049FD9]"><Globe className="h-4 w-4" /></a>
                <a href="#" className="hover:text-[#049FD9]"><Mail className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#12283D] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
            <span>© IGVP Institute. All rights reserved.</span>
            <span className="font-mono text-[10px]">The Venture Framework for STEM • Enterprise Publication</span>
          </div>
        </div>
      </footer>

      {/* ================================================== */}
      {/* INTERACTIVE MODAL: GET THE BOOK & DOWNLOAD SAMPLE */}
      {/* ================================================== */}
      {getModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setGetModalOpen(false);
                setDownloadSuccess(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {downloadSuccess ? (
              <div className="text-center space-y-4 py-4">
                <div className="h-16 w-16 mx-auto rounded-full bg-[#E6F4FB] text-[#049FD9] flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-[#2ECC71]" />
                </div>
                <h3 className="text-2xl font-bold text-[#102A43] dark:text-white">
                  Sample Chapter Sent!
                </h3>
                <p className="text-sm text-[#5B6B7A] dark:text-slate-300">
                  We've emailed the 30-page preview chapter and Cap Table spreadsheet template to{" "}
                  <strong className="text-[#049FD9]">{userEmail}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-[#F4F7FA] dark:bg-[#0E2238] border border-[#D6E4F0] dark:border-[#2C4A66] text-xs text-left space-y-2">
                  <div className="font-bold text-[#102A43] dark:text-white">Included Downloads:</div>
                  <div className="flex items-center gap-2 text-[#049FD9]">
                    <Download className="h-3.5 w-3.5" />
                    <span>Module 02 FDA Decision Tree PDF</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#049FD9]">
                    <Download className="h-3.5 w-3.5" />
                    <span>Module 04 Cap Table Dilution Model .XLSX</span>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    setGetModalOpen(false);
                    setDownloadSuccess(false);
                  }}
                  className="w-full h-11 rounded-full bg-[#049FD9] hover:bg-[#0288C7] text-white font-bold text-xs"
                >
                  DONE
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#049FD9] uppercase tracking-wider">
                    INSTITUTIONAL EDITION
                  </span>
                  <h3 className="text-2xl font-bold text-[#102A43] dark:text-white mt-1">
                    Get The Venture Framework for STEM
                  </h3>
                  <p className="text-xs text-[#5B6B7A] dark:text-slate-300 mt-1">
                    Request instant digital sample chapters or order institutional bulk copies.
                  </p>
                </div>

                <form onSubmit={handleSampleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-[#102A43] dark:text-slate-200 mb-1">
                      Institutional / Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. scientist@university.edu"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg bg-[#F4F7FA] dark:bg-[#0E2238] border border-[#D6E4F0] dark:border-[#2C4A66] text-xs text-[#102A43] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#049FD9]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#102A43] dark:text-slate-200 mb-1">
                      Your Primary Role
                    </label>
                    <select
                      value={userRole}
                      onChange={(e) => setUserRole(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg bg-[#F4F7FA] dark:bg-[#0E2238] border border-[#D6E4F0] dark:border-[#2C4A66] text-xs text-[#102A43] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#049FD9]"
                    >
                      <option>STEM Graduate Student / Postdoc</option>
                      <option>Clinician (MD, RN, Pharmacist)</option>
                      <option>Early-Career VC / PE Analyst</option>
                      <option>Tech-Transfer Office (TTO)</option>
                      <option>Incubator / Accelerator Program Manager</option>
                    </select>
                  </div>

                  <div className="p-3 rounded-lg bg-[#E6F4FB] dark:bg-[#0E3A5A] text-[11px] text-[#0077B6] dark:text-[#049FD9]">
                    Instant access includes Sample Chapters (FDA Regulatory Matrix & Cap Table Excel model).
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 rounded-full bg-[#049FD9] hover:bg-[#0288C7] text-white font-bold text-xs shadow-md"
                  >
                    DOWNLOAD SAMPLE CHAPTER & CAP TABLE MODEL →
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* INTERACTIVE MODAL: WORKBOOK SPREAD LIGHTBOX */}
      {/* ================================================== */}
      {previewModalOpen && (
        <div
          onClick={() => setPreviewModalOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] rounded-3xl max-w-4xl w-full p-6 shadow-2xl relative"
          >
            <button
              onClick={() => setPreviewModalOpen(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:scale-105"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#049FD9] text-white text-[10px] font-mono font-bold uppercase">
                  WORKBOOK LIGHTBOX PREVIEW
                </span>
                <span className="text-xs font-mono text-[#5B6B7A] dark:text-slate-300">
                  The Venture Framework for STEM • 1st Edition
                </span>
              </div>

              {previewModalOpen === "fda" && (
                <div>
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white mb-2">
                    Page 42: FDA Regulatory Pathway Decision Matrix
                  </h3>
                  <div className="rounded-xl overflow-hidden border border-[#D6E4F0] max-h-[500px]">
                    <img
                      src="/workbook_preview_spread.jpg"
                      alt="FDA Regulatory Pathway Matrix Full Spread"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}

              {previewModalOpen === "captable" && (
                <div>
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white mb-2">
                    Page 114: Cap Table Dilution & SAFE Matrix
                  </h3>
                  <div className="p-8 rounded-xl bg-[#102A43] text-white font-mono text-sm space-y-4">
                    <div className="text-xs text-[#049FD9]">
                      FIGURE 4.2: PRE-SEED SAFE DILUTION VS POST-SERIES A VALUATION MATRIX
                    </div>
                    <div className="grid grid-cols-4 gap-4 border-b border-slate-700 pb-2 text-xs text-slate-400">
                      <span>Round</span>
                      <span>Capital Raised</span>
                      <span>Post-Money Val</span>
                      <span>Founder Equity %</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 border-b border-slate-800 pb-2 text-xs">
                      <span>Founding</span>
                      <span>$0</span>
                      <span>$0</span>
                      <span className="text-[#2ECC71]">100.0%</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 border-b border-slate-800 pb-2 text-xs">
                      <span>Pre-Seed SAFE</span>
                      <span>$500,000</span>
                      <span>$4,000,000 Cap</span>
                      <span className="text-[#049FD9]">87.5%</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 border-b border-slate-800 pb-2 text-xs">
                      <span>Seed Round</span>
                      <span>$2,500,000</span>
                      <span>$12,000,000</span>
                      <span className="text-[#F4B942]">68.4%</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-xs font-bold text-white">
                      <span>Series A</span>
                      <span>$10,000,000</span>
                      <span>$45,000,000</span>
                      <span className="text-[#2ECC71]">54.2% (Target Met)</span>
                    </div>
                  </div>
                </div>
              )}

              {previewModalOpen === "reimbursement" && (
                <div>
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white mb-2">
                    Page 168: Healthcare Reimbursement Audit Checklist
                  </h3>
                  <div className="p-6 rounded-xl bg-[#F4F7FA] dark:bg-[#0E2238] border border-[#D6E4F0] dark:border-[#2C4A66] space-y-3 text-xs">
                    <div className="font-bold text-[#102A43] dark:text-white">
                      EXECUTIVE REIMBURSEMENT AUDIT CHECKLIST:
                    </div>
                    <p className="text-[#5B6B7A] dark:text-slate-300">
                      1. Confirm whether target clinical procedure has an active CPT Category I code or requires Category III tracking.
                    </p>
                    <p className="text-[#5B6B7A] dark:text-slate-300">
                      2. Audit Medicare Administrative Contractor (MAC) Local Coverage Determinations (LCD) across target regional health systems.
                    </p>
                    <p className="text-[#5B6B7A] dark:text-slate-300">
                      3. Calculate provider economic impact: RVU (Relative Value Unit) offset vs time-savings per patient encounter.
                    </p>
                  </div>
                </div>
              )}

              {previewModalOpen === "cover" && (
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white mb-2">
                    The Venture Framework for STEM Hardcover
                  </h3>
                  <div className="rounded-xl overflow-hidden max-h-[550px] inline-block">
                    <img
                      src="/venture_framework_stem_book_cover.jpg"
                      alt="Hardcover Front Cover"
                      className="h-full object-contain mx-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
