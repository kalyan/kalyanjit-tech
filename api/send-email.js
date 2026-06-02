/**
 * Vercel Serverless Function: api/send-email.js
 * Proxy handler to securely forward form inputs to Resend API using zero-dependency native fetch.
 */
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Retrieve API Key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return res.status(500).json({ error: 'Mail server configuration missing. Please check RESEND_API_KEY on Vercel.' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Please fill in all fields (name, email, subject, message).' });
    }

    // Call Resend REST API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Kalyanjit Tech Portfolio <onboarding@resend.dev>',
        to: ['kalyanjit@gmail.com'],
        subject: `Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">New Message from Portfolio Website</h2>
            <p style="font-size: 16px; margin: 15px 0;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p style="font-size: 16px; margin: 15px 0;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #2563eb;">
              <p style="font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e2e8f0;" />
            <p style="font-size: 12px; color: #64748b; text-align: center;">Submitted from Kalyanjit Hatibaruah portfolio contact form.</p>
          </div>
        `
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error response:", resendData);
      return res.status(resendResponse.status).json({ error: resendData.message || 'Error sending email via Resend.' });
    }

    return res.status(200).json({ success: true, id: resendData.id });
  } catch (error) {
    console.error("Serverless handler error:", error);
    return res.status(500).json({ error: error.message || 'Internal server error occurred.' });
  }
}
