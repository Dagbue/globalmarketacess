import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import authService from "../../api/authService";
import type { BaseResponse, ErrorType, updateUserRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useUpdateUser = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateUser = async (dataToServer: {
        displayPicture: string;
        lastName: string;
        country: string;
        twoFactorAuthenticationCode: string;
        userStatus: string;
        role: string;
        totalDepositedAmount: number;
        createdAt: string;
        loss: number;
        password: string | number;
        realizedProfit: number;
        totalWithdrawals: number;
        currentPlan: string | null;
        referralCode: string;
        currency: string;
        profit: number;
        email: string;
        updatedAt: string;
        backId: string;
        creditScore: string;
        address: string;
        otp: number | null;
        userId: number;
        copiedTraders: string;
        frontId: string;
        firstName: string;
        phoneNumber: string;
        walletName: string;
        walletAddress: string | number;
        btcBalance: number;
        copyProfit: number
    }): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            // @ts-ignore
            const { responseData, status, errorResponse } = await authService.updateUser(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    // toast.success("User updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "User update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during user update";
                toast.error(errorMessage);
                logger("Update user error", axiosError, { level: "error", tag: "update-user" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updateUser, isSubmitting };
};

export default useUpdateUser;