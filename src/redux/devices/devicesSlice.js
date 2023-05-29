import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { fetchDevices, addDevice, deleteDevice } from "./devicesOperations";

const actions = [fetchDevices, addDevice, deleteDevice];

const devicesInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handleFetchDevices = (state, action) => {
    state.items = action.payload;
};

const handleAddDevice = (state, action) => {
    state.items.push(action.payload);
};

const handleDeleteDevice = (state, action) => {
    const deviceIndex = state.items.findIndex(
        item => item.id === action.payload.id
    );
    state.item.splice(deviceIndex, 1);
};

const handleFulfilled = state => {
    state.isLoading = false;
    state.error = null;
};

const hadlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const devicesSlice = createSlice({
    name: "devices",
    initialState: devicesInitialState,
    extraReducers: builder =>
        builder
            .addCase(fetchDevices.fulfilled, handleFetchDevices)
            .addCase(addDevice.fulfilled, handleAddDevice)
            .addCase(deleteDevice.fulfilled, handleDeleteDevice)
            .addMatcher(
                isAnyOf(...actions.map(action => action.fulfilled)),
                handleFulfilled
            )
            .addMatcher(
                isAnyOf(...actions.map(action => action.pending)),
                hadlePending
            )
            .addMatcher(
                isAnyOf(...actions.map(action => action.rejected)),
                handleRejected
            ),
});

// export const devicesReducer = devicesSlice.reducer;
const devicesPersistConfig = {
    key: "devices",
    storage,
    whitelist: ["items"],
};

export const persistedDevicesReducer = persistReducer(
    devicesPersistConfig,
    devicesSlice.reducer
);
