import {
    uploadBase64, uploadBase64Response,
} from "../utils/interfacesAndTypes";
import { s3BucketURL } from "./BaseFetchMethod";



class S3BucketService {
    callUploadBase64Api(user: uploadBase64 | undefined | null) {
        return s3BucketURL.post<
            uploadBase64Response,
            uploadBase64 | undefined | null
        >({
            url: "uploadimage2s3",
            body: user,
        });
    }
}

export default new S3BucketService();