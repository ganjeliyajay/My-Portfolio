import { model, Schema } from "mongoose";

export const $Mail = model(
    'mail', Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        createAt: {
            type: Date, default: Date.now
        },
        expiryAt: {
            type: Date,
            required: true,
            index: { expires: 0 }
        }
    })
)