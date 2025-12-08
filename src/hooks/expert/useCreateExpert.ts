import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import expertService from "../../api/expertService";
import type { BaseResponse, ErrorType, createExpertRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useCreateExpert = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const createExpert = async (dataToServer: createExpertRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await expertService.createExpert(dataToServer);

            if (status === 200 && responseData) {
                const createData = responseData as BaseResponse;

                if (createData.responseMessage.includes("success")) {
                    // toast.success("Expert created successfully!");
                    return true;
                } else {
                    toast.error(createData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Expert creation failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during expert creation";
                toast.error(errorMessage);
                logger("Create expert error", axiosError, { level: "error", tag: "create-expert" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { createExpert, isSubmitting };
};

export default useCreateExpert;