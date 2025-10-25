import mongoose from "mongoose"

export const db = async () => {
    try {
        await mongoose.connect(process.env.DB)
        console.log(`Database connected`)
    } catch (error) {
        console.log(`Database error : ${error}`)
    }
}