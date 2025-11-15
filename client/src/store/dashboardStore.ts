import { create } from "zustand";
import { Mention } from "@/types";

interface DashboardState {
  brand: string;
  setBrand: (brand: string) => void;
  mentions: Mention[];
  setMentions: (mentions: Mention[]) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  brand: "Tesla",
  setBrand: (brand) => set({ brand }),
  mentions: [],
  setMentions: (mentions) => set({ mentions }),
}));
