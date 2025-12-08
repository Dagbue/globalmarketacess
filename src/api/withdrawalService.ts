import {
    BaseResponse,
    createWithdrawalRequest,
    deleteWithdrawalRequest,
    readAllWithdrawalResponse,
    readUserWithdrawalRequest,
    readUserWithdrawalResponse,
    readWithdrawalByIdRequest,
    readWithdrawalByIdResponse,
    updateWithdrawalRequest,
    updateWithdrawalStatusRequest,
} from "../utils/interfacesAndTypes.ts";
import {baseURL} from "./BaseFetchMethod.ts";

class WithdrawalService {
    createWithdrawal(user: createWithdrawalRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            createWithdrawalRequest | undefined | null
        >({
            url: "/create-withdrawals",
            body: user,
        });
    }

    updateWithdrawal(user: updateWithdrawalRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateWithdrawalRequest | undefined | null
        >({
            url: "/update-withdrawals",
            body: user,
        });
    }

    deleteWithdrawal(user: deleteWithdrawalRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            deleteWithdrawalRequest | undefined | null
        >({
            url: "/delete-withdrawals",
            body: user,
        });
    }

    readWithdrawalById(user: readWithdrawalByIdRequest | undefined | null) {
        return baseURL.post<
            readWithdrawalByIdResponse,
            readWithdrawalByIdRequest | undefined | null
        >({
            url: "/read-withdrawals-by-id",
            body: user,
        });
    }

    readUserWithdrawal(user: readUserWithdrawalRequest | undefined | null) {
        return baseURL.post<
            readUserWithdrawalResponse,
            readUserWithdrawalRequest | undefined | null
        >({
            url: "/read-user-withdrawals",
            body: user,
        });
    }

    updateWithdrawalStatus(user: updateWithdrawalStatusRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateWithdrawalStatusRequest | undefined | null
        >({
            url: "/update-withdrawal-status",
            body: user,
        });
    }


    allWithdrawals() {
        return baseURL.get<readAllWithdrawalResponse>({
            url: "/all-user-withdrawals",
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

export default new WithdrawalService();