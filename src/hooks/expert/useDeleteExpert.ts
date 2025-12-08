import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import expertService from "../../api/expertService";
import type { BaseResponse, ErrorType, deleteExpertRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useDeleteExpert = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const deleteExpert = async (dataToServer: deleteExpertRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await expertService.deleteExpert(dataToServer);

            if (status === 200 && responseData) {
                const deleteData = responseData as BaseResponse;

                if (deleteData.responseMessage.includes("success")) {
                    toast.success("Expert deleted successfully!");
                    return true;
                } else {
                    toast.error(deleteData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Expert deletion failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during expert deletion";
                toast.error(errorMessage);
                logger("Delete expert error", axiosError, { level: "error", tag: "delete-expert" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { deleteExpert, isSubmitting };
};

export default useDeleteExpert;