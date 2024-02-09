import Repository from "../repository/Repository";
const uploadfile = "/upload-image";
const GET_OUTPUT_IMAGE = "/get-output-image";
const GETRESPONSE = "/get-response";
export default {
    uploadImageRep(payload) {
        console.log("payload", payload);
        return Repository.post(`${uploadfile}`, payload);
    },
    getOutputImageRep(payload) {
        return Repository.post(`${GET_OUTPUT_IMAGE}`, payload);
    },
    getResponseRep(payload) {
        return Repository.post(`${GETRESPONSE}`, payload);
    },
};
