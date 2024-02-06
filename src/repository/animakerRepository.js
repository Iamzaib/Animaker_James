import Repository from "../repository/Repository";
const uploadfile = "/upload/image";
const GETRESPONSE="/get-response";
export default{
    uploadImageRep(payload){
        console.log("payload",payload)
        return Repository.post(`${uploadfile}`, payload);
    },
    getResponseRep(payload){
        return Repository.post(`${GETRESPONSE}`, payload);
    }
}