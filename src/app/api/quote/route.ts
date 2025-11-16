import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_B54DnTap_FTiBC44Fw9H1dUvKfdqbS5Dh');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, company, services, timeframe, projectDetails, email } = body;

    if (!firstName || !email || services.length === 0) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    const companyText = company ? company : 'Not provided';
    const servicesText = services.join(', ');

    // Send notification to business
    const businessEmail = await resend.emails.send({
      from: 'info@southernsoftwaresolutions.tech',
      to: 'contact@southernsoftwaresolutions.tech',
      subject: `New Quote Request: ${fullName}${company ? ` from ${company}` : ''}`,
      html: `
        <h2>New Quote Form Submission</h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1f2937;">Contact Information</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${companyText}</p>
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1f2937;">Project Details</h3>
          <p><strong>Services Interested In:</strong><br/>${servicesText}</p>
          <p><strong>Timeframe:</strong> ${timeframe || 'Not specified'}</p>
          <p><strong>Project Description:</strong><br/>${projectDetails || 'Not provided'}</p>
        </div>

        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
          This quote request was submitted via the website quote form.
        </p>
      `,
    });
    console.log('Business quote email response:', businessEmail);

    // Send confirmation to user
    const userEmail = await resend.emails.send({
      from: 'info@southernsoftwaresolutions.tech',
      to: email,
      subject: 'Your Quote Request - Southern Software Solutions',
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
                      <h1 style="color: #1f2937; font-size: 28px; margin: 0 0 20px 0;">Thanks ${firstName}!</h1>
                      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        We've received your quote request and I'm excited to learn more about your project. I'll review the details you provided and get back to you with a personalized quote within 24 hours.
                      </p>

                      <div style="background-color: #f0f9ff; border-left: 4px solid #06b6d4; padding: 20px; margin: 20px 0; border-radius: 4px;">
                        <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0; font-weight: 600;">What you're interested in:</p>
                        <p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0 0 10px 0;">${servicesText}</p>
                        ${timeframe ? `<p style="color: #6b7280; font-size: 14px; margin: 10px 0 5px 0; font-weight: 600;">Timeline:</p>
                        <p style="color: #4b5563; font-size: 14px; margin: 0;">${timeframe}</p>` : ''}
                      </div>

                      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 20px 0 10px 0;">
                        In the meantime, feel free to:
                      </p>
                      <ul style="color: #4b5563; font-size: 16px; line-height: 1.8; margin: 0;">
                        <li>Check out our <a href="https://southernsoftwaresolutions.tech/website-design" style="color: #2563eb; text-decoration: none;">website design packages</a></li>
                        <li>Browse our <a href="https://southernsoftwaresolutions.tech/blog" style="color: #2563eb; text-decoration: none;">blog</a> for tips and insights</li>
                        <li>Review our <a href="https://southernsoftwaresolutions.tech/faq" style="color: #2563eb; text-decoration: none;">FAQ</a> for common questions</li>
                      </ul>

                      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
                        Looking forward to helping bring your vision to life!
                      </p>
                    </td>
                  </tr>

                  <!-- Contact Info -->
                  <tr>
                    <td style="padding: 20px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">Questions in the meantime?</p>
                      <p style="margin: 0; color: #4b5563; font-size: 14px;">
                        📧 <a href="mailto:contact@southernsoftwaresolutions.tech" style="color: #2563eb; text-decoration: none;">contact@southernsoftwaresolutions.tech</a><br/>
                        📞 NZ: +64 22 499 3402 | AU: +61 430 126 624
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td align="center" style="padding: 20px; background-color: #1f2937;">
                      <p style="margin: 0; color: #9ca3af; font-size: 12px;">
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

    return NextResponse.json({ message: 'Quote request sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json({ error: 'Failed to send quote request' }, { status: 500 });
  }
}
