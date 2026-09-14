import { configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "./StoreSchema.ts";
import { counterReducer } from "@/entities/Counter";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: import.meta.env.DEV,
        preloadedState: initialState
    })
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']