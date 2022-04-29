import {
    SET_BLINK_LOADER,
    SET_BLINK_SUCCESS,
    SET_BLINK_ERROR,

} from "../action/types";

const INITIAL_STATE = {
    loader: true,
    blinkDetails: null,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_BLINK_LOADER:
            return {
                ...state,
                loader: true,
            };
        case SET_BLINK_SUCCESS:
            return {
                ...state,
                loader: false,
                blinkDetails: action.payload,
                error: null,
            };
        case SET_BLINK_ERROR:
            return {
                ...state,
                loader: false,
                blinkDetails: null,
                error: action.payload,
            };

        default:
            return state;
    }
};
