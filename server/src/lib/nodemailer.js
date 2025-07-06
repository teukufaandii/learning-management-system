import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendResetPasswordEmail(to, token, name) {
  const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

  const mailOptions = {
    from: '"Administrator Support" <no-reply@admin.com>',
    to,
    subject: "Permintaan Ubah Password",
    html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 40px; color: #333;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">
            <div style="padding: 30px;">
              <h2 style="color: #2c3e50;">Permintaan Ubah Password</h2>
              <p>Halo,</p>
              <p> Halo ${name}, Kami menerima permintaan untuk mengubah password akun Anda. Jika Anda tidak merasa melakukan permintaan ini, abaikan email ini.</p>
              <p>Jika Anda benar-benar ingin mengubah password, klik tombol di bawah ini:</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${resetLink}" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Ubah Password</a>
              </div>
              <p>Link ini hanya berlaku dalam waktu 1 jam demi keamanan akun Anda.</p>
              <p>Terima kasih,<br><strong>Tim Admin</strong></p>
            </div>
          </div>
        </div>
      `,
  };

  return transporter.sendMail(mailOptions);
}