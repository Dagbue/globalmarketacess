import {
    loginRequest,
    loginResponse,
    createUserRequest,
    BaseResponse,
    updateUserRequest,
    deleteUserRequest,
    resetPasswordRequest,
    readUserByIdRequest,
    updateUserStatusRequest,
    resendOtpRequest,
    readUserByIdResponse, allUsersResponse,
} from "../utils/interfacesAndTypes";
import { baseURL } from "./BaseFetchMethod";



class AuthService {
    login(user: loginRequest | undefined | null) {
        return baseURL.post<
            loginResponse,
            loginRequest | undefined | null
        >({
            url: "/login",
            body: user,
        });
    }

    createUser(user: createUserRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            createUserRequest | undefined | null
        >({
            url: "/create-user",
            body: user,
        });
    }

    updateUser(user: updateUserRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateUserRequest | undefined | null
        >({
            url: "/update-user",
            body: user,
        });
    }

    deleteUser(user: deleteUserRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            deleteUserRequest | undefined | null
        >({
            url: "/delete-user",
            body: user,
        });
    }

    resetPassword(user: resetPasswordRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            resetPasswordRequest | undefined | null
        >({
            url: "/reset-password",
            body: user,
        });
    }

    readUserById(user: readUserByIdRequest | undefined | null) {
        return baseURL.post<
            readUserByIdResponse,
            readUserByIdRequest | undefined | null
        >({
            url: "/read-user-by-id",
            body: user,
        });
    }

    updateUserStatus(user: updateUserStatusRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateUserStatusRequest | undefined | null
        >({
            url: "/update-user-status",
            body: user,
        });
    }

    resendOtp(user: resendOtpRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            resendOtpRequest | undefined | null
        >({
            url: "/resend-otp",
            body: user,
        });
    }

    allUsers() {
        return baseURL.get<allUsersResponse>({
            url: "/all-users",
            // params: {
            //     page: query.page,
            //     pageSize: query.pageSize,
            //     startDate: query.startDate,
            //     endDate: query.endDate,
            //     status: query.status,
            // },
        });
    }
}

export default new AuthService();



