"use client";

import { Heart, MessageCircle, Share2, Eye } from "lucide-react";

const metrics = [
  {
    icon: Heart,
    label: "Total Likes",
    value: "45,230",
    change: "+12.5%",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: MessageCircle,
    label: "Comments",
    value: "8,945",
    change: "+8.2%",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Share2,
    label: "Shares",
    value: "3,420",
    change: "+15.3%",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Eye,
    label: "Views",
    value: "234.5K",
    change: "+22.1%",
    color: "from-green-500 to-emerald-500",
  },
];

export function EngagementMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric, i) => {
        const Icon = metric.icon;
        return (
          <div
            key={i}
            className="relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition group"
          >
            {/* Gradient accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition`}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center mb-3`}
              >
                <Icon className="text-white" size={20} />
              </div>

              <p className="text-sm text-slate-400 mb-1">{metric.label}</p>
              <p className="text-2xl font-bold text-white mb-2">
                {metric.value}
              </p>
              <p className="text-xs text-green-400 font-semibold">
                {metric.change}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
