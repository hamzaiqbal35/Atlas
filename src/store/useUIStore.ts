import { create } from "zustand";

interface UIState {
  isTelemetryVisible: boolean;
  toggleTelemetry: () => void;
  setTelemetryVisible: (visible: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isTelemetryVisible: true,
  toggleTelemetry: () => set((state) => ({ isTelemetryVisible: !state.isTelemetryVisible })),
  setTelemetryVisible: (visible) => set({ isTelemetryVisible: visible }),
}));
