import { model, Schema } from "mongoose";

export const certificate = model(
    'certificate', new Schema({
        name: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        certificateLink: {
            type: String,
            required: true
        },
        createAt: { type: Date, default: Date.now }
    })
)