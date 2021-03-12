import { AnyAction, Reducer } from "redux";
import { AuthState, AuthType } from "./type";

const INITIAL_STATE: AuthState = {
    user: {
        id: "rogeriobrito84",
        name: "Rogério Brito"
    },
    list: [],
    loading: false,
    error: false

}

const AuthReducer: Reducer<AuthState, AnyAction> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthType.AUTH_REQUEST:
            return { ...state, loading: true };
        case AuthType.AUTH_SUCCESS:
            console.log(state);
            console.log(action);
            return {
                ...state, list: action.payload,
                loading: false, error: false
            };
        case AuthType.AUTH_REQUEST:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
}

export default AuthReducer;