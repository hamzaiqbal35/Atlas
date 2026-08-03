import { create } from "zustand"

interface UIState {
  // Empty state for now since we removed search and observatory
}

export const useUIStore = create<UIState>((set) => ({
}))
