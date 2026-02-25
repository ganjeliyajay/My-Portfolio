import { createSlice } from "@reduxjs/toolkit";
import { getCertificate } from "../Thunk/CertificateThunk";

const CertificateSlice = createSlice({
    name: 'Certificate',
    initialState: {
        certificates: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCertificate.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getCertificate.fulfilled, (state, action) => {
            state.loading = false
            state.certificates = action.payload
        })
        builder.addCase(getCertificate.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default CertificateSlice.reducer
