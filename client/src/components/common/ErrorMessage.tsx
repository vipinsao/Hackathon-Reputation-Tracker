"use client";

import { AlertCircle, X } from "lucide-react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  onDismiss?: () => void;
  severity?: "error" | "warning" | "info";
}

export function ErrorMessage({
  message,
  onRetry,
  onDismiss,
  severity = "error",
}: ErrorMessageProps) {
  const getStyles = () => {
    switch (severity) {
      case "error":
        return {
          bg: "bg-red-900/20",
          border: "border-red-700/50",
          text: "text-red-400",
          icon: "text-red-500",
          button:
            "bg-red-600/20 hover:bg-red-600/30 text-red-400 border-red-600/30",
        };
      case "warning":
        return {
          bg: "bg-orange-900/20",
          border: "border-orange-700/50",
          text: "text-orange-400",
          icon: "text-orange-500",
          button:
            "bg-orange-600/20 hover:bg-orange-600/30 text-orange-400 border-orange-600/30",
        };
      case "info":
        return {
          bg: "bg-blue-900/20",
          border: "border-blue-700/50",
          text: "text-blue-400",
          icon: "text-blue-500",
          button:
            "bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border-blue-600/30",
        };
      default:
        return {
          bg: "bg-red-900/20",
          border: "border-red-700/50",
          text: "text-red-400",
          icon: "text-red-500",
          button:
            "bg-red-600/20 hover:bg-red-600/30 text-red-400 border-red-600/30",
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`${styles.bg} border ${styles.border} rounded-lg p-4 flex items-start gap-3`}
    >
      <AlertCircle
        className={`${styles.icon} flex-shrink-0 mt-0.5`}
        size={20}
      />

      <div className="flex-1">
        <p className={`${styles.text} font-medium`}>{message}</p>

        {/* Action buttons */}
        {(onRetry || onDismiss) && (
          <div className="flex gap-2 mt-3">
            {onRetry && (
              <button
                onClick={onRetry}
                className={`px-3 py-1 rounded text-sm font-medium border transition ${styles.button}`}
              >
                Retry
              </button>
            )}
            {onDismiss && (
              <button
                onClick={onDismiss}
                className={`px-3 py-1 rounded text-sm font-medium border transition ${styles.button}`}
              >
                Dismiss
              </button>
            )}
          </div>
        )}
      </div>

      {/* Close button */}
      {onDismiss && (
        <button
          onClick={onDismiss}
          className={`flex-shrink-0 ${styles.icon} hover:opacity-70 transition`}
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}

// Inline variant
export function ErrorMessageInline({ message }: { message: string }) {
  return (
    <div className="bg-red-900/20 border border-red-700/50 rounded px-3 py-2 flex items-center gap-2">
      <AlertCircle className="text-red-400" size={16} />
      <p className="text-red-400 text-sm">{message}</p>
    </div>
  );
}
