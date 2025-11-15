"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const comparisonData = [
  { metric: "Sentiment", YourBrand: 78, Competitor1: 65, Competitor2: 72 },
  { metric: "Reach", YourBrand: 85, Competitor1: 70, Competitor2: 75 },
  { metric: "Engagement", YourBrand: 82, Competitor1: 68, Competitor2: 71 },
  { metric: "Growth", YourBrand: 88, Competitor1: 60, Competitor2: 65 },
];

export function BrandComparison() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
      <h3 className="text-lg font-bold mb-4 text-white">
        Competitive Analysis
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#404854" />
          <XAxis dataKey="metric" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #404854",
            }}
          />
          <Legend />
          <Bar dataKey="YourBrand" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Competitor1" fill="#64748b" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Competitor2" fill="#475569" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
