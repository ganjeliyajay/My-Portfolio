import { Resend } from "resend";
import { $Mail } from "../Modules/Mail.js";

export const sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Validation check
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ 1. Send mail to YOU (portfolio owner)
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // ✅ fixed sender
      to: process.env.RECEIVERMAIL, // your own Gmail (receiver)
      subject: `💬 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 100%); padding: 30px;">
          <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1); overflow: hidden;">
            <div style="background: linear-gradient(90deg, #1E3A8A, #2563EB); color: #ffffff; padding: 25px 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 26px;">✨ New Contact Form Submission ✨</h1>
            </div>
            <div style="padding: 25px; color: #333333; line-height: 1.7;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
              <p style="font-size: 13px; color: gray;">📅 ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    });

    // ✅ 2. Auto reply back to the visitor
    await resend.emails.send({
      from: "Ganjeliya Jay <onboarding@resend.dev>", // ✅ same sender
      to: email, // visitor’s email
      subject: "🌟 Thanks for reaching out to me!",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 100%); padding: 30px;">
          <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1); overflow: hidden;">
            <div style="background: linear-gradient(90deg, #1E3A8A, #2563EB); color: #ffffff; padding: 25px 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 26px;">🙌 Thank You for Contacting Me!</h1>
            </div>
            <div style="padding: 25px; color: #333333; line-height: 1.7;">
              <p>Hi <strong>${name}</strong>,</p>
              <p>I’ve received your message and appreciate you taking the time to reach out. I’ll get back to you as soon as possible 🚀</p>
              <div style="background-color: #F3F4F6; border-left: 4px solid #2563EB; padding: 15px; border-radius: 8px;">
                <strong>Your Message:</strong><br>${message}
              </div>
              <p style="margin-top: 25px; font-size: 14px; color: #555;">
                Meanwhile, feel free to explore my portfolio:
                <a href="https://ganjeliyajay.netlify.app" style="color: #2563EB; text-decoration: none;">Visit Portfolio</a>
              </p>
            </div>
            <div style="background: linear-gradient(90deg, #2563EB, #1E3A8A); color: #fff; padding: 15px; text-align: center; font-size: 13px;">
              <p style="margin: 0;">Best regards,</p>
              <p style="margin: 0;">💙 <strong>Ganjeliya Jay</strong></p>
            </div>
          </div>
        </div>
      `,
    });

    // ✅ 3. Save mail record
    const data = $Mail({
      name,
      email,
      message,
      expiryAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    await data.save();

    return res.status(201).json({ message: "Mail sent successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};
