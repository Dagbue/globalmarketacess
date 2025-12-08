import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import WithdrawalService from "../../api/withdrawalService";
import type { ErrorType, readUserWithdrawalRequest, readUserWithdrawalResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadUserWithdrawal = (dataToServer: readUserWithdrawalRequest | undefined) => {
    const fetchUserWithdrawal = async (): Promise<readUserWithdrawalResponse | null> => {
        if (!dataToServer) return null;

        try {
            const { responseData, status, errorResponse } = await WithdrawalService.readUserWithdrawal(dataToServer);
            if (status === 200 && responseData) {
                const withdrawalData = responseData as readUserWithdrawalResponse;
                if (withdrawalData.responseCode === "00") {
                    // toast.success("User withdrawals retrieved successfully!");
                    return withdrawalData;
                } else {
                    toast.error(withdrawalData.responseMessage || "Failed to retrieve withdrawals.");
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve user withdrawals. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving user withdrawals";
                toast.error(errorMessage);
                logger("Read user withdrawals error", axiosError, { level: "error", tag: "read-user-withdrawals" });
            }
            return null;
        }
    };

    return useQuery<readUserWithdrawalResponse | null, AxiosError<ErrorType>>({
        queryKey: ["userWithdrawal", dataToServer],
        queryFn: fetchUserWithdrawal,
        retry: false,
        enabled: !!dataToServer, // Only run query if dataToServer is defined
    });
};

export default useReadUserWithdrawal;