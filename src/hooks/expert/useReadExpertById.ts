import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import expertService from "../../api/expertService";
import type { ErrorType, readExpertByIdRequest, readExpertByIdResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadExpertById = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const readExpertById = async (dataToServer: readExpertByIdRequest): Promise<readExpertByIdResponse | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await expertService.readExpertById(dataToServer);

            if (status === 200 && responseData) {
                const expertData = responseData as readExpertByIdResponse;

                if (expertData.responseMessage.includes("success")) {
                    toast.success("Expert retrieved successfully!");
                    return expertData;
                } else {
                    toast.error(expertData.responseMessage);
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve expert. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving expert";
                toast.error(errorMessage);
                logger("Read expert by ID error", axiosError, { level: "error", tag: "read-expert-by-id" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { readExpertById, isSubmitting };
};

export default useReadExpertById;