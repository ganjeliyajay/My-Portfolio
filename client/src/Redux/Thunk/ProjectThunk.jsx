import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const project = import.meta.env.VITE_BASE_API

export const getProject = createAsyncThunk('getproject', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${project}/projects`, { withCredentials: true })
        return res.data
    } catch (error) {
        console.log(error)
        return rejectWithValue({ error })
    }

})