"use client";

import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const timelineData = [
  { time: "00:00", positive: 120, negative: 45, neutral: 60 },
  { time: "04:00", positive: 150, negative: 50, neutral: 65 },
  { time: "08:00", positive: 200, negative: 70, neutral: 80 },
  { time: "12:00", positive: 280, negative: 90, neutral: 100 },
  { time: "16:00", positive: 320, negative: 110, neutral: 120 },
  { time: "20:00", positive: 380, negative: 140, neutral: 150 },
  { time: "Now", positive: 450, negative: 160, neutral: 180 },
];

export function TimelineGraph() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
      <h3 className="text-lg font-bold mb-4 text-white">
        24-Hour Sentiment Trend
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={timelineData}>
          <defs>
            <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#404854" />
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #404854",
              borderRadius: "8px",
            }}
          />
          <Area
            type="monotone"
            dataKey="positive"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorPositive)"
          />
          <Area
            type="monotone"
            dataKey="negative"
            stroke="#ef4444"
            fillOpacity={1}
            fill="url(#colorNegative)"
          />
          <Line
            type="monotone"
            dataKey="neutral"
            stroke="#6b7280"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
