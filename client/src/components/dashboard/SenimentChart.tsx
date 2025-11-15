"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { DashboardMetrics } from "@/types";

interface SentimentChartProps {
  metrics: DashboardMetrics | null;
}

const COLORS = {
  positive: "#10b981",
  negative: "#ef4444",
  neutral: "#6b7280",
};

export function SentimentChart({ metrics }: SentimentChartProps) {
  if (!metrics) return <div className="text-slate-400">Loading...</div>;

  const data = [
    {
      name: "Positive",
      value: metrics.bySentiment.positive,
      fill: COLORS.positive,
    },
    {
      name: "Negative",
      value: metrics.bySentiment.negative,
      fill: COLORS.negative,
    },
    {
      name: "Neutral",
      value: metrics.bySentiment.neutral,
      fill: COLORS.neutral,
    },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
      <h3 className="text-white font-semibold mb-4">Sentiment Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(Number(percent) * 100).toFixed(0)}%`
            }
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
