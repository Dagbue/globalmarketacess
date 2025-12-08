import {
    BaseResponse,
    createTradeRequest,
    deleteTradeRequest,
    readAllTradeResponse,
    readTradeByIdRequest,
    readTradeByIdResponse,
    readUserTradeRequest,
    readUserTradeResponse,
    updateTradeRequest,
    updateTradeStatusRequest,
} from "../utils/interfacesAndTypes.ts";
import {baseURL} from "./BaseFetchMethod.ts";

class TradeService {
    createTrade(user: createTradeRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            createTradeRequest | undefined | null
        >({
            url: "/create-trade",
            body: user,
        });
    }

    updateTrade(user: updateTradeRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateTradeRequest | undefined | null
        >({
            url: "/update-trade",
            body: user,
        });
    }

    deleteTrade(user: deleteTradeRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            deleteTradeRequest | undefined | null
        >({
            url: "/delete-trade",
            body: user,
        });
    }

    readTradeById(user: readTradeByIdRequest | undefined | null) {
        return baseURL.post<
            readTradeByIdResponse,
            readTradeByIdRequest | undefined | null
        >({
            url: "/read-trade-by-id",
            body: user,
        });
    }

    readUserTrade(user: readUserTradeRequest | undefined | null) {
        return baseURL.post<
            readUserTradeResponse,
            readUserTradeRequest | undefined | null
        >({
            url: "/user-trades",
            body: user,
        });
    }

    updateTradeStatus(user: updateTradeStatusRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateTradeStatusRequest | undefined | null
        >({
            url: "/update-trade-status",
            body: user,
        });
    }


    allTrades() {
        return baseURL.get<readAllTradeResponse>({
            url: "/all-user-trades",
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

export default new TradeService();