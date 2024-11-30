import sendEmail from '@/lib/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstname, lastname, email, textarea } = body;

    if (!firstname || !lastname || !email || !textarea) {
      return new Response(
        JSON.stringify({ error: 'Please fill out all fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    await sendEmail({
      firstname,
      lastname,
      email,
      text: textarea,
    });

    return NextResponse.json({
      msg: 'success',
    });
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof TypeError) {
      return new Response(JSON.stringify({ error: 'Invalid data passed.' }), {
        status: 422,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(
      JSON.stringify({
        error: 'Something went wrong, please try again later.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
