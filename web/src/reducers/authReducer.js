import { auth } from "../types/types";

export const authReducer = (state = {}, action) => {
    
    switch (action.type) {
        case auth.login:
            return {
                uid: action.payload.uid,
            }

        case auth.logout:
            return {}

        default:
            return state;
    }
}