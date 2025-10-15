// app/contact/page.js
'use client'

import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [recaptchaToken, setRecaptchaToken] = useState(null)
  const recaptchaRef = useRef()

  // Get sitekey from environment variable
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token)
  }

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null)
  }

  const handleRecaptchaError = () => {
    setRecaptchaToken(null)
    setSubmitStatus({ 
      type: 'error', 
      message: 'reCAPTCHA failed to load. Please refresh the page and try again.' 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate reCAPTCHA
    if (!recaptchaToken) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please complete the reCAPTCHA verification.' 
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: data.message || 'Thank you for your message! We will get back to you soon.' 
        })
        setFormData({ name: '', email: '', message: '' })
        // Reset reCAPTCHA
        setRecaptchaToken(null)
        recaptchaRef.current?.reset()
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.error || 'Something went wrong. Please try again.' 
        })
        // Reset reCAPTCHA on error
        setRecaptchaToken(null)
        recaptchaRef.current?.reset()
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      })
      // Reset reCAPTCHA on error
      setRecaptchaToken(null)
      recaptchaRef.current?.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/yourzerosandones/',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/yourzerosandone',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/your-zeros-and-ones/',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yourzerosandones',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@YOURZEROSANDONES',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12 md:py-16 bg-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12">
            Get in touch with our team to discuss your project
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Contact Form - First on mobile, Second on large screens */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#20427f] focus:border-transparent transition-colors text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#20427f] focus:border-transparent transition-colors text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed bg-white"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#20427f] focus:border-transparent transition-colors text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed bg-white"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                {/* reCAPTCHA Component */}
                <div className="flex justify-center">
                  {recaptchaSiteKey ? (
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptchaSiteKey}
                      onChange={handleRecaptchaChange}
                      onExpired={handleRecaptchaExpired}
                      onErrored={handleRecaptchaError}
                    />
                  ) : (
                    <div className="text-red-500 text-sm text-center p-4 border border-red-200 rounded-lg bg-red-50">
                      reCAPTCHA is not configured. Please check your environment variables.
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !recaptchaToken || !recaptchaSiteKey}
                  className="w-full bg-[#20427f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#1a3566] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold text-base sm:text-lg flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                {/* Response Messages under the form */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg border ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border-green-200 text-green-800'
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-start">
                      {submitStatus.type === 'success' ? (
                        <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                      <div>
                        <p className="font-medium text-sm sm:text-base">
                          {submitStatus.type === 'success' ? 'Success!' : 'Error!'}
                        </p>
                        <p className="text-sm sm:text-base mt-1">{submitStatus.message}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  * Required fields. We'll get back to you within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Information - Second on mobile, First on large screens */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">Get in Touch</h2>
              
              {/* Contact Information */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <div className="bg-[#20427f]/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900">Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      1st floor, Valentine Estate,<br />
                      Palachuvadu, Kakkanad,<br />
                      Kochi - Kerala 682030
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#20427f]/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+91 96053 05453</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#20427f]/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">info@yourzerosandones.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#20427f]/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Follow Us</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Stay connected with us on social media for the latest updates and news.
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-[#20427f] hover:text-white text-gray-600 p-2 sm:p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 text-gray-900">Find Us</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#20427f]/10 to-gray-100">
                  <div className="text-center">
                    <div className="bg-[#20427f] text-white p-3 sm:p-4 rounded-full mb-3 sm:mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">Our Location</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                      1st floor, Valentine Estate,<br />
                      Palachuvadu, Kakkanad, Kochi
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                      Interactive map would be embedded here
                    </p>
                    <div className="mt-3 sm:mt-4">
                      <a
                        href="https://maps.google.com/?q=1st+floor+Valentine+Estate+Palachuvadu+Kakkanad+Kochi+Kerala+682030"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#20427f] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#1a3566] transition-colors text-sm sm:text-base"
                      >
                        <span>Open in Google Maps</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}