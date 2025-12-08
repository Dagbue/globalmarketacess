import { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import authService from "../../api/authService";
import type { ErrorType, readUserByIdResponse } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

interface ReadUserByIdData {
    userId: string;
}

const useReadUserById = () => {
    const [isLoading, setIsLoading] = useState(false);

    const readUserById = async (dataToServer: ReadUserByIdData): Promise<readUserByIdResponse | null> => {
        try {
            setIsLoading(true);

            const { responseData, status, errorResponse } = await authService.readUserById(dataToServer);

            if (status === 200 && responseData) {
                const userData = responseData as readUserByIdResponse;

                if (userData.responseMessage.includes("User found.")) {
                    // toast.success("User data retrieved successfully!");
                    return userData;
                } else {
                    toast.error(userData.responseMessage || "Failed to retrieve user data. Please try again.");
                    return null;
                }
            } else {
                toast.error(errorResponse?.message || "Failed to retrieve user data. Please try again.");
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const message = axiosError.response?.data?.message || "An error occurred while retrieving user data";
                toast.error(message);
                logger("Read user by ID error", axiosError, { level: "error", tag: "readUserById" });
            }
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return { readUserById, isLoading };
};

export default useReadUserById;