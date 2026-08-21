import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Download,
  CheckCircle2,
  Building2,
  GraduationCap,
  Stethoscope,
  TrendingUp,
  Search,
  Filter,
  Layers,
  BookMarked,
  FileText,
  ChevronRight,
  Star,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PersonaHeader } from "@/components/persona-header";

export const Route = createFileRoute("/books/")({
  head: () => ({
    meta: [
      { title: "Publications & Workbooks | IGVP Institute Library" },
      {
        name: "description",
        content:
          "Official enterprise publications, operating workbooks, and healthcare commercialization handbooks from the IGVP Institute.",
      },
    ],
  }),
  component: BooksIndexPage,
});

function BooksIndexPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cohortSize, setCohortSize] = useState(25);

  const books = [
    {
      id: "the-venture-framework-for-stem",
      title: "The Venture Framework for STEM",
      subtitle: "Strategies for Building & Scaling Tech Enterprises",
      status: "FEATURED • NEW RELEASE",
      badgeColor: "bg-[#049FD9]",
      category: "workbook",
      target: "STEM, Clinicians, VCs, TTOs",
      pages: "340 Pages",
      isbn: "978-1-989-102A",
      description:
        "The hands-on, engineering-minded operating workbook for scientists, clinicians, and engineers ready to lead healthcare innovation.",
      cover: "/venture_framework_stem_book_cover.jpg",
      href: "/books/the-venture-framework-for-stem",
      featured: true,
    },
    {
      id: "healthcare-ai-venture-handbook",
      title: "Healthcare AI Venture Handbook",
      subtitle: "Algorithms, SaMD FDA De-Risking & HIPAA Enterprise Sales",
      status: "UPCOMING • Q4 2026",
      badgeColor: "bg-[#7C6BF2]",
      category: "handbook",
      target: "AI Engineers, Radiologists, Healthtech Founders",
      pages: "280 Pages",
      isbn: "978-1-989-102B",
      description:
        "A rigorous guide to navigating clinical algorithm validation, FDA Software as a Medical Device rules, and hospital IT integration.",
      cover: null,
      href: "#",
      featured: false,
    },
    {
      id: "clinical-translation-playbook",
      title: "The Clinical Translation Playbook",
      subtitle: "Multi-Center Trial Design, IRB & Hospital Pilot Contracts",
      status: "UPCOMING • Q1 2027",
      badgeColor: "bg-[#2ECC71]",
      category: "playbook",
      target: "Clinician Founders, Clinical Research Coordinators",
      pages: "310 Pages",
      isbn: "978-1-989-102C",
      description:
        "Frameworks for executing institutional IRB approvals, multi-site hospital pilots, and value-based clinical outcome trials.",
      cover: null,
      href: "#",
      featured: false,
    },
    {
      id: "medtech-reimbursement-strategy-guide",
      title: "MedTech Reimbursement & CPT Coding Strategy",
      subtitle: "Navigating Payor Coverage, MAC LCDs & Value-Based Care",
      status: "IN DEVELOPMENT",
      badgeColor: "bg-[#F4B942]",
      category: "guide",
      target: "Health Economists, VC Diligence Teams, TTO Directors",
      pages: "240 Pages",
      isbn: "978-1-989-102D",
      description:
        "Detailed playbook on securing CPT Category I/III codes, negotiating commercial payor pilots, and proving RVU economics.",
      cover: null,
      href: "#",
      featured: false,
    },
  ];

  const filteredBooks = books.filter((b) => {
    const matchesFilter =
      selectedFilter === "all" || b.category === selectedFilter;
    const matchesQuery =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.target.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#F4F7FA] dark:bg-[#0B1F33] text-[#102A43] dark:text-white font-sans">
      <PersonaHeader currentTrack="Books" />

      <main className="pt-24 md:pt-28 pb-20">
        {/* Header Hero */}
        <section className="relative overflow-hidden py-12 md:py-16 bg-[#102A43] text-white">
          <div
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #049FD9 1px, transparent 1px), linear-gradient(to bottom, #049FD9 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#049FD9]/20 border border-[#049FD9]/40 text-[#049FD9] text-xs font-mono font-bold uppercase tracking-wider">
                <BookMarked className="h-3.5 w-3.5" />
                <span>IGVP INSTITUTE PUBLICATIONS LIBRARY</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                OPERATING WORKBOOKS FOR HEALTHCARE VENTURE
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Peer-reviewed, engineering-minded publications built for scientists, clinicians, engineers, and deep-tech venture capital professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Book Flagship Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="rounded-3xl bg-white dark:bg-[#16324F] border-2 border-[#049FD9] p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 3D Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-xs w-full group">
                  <div className="absolute -inset-2 rounded-2xl bg-[#049FD9]/30 blur-xl group-hover:bg-[#049FD9]/50 transition-all" />
                  <div className="relative rounded-xl overflow-hidden bg-[#102A43] border border-[#049FD9] shadow-xl aspect-[3/4]">
                    <img
                      src="/venture_framework_stem_book_cover.jpg"
                      alt="The Venture Framework for STEM Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#049FD9] text-white text-xs font-mono font-bold uppercase tracking-wider">
                    FLAGSHIP PUBLICATION
                  </span>
                  <span className="text-xs font-mono text-[#049FD9] font-bold">
                    ISBN 978-1-989-102A
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#102A43] dark:text-white leading-tight">
                  The Venture Framework for STEM
                </h2>

                <p className="text-sm font-mono text-[#0077B6] dark:text-[#049FD9] font-bold uppercase tracking-wider">
                  TECHNICALLY BRILLIANT. COMMERCIALLY ARMED.
                </p>

                <p className="text-sm sm:text-base text-[#5B6B7A] dark:text-slate-300 leading-relaxed">
                  The definitive operating workbook bridging advanced scientific capability and healthcare commercialization. Complete with 6 modules on commercial audit, FDA regulatory de-risking, reimbursement economics, and cap table math.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#F4F7FA] dark:bg-[#0E2238] border border-[#D6E4F0] dark:border-[#2C4A66] text-center">
                    <span className="block text-lg font-bold font-mono text-[#049FD9]">6</span>
                    <span className="text-[10px] text-[#5B6B7A] dark:text-slate-400 uppercase font-mono">Modules</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F7FA] dark:bg-[#0E2238] border border-[#D6E4F0] dark:border-[#2C4A66] text-center">
                    <span className="block text-lg font-bold font-mono text-[#049FD9]">340</span>
                    <span className="text-[10px] text-[#5B6B7A] dark:text-slate-400 uppercase font-mono">Pages</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F7FA] dark:bg-[#0E2238] border border-[#D6E4F0] dark:border-[#2C4A66] text-center">
                    <span className="block text-lg font-bold font-mono text-[#049FD9]">12+</span>
                    <span className="text-[10px] text-[#5B6B7A] dark:text-slate-400 uppercase font-mono">Checklists</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F7FA] dark:bg-[#0E2238] border border-[#D6E4F0] dark:border-[#2C4A66] text-center">
                    <span className="block text-lg font-bold font-mono text-[#2ECC71]">100%</span>
                    <span className="text-[10px] text-[#5B6B7A] dark:text-slate-400 uppercase font-mono">Actionable</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    asChild
                    className="h-12 px-8 rounded-full bg-[#049FD9] hover:bg-[#0288C7] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                  >
                    <Link to="/books/the-venture-framework-for-stem">
                      <span>EXPLORE DEDICATED BOOK PAGE</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#16324F] border border-[#D6E4F0] dark:border-[#2C4A66] shadow-xs">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: "all", label: "All Publications" },
                { id: "workbook", label: "Workbooks" },
                { id: "handbook", label: "Handbooks" },
                { id: "playbook", label: "Playbooks" },
                { id: "guide", label: "Guides" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedFilter === f.id
                      ? "bg-[#049FD9] text-white font-bold shadow-sm"
                      : "bg-[#F4F7FA] dark:bg-[#0E2238] text-[#5B6B7A] dark:text-slate-300 hover:bg-[#E6F4FB]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5B6B7A]" />
              <input
                type="text"
                placeholder="Search publications, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full bg-[#F4F7FA] dark:bg-[#0E2238] border border-[#D6E4F0] dark:border-[#2C4A66] text-xs text-[#102A43] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#049FD9]"
              />
            </div>
          </div>
        </section>

        {/* All Publications Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className={`rounded-2xl bg-white dark:bg-[#16324F] p-6 border ${
                  book.featured
                    ? "border-[#049FD9] shadow-lg"
                    : "border-[#D6E4F0] dark:border-[#2C4A66]"
                } flex flex-col justify-between hover:shadow-xl transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded text-white text-[10px] font-mono font-bold uppercase ${book.badgeColor}`}
                    >
                      {book.status}
                    </span>
                    <span className="text-[11px] font-mono text-[#5B6B7A] dark:text-slate-400">
                      {book.pages}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#102A43] dark:text-white">
                    {book.title}
                  </h3>

                  <p className="text-xs font-mono text-[#0077B6] dark:text-[#049FD9] font-semibold">
                    {book.subtitle}
                  </p>

                  <p className="text-xs text-[#5B6B7A] dark:text-slate-300 leading-relaxed">
                    {book.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#F4F7FA] dark:bg-[#0E2238] text-[11px] font-mono text-[#5B6B7A] dark:text-slate-300">
                    <span className="font-bold text-[#102A43] dark:text-white block mb-0.5">
                      Target Readers:
                    </span>
                    {book.target}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D6E4F0] dark:border-[#2C4A66]">
                  {book.featured ? (
                    <Button
                      asChild
                      className="w-full h-10 rounded-full bg-[#049FD9] hover:bg-[#0288C7] text-white text-xs font-bold"
                    >
                      <Link to="/books/the-venture-framework-for-stem">
                        VIEW BOOK LANDING PAGE →
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      disabled
                      variant="outline"
                      className="w-full h-10 rounded-full border-dashed text-xs text-slate-400 font-mono"
                    >
                      COMING SOON (CMS)
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Institutional Bulk Ordering & University Licensing Calculator */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#102A43] text-white p-8 sm:p-12 border border-[#049FD9]/40 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3 py-1 rounded-full bg-[#049FD9]/20 text-[#049FD9] font-mono text-xs font-bold uppercase tracking-wider">
                  INSTITUTIONAL & UNIVERSITY LICENSING
                </span>
                <h2 className="text-3xl font-extrabold">
                  Deploy IGVP Workbooks Across Your Accelerator or Cohort
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tech-transfer offices, incubators, and university graduate programs can license physical hardcover workbooks paired with digital spreadsheet models for entire student cohorts.
                </p>
                <div className="space-y-2 text-xs text-slate-200 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2ECC71]" />
                    <span>Bulk Hardcover Shipments & Custom University Branding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2ECC71]" />
                    <span>Full LMS Access & Faculty Teaching Guides Included</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0E2238] p-6 rounded-2xl border border-[#2C4A66] space-y-4">
                <h4 className="text-sm font-bold font-mono text-[#049FD9]">
                  COHORT LICENSING ESTIMATOR
                </h4>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span>Number of Students / Fellows:</span>
                    <span className="font-bold text-[#049FD9]">{cohortSize} Seats</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="5"
                    value={cohortSize}
                    onChange={(e) => setCohortSize(Number(e.target.value))}
                    className="w-full accent-[#049FD9]"
                  />
                </div>

                <div className="p-4 rounded-xl bg-[#16324F] text-xs space-y-2 border border-[#049FD9]/30">
                  <div className="flex justify-between text-slate-300">
                    <span>Package Tier:</span>
                    <span className="font-bold text-white">Institutional Enterprise</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Estimated Institutional Discount:</span>
                    <span className="font-bold text-[#2ECC71]">35% Off Retail</span>
                  </div>
                  <div className="border-t border-slate-700 pt-2 flex justify-between font-bold text-sm text-white">
                    <span>Estimated Package:</span>
                    <span className="text-[#049FD9]">${(cohortSize * 45).toLocaleString()} USD</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full h-11 rounded-full bg-[#049FD9] hover:bg-[#0288C7] text-white text-xs font-bold"
                >
                  <Link to="/books/the-venture-framework-for-stem">
                    REQUEST INSTITUTIONAL QUOTE →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
