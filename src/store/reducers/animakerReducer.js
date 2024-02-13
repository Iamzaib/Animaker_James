import { IMAGE_DATA, LOADER } from "../types";

const initialState = {
    imageData: null,
    loading: false,
};

export default function animakerReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case IMAGE_DATA:
            return {
                ...state,
                imageData: payload,
            };
        case LOADER:
            return {
                ...state,
                loading: payload,
            };
        default:
            return {
                ...state,
            };
    }
}
