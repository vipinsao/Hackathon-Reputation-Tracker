"use client";

interface MetricCardProps {
  label: string;
  value: number;
  trend?: string;
}

export function MetricCard({ label, value, trend }: MetricCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="text-3xl font-bold text-white mt-2">{value}</p>
      {trend && <p className="text-xs text-green-400 mt-2">{trend}</p>}
    </div>
  );
}
