import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config()

export const transporter = nodemailer.createTransport({
  service: "gmail",      // use Gmail service
  auth: {
    user: process.env.SENDERMAIL,
    pass: process.env.SENDERPASS,  // app password
  }
}
);

