import { RepositoryFactory } from "../../repository/RepositoryFactory";
import { IMAGE_DATA } from "../types";

var animaker = RepositoryFactory.get("animaker");

export const animakerAction = (payload, onSuccess) => async (dispatch) => {
    try {
        let form = new FormData();
        form.append("image", payload.file);
        const { data } = await animaker.uploadImageRep(form);

        if (data?.name) {
            dispatch({
                type: IMAGE_DATA,
                payload: data.name,
            });
        } else {
            dispatch({
                type: IMAGE_DATA,
                payload: null,
            });
        }
    } catch (error) {
        // onSuccess(false);
        console.error("Error:", error);
    }
};
