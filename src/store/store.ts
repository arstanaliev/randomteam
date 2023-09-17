import {combineReducers, configureStore} from "@reduxjs/toolkit";
import actorSlice from "./Reducer/slice";

const rootReducer = combineReducers({
    actorSlice,
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']