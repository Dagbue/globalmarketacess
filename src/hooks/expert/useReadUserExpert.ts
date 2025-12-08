import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import expertService from "../../api/expertService";
import type { ErrorType, readUserExpertRequest, readUserExpertResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadUserExpert = (dataToServer: readUserExpertRequest | undefined) => {
    const fetchUserExpert = async (): Promise<readUserExpertResponse | null> => {
        if (!dataToServer) return null;

        try {
            const { responseData, status, errorResponse } = await expertService.readUserExpert(dataToServer);
            if (status === 200 && responseData) {
                const expertData = responseData as readUserExpertResponse;
                if (expertData.responseCode === "00") {
                    toast.success("User experts retrieved successfully!");
                    return expertData;
                } else {
                    toast.error(expertData.responseMessage || "Failed to retrieve experts.");
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve user experts. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving user experts";
                toast.error(errorMessage);
                logger("Read user experts error", axiosError, { level: "error", tag: "read-user-experts" });
            }
            return null;
        }
    };

    return useQuery<readUserExpertResponse | null, AxiosError<ErrorType>>({
        queryKey: ["userExpert", dataToServer],
        queryFn: fetchUserExpert,
        retry: false,
        enabled: !!dataToServer, // Only run query if dataToServer is defined
    });
};

export default useReadUserExpert;