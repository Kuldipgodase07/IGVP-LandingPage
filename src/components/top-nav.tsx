import {
  Bell,
  Search,
  HelpCircle,
  Command as CommandIcon,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "./theme-toggle";

interface TopNavProps {
  breadcrumbs?: { label: string; href?: string }[];
}

export function TopNav({ breadcrumbs = [] }: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b border-border bg-topnav/95 backdrop-blur supports-[backdrop-filter]:bg-topnav/80 px-3">
      <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />
      <Separator orientation="vertical" className="mr-1 h-5" />

      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList className="text-xs">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/dashboard"
              className="text-muted-foreground hover:text-foreground"
            >
              Workspace
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {i === breadcrumbs.length - 1 || !b.href ? (
                  <BreadcrumbPage className="font-medium text-foreground">{b.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={b.href} className="text-muted-foreground">
                    {b.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ml-auto flex items-center gap-1.5">
        <Button
          variant="outline"
          className="hidden md:inline-flex h-9 min-w-[280px] justify-between gap-3 border-border bg-card/60 px-3 text-xs font-normal text-muted-foreground hover:bg-card hover:text-foreground"
        >
          <span className="flex items-center gap-2">
            <Search className="h-3.5 w-3.5" />
            Search courses, mentors, events…
          </span>
          <kbd className="pointer-events-none hidden select-none items-center gap-1 rounded border border-border bg-muted/60 px-1.5 font-mono text-[10px] font-medium sm:inline-flex">
            <CommandIcon className="h-2.5 w-2.5" />K
          </kbd>
        </Button>

        <div className="hidden lg:flex items-center gap-1.5 px-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-[11px] font-medium text-muted-foreground">
            All systems operational
          </span>
        </div>

        <ThemeToggle />

        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <HelpCircle className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground hover:text-foreground"
        >
          <Bell className="h-4 w-4" />
          <Badge className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full border-2 border-topnav bg-destructive p-0 px-1 text-[9px] font-bold text-destructive-foreground">
            9
          </Badge>
        </Button>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 gap-2 px-1.5 pr-2">
              <Avatar className="h-7 w-7 border border-border">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-[#0077B6] text-[11px] font-semibold text-white">
                  AR
                </AvatarFallback>
              </Avatar>
              <div className="hidden xl:flex flex-col items-start leading-none">
                <span className="text-xs font-medium text-foreground">Dr. Aditi Raj</span>
                <span className="text-[10px] text-muted-foreground">STEM Fellow · Cohort 12</span>
              </div>
              <ChevronDown className="hidden xl:block h-3 w-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="text-xs">
              <div className="flex flex-col">
                <span className="font-semibold">Dr. Aditi Raj</span>
                <span className="text-muted-foreground font-normal">aditi.raj@igvp.health</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-3.5 w-3.5" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-3.5 w-3.5" />
              Preferences
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-3.5 w-3.5" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
