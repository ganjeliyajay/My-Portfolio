import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMail = createAsyncThunk('SendMail', async (data, { rejectWithValue }) => {

    try {
        const res = await axios.post('http://localhost:4040/Portfolio/send-mail', data)

    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})  