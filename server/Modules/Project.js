import { model, Schema } from "mongoose";

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    demo: {
        type: Boolean,
        required: true
    },

    tags: {
        type: [String], // array of strings
        required: true,
        default: []
    },
    demoUrl: {
        type: String,
        required: true,
        trim: true
    },
    githubUrl: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // automatically adds createdAt and updatedAt
});

export const $Project = model("Project", projectSchema);
