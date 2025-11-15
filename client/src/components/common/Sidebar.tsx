"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  TrendingUp,
  AlertCircle,
  BarChart3,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const items = [
    {
      icon: LayoutDashboard,
      label: "Overview",
      href: "/dashboard",
      id: "overview",
    },
    {
      icon: TrendingUp,
      label: "Trends",
      href: "/dashboard?tab=trends",
      id: "trends",
    },
    {
      icon: AlertCircle,
      label: "Alerts",
      href: "/dashboard?tab=alerts",
      id: "alerts",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      href: "/dashboard?tab=analytics",
      id: "analytics",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/dashboard?tab=settings",
      id: "settings",
    },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col bg-slate-900/50 border-r border-slate-800/50 p-4">
      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 text-blue-400"
                  : "text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
