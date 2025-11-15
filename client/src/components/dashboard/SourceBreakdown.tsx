"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const sourceData = [
  { source: "Twitter", mentions: 450, color: "#3b82f6" },
  { source: "Reddit", mentions: 320, color: "#f97316" },
  { source: "HackerNews", mentions: 180, color: "#eab308" },
  { source: "Blogs", mentions: 240, color: "#10b981" },
  { source: "News", mentions: 290, color: "#8b5cf6" },
];

export function SourceBreakdown() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
      <h3 className="text-lg font-bold mb-4 text-white">Mentions by Source</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sourceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#404854" />
          <XAxis dataKey="source" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #404854",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="mentions" radius={[8, 8, 0, 0]}>
            {sourceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-5 gap-2 mt-6">
        {sourceData.map((item, i) => (
          <div
            key={i}
            className="text-center p-3 bg-slate-700/30 rounded-lg border border-slate-700/50"
          >
            <p className="text-2xl font-bold text-white">{item.mentions}</p>
            <p className="text-xs text-slate-400 mt-1">{item.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
