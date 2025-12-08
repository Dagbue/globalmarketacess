import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import tradeService from "../../api/tradeService";
import type { ErrorType, readUserTradeRequest, readUserTradeResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadUserTrade = (dataToServer: readUserTradeRequest | undefined) => {
    const fetchUserTrade = async (): Promise<readUserTradeResponse | null> => {
        if (!dataToServer) return null;

        try {
            const { responseData, status, errorResponse } = await tradeService.readUserTrade(dataToServer);
            if (status === 200 && responseData) {
                const tradeData = responseData as readUserTradeResponse;
                if (tradeData.responseCode === "00" && tradeData.responseMessage.includes("Trades found")) {
                    // toast.success("User trades retrieved successfully!");
                    return tradeData;
                } else {
                    toast.error(tradeData.responseMessage || "Failed to retrieve trades.");
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve user trades. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving user trades";
                toast.error(errorMessage);
                logger("Read user trades error", axiosError, { level: "error", tag: "read-user-trades" });
            }
            return null;
        }
    };

    return useQuery<readUserTradeResponse | null, AxiosError<ErrorType>>({
        queryKey: ["userTrade", dataToServer],
        queryFn: fetchUserTrade,
        retry: false,
        enabled: !!dataToServer, // Only run query if dataToServer is defined
    });
};

export default useReadUserTrade;