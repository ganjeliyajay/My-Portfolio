import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const certificateUrl = import.meta.env.VITE_BASE_API

export const getCertificate = createAsyncThunk('getCertificate', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${certificateUrl}/portfolio/certificates`, { withCredentials: true })
        return res.data.certificates
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})