import { Reducer } from "react";
import { PersistConfig, persistReducer } from "redux-persist";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from "redux-persist/lib/storage";

export const config: PersistConfig<any> = {
    key: 'root-api',
    storage,
    whitelist: ["auth"],
    transforms: [
        encryptTransform({
            secretKey: 'my-super-secret-key',
            onError: function (error) {
                console.log("Erro ao tentar encriptar");
                console.log(error);
            },
        })
    ]
}

export const configPersist = (reducer: Reducer<any, any>) => {
    return persistReducer(config, reducer);
}
