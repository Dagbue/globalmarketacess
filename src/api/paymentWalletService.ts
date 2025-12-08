import {
    BaseResponse,
    createPaymentWalletRequest,
    deletePaymentWalletRequest, readAllPaymentWalletResponse,
    readPaymentWalletByIdRequest, readPaymentWalletByIdResponse,
    updatePaymentWalletRequest,

} from "../utils/interfacesAndTypes.ts";
import {baseURL} from "./BaseFetchMethod.ts";

class PaymentWalletService {
    createWallet(user: createPaymentWalletRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            createPaymentWalletRequest | undefined | null
        >({
            url: "/create-wallet",
            body: user,
        });
    }

    updateWallet(user: updatePaymentWalletRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updatePaymentWalletRequest | undefined | null
        >({
            url: "/update-wallet",
            body: user,
        });
    }

    deleteWallet(user: deletePaymentWalletRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            deletePaymentWalletRequest | undefined | null
        >({
            url: "/delete-wallet",
            body: user,
        });
    }

    readWalletById(user: readPaymentWalletByIdRequest | undefined | null) {
        return baseURL.post<
            readPaymentWalletByIdResponse,
            readPaymentWalletByIdRequest | undefined | null
        >({
            url: "/read-wallet-by-id",
            body: user,
        });
    }

    allWallets() {
        return baseURL.get<readAllPaymentWalletResponse>({
            url: "/all-wallets",
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

export default new PaymentWalletService();