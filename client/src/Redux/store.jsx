import { configureStore } from "@reduxjs/toolkit";
import projectSlice from './Slice/ProjectSlice'
import ContactMailSlice from './Slice/ContactMailSlice'

export const store = configureStore({
    reducer: {
        project: projectSlice,
        mail: ContactMailSlice
    }
}
)
