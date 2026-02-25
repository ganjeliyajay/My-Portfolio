import { certificate } from "../Modules/Certificate.js";

export const createCertificate = async (req, res) => {
    try {
        const { name, imgUrl, certificateLink } = req.body;

        if (!name || !imgUrl || !certificateLink) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const newCertificate = await certificate({ name, imgUrl, certificateLink }).save()
        res.status(201).json({ message: "Certificate created successfully", certificate: newCertificate })

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}

export const getCertificates = async (req, res) => {
    try {
        const certificates = await certificate.find().sort({ createAt: -1 })
        res.status(200).json({ certificates })
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}