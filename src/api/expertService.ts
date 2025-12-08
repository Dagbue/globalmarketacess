import {
    BaseResponse,
    createExpertRequest,
    deleteExpertRequest,
    readAllExpertResponse,
    readExpertByIdRequest,
    readExpertByIdResponse,
    readUserExpertRequest,
    readUserExpertResponse,
    updateExpertRequest, updateExpertStatusRequest,
} from "../utils/interfacesAndTypes.ts";
import {baseURL} from "./BaseFetchMethod.ts";

class ExpertService {
    createExpert(user: createExpertRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            createExpertRequest | undefined | null
        >({
            url: "/create-expert",
            body: user,
        });
    }

    updateExpert(user: updateExpertRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateExpertRequest | undefined | null
        >({
            url: "/update-expert",
            body: user,
        });
    }

    deleteExpert(user: deleteExpertRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            deleteExpertRequest | undefined | null
        >({
            url: "/delete-expert",
            body: user,
        });
    }

    readExpertById(user: readExpertByIdRequest | undefined | null) {
        return baseURL.post<
            readExpertByIdResponse,
            readExpertByIdRequest | undefined | null
        >({
            url: "/read-expert-by-id",
            body: user,
        });
    }

    readUserExpert(user: readUserExpertRequest | undefined | null) {
        return baseURL.post<
            readUserExpertResponse,
            readUserExpertRequest | undefined | null
        >({
            url: "/read-user-expert",
            body: user,
        });
    }

    updateExpertStatus(user: updateExpertStatusRequest | undefined | null) {
        return baseURL.post<
            BaseResponse,
            updateExpertStatusRequest | undefined | null
        >({
            url: "/update-expert-status",
            body: user,
        });
    }


    allExpert() {
        return baseURL.get<readAllExpertResponse>({
            url: "/all-user-expert",
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

export default new ExpertService();