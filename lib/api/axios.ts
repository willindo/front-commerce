import axios from "axios";

const isServer = typeof window === "undefined";
const isProd = process.env.NODE_ENV === "production";

export const api = axios.create({
  baseURL: isServer
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
    : isProd
    ? process.env.NEXT_PUBLIC_API_URL
    : "http://localhost:3001",
  withCredentials: true,
});

// Just log 401s — don't redirect here
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn("401 unauthorized response — clearing local auth");
      try {
        localStorage.removeItem("user");
      } catch (e) {}
      // don't import router here; instead emit a simple navigation
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(err);
  }
);
