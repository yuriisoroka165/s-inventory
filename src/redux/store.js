import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import { filterReducer } from "./filter";
import { persistedDevicesReducer } from "./devices/devicesSlice";
import { persistedBranchesReducer } from "./branches/branchesSlice";
// import { persistedAuthorizationReducer } from "./authorization";

export const store = configureStore({
    reducer: {
        // authorization: persistedAuthorizationReducer,
        devices: persistedDevicesReducer,
        branches: persistedBranchesReducer,
        filter: filterReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        });
    },
});

export const persistor = persistStore(store);
