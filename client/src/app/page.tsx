"use client";

import Link from "next/link";
import { HeroSection } from "../components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="text-slate-950" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              BrandTracker
            </span>
          </div>

          <Link
            href="/dashboard"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition flex items-center gap-2"
          >
            Launch Dashboard <ArrowRight size={18} />
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Monitor Your Brand?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Get real-time insights on what people are saying about your brand
            across all platforms.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition text-lg font-semibold"
          >
            Start Monitoring Now <TrendingUp size={20} />
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400">
          <p>© 2025 BrandTracker. Built for marketing teams who care.</p>
        </div>
      </footer>
    </div>
  );
}
