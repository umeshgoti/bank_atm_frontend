import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../api";

const initialState = {
    value: [],
};

const api = new Api();

export const addArmApi = (obj) => async (dispatch) => {
    const token = localStorage.getItem("token");
    console.log(token);

    try {
        const response = await api.postAPI(`api/atm`, obj, token);
        console.log(response);
        dispatch(setValue(response.data.data));
    } catch (error) {
        console.error("Error adding ATM:", error);
    }
};

export const atmSlice = createSlice({
    name: 'atm',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setValue } = atmSlice.actions;

export default atmSlice.reducer;
