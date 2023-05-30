import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { fetchBranches, addBranch, deleteBranch } from "./branchesOperations";

const actions = [fetchBranches, addBranch, deleteBranch];

const branchesInitialState = {
    items: [],
    error: null,
};

const handleFetchBranches = (state, action) => {
    state.items = action.payload;
};

const handleAddBranch = (state, action) => {
    state.items.push(action.payload);
};

const handleDeleteBranch = (state, action) => {
    const branchIndex = state.items.findIndex(
        item => item.id === action.payload.id
    );
    state.item.splice(branchIndex, 1);
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

export const branchesSlice = createSlice({
    name: "branches",
    initialState: branchesInitialState,
    extraReducers: builder =>
        builder
            .addCase(fetchBranches.fulfilled, handleFetchBranches)
            .addCase(addBranch.fulfilled, handleAddBranch)
            .addCase(deleteBranch.fulfilled, handleDeleteBranch)
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

const branchesPersistConfig = {
    key: "branches",
    storage,
    whitelist: ["items"],
};

export const persistedBranchesReducer = persistReducer(
    branchesPersistConfig,
    branchesSlice.reducer
);
