// src/api/BaseFetchMethod.ts
import {
  AxiosError,
  AxiosInstance,
  AxiosProgressEvent,
  AxiosRequestHeaders,
  Method,
} from "axios";
import handleErrors from "../utils/handleError";
import { ErrorType } from "../utils/interfacesAndTypes";
import { logger } from "../utils/logger";
import { createAxiosInstance } from "./APIClient";

interface ExtraHeaders {
  [key: string]: string | null | undefined;
}

export interface FetchQuery<TRequest = any> {
  url: string;
  method: Method;
  body?: TRequest;
  extraHeaders?: AxiosRequestHeaders | ExtraHeaders;
  params?: Record<string, any>;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
  signal?: AbortSignal;
}

export interface FileBlobOption {
  isBlob?: boolean;
}

class BaseFetchMethod {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = createAxiosInstance(baseURL);
  }

  async fetchMethod<TResponse = any, TRequest = any>(
    query: FetchQuery<TRequest>
  ): Promise<{
    responseData?: TResponse;
    status?: number;
    errorResponse?: any;
  }> {
    const { url, method, body, extraHeaders, params, onUploadProgress, signal } = query;
    try {
      const config = {
        method,
        url,
        headers: {
          ...extraHeaders,
        },
        data: body instanceof FormData ? body : JSON.stringify(body),
        // data: body ? JSON.stringify(body) : null,
        params,
        onUploadProgress,
        signal,
      };
      // console.log(config);

      const response = await this.axiosInstance.request<TResponse>(config);

      // console.log(response);

      return {
        responseData: response?.data,
        status: response?.status,
      };
    } catch (error: any) {
      const responseError = error as AxiosError<ErrorType>;
      if (responseError) {
        handleErrors(responseError);
        return {
          errorResponse: responseError.response?.data,
          status: responseError.response?.status,
        };
      } else {
        logger(error);
      }
      return {};
    }
  }

  async get<TResponse = any>(
    query: Omit<FetchQuery<undefined>, "method" | "body">
  ) {
    return await this.fetchMethod<TResponse, undefined>({
      ...query,
      method: "GET",
    });
  }

  async post<TResponse = any, TRequest = any>(
    query: Omit<FetchQuery<TRequest>, "method">
  ) {
    return await this.fetchMethod<TResponse, TRequest>({
      ...query,
      method: "POST",
    });
  }

  // async get<TResponse = any>(url: string, extraHeaders?: AxiosRequestHeaders) {
  //   return this.fetchMethod<undefined, TResponse>(
  //     url,
  //     "GET",
  //     undefined,
  //     extraHeaders
  //   );
  // }

  //   async post<TRequest = any, TResponse = any>(
  //     url: string,
  //     body?: TRequest,
  //     extraHeaders?: AxiosRequestHeaders,
  //     useEncryption: boolean = true
  //   ) {
  //     return this.fetchMethod<TRequest, TResponse>(
  //       url,
  //       "POST",
  //       body,
  //       extraHeaders,
  //       useEncryption
  //     );
  //   }
}

export const baseURL = new BaseFetchMethod(
  import.meta.env.VITE_APP_BASE_URL
);
export const s3BucketURL = new BaseFetchMethod(
  import.meta.env.VITE_APP_UPLOADS3_BASE_URL
);


// example usage

// type LoginRequest = { email: string; password: string };
// type LoginResponse = { token: string; user: { id: string; name: string } };

// const { responseData, errorResponse } = await AuthAPI.post<
//   LoginRequest,
//   LoginResponse
// >("auth/login", { email: "test@example.com", password: "1234" });

// if (responseData) {
//   console.log("Login success:", responseData.user);
// } else {
//   console.error("Login failed:", errorResponse);
// }

// POST example usage
// const loginResult = await AuthAPI.post<LoginPayload, LoginResponse>({
//   url: "auth/login",
//   body: { email: "test@mail.com", password: "1234" },
// });

// GET example usage
// const dashboardData = await MainAPI.get<DashboardResponse>({
//   url: "dashboard/stats",
// });

//example with query params
// const { responseData } = await api.get<User[]>({
//     url: 'users/list',
//     params: {
//       page: 1,
//       limit: 10,
//       search: 'nonso',
//     },
//   });
//   Axios will automatically serialize this into:
//   GET /api/v1/users/list?page=1&limit=10&search=nonso
