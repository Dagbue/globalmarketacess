// useResetPassword.ts
import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import authService from "../../api/authService";
import type { BaseResponse, ErrorType, resetPasswordRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useResetPassword = () => {
    const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);

    const resetPassword = async (dataToServer: resetPasswordRequest): Promise<boolean> => {
        try {
            setIsPasswordSubmitting(true);

            const { responseData, status, errorResponse } = await authService.resetPassword(dataToServer);

            if (status === 200 && responseData) {
                const resetData = responseData as BaseResponse;

                if (resetData.responseMessage.includes("success")) {
                    toast.success("Password reset successfully!");
                    return true;
                } else {
                    toast.error(resetData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Password reset failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during password reset";
                toast.error(errorMessage);
                logger("Reset password error", axiosError, { level: "error", tag: "reset-password" });
            }
            return false;
        } finally {
            setIsPasswordSubmitting(false);
        }
    };

    return { resetPassword, isPasswordSubmitting };
};

export default useResetPassword;