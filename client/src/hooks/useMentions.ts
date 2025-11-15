"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Mention } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export function useMentions(brand: string = "Tesla") {
  const [mentions, setMentions] = useState<Mention[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentions = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/api/mentions`, {
          params: { brand, limit: 50 },
        });
        setMentions(response.data.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentions();
    const interval = setInterval(fetchMentions, 30000);
    return () => clearInterval(interval);
  }, [brand]);

  return { mentions, isLoading, error };
}
