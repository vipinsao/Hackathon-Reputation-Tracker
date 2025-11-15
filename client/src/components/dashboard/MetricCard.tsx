"use client";

import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: string;
  icon?: LucideIcon;
  color?: string;
}

export function MetricCard({
  label,
  value,
  trend,
  icon: Icon,
  color = "from-blue-500 to-cyan-500",
}: MetricCardProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition group">
      {/* Gradient accent */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {Icon && (
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-3 text-white`}
          >
            <Icon size={24} />
          </div>
        )}

        <p className="text-sm text-slate-400 mb-2">{label}</p>
        <p className="text-3xl font-bold text-white mb-2">
          {typeof value === "number" ? value.toLocaleString() : value}
        </p>
        {trend && (
          <p
            className={`text-xs font-semibold ${
              trend.startsWith("+") ? "text-green-400" : "text-red-400"
            }`}
          >
            {trend}
          </p>
        )}
      </div>
    </div>
  );
}
