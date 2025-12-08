import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import authService from "../../api/authService";
import type { BaseResponse, ErrorType, createUserRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";



const useCreateAccount = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const createAccount = async (dataToServer: createUserRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await authService.createUser(dataToServer);

            if (status === 200 && responseData) {
                const createData = responseData as BaseResponse;

                if (createData.responseMessage.includes("success")) {
                    // toast.success("Account created successfully!");
                    return true;
                } else {
                    toast.error(createData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "Account creation failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during account creation";
                toast.error(errorMessage);
                logger("Create account error", axiosError, { level: "error", tag: "create-account" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { createAccount, isSubmitting };
};

export default useCreateAccount;