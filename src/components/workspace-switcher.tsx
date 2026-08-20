import { Link, useRouterState } from "@tanstack/react-router";
import { Check, ChevronsUpDown } from "lucide-react";
import { getWorkspaceForPath, WORKSPACES } from "@/lib/workspaces";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function WorkspaceSwitcher() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const current = getWorkspaceForPath(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-full items-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent/40 px-2 py-1.5 text-left hover:bg-sidebar-accent transition-colors group">
        <div
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gradient-to-br ${current.accent} text-white shadow-sm`}
        >
          <current.icon className="h-3.5 w-3.5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-sidebar-foreground leading-tight truncate">
            {current.label}
          </p>
          <p className="text-[9px] text-muted-foreground truncate">{current.subtitle}</p>
        </div>
        <ChevronsUpDown className="h-3 w-3 shrink-0 text-muted-foreground group-hover:text-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64" sideOffset={4}>
        <DropdownMenuLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Switch workspace
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {WORKSPACES.map((w) => (
          <DropdownMenuItem key={w.id} asChild className="p-0 focus:bg-transparent">
            <Link
              to={w.homeUrl}
              onClick={() => {
                if (typeof window !== "undefined") {
                  localStorage.setItem("activeWorkspaceId", w.id);
                }
              }}
              className="flex w-full items-center gap-2.5 rounded-sm px-2 py-1.5 text-xs hover:bg-accent focus:bg-accent"
            >
              <div
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gradient-to-br ${w.accent} text-white`}
              >
                <w.icon className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground truncate">{w.label}</p>
                <p className="text-[10px] text-muted-foreground truncate">{w.subtitle}</p>
              </div>
              {w.id === current.id && <Check className="h-3.5 w-3.5 text-primary shrink-0" />}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
