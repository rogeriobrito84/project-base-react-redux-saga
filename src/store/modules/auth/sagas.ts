import { all, call, put, takeLatest } from "redux-saga/effects";
import apiGitHub from "../../../services/api.github";
import * as actions from "./actions";
import { AuthType } from "./type";


const requisicao = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
    }, 3000);
});

type res = {
    data: any;
}

function* authRequest()  {
    try {        
        
        const response: {data: any} = yield call(apiGitHub.get, "users/rogeriobrito84/repos");
        
        yield put(actions.authSuccess(response.data));
    } catch (error) {
        console.log(error);
        yield put(actions.authFailure());
    }
}

export default all([
    takeLatest(AuthType.AUTH_REQUEST, authRequest)
]);
