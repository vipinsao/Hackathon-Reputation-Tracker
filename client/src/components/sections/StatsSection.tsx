"use client";

export function StatsSection() {
  const stats = [
    { value: "50K+", label: "Mentions Tracked Daily" },
    { value: "95%", label: "Sentiment Accuracy" },
    { value: "15 Platforms", label: "Data Sources" },
    { value: "<500ms", label: "Update Latency" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center p-8 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition"
          >
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {stat.value}
            </p>
            <p className="text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
