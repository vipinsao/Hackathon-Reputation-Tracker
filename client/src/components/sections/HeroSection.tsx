"use client";

import Link from "next/link";
import { BarChart3, TrendingUp, AlertCircle, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full mb-6 border border-slate-700">
          <Zap size={16} className="text-blue-400" />
          <span className="text-sm text-slate-300">Monitor in Real-Time</span>
        </div>

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
          Never Miss a Brand Mention Again
        </h1>

        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
          Track brand mentions across Twitter, Reddit, HackerNews and more. Get
          AI-powered sentiment analysis, detect spikes instantly, and respond
          before your competitors.
        </p>

        <div className="flex gap-4 mb-12">
          <Link
            href="/dashboard"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition font-semibold"
          >
            Start Free
          </Link>
          <button className="px-8 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition font-semibold">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
            <p className="text-2xl font-bold text-blue-400">50K+</p>
            <p className="text-sm text-slate-400">Daily Mentions</p>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
            <p className="text-2xl font-bold text-cyan-400">95%</p>
            <p className="text-sm text-slate-400">Accuracy Rate</p>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
            <p className="text-2xl font-bold text-purple-400">100ms</p>
            <p className="text-sm text-slate-400">Avg Latency</p>
          </div>
        </div>
      </div>

      {/* Visual Demo */}
      <div className="relative h-96 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>

        {/* Animated dashboard preview */}
        <div className="absolute inset-4 flex flex-col gap-3">
          <div className="h-12 bg-slate-700/50 rounded-lg animate-pulse"></div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 bg-slate-700/50 rounded-lg animate-pulse"></div>
            <div
              className="h-16 bg-slate-700/50 rounded-lg animate-pulse"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="h-16 bg-slate-700/50 rounded-lg animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <div
            className="flex-1 bg-slate-700/50 rounded-lg animate-pulse"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-8 left-8 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
          <TrendingUp className="text-green-400" />
        </div>
        <div className="absolute bottom-8 right-8 p-3 bg-orange-500/20 rounded-lg border border-orange-500/30">
          <AlertCircle className="text-orange-400" />
        </div>
      </div>
    </section>
  );
}
