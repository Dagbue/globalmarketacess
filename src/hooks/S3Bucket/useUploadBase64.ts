import { useState } from "react";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import {ErrorType, uploadBase64Response, uploadBase64} from "../../utils/interfacesAndTypes.ts";
import S3BucketService from "../../api/S3BucketService.ts";
import {logger} from "../../utils/logger.ts";

const useUploadBase64 = () => {
    const [isUploading, setIsUploading] = useState(false);

    const uploadBase64 = async (data: uploadBase64): Promise<uploadBase64Response | null> => {
        try {
            setIsUploading(true);

            const response = await S3BucketService.callUploadBase64Api(data);

            if (response.status === 200 && response.responseData) {
                const uploadResponse = response.responseData as uploadBase64Response;

                if (uploadResponse.responseMessage.toLowerCase().includes("success")) {
                    toast.success("File uploaded successfully!");
                    return uploadResponse;
                } else {
                    toast.error(uploadResponse.responseMessage || "Upload failed. Please try again.");
                    return null;
                }
            } else {
                toast.error(response.errorResponse?.message || "Upload failed. Please try again.");
                return null;
            }
        } catch (error) {
            const axiosError = error as AxiosError<ErrorType>;
            if (axiosError.response?.status !== 401 && axiosError.response?.status !== 403) {
                const message = axiosError.response?.data?.message || "An error occurred during upload";
                toast.error(message);
                logger("Upload error", axiosError, { level: "error", tag: "upload" });
            }
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    return { uploadBase64, isUploading };
};

export default useUploadBase64;