import { RepositoryFactory } from "../../repository/RepositoryFactory";
import { IMAGE_DATA, LOADER } from "../types";

var animaker = RepositoryFactory.get("animaker");

export const loaderAnimaker = (val) => async (dispatch) => {
    dispatch({
        type: LOADER,
        payload: val,
    });
};

export const animakerAction = (payload, onSuccess) => async (dispatch) => {
    try {
        dispatch(loaderAnimaker(true));
        let form = new FormData();
        form.append("image", payload.file);
        const { data } = await animaker.uploadImageRep(form);

        if (data?.name) {
            dispatch(loaderAnimaker(false));
            dispatch({
                type: IMAGE_DATA,
                payload: data.name,
            });
        } else {
            dispatch(loaderAnimaker(false));
            dispatch({
                type: IMAGE_DATA,
                payload: null,
            });
        }
    } catch (error) {
        dispatch(loaderAnimaker(false));
        // onSuccess(false);
        console.error("Error:", error);
    }
};
export const getOutputImageAction =
    (payload, onSuccess) => async (dispatch) => {
        try {
            const { data } = await animaker.getOutputImageRep(payload);
            if (data) {
                onSuccess();
            }

            // if (data?.name) {
            //     dispatch({
            //         type: IMAGE_DATA,
            //         payload: data.name,
            //     });
            // } else {
            //     dispatch({
            //         type: IMAGE_DATA,
            //         payload: null,
            //     });
            // }
        } catch (error) {
            // onSuccess(false);
            console.error("Error:", error);
        }
    };
