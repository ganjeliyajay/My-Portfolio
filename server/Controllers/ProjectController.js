import { $Project } from "../Modules/Project.js"

export const createProject = async (req, res) => {
    try {
        const { image, title, description, demoUrl, githubUrl, demo } = req.body;
        let { tags } = req.body

        // Validation
        if (!image?.trim() || !tags?.trim() || !title?.trim() || !description?.trim() || !demoUrl?.trim() || !githubUrl?.trim() || !demo) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // 🧩 Fix for tags
        if (typeof tags === "string") {
            // e.g. "React, Github" → ["React", "Github"]
            tags = tags.split(",").map(tag => tag.trim());
        }

        // Create project
        const proj = await $Project({ image, tags, title, description, demoUrl, githubUrl, demo }).save();

        return res.status(201).json({ message: 'Project created successfully!', project: proj });

    } catch (err) {
        console.error('Project creation error:', err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const getProject = async (req, res) => {
    try {

        res.status(201).json(await $Project.find())

    } catch (error) {
        res.status(400).json({ msg: "Server Error", error: error })
    }
}