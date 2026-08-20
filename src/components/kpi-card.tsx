import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface KpiProps {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "flat";
  icon: LucideIcon;
  hint?: string;
  accent?: string;
}

export function KpiCard({
  label,
  value,
  delta,
  trend = "up",
  icon: Icon,
  hint,
  accent = "text-primary",
}: KpiProps) {
  return (
    <Card className="relative overflow-hidden border-border bg-card">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {label}
            </p>
            <p className="mt-1.5 text-2xl font-bold tracking-tight text-foreground">{value}</p>
            {(delta || hint) && (
              <div className="mt-1.5 flex items-center gap-1.5">
                {delta && (
                  <span
                    className={`inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[10px] font-semibold ${
                      trend === "up"
                        ? "bg-success/10 text-success"
                        : trend === "down"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <TrendingUp className={`h-2.5 w-2.5 ${trend === "down" ? "rotate-180" : ""}`} />
                    {delta}
                  </span>
                )}
                {hint && <span className="text-[10px] text-muted-foreground">{hint}</span>}
              </div>
            )}
          </div>
          <div
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-secondary/60 ${accent}`}
          >
            <Icon className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
