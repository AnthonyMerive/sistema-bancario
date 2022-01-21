import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { guardarSessionStorage, obtenerSessionStorage } from "../hooks/sessionStorage";
import thunk from 'redux-thunk';
import { bancoReducer } from "../reducers/bancoReducer";

const reducers = combineReducers({

    banco: bancoReducer,

})

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storageState = obtenerSessionStorage();

export const store = createStore(
    reducers,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk))

)

store.subscribe(() => {
    guardarSessionStorage({
        login: store.getState().login
    })

})