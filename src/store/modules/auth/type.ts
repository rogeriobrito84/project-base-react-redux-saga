/**
 * Actions Types
 */
export enum AuthType {
    AUTH_REQUEST = "@auth/AUTH_REQUEST",
    AUTH_SUCCESS = "@auth/AUTH_SUCCESS",
    AUTH_FAILURE = "@auth/AUTH_FAILURE",
}

/**
 * Data Types
 */
 export interface User {
     id: string,
     name: string
 }

 /**
  * State Types
  */
export interface AuthState {
    user: User,
    list: Array<any>
    loading: boolean,
    error: boolean
}