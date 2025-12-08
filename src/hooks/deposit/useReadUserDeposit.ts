import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import tradeService from "../../api/depositService";
import type { ErrorType, readUserDepositRequest, readUserDepositResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadUserDeposit = (dataToServer: readUserDepositRequest | undefined) => {
    const fetchUserDeposit = async (): Promise<readUserDepositResponse | null> => {
        if (!dataToServer) return null;

        try {
            const { responseData, status, errorResponse } = await tradeService.readUserDeposit(dataToServer);
            if (status === 200 && responseData) {
                const depositData = responseData as readUserDepositResponse;
                if (depositData.responseCode === "00") {
                    // toast.success("User deposits retrieved successfully!");
                    return depositData;
                } else {
                    toast.error(depositData.responseMessage || "Failed to retrieve deposits.");
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve user deposits. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving user deposits";
                toast.error(errorMessage);
                logger("Read user deposits error", axiosError, { level: "error", tag: "read-user-deposits" });
            }
            return null;
        }
    };

    return useQuery<readUserDepositResponse | null, AxiosError<ErrorType>>({
        queryKey: ["userDeposit", dataToServer],
        queryFn: fetchUserDeposit,
        retry: false,
        enabled: !!dataToServer, // Only run query if dataToServer is defined
    });
};

export default useReadUserDeposit;