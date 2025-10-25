import { createSlice } from "@reduxjs/toolkit";
import { sendMail } from "../Thunk/ContactMailthunk";

const ContactMailSlice = createSlice({
    name: 'ContactMail',
    initialState: {
        error: '',
        process: false,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendMail.pending, (state) => {
                state.loading = true;
            })
            .addCase(sendMail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
            .addCase(sendMail.fulfilled, (state) => {
                state.loading = false;
                state.process = true;
            })
    }
})
export default ContactMailSlice.reducer