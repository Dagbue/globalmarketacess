// useDeleteUser.ts
import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import authService from "../../api/authService";
import type { BaseResponse, ErrorType, deleteUserRequest } from "../../utils/interfacesAndTypes";
import { logger } from "../../utils/logger";

const useDeleteUser = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const deleteUser = async (dataToServer: deleteUserRequest): Promise<boolean> => {
        try {
            setIsSubmitting(true);

            const { responseData, status, errorResponse } = await authService.deleteUser(dataToServer);

            if (status === 200 && responseData) {
                const deleteData = responseData as BaseResponse;

                if (deleteData.responseMessage.includes("success")) {
                    toast.success("User deleted successfully!");
                    return true;
                } else {
                    toast.error(deleteData.responseMessage);
                    return false;
                }
            } else {
                const errorMessage = errorResponse?.message || "User deletion failed. Please try again.";
                toast.error(errorMessage);
                return false;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const errorMessage = axiosError.response?.data?.message || "An unexpected error occurred during user deletion";
                toast.error(errorMessage);
                logger("Delete user error", axiosError, { level: "error", tag: "delete-user" });
            }
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return { deleteUser, isSubmitting };
};

export default useDeleteUser;