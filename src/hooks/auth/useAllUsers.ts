import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import authService from "../../api/authService";
import type { ErrorType, User } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useAllUsers = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchAllUsers = async (): Promise<User[] | null> => {
        try {
            setIsSubmitting(true);

            const { responseData, errorResponse } = await authService.allUsers();

            if (responseData) {
                const userData = responseData as User[];
                if (userData && userData.length > 0) {
                    // toast.success("All users retrieved successfully!");
                    return userData;
                } else {
                    toast.error("No users found!");
                    return [];
                }
            } else {
                const errorMessage = errorResponse?.message || "Failed to retrieve all users. Please try again.";
                toast.error(errorMessage);
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred while retrieving all users";
                toast.error(errorMessage);
                logger("Fetch all users error", axiosError, { level: "error", tag: "fetch-all-users" });
            }
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { fetchAllUsers, isSubmitting };
};

export default useAllUsers;