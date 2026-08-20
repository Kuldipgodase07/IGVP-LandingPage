import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Rocket,
  TrendingUp,
  BookOpen,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

export type WorkspaceId = "student" | "founder" | "investor" | "faculty" | "hospital" | "admin";

export interface Workspace {
  id: WorkspaceId;
  label: string;
  subtitle: string;
  homeUrl: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
  upsell: { title: string; sub: string };
}

export const WORKSPACES: Workspace[] = [
  {
    id: "student",
    label: "STEM Fellow",
    subtitle: "Learning workspace",
    homeUrl: "/dashboard",
    icon: GraduationCap,
    accent: "from-[#049FD9] to-[#0077B6]",
    upsell: { title: "Upgrade to Fellows", sub: "Unlock research grants" },
  },
  {
    id: "founder",
    label: "Founder",
    subtitle: "Startup workspace",
    homeUrl: "/founder",
    icon: Rocket,
    accent: "from-[#2ECC71] to-[#0EA96A]",
    upsell: { title: "Fundraising Copilot", sub: "AI investor matching" },
  },
  {
    id: "investor",
    label: "Investor",
    subtitle: "Deal flow & portfolio",
    homeUrl: "/investor",
    icon: TrendingUp,
    accent: "from-[#9B87F5] to-[#6D53E8]",
    upsell: { title: "Pro Analytics", sub: "Portfolio benchmarks" },
  },
  {
    id: "faculty",
    label: "Faculty",
    subtitle: "Teaching & research",
    homeUrl: "/faculty",
    icon: BookOpen,
    accent: "from-[#F4B942] to-[#DB9F1B]",
    upsell: { title: "Course AI Author", sub: "Draft modules in minutes" },
  },
  {
    id: "hospital",
    label: "Hospital",
    subtitle: "Clinical partnership",
    homeUrl: "/hospital",
    icon: Stethoscope,
    accent: "from-[#E74C3C] to-[#B93A2C]",
    upsell: { title: "Innovation Sandbox", sub: "Pilot in secure enclave" },
  },
  {
    id: "admin",
    label: "Platform Admin",
    subtitle: "Governance & operations",
    homeUrl: "/admin",
    icon: ShieldCheck,
    accent: "from-[#64748B] to-[#334155]",
    upsell: { title: "Compliance suite", sub: "Add SOC 2 controls" },
  },
];

export function getWorkspaceForPath(pathname: string): Workspace {
  const first = "/" + (pathname.split("/")[1] ?? "");
  
  // 1. Try exact homeUrl match
  let match = WORKSPACES.find((w) => w.homeUrl === first);
  if (match) {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeWorkspaceId", match.id);
    }
    return match;
  }
  
  // 2. Try prefix match (e.g. /founder-idea -> founder)
  match = WORKSPACES.find((w) => w.id !== "student" && first.startsWith(w.homeUrl + "-"));
  if (match) {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeWorkspaceId", match.id);
    }
    return match;
  }
  
  // 3. Fallback to localStorage (for shared routes like /innovation-hub or non-prefixed student routes)
  if (typeof window !== "undefined") {
    const savedId = localStorage.getItem("activeWorkspaceId");
    if (savedId) {
      const saved = WORKSPACES.find(w => w.id === savedId);
      if (saved) return saved;
    }
  }

  return WORKSPACES[0];
}
