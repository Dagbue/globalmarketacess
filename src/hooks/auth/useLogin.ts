import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import authService from "../../api/authService";
import type { ErrorType, loginResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

interface loginData {
  email: string;
  password: string;
}

const useLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginUser = async (dataToServer: loginData): Promise<boolean> => {
    try {
      setIsSubmitting(true);

      const { responseData, status, errorResponse } = await authService.login(dataToServer);

      if (status === 200 && responseData) {
        const loginData = responseData as loginResponse;

        if (loginData.responseMessage.includes("success")) {
          const userId = loginData.user?.userId ;
          // cross check the userId type (string/number) from the loginResponse
          // @ts-ignore
          localStorage.setItem("userId", userId);
          // toast.success("Login successful!");
          return true;
        } else {
          toast.error(loginData.responseMessage || "Login failed. Please try again.");
          return false;
        }
      } else {
        toast.error(errorResponse?.message || "Login failed. Please try again.");
        return false;
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorType>;
      if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
        const message = axiosError.response?.data?.message || "An error occurred during login Email or Password incorrect";
        toast.error(message);
        logger("Login error", axiosError, { level: "error", tag: "login" });
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { loginUser, isSubmitting };
};

export default useLogin;