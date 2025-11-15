"use client";

const topics = [
  { word: "Quality", weight: 9, sentiment: "positive" },
  { word: "Innovation", weight: 8, sentiment: "positive" },
  { word: "Price", weight: 7, sentiment: "neutral" },
  { word: "Design", weight: 8, sentiment: "positive" },
  { word: "Delivery", weight: 6, sentiment: "negative" },
  { word: "Performance", weight: 8, sentiment: "positive" },
  { word: "Customer Service", weight: 5, sentiment: "neutral" },
  { word: "Technology", weight: 7, sentiment: "positive" },
  { word: "Issues", weight: 6, sentiment: "negative" },
  { word: "Experience", weight: 8, sentiment: "positive" },
];

export function TopicsCloud() {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-400 bg-green-500/10 border-green-500/30";
      case "negative":
        return "text-red-400 bg-red-500/10 border-red-500/30";
      default:
        return "text-slate-400 bg-slate-500/10 border-slate-500/30";
    }
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
      <h3 className="text-lg font-bold mb-4 text-white">Popular Topics</h3>

      <div className="flex flex-wrap gap-3">
        {topics.map((topic, i) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-full border transition hover:scale-110 cursor-pointer ${getSentimentColor(
              topic.sentiment
            )}`}
            style={{
              fontSize: `${0.75 + (topic.weight / 10) * 0.5}rem`,
            }}
          >
            {topic.word}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-700/50 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-green-400">45%</p>
          <p className="text-sm text-slate-400">Positive</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-slate-400">30%</p>
          <p className="text-sm text-slate-400">Neutral</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-red-400">25%</p>
          <p className="text-sm text-slate-400">Negative</p>
        </div>
      </div>
    </div>
  );
}
