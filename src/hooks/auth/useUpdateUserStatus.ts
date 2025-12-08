import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import authService from "../../api/authService";
import type { BaseResponse, ErrorType, updateUserStatusRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useUpdateUserStatus = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateUserStatus = async (dataToServer: updateUserStatusRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await authService.updateUserStatus(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    toast.success("User status updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "User status update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during user status update";
                toast.error(errorMessage);
                logger("Update user status error", axiosError, { level: "error", tag: "update-user-status" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updateUserStatus, isSubmitting };
};

export default useUpdateUserStatus;