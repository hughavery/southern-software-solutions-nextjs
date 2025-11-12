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
      from: 'info@southernsoftwaresolutions.tech',
      to: 'contact@southernsoftwaresolutions.tech',
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
      from: 'info@southernsoftwaresolutions.tech',
      to: email,
      subject: 'Thanks for contacting Southern Software Solutions',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

                  <!-- Header -->
                  <tr>
                    <td align="center" style="padding: 40px 20px 20px 20px;">
                      <h2 style="margin: 0 0 5px 0; color: #1f2937; font-size: 24px;">Hugh Avery</h2>
                      <p style="margin: 0; color: #6b7280; font-size: 14px;">Founder & Lead Developer</p>
                      <p style="margin: 5px 0 0 0; color: #2563eb; font-size: 14px; font-weight: 600;">Southern Software Solutions</p>
                      <a href="https://southernsoftwaresolutions.tech" style="display: inline-block; margin-top: 10px; color: #2563eb; font-size: 14px; text-decoration: none;">www.southernsoftwaresolutions.tech</a>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 20px 40px;">
                      <h1 style="color: #1f2937; font-size: 28px; margin: 0 0 20px 0;">Thanks ${name}!</h1>
                      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        We've received your message and appreciate you reaching out. I'll personally review your inquiry and get back to you within 24 hours.
                      </p>

                      <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 20px; margin: 20px 0; border-radius: 4px;">
                        <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0; font-weight: 600;">Your message:</p>
                        <p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0;">${message}</p>
                      </div>

                      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
                        Looking forward to discussing how we can help bring your vision to life.
                      </p>
                    </td>
                  </tr>

                  <!-- Footer Text -->
                  <tr>
                    <td align="center" style="padding: 20px; background-color: #f9fafb;">
                      <p style="margin: 0; color: #6b7280; font-size: 12px;">
                        © 2025 Southern Software Solutions. All rights reserved.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });
    console.log('User confirmation email response:', userEmail);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
