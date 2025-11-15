"use client";

import { BarChart3, Zap, Brain, Bell, Share2, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Multi-Source Aggregation",
    description:
      "Automatically track mentions from Twitter, Reddit, HackerNews, blogs, and news outlets in one place.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Sentiment Analysis",
    description:
      "Powered by advanced ML, instantly categorize mentions as positive, negative, or neutral.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Spike Detection",
    description:
      "Get real-time alerts when unusual mention spikes occur. Never miss trending conversations.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-Time Dashboard",
    description:
      "Live-updating charts, trends, and metrics. See what people are saying right now.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Topic Clustering",
    description:
      "Automatically group mentions by topic to understand what aspects people care about.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Engagement Insights",
    description:
      "Track likes, shares, comments, and reach across all platforms in unified view.",
    color: "from-indigo-500 to-blue-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Powerful Features for Smart Marketing
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Everything you need to monitor, analyze, and respond to brand mentions
          in real-time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-slate-600/50 hover:bg-slate-800/70 transition overflow-hidden"
          >
            {/* Gradient border on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition pointer-events-none`}
            ></div>

            {/* Icon background */}
            <div
              className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-4`}
            >
              {feature.icon}
            </div>

            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
