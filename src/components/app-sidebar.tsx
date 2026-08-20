import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  MessagesSquare,
  Trophy,
  Sparkles,
  Briefcase,
  FileText,
  Award,
  Bell,
  Settings,
  LifeBuoy,
  ChevronRight,
  Rocket,
  Presentation,
  PieChart,
  Building2,
  Wallet,
  Target,
  ClipboardCheck,
  TrendingUp,
  Database,
  Layers,
  ShieldCheck,
  Activity,
  Beaker,
  Stethoscope,
  KeyRound,
  Server,
  BarChart3,
  Network,
  UsersRound,
  BookMarked,
  HeartPulse,
  Lightbulb,
  MonitorPlay,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  useSidebar,
} from "@/components/ui/sidebar";
import { BrandLogo } from "./brand-logo";
import { Badge } from "@/components/ui/badge";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { getWorkspaceForPath } from "@/lib/workspaces";

type NavItem = { title: string; url: string; icon: LucideIcon; badge?: string; pro?: boolean };
type NavGroup = { label: string; items: NavItem[] };

const NAV: Record<string, NavGroup[]> = {
  student: [
    {
      label: "Learning",
      items: [
        { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
        { title: "Course Catalog", url: "/courses", icon: BookOpen, badge: "142" },
        { title: "My Learning", url: "/course-player", icon: MonitorPlay },
        { title: "Assignments", url: "/assignments", icon: FileText, badge: "2" },
        { title: "Certificates", url: "/certificates", icon: Award },
        { title: "CME Credits", url: "/cme-credits", icon: GraduationCap },
        { title: "Live Sessions", url: "/live-sessions", icon: Presentation, badge: "Live" },
        { title: "Digital Library", url: "/library", icon: BookOpen },
      ],
    },
    {
      label: "Engage",
      items: [
        { title: "Innovation Hub", url: "/innovation-hub", icon: Lightbulb, badge: "New" },
        { title: "AI Tutor", url: "/ai-tutor", icon: Sparkles, pro: true },
        { title: "Mentorship", url: "/mentorship", icon: Users },
        { title: "Community", url: "/community", icon: MessagesSquare },
        { title: "Events", url: "/events", icon: Calendar },
        { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
      ],
    },
    {
      label: "Career",
      items: [
        { title: "Career Center", url: "/career", icon: Briefcase },
        { title: "Notifications", url: "/notifications", icon: Bell, badge: "9" },
      ],
    },
  ],
  founder: [
    {
      label: "Startup",
      items: [
        { title: "Workspace", url: "/founder", icon: LayoutDashboard },
        { title: "Innovation Hub", url: "/innovation-hub", icon: Lightbulb, badge: "New" },
        { title: "Idea & Validation", url: "/founder-idea", icon: Target },
        { title: "Business Model", url: "/founder-business", icon: Layers },
        { title: "Financial Model", url: "/founder-financial", icon: TrendingUp },
        { title: "Pitch Deck", url: "/founder-pitch", icon: Presentation, pro: true },
        { title: "Digital Library", url: "/library", icon: BookOpen },
      ],
    },
    {
      label: "Fundraising",
      items: [
        { title: "Investor CRM", url: "/founder", icon: Users, badge: "12" },
        { title: "Cap Table", url: "/founder-cap-table", icon: PieChart },
        { title: "Data Room", url: "/founder-data-room", icon: Database },
        { title: "Due Diligence", url: "/founder-due-diligence", icon: ClipboardCheck },
      ],
    },
    {
      label: "Growth",
      items: [
        { title: "Milestones", url: "/founder-milestones", icon: Rocket },
        { title: "AI Advisor", url: "/founder-ai-advisor", icon: Sparkles, pro: true },
        { title: "Demo Day", url: "/founder-demo-day", icon: Calendar },
      ],
    },
  ],
  investor: [
    {
      label: "Pipeline",
      items: [
        { title: "Deal Flow", url: "/investor", icon: LayoutDashboard, badge: "84" },
        { title: "Discover Startups", url: "/investor-discover", icon: Target },
        { title: "Screening", url: "/investor-screening", icon: ClipboardCheck },
        { title: "Due Diligence", url: "/investor-due-diligence", icon: Beaker },
      ],
    },
    {
      label: "Portfolio",
      items: [
        { title: "Companies", url: "/investor-companies", icon: Building2, badge: "28" },
        { title: "Performance", url: "/investor-performance", icon: BarChart3 },
        { title: "Cap Tables", url: "/investor-cap-tables", icon: PieChart },
        { title: "LP Reports", url: "/investor-lp-reports", icon: FileText },
      ],
    },
    {
      label: "Committee",
      items: [
        { title: "IC Memos", url: "/investor-ic-memos", icon: Presentation },
        { title: "Meetings", url: "/investor-meetings", icon: Calendar },
        { title: "AI Analyst", url: "/investor-ai-analyst", icon: Sparkles, pro: true },
        { title: "Digital Library", url: "/library", icon: BookOpen },
      ],
    },
  ],
  faculty: [
    {
      label: "Teaching",
      items: [
        { title: "Faculty Console", url: "/faculty", icon: LayoutDashboard },
        { title: "My Courses", url: "/faculty-courses", icon: BookMarked, badge: "6" },
        { title: "Course Author", url: "/faculty-author", icon: FileText },
        { title: "Assignments", url: "/faculty-assignments", icon: ClipboardCheck, badge: "24" },
        { title: "Grading Queue", url: "/faculty-grading", icon: Award, badge: "18" },
      ],
    },
    {
      label: "Research",
      items: [
        { title: "Research Hub", url: "/faculty-research", icon: Beaker },
        { title: "Innovation Hub", url: "/innovation-hub", icon: Lightbulb, badge: "New" },
        { title: "Publications", url: "/faculty-publications", icon: BookOpen },
        { title: "AI Assistant", url: "/faculty-ai", icon: Sparkles, pro: true },
        { title: "Digital Library", url: "/library", icon: BookOpen },
      ],
    },
    {
      label: "Cohorts",
      items: [
        { title: "Students", url: "/faculty-students", icon: UsersRound, badge: "342" },
        { title: "Office Hours", url: "/faculty-office-hours", icon: Calendar },
      ],
    },
  ],
  hospital: [
    {
      label: "Partnership",
      items: [
        { title: "Console", url: "/hospital", icon: LayoutDashboard },
        { title: "Clinical Trials", url: "/hospital-trials", icon: HeartPulse, badge: "8" },
        { title: "IRB & Compliance", url: "/hospital-irb", icon: ShieldCheck },
        { title: "Sponsored Cohorts", url: "/hospital-cohorts", icon: Users },
      ],
    },
    {
      label: "Innovation",
      items: [
        { title: "Innovation Hub", url: "/innovation-hub", icon: Lightbulb, badge: "New" },
        { title: "Startup Pipeline", url: "/hospital-pipeline", icon: Rocket },
        { title: "Pilot Programs", url: "/hospital-pilots", icon: Activity },
        { title: "Grand Rounds", url: "/hospital-grand-rounds", icon: Presentation },
        { title: "Digital Library", url: "/library", icon: BookOpen },
      ],
    },
    {
      label: "Operations",
      items: [
        { title: "Contracts", url: "/hospital-contracts", icon: FileText },
        { title: "Reports", url: "/hospital-reports", icon: BarChart3 },
      ],
    },
  ],
  admin: [
    {
      label: "Platform",
      items: [
        { title: "Overview", url: "/admin", icon: LayoutDashboard },
        { title: "Analytics", url: "/admin-analytics", icon: BarChart3 },
        { title: "System Health", url: "/admin-health", icon: Activity, badge: "OK" },
        { title: "Audit Logs", url: "/admin-audit", icon: FileText },
        { title: "Digital Library", url: "/library", icon: BookOpen },
      ],
    },
    {
      label: "Governance",
      items: [
        { title: "Users", url: "/admin-users", icon: Users, badge: "18.4k" },
        { title: "Roles & Perms", url: "/admin-roles", icon: ShieldCheck },
        { title: "API Keys", url: "/admin-api-keys", icon: KeyRound },
        { title: "AI Governance", url: "/admin-ai-governance", icon: Sparkles, pro: true },
      ],
    },
    {
      label: "Operations",
      items: [
        { title: "Payments", url: "/admin-payments", icon: Wallet },
        { title: "Partners", url: "/admin-partners", icon: Network },
        { title: "Infrastructure", url: "/admin-infrastructure", icon: Server },
        { title: "CMS", url: "/admin-cms", icon: Layers },
      ],
    },
  ],
};

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const workspace = getWorkspaceForPath(pathname);
  const groups = NAV[workspace.id] ?? NAV.student;

  const isActive = (url: string) => pathname === url;

  const renderItem = (item: NavItem) => (
    <SidebarMenuItem key={item.title + item.url}>
      <SidebarMenuButton
        asChild
        isActive={isActive(item.url)}
        tooltip={item.title}
        className="data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[active=true]:font-medium data-[active=true]:before:absolute data-[active=true]:before:left-0 data-[active=true]:before:top-1/2 data-[active=true]:before:-translate-y-1/2 data-[active=true]:before:h-5 data-[active=true]:before:w-[3px] data-[active=true]:before:rounded-r-full data-[active=true]:before:bg-primary relative"
      >
        <Link to={item.url}>
          <item.icon className="h-4 w-4" />
          <span>{item.title}</span>
          {item.pro && !collapsed && (
            <Badge
              variant="outline"
              className="ml-auto h-4 border-primary/40 bg-primary/10 px-1 text-[9px] font-semibold text-primary"
            >
              AI
            </Badge>
          )}
        </Link>
      </SidebarMenuButton>
      {item.badge && !collapsed && !item.pro && (
        <SidebarMenuBadge className="bg-primary/15 text-primary text-[10px] font-semibold">
          {item.badge}
        </SidebarMenuBadge>
      )}
    </SidebarMenuItem>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border px-3 py-3 gap-2">
        <BrandLogo size="lg" collapsed={collapsed} />
        {!collapsed && <WorkspaceSwitcher />}
      </SidebarHeader>

      <SidebarContent className="gap-1 py-2">
        {groups.map((g) => (
          <SidebarGroup key={g.label}>
            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              {g.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{g.items.map(renderItem)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        {!collapsed ? (
          <div className="rounded-lg border border-sidebar-border bg-gradient-to-br from-primary/10 via-sidebar-accent/40 to-transparent p-3">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/20 text-primary">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-sidebar-foreground truncate">
                  {workspace.upsell.title}
                </p>
                <p className="text-[10px] text-muted-foreground truncate">{workspace.upsell.sub}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        ) : null}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link to="/dashboard">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Help">
              <Link to="/dashboard">
                <LifeBuoy className="h-4 w-4" />
                <span>Help & Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

// unused suppression
void Stethoscope;
