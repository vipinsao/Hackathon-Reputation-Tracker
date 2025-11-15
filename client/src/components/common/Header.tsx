"use client";

import Link from "next/link";
import { useDashboardStore } from "@/store/dashboardStore";
import { Search, Bell, Settings, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const brand = useDashboardStore((state) => state.brand);
  const setBrand = useDashboardStore((state) => state.setBrand);
  const [inputBrand, setInputBrand] = useState(brand);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputBrand.trim()) {
      setBrand(inputBrand);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="text-slate-950 font-bold" size={20} />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              BrandTracker
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500"
                size={18}
              />
              <input
                type="text"
                value={inputBrand}
                onChange={(e) => setInputBrand(e.target.value)}
                placeholder="Search brand..."
                className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800 transition"
              />
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-slate-800 rounded-lg transition">
              <Bell size={20} className="text-slate-400 hover:text-slate-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Settings */}
            <button className="p-2 hover:bg-slate-800 rounded-lg transition">
              <Settings
                size={20}
                className="text-slate-400 hover:text-slate-300"
              />
            </button>

            {/* Current Brand Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
              <TrendingUp size={14} className="text-blue-400" />
              <span className="text-sm font-semibold">{brand}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
