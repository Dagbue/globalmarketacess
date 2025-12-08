import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import authService from "../../api/authService";
import type { BaseResponse, ErrorType } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

interface ResendOTPData {
    email: string;
}

const useResendOTP = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const resendOTP = async (dataToServer: ResendOTPData): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await authService.resendOtp(dataToServer);

            if (status === 200 && responseData) {
                const otpData = responseData as BaseResponse;

                if (otpData.responseMessage.includes("success")) {
                    toast.success("OTP resent successfully!");
                    return true;
                } else {
                    toast.error(otpData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to resend OTP. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while resending OTP";
                toast.error(errorMessage);
                logger("Resend OTP error", axiosError, { level: "error", tag: "resend-otp" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { resendOTP, isSubmitting };
};

export default useResendOTP;