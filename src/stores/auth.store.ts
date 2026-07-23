import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserProfile {
  id: string;
  email: string;
  fullName?: string;
  phoneNumber?: string;
  role: "USER" | "AGENT" | "ADMIN" | string;
  faceCaptureUrl?: string;
  isKycVerified?: boolean;
}

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: UserProfile, token?: string | null) => void;
  logout: () => void;
  isAgent: () => boolean;
  isUser: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setAuth: (user: UserProfile, token?: string | null) =>
        set((state) => ({
          user,
          token: token !== undefined && token !== null ? token : state.token,
          isAuthenticated: true,
        })),

      logout: () => set({ user: null, token: null, isAuthenticated: false }),

      isAgent: () => get().user?.role === "AGENT",
      isUser: () => get().user?.role === "USER",
    }),
    { name: "auth-storage" },
  ),
);
