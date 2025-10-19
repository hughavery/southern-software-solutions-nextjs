import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_B54DnTap_FTiBC44Fw9H1dUvKfdqbS5Dh');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Send notification to business
    const businessEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'hughavery101@gmail.com',
      subject: `New Contact: ${name}`,
      html: `<h2>New Contact Form Submission</h2>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });
    console.log('Business email response:', businessEmail);

    // Send confirmation to user
    const userEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Thanks for contacting Southern Software Solutions',
      html: `<h2>Thanks ${name}!</h2>
             <p>We've received your message and will get back to you soon.</p>
             <p><strong>Your message:</strong></p>
             <p>${message}</p>
             <p>Best regards,<br>Hugh Avery<br>Southern Software Solutions</p>`,
    });
    console.log('User confirmation email response:', userEmail);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
