import {
    BaseResponse,
    createDepositRequest,
    deleteDepositRequest,
    readAllDepositResponse,
    readDepositByIdRequest,
    readDepositByIdResponse,
    readUserDepositRequest,
    readUserDepositResponse,
    updateDepositRequest,
    updateDepositStatusRequest,
} from "../utils/interfacesAndTypes.ts";
import {baseURL} from "./BaseFetchMethod.ts";

class DepositService {
    createDeposit(user: createDepositRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            createDepositRequest | undefined | null
        >({
            url: "/create-deposit",
            body: user,
        });
    }

    updateDeposit(user: updateDepositRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateDepositRequest | undefined | null
        >({
            url: "/update-deposit",
            body: user,
        });
    }

    deleteDeposit(user: deleteDepositRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            deleteDepositRequest | undefined | null
        >({
            url: "/delete-deposit",
            body: user,
        });
    }

    readDepositById(user: readDepositByIdRequest | undefined | null) {
        return baseURL.post<
            readDepositByIdResponse,
            readDepositByIdRequest | undefined | null
        >({
            url: "/read-deposit-by-id",
            body: user,
        });
    }

    readUserDeposit(user: readUserDepositRequest | undefined | null) {
        return baseURL.post<
            readUserDepositResponse,
            readUserDepositRequest | undefined | null
        >({
            url: "/read-user-deposit",
            body: user,
        });
    }

    updateDepositStatus(user: updateDepositStatusRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateDepositStatusRequest | undefined | null
        >({
            url: "/update-deposit-status",
            body: user,
        });
    }


    allDeposits() {
        return baseURL.get<readAllDepositResponse>({
            url: "/read-all-user-deposit",
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

export default new DepositService();