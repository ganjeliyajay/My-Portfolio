import { Router } from "express";
import { createCertificate, getCertificates } from "../Controllers/CertificateController.js";

export const certificateRoute = Router()

certificateRoute.route('/certificates').post(createCertificate).get(getCertificates)