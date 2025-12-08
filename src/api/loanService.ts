import {
    BaseResponse,
    createLoanRequest,
    deleteLoanRequest, readAllLoanResponse,
    readLoanByIdRequest,
    readLoanByIdResponse,
    readUserLoanRequest, readUserLoanResponse,
    updateLoanRequest, updateLoanStatusRequest,
} from "../utils/interfacesAndTypes.ts";
import {baseURL} from "./BaseFetchMethod.ts";

class DepositService {
    createLoan(user: createLoanRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            createLoanRequest | undefined | null
        >({
            url: "/create-loan",
            body: user,
        });
    }

    updateLoan(user: updateLoanRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateLoanRequest | undefined | null
        >({
            url: "/update-loans",
            body: user,
        });
    }

    deleteLoan(user: deleteLoanRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            deleteLoanRequest | undefined | null
        >({
            url: "/delete-loans",
            body: user,
        });
    }

    readLoanById(user: readLoanByIdRequest | undefined | null) {
        return baseURL.post<
            readLoanByIdResponse,
            readLoanByIdRequest | undefined | null
        >({
            url: "/read-loans-by-id",
            body: user,
        });
    }

    readUserLoan(user: readUserLoanRequest | undefined | null) {
        return baseURL.post<
            readUserLoanResponse,
            readUserLoanRequest | undefined | null
        >({
            url: "/read-user-loans",
            body: user,
        });
    }

    updateLoanStatus(user: updateLoanStatusRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateLoanStatusRequest | undefined | null
        >({
            url: "/update-loan-status",
            body: user,
        });
    }


    allLoans() {
        return baseURL.get<readAllLoanResponse>({
            url: "/all-user-loans",
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