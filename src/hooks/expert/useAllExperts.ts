import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import expertService from "../../api/expertService";
import type { ErrorType, readAllExpertResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useAllExperts = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchAllExperts = async (): Promise<readAllExpertResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await expertService.allExpert();

            if (status === 200 && responseData) {
                const expertData = responseData as readAllExpertResponse;

                if (expertData.responseMessage.includes("Experts found")) {
                    // toast.success("All experts retrieved successfully!");
                    return expertData;
                } else {
                    toast.error(expertData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve all experts. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving all experts";
                toast.error(errorMessage);
                logger("Fetch all experts error", axiosError, { level: "error", tag: "fetch-all-experts" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { fetchAllExperts, isSubmitting };
};

export default useAllExperts;