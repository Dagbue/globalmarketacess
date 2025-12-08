import {
    BaseResponse, createTradeBotRequest,
    deleteTradeBotRequest, readAllTradeBotResponse,
    readTradeBotByIdRequest, readTradeBotByIdResponse,
    readUserTradeBotRequest, readUserTradeBotResponse,
    updateTradeBotRequest, updateTradeBotStatusRequest,
} from "../utils/interfacesAndTypes.ts";
import {baseURL} from "./BaseFetchMethod.ts";

class TradeBotService {
    createTradeBot(user: createTradeBotRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            createTradeBotRequest | undefined | null
        >({
            url: "/create-tradebot",
            body: user,
        });
    }

    updateTradeBot(user: updateTradeBotRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateTradeBotRequest | undefined | null
        >({
            url: "/update-tradebot",
            body: user,
        });
    }

    deleteTradeBot(user: deleteTradeBotRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            deleteTradeBotRequest | undefined | null
        >({
            url: "/delete-tradebot",
            body: user,
        });
    }

    readTradeBotById(user: readTradeBotByIdRequest | undefined | null) {
        return baseURL.post<
            readTradeBotByIdResponse,
            readTradeBotByIdRequest | undefined | null
        >({
            url: "/read-tradebot-by-id",
            body: user,
        });
    }

    readUserTradeBot(user: readUserTradeBotRequest | undefined | null) {
        return baseURL.post<
            readUserTradeBotResponse,
            readUserTradeBotRequest | undefined | null
        >({
            url: "/read-user-tradebot",
            body: user,
        });
    }

    updateTradeBotStatus(user: updateTradeBotStatusRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateTradeBotStatusRequest | undefined | null
        >({
            url: "/update-tradebot-status",
            body: user,
        });
    }


    allTradeBot() {
        return baseURL.get<readAllTradeBotResponse>({
            url: "/all-user-tradebot",
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

export default new TradeBotService();