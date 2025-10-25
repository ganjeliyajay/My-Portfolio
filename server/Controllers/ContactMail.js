import { transporter } from "../Configs/transporter.js";
import { $Mail } from "../Modules/Mail.js";
import { text } from "express";

export const sendMail = async (req, res) => {
  try {
    const { name, email, message} = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const mailOption = {
      from: email,
      to: process.env.RECEIVERMAIL,
      subject: `💬 New Portfolio Message from ${name}`,
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 100%); padding: 30px;">
    <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1); overflow: hidden;">

      <!-- Header -->
      <div style="background: linear-gradient(90deg, #1E3A8A, #2563EB); color: #ffffff; padding: 25px 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 26px; letter-spacing: 1px;">✨ New Contact Form Submission ✨</h1>
      </div>

      <!-- Body -->
      <div style="padding: 25px; color: #333333; line-height: 1.7;">
        <p style="font-size: 16px;">👋 <strong>Hello,</strong></p>
        <p style="font-size: 15px;">You’ve received a new message from your portfolio contact form. Here are the details:</p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;"><strong>Name:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; color: #1E3A8A;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; color: #2563EB;">${email}</td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <p style="font-size: 16px; font-weight: bold;">💬 Message:</p>
          <div style="background-color: #F3F4F6; border-left: 4px solid #2563EB; padding: 15px; border-radius: 8px; font-size: 15px;">
            ${message}
          </div>
        </div>

        <p style="margin-top: 25px; font-size: 14px; color: #555;">
          📅 <strong>Date:</strong> ${new Date().toLocaleString()}
        </p>
      </div>

      <!-- Footer -->
      <div style="background: linear-gradient(90deg, #2563EB, #1E3A8A); color: #fff; padding: 15px; text-align: center; font-size: 13px;">
        <p style="margin: 0;">This email was sent automatically from your portfolio website 🚀</p>
        <p style="margin: 0; opacity: 0.8;">Please do not reply directly to this message.</p>
      </div>

    </div>
  </div>
  `,
    };


    await transporter.sendMail(mailOption)

    const data = $Mail({
      name,
      email,
      message,
      expiryAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    })

    await data.save()
    return res.status(201).json({ message: 'Mail send succesfully!' });

  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}
