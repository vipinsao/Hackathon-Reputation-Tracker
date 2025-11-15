"use client";

import { useState } from "react";
import { useMentions } from "@/hooks/useMentions";
import { useMetrics } from "@/hooks/useMetrics";
import { useDashboardStore } from "../store/dashboardStore";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { MentionFeed } from "@/components/dashboard/MentionFeed";
import { SentimentChart } from "../components/dashboard/SenimentChart";

export default function DashboardPage() {
  const brand = useDashboardStore((state) => state.brand);
  const setBrand = useDashboardStore((state) => state.setBrand);
  const [inputBrand, setInputBrand] = useState(brand);

  const { mentions, isLoading: mentionsLoading } = useMentions(brand);
  const { metrics, isLoading: metricsLoading } = useMetrics(brand);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setBrand(inputBrand);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-white">🎯 Brand Tracker</h1>

            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputBrand}
                  onChange={(e) => setInputBrand(e.target.value)}
                  placeholder="Search brand..."
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <MetricCard
            label="Total Mentions"
            value={metrics?.total || 0}
            trend="+12%"
          />
          <MetricCard
            label="Positive"
            value={metrics?.bySentiment.positive || 0}
            trend="+8%"
          />
          <MetricCard
            label="Negative"
            value={metrics?.bySentiment.negative || 0}
            trend="-5%"
          />
        </div>

        {/* Charts and Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SentimentChart metrics={metrics} />
          <div>
            <h3 className="text-white font-semibold mb-4">Recent Mentions</h3>
            {mentionsLoading ? (
              <div className="text-slate-400">Loading...</div>
            ) : (
              <MentionFeed mentions={mentions.slice(0, 5)} />
            )}
          </div>
        </div>

        {/* Full Mention Feed */}
        <div>
          <h3 className="text-white font-semibold mb-4">All Mentions</h3>
          {mentionsLoading ? (
            <div className="text-slate-400">Loading...</div>
          ) : (
            <MentionFeed mentions={mentions} />
          )}
        </div>
      </main>
    </div>
  );
}
