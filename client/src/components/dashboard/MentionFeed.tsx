"use client";

import { Mention } from "@/types";
import { formatDistanceToNow } from "date-fns";

interface MentionFeedProps {
  mentions: Mention[];
}

export function MentionFeed({ mentions }: MentionFeedProps) {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800";
      case "negative":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      {mentions.length === 0 ? (
        <div className="text-center py-8 text-slate-400">No mentions yet</div>
      ) : (
        mentions.map((mention) => (
          <div
            key={mention._id}
            className="bg-slate-800 p-4 rounded-lg border border-slate-700"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-white font-semibold">{mention.author}</p>
                <p className="text-slate-300 text-sm mt-2">{mention.content}</p>
                <div className="mt-3 flex gap-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${getSentimentColor(
                      mention.sentiment
                    )}`}
                  >
                    {mention.sentiment}
                  </span>
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                    {mention.source}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                {formatDistanceToNow(new Date(mention.fetchedAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
