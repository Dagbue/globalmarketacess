import { toast } from "sonner";
import type { ErrorType } from "./interfacesAndTypes";
import type { AxiosError } from "axios";


const handleErrors = (axiosError: AxiosError<ErrorType>) => {
  //   const errorMessages = Object.values(responseData.response || {});
  // console.log(axiosError)

  //   if (responseData.detail) {
  //     if (typeof responseData.detail !== "string") {
  //       toast.error(
  //         (errorMessages[0] as string[] | undefined)?.[0] || "An error occurred"
  //       );
  //     } else if (errorMessages.length > 0) {
  //       toast.error(errorMessages[0]?.[0]);
  //     } else if (typeof responseData.errors === "string") {
  //       toast.error(responseData.errors);
  //     } else {
  //       toast.error(responseData.detail);
  //     }
  //   }

  //   if (responseData.data) {
  //     if (typeof responseData.data !== "string") {
  //       toast.error(responseData.data.error.errorMessage);
  //     } else {
  //       toast.error(responseData.data);
  //     }
  //   }

  //   if (responseData.description) {
  //     toast.error(responseData.description);
  //   }

  if (axiosError?.status === 403) {
    toast.error("You are not Permitted to perform this action");
    return;
  }
  if (axiosError?.status === 401) {
    toast.error("Unauthorized");
    // sessionStorage.clear();
    // window.location.replace("/");
  }
  const data = axiosError.response?.data?.data;
  const description = axiosError.response?.data?.description;
  const message = axiosError.response?.data?.message;
  const detail = axiosError.response?.data?.detail;
  const result = axiosError.response?.data?.result?.message;
  const fallbackMessage = axiosError.message || "Something went wrong.";
  // toast.error(
  //   axiosError && axiosError.response?.data.description
  //     ? axiosError.response.data.description
  //     : axiosError.message
  // );
  toast.error(
    data || description || message || detail || result || fallbackMessage
  );
};

export default handleErrors;
