import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

// axios.defaults.baseURL = "http://192.168.50.20:2615";

export const fetchBranches = createAsyncThunk(
    "branches/fetchBranches",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/api/branches");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const fetchBranch = createAsyncThunk(
//     "branches/fetchBranch",
//     async (branchId, thunkAPI) => {
//         try {
//             const response = await axios.get(`/api/branches/${branchId}`);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

export const addBranch = createAsyncThunk(
    "branches/addBranch",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("/api/branches", { data });
            Notify.success("Branch added successfuly.");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteBranch = createAsyncThunk(
    "branches/deleteBranch",
    async (branchId, thunkAPI) => {
        try {
            const response = await axios.delete(`/api/branches/${branchId}`);
            Notify.warning("Branch deleted successfuly.");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
