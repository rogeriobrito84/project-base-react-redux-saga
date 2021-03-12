import { action } from "typesafe-actions";
import { AuthType } from "./type";

export const  authRequest =  () => action(AuthType.AUTH_REQUEST);

export const  authSuccess =  (list: Array<any>) => action(AuthType.AUTH_SUCCESS, list);

export const  authFailure =  () => action(AuthType.AUTH_FAILURE);
