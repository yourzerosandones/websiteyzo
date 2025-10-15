// app/api/contact/route.js
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message, recaptchaToken } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA token with Google
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    )

    const recaptchaData = await recaptchaResponse.json()

    if (!recaptchaData.success) {
      console.error('reCAPTCHA verification failed:', recaptchaData)
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log('Server is ready to take our messages')
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service configuration error. Please check your environment variables.' },
        { status: 500 }
      )
    }

    // Email content for admin
    const adminMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #20427f; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #20427f; }
            .footer { text-align: center; margin-top: 20px; padding: 20px; background: #f0f0f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="field-label">Name:</span> ${name}
              </div>
              <div class="field">
                <span class="field-label">Email:</span> 
                <a href="mailto:${email}">${email}</a>
              </div>
              <div class="field">
                <span class="field-label">Message:</span>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div class="field">
                <span class="field-label">Submitted At:</span> 
                ${new Date().toLocaleString('en-US', { 
                  timeZone: 'Asia/Kolkata',
                  dateStyle: 'full', 
                  timeStyle: 'long' 
                })}
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Auto-reply to the user
    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting Your Zeros and Ones',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #20427f; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .footer { text-align: center; margin-top: 20px; padding: 20px; background: #f0f0f0; }
            .contact-info { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #20427f; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
              <p>Dear <strong>${name}</strong>,</p>
              
              <p>Thank you for reaching out to <strong>Your Zeros and Ones</strong>. We have received your message and our team will get back to you within 24 hours.</p>
              
              <div class="contact-info">
                <h3>Here's a summary of your message:</h3>
                <p><strong>Message:</strong> ${message}</p>
              </div>
              
              <p>In the meantime, feel free to explore our services or connect with us on social media:</p>
              
              <p><strong>Business Hours:</strong><br>
                 Monday - Friday: 9:00 AM - 6:00 PM<br>
                 Saturday: 10:00 AM - 4:00 PM<br>
                 Sunday: Closed
              </p>
              
              <p><strong>Contact Information:</strong><br>
                 Phone: +91 96053 05453<br>
                 Email: info@yourzerosandones.com<br>
                 Address: 1st floor, Valentine Estate, Palachuvadu, Kakkanad, Kochi - Kerala 682030
              </p>
            </div>
            <div class="footer">
              <p>Best regards,<br><strong>The Your Zeros and Ones Team</strong></p>
              <p>
                <a href="https://www.facebook.com/yourzerosandones/">Facebook</a> | 
                <a href="https://x.com/yourzerosandone">Twitter</a> | 
                <a href="https://www.linkedin.com/company/your-zeros-and-ones/">LinkedIn</a> | 
                <a href="https://www.instagram.com/yourzerosandones">Instagram</a> | 
                <a href="https://www.youtube.com/@YOURZEROSANDONES">YouTube</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ])

    return NextResponse.json(
      { 
        message: 'Message sent successfully! We have also sent a confirmation email to your inbox.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    let errorMessage = 'Failed to send message. Please try again later.'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your email configuration in environment variables.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Unable to connect to email service. Please check your internet connection.'
    } else if (error.message.includes('Invalid login')) {
      errorMessage = 'Email authentication failed. Please check your email and app password.'
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}