"use client";

import { useState, useEffect } from "react";
import Header from "@/components/common/Header";
import { Sidebar } from "@/components/common/Sidebar";
import { useMentions } from "@/hooks/useMentions";
import { useMetrics } from "@/hooks/useMetrics";
import { useDashboardStore } from "@/store/dashboardStore";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { MentionFeed } from "@/components/dashboard/MentionFeed";
import { SentimentChart } from "../../components/dashboard/SentimentChart";
import { TimelineGraph } from "@/components/dashboard/TimelineGraph";
import { TopicsCloud } from "@/components/dashboard/TopicsCloud";
import { SpikeAlerts } from "@/components/dashboard/SpikeAlerts";
import { SourceBreakdown } from "@/components/dashboard/SourceBreakdown";
import { EngagementMetrics } from "@/components/dashboard/EngagementMetrics";
import { BrandComparison } from "@/components/dashboard/BrandComparison";
import { Loading } from "../../components/common/Loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, AlertCircle, BarChart3 } from "lucide-react";

export default function DashboardPage() {
  const brand = useDashboardStore((state) => state.brand);
  const { mentions, isLoading: mentionsLoading } = useMentions(brand);
  const { metrics, isLoading: metricsLoading } = useMetrics(brand);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Top Stats */}
            <div className="mb-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Brand Monitor
                </h1>
                <p className="text-slate-400">Real-time insights for {brand}</p>
              </div>

              {metricsLoading ? (
                <Loading />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <MetricCard
                    label="Total Mentions"
                    value={metrics?.total || 0}
                    trend="+12.5%"
                    icon={TrendingUp}
                    color="from-blue-500 to-cyan-500"
                  />
                  <MetricCard
                    label="Positive Sentiment"
                    value={metrics?.bySentiment.positive || 0}
                    trend="+8.2%"
                    icon={TrendingUp}
                    color="from-green-500 to-emerald-500"
                  />
                  <MetricCard
                    label="Negative Sentiment"
                    value={metrics?.bySentiment.negative || 0}
                    trend="-5.3%"
                    icon={AlertCircle}
                    color="from-red-500 to-pink-500"
                  />
                  <MetricCard
                    label="Engagement Rate"
                    value="8.45%"
                    trend="+3.2%"
                    icon={BarChart3}
                    color="from-purple-500 to-pink-500"
                  />
                </div>
              )}
            </div>

            {/* Engagement Metrics Row */}
            <div className="mb-8">
              <EngagementMetrics />
            </div>

            {/* Main Tabs */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-6"
            >
              <TabsList className="bg-slate-800/50 border border-slate-700/50">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="alerts">Alerts & Spikes</TabsTrigger>
                <TabsTrigger value="mentions">Mentions</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Row 1: Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <SentimentChart metrics={metrics} />
                  <TimelineGraph />
                </div>

                {/* Row 2: Topics & Source */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <TopicsCloud />
                  <SourceBreakdown />
                </div>

                {/* Row 3: Recent Mentions */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-white">
                    Recent Mentions
                  </h3>
                  {mentionsLoading ? (
                    <Loading />
                  ) : (
                    <MentionFeed mentions={mentions.slice(0, 5)} />
                  )}
                </div>
              </TabsContent>

              {/* Alerts Tab */}
              <TabsContent value="alerts">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-4 text-white">
                      Real-Time Alerts
                    </h3>
                    <SpikeAlerts />
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-4 text-white">
                      Alert Stats
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                        <p className="text-2xl font-bold text-orange-400">3</p>
                        <p className="text-sm text-slate-400">Spike Alerts</p>
                      </div>
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-2xl font-bold text-red-400">2</p>
                        <p className="text-sm text-slate-400">
                          Negative Trends
                        </p>
                      </div>
                      <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <p className="text-2xl font-bold text-green-400">5</p>
                        <p className="text-sm text-slate-400">
                          Positive Mentions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Mentions Tab */}
              <TabsContent value="mentions">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-white">
                    All Mentions
                  </h3>
                  {mentionsLoading ? (
                    <Loading />
                  ) : (
                    <MentionFeed mentions={mentions} />
                  )}
                </div>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics">
                <div className="space-y-6">
                  <BrandComparison />
                  <SourceBreakdown />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
