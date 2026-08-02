import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required transmission fields.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.NEXT_PUBLIC_EMAIL_USER;
    const emailPass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

    if (!emailUser || !emailPass) {
      console.error(
        'Email credentials not configured in environment variables.'
      );
      return NextResponse.json(
        { error: 'Email service configuration missing.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${emailUser}>`,
      to: emailUser,
      replyTo: email,
      subject: `[Portfolio Signal] New transmission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0b0f17; color: #e2e8f0; border-radius: 12px; border: 1px solid #f59e0b;">
          <h2 style="color: #f59e0b; border-bottom: 1px solid #1e293b; padding-bottom: 12px; font-size: 18px; letter-spacing: 1px;">[ ENCRYPTED SIGNAL TRANSMISSION ]</h2>
          <p style="margin: 8px 0;"><strong>From Callsign:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Reply Email:</strong> <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></p>
          <div style="margin-top: 20px; padding: 16px; background-color: #151d2a; border-left: 4px solid #f59e0b; border-radius: 6px;">
            <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 11px; color: #64748b;">Transmission timestamp: ${new Date().toISOString()}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      status: 'TRANSMISSION_DELIVERED',
      payload: { name, email },
    });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : 'Failed to process signal transmission.';
    console.error('Error sending email via nodemailer:', err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
