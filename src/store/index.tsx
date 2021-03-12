import { applyMiddleware, createStore, Store } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { AuthState } from "./modules/auth/type";
import { configPersist } from "./modules/redux.persist";
import rootReducer from "./modules/root.reducer";
import rootSaga from "./modules/root.saga";

export interface ApplicationState {
    auth: AuthState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
    configPersist(rootReducer),
    applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;