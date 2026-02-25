import { configureStore } from "@reduxjs/toolkit";
import projectSlice from './Slice/ProjectSlice'
import ContactMailSlice from './Slice/ContactMailSlice'
import CertificateSlice from './Slice/CertificateSlice'

export const store = configureStore({
    reducer: {
        project: projectSlice,
        mail: ContactMailSlice,
        certificate: CertificateSlice
    }
}
)
