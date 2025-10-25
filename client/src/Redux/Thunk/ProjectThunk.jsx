import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProject = createAsyncThunk('getproject', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('http://localhost:4040/Portfolio')
        return res.data
    } catch (error) {
        console.log(error)
        return rejectWithValue({ error })
    }

})