import nodemailer from 'nodemailer';
import { html } from './htmlEmail';

const sendEmail = async ({
  firstname,
  lastname,
  email,
  text,
}: {
  firstname: string;
  lastname: string;
  email: string;
  text: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: process.env.NODE_ENV != 'development',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'digpalsinghmandloi1@gmail.com',
    subject: 'New Message from Portfolio',
    html: html({ firstname, lastname, email, text }),
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};

export default sendEmail;
