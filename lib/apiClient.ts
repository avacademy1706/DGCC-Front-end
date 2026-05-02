// import axios from "axios";

// export const apiClient = axios.create({
//   // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });


import axios from "axios";

export const apiClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL",
  baseURL:  "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let isRefreshing = false;

apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // access_token expire hua
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/admin-auth/refresh") &&
      !originalRequest.url?.includes("/admin-auth/login")
    ) {
      originalRequest._retry = true;

      try {
        if (!isRefreshing) {
          isRefreshing = true;

          await apiClient.post("/admin-auth/refresh");

          isRefreshing = false;
        }

        return apiClient(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;

        if (typeof window !== "undefined") {
          localStorage.removeItem("admin_user");
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);