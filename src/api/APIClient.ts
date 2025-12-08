// src/api/APIClient.ts
import axios, { AxiosInstance } from "axios";
import { toast } from "sonner";

export function createAxiosInstance(baseURL: string): AxiosInstance {
  const instance = axios.create({
    baseURL: `${baseURL}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // Response Interceptor
  instance.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error?.response?.status;

        if (status === 401) {
          toast.error("Unauthorized access");
        } else if (status === 403) {
          const message =
              error?.response?.data?.data || "No permission to use this resource!";
          toast.warning(`${message}`);
        }

        return Promise.reject(error);
      }
  );

  return instance;
}