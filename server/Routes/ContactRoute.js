import { Router } from "express";
import { sendMail } from "../Controllers/ContactMail.js";

export const ContactRoute = Router()

ContactRoute.route('/').post(sendMail)