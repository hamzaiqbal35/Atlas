import { create } from "zustand";
import { knowledgeGraph, GraphNode } from "@/data/knowledgeGraph";

interface DataState {
  activeNodeId: string | null;
  history: string[];
  setActiveNode: (id: string | null) => void;
  goBack: () => void;
  getActiveNode: () => GraphNode | null;
}

export const useDataStore = create<DataState>((set, get) => ({
  activeNodeId: null,
  history: [],
  
  setActiveNode: (id) => {
    const currentId = get().activeNodeId;
    if (id === currentId) return;
    
    set((state) => {
      // Only add to history if we are actually navigating to a valid new node
      const newHistory = currentId ? [...state.history, currentId] : state.history;
      return {
        activeNodeId: id,
        history: id === null ? [] : newHistory, // Clear history if we are closing the panel
      };
    });
  },
  
  goBack: () => {
    set((state) => {
      if (state.history.length === 0) return { activeNodeId: null };
      const newHistory = [...state.history];
      const prevId = newHistory.pop() || null;
      return {
        activeNodeId: prevId,
        history: newHistory,
      };
    });
  },
  
  getActiveNode: () => {
    const id = get().activeNodeId;
    return id && knowledgeGraph[id] ? knowledgeGraph[id] : null;
  }
}));
