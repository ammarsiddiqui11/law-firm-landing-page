// netlify/functions/contact.js
//
// Serverless function (Netlify Functions, AWS Lambda under the hood).
// Receives the contact form payload and emails it to the firm's inbox
// via SMTP + nodemailer. No custom backend/server is used, per the brief.
//
// Required environment variables (set in Netlify dashboard, never in code):
//   SMTP_HOST      e.g. smtp.gmail.com  or your provider's SMTP host
//   SMTP_PORT      e.g. 465 (SSL) or 587 (TLS)
//   SMTP_USER      the sending mailbox address
//   SMTP_PASS      app password / SMTP password (NOT the account login password)
//   MAIL_TO        the address that should receive enquiries (firm owner)
//
// See .env.example for local development.

const nodemailer = require('nodemailer');

const ALLOWED_METHODS = ['POST'];

exports.handler = async (event) => {
  if (!ALLOWED_METHODS.includes(event.httpMethod)) {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { name, phone, email, practiceArea, caseDetail } = data;

  // Basic server-side validation — never trust the client alone
  if (!name || !phone || !email || !caseDetail) {
    return { statusCode: 400, body: 'Missing required fields' };
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { statusCode: 400, body: 'Invalid email address' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const escapeHtml = (str = '') =>
      str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    await transporter.sendMail({
      from: `"Whitfield & Cole Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New enquiry from ${name} — website contact form`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPractice Area: ${practiceArea || 'Not specified'}\n\nCase Details:\n${caseDetail}`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Practice Area:</strong> ${escapeHtml(practiceArea || 'Not specified')}</p>
        <p><strong>Case Details:</strong><br/>${escapeHtml(caseDetail).replace(/\n/g, '<br/>')}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error('Mail send error:', err);
    return {
      statusCode: 502,
      body: JSON.stringify({ ok: false, error: 'Failed to send email' }),
    };
  }
};
