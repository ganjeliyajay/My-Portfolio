import { createSlice } from "@reduxjs/toolkit";
import { getProject } from "../Thunk/ProjectThunk";

const ProjectSlice = createSlice({
    name: 'ProjectSlice',
    initialState: {
        loading: false,
        error: null,
        process: false,
        projects: []
    },

    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProject.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProject.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload;
                state.process = true
            })
            .addCase(getProject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message || "Something went wrong";
            })
    }
})

export default ProjectSlice.reducer