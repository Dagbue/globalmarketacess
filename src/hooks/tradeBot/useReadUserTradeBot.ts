import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import tradeBotService from "../../api/tradeBotService";
import type { ErrorType, readUserTradeBotRequest, readUserTradeBotResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadUserTradeBot = (dataToServer: readUserTradeBotRequest | undefined) => {
    const fetchUserTradeBot = async (): Promise<readUserTradeBotResponse | null> => {
        if (!dataToServer) return null;

        try {
            const { responseData, status, errorResponse } = await tradeBotService.readUserTradeBot(dataToServer);
            if (status === 200 && responseData) {
                const tradeBotData = responseData as readUserTradeBotResponse;
                if (tradeBotData.responseCode === "00") {
                    toast.success("User trade bots retrieved successfully!");
                    return tradeBotData;
                } else {
                    toast.error(tradeBotData.responseMessage || "Failed to retrieve trade bots.");
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve user trade bots. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving user trade bots";
                toast.error(errorMessage);
                logger("Read user trade bots error", axiosError, { level: "error", tag: "read-user-trade-bots" });
            }
            return null;
        }
    };

    return useQuery<readUserTradeBotResponse | null, AxiosError<ErrorType>>({
        queryKey: ["userTradeBot", dataToServer],
        queryFn: fetchUserTradeBot,
        retry: false,
        enabled: !!dataToServer, // Only run query if dataToServer is defined
    });
};

export default useReadUserTradeBot;