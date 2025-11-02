import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mail = import.meta.env.VITE_BASE_API

export const sendMail = createAsyncThunk('SendMail', async (data, { rejectWithValue }) => {

    try {
        const res = await axios.post(`${mail}/mail`, data, { withCredentials: true })

    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})  