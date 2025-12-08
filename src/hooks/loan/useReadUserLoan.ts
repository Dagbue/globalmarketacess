import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import loanService from "../../api/loanService";
import type { ErrorType, readUserLoanRequest, readUserLoanResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useReadUserLoan = (dataToServer: readUserLoanRequest | undefined) => {
    const fetchUserLoan = async (): Promise<readUserLoanResponse | null> => {
        if (!dataToServer) return null;

        try {
            const { responseData, status, errorResponse } = await loanService.readUserLoan(dataToServer);
            if (status === 200 && responseData) {
                const loanData = responseData as readUserLoanResponse;
                if (loanData.responseCode === "00") {
                    // toast.success("User loans retrieved successfully!");
                    return loanData;
                } else {
                    toast.error(loanData.responseMessage || "Failed to retrieve loans.");
                    return null;
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve user loans. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving user loans";
                toast.error(errorMessage);
                logger("Read user loans error", axiosError, { level: "error", tag: "read-user-loans" });
            }
            return null;
        }
    };

    return useQuery<readUserLoanResponse | null, AxiosError<ErrorType>>({
        queryKey: ["userLoan", dataToServer],
        queryFn: fetchUserLoan,
        retry: false,
        enabled: !!dataToServer, // Only run query if dataToServer is defined
    });
};

export default useReadUserLoan;