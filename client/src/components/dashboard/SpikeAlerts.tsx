"use client";

import { AlertTriangle, TrendingUp, Bell } from "lucide-react";
import { useState } from "react";

interface SpikeAlert {
  id: string;
  brand: string;
  type: "positive" | "negative" | "spike";
  message: string;
  mentionCount: number;
  percentageChange: number;
  timestamp: Date;
}

export function SpikeAlerts() {
  // impure calls allowed inside lazy state initializer
  const [alerts] = useState<SpikeAlert[]>(() => {
    const now = Date.now();

    return [
      {
        id: "1",
        brand: "Tesla",
        type: "spike",
        message: "📈 Mention spike detected! 340% increase in mentions",
        mentionCount: 1240,
        percentageChange: 340,
        timestamp: new Date(),
      },
      {
        id: "2",
        brand: "Tesla",
        type: "negative",
        message: "⚠️ Negative sentiment surge: Quality concerns discussed",
        mentionCount: 380,
        percentageChange: 125,
        timestamp: new Date(now - 3600000),
      },
      {
        id: "3",
        brand: "Tesla",
        type: "positive",
        message: "✨ Positive mentions up! New product announcement resonating",
        mentionCount: 520,
        percentageChange: 85,
        timestamp: new Date(now - 7200000),
      },
    ];
  });

  const getAlertColor = (type: string) => {
    switch (type) {
      case "spike":
        return "from-orange-500/20 to-red-500/20 border-orange-500/30";
      case "negative":
        return "from-red-500/20 to-pink-500/20 border-red-500/30";
      case "positive":
        return "from-green-500/20 to-emerald-500/20 border-green-500/30";
      default:
        return "from-blue-500/20 to-cyan-500/20 border-blue-500/30";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "spike":
        return <TrendingUp className="text-orange-400" size={20} />;
      case "negative":
        return <AlertTriangle className="text-red-400" size={20} />;
      case "positive":
        return <Bell className="text-green-400" size={20} />;
      default:
        return <Bell size={20} />;
    }
  };

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`bg-gradient-to-r ${getAlertColor(
            alert.type
          )} border rounded-lg p-4 hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/50 transition cursor-pointer group`}
        >
          <div className="flex items-start gap-3">
            <div className="mt-1">{getAlertIcon(alert.type)}</div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white mb-1">{alert.message}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-slate-400">
                  {alert.mentionCount.toLocaleString()} mentions
                </span>
                <span
                  className={
                    alert.percentageChange > 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {alert.percentageChange > 0 ? "+" : ""}
                  {alert.percentageChange}%
                </span>
              </div>
            </div>

            <button className="opacity-0 group-hover:opacity-100 transition p-2 hover:bg-slate-700/50 rounded-lg">
              <span className="text-xs font-semibold text-blue-400">View</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
