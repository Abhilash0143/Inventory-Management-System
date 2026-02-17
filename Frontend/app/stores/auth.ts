import { defineStore } from "pinia";

export type AuthUser = {
  id: string;
  name: string;
  role: string;
};

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: "" as string,
    user: null as AuthUser | null,
  }),

  getters: {
    isLoggedIn: (s) => !!s.accessToken && !!s.user,
  },

  actions: {
    setSession(token: string, user: AuthUser) {
      this.accessToken = token;
      this.user = user;

      // persist token (works for PWA)
      localStorage.setItem("accessToken", token);
      localStorage.setItem("user", JSON.stringify(user));
    },

    loadFromStorage() {
      const token = localStorage.getItem("accessToken");
      const userStr = localStorage.getItem("user");

      if (token && userStr) {
        this.accessToken = token;
        this.user = JSON.parse(userStr);
      }
    },

    clear() {
      this.accessToken = "";
      this.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
  },
});
