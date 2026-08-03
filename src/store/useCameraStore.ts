import { create } from "zustand"
import { Vector3 } from "three"

interface CameraState {
  target: Vector3 | [number, number, number] | null
  position: Vector3 | [number, number, number] | null
  setCameraTarget: (target: Vector3 | [number, number, number]) => void
  setCameraPosition: (position: Vector3 | [number, number, number]) => void
}

export const useCameraStore = create<CameraState>((set) => ({
  target: null,
  position: null,
  setCameraTarget: (target) => set({ target }),
  setCameraPosition: (position) => set({ position }),
}))
