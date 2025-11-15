"use client";

import { Inbox } from "lucide-react";

interface EmptyProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function Empty({
  title = "No data found",
  description = "There are no items to display at the moment.",
  icon = <Inbox size={48} />,
  action,
}: EmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-slate-500 mb-4">{icon}</div>

      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 max-w-md mb-6">{description}</p>

      {action && (
        <button
          onClick={action.onClick}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
