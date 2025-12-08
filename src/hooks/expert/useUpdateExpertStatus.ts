import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import expertService from "../../api/expertService";
import type { BaseResponse, ErrorType, updateExpertStatusRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useUpdateExpertStatus = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateExpertStatus = async (dataToServer: updateExpertStatusRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await expertService.updateExpertStatus(dataToServer);

            if (status === 200 && responseData) {
                const updateData = responseData as BaseResponse;

                if (updateData.responseMessage.includes("success")) {
                    toast.success("Expert status updated successfully!");
                    return true;
                } else {
                    toast.error(updateData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Expert status update failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during expert status update";
                toast.error(errorMessage);
                logger("Update expert status error", axiosError, { level: "error", tag: "update-expert-status" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { updateExpertStatus, isSubmitting };
};

export default useUpdateExpertStatus;