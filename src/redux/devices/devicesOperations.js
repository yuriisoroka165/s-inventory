import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

axios.defaults.baseURL = "http://localhost:2615";

export const fetchDevices = createAsyncThunk(
    "devices/fetchDevices",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/api/devices");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const fetchDevice = createAsyncThunk(
//     "devices/fetchDevice",
//     async (deviceId, thunkAPI) => {
//         try {
//             const response = await axios.get(`/api/devices/${deviceId}`);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

export const addDevice = createAsyncThunk(
    "devices/addDevice",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("/api/devices", { data });
            Notify.success("Device added successfuly.");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteDevice = createAsyncThunk(
    "devices/deleteDevice",
    async (deviceId, thunkAPI) => {
        try {
            const response = await axios.delete(`/api/devices/${deviceId}`);
            Notify.warning("Device deleted successfuly.");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
