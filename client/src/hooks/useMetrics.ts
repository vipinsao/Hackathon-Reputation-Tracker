"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { DashboardMetrics } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export function useMetrics(brand: string = "Tesla") {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/api/mentions/metrics`, {
          params: { brand },
        });
        setMetrics(response.data.data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 60000);
    return () => clearInterval(interval);
  }, [brand]);

  return { metrics, isLoading };
}
