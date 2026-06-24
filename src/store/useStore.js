import { create } from 'zustand';

export const useStore = create((set) => ({
    currentTrack: null, // 'java', 'react', 'postgresql', 'python', 'wsl_docker', 'agentes_ia' or 'linux'
    activeTracks: [],   
    xpByTrack: {
        java: 0,
        react: 0,
        postgresql: 0,
        python: 0,
        wsl_docker: 0,
        agentes_ia: 0,
        linux: 0,
    },
    streak: 0,
    level: 1,
    progress: {
        java: 0,
        react: 0,
        postgresql: 0,
        python: 0,
        wsl_docker: 0,
        agentes_ia: 0,
        linux: 0,
    },
    isDarkMode: false,

    toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

    selectTrack: (trackId) => set((state) => ({
        currentTrack: trackId,
        activeTracks: state.activeTracks.includes(trackId)
            ? state.activeTracks
            : [...state.activeTracks, trackId]
    })),

    addXp: (trackId, amount) => set((state) => ({
        xpByTrack: {
            ...state.xpByTrack,
            [trackId]: (state.xpByTrack[trackId] || 0) + amount
        }
    })),

    updateProgress: (trackId, val) => set((state) => ({
        progress: { ...state.progress, [trackId]: val }
    })),
}));
