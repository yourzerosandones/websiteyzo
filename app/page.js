// app/page.js
'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  const [error, setError] = useState(null)

  useEffect(() => {
    // Handle any initial errors
    try {
      // Any initialization code can go here
    } catch (err) {
      setError('Failed to load page content')
    }
  }, [])

  // Service categories data
  const serviceCategories = [
    {
      title: "Branding & Design",
      description: "Complete branding solutions that create memorable identities and compelling visual experiences.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      link: "/services/branding-design",
      services: ["Brand Consulting", "Logo Design", "Graphic Design", "2D & 3D Visualization", "Video Production", "Audio Production", "AI Video Production"]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to boost your online presence and drive measurable results.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      link: "/services/digital-marketing",
      services: ["SEO", "Social Media Management", "Performance Marketing", "Content Marketing", "Marketing Automations", "Analytics & Reporting"]
    },
    {
      title: "Technology",
      description: "Cutting-edge technology solutions that power your business growth and digital transformation.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: "/services/technology",
      services: ["AI & Machine Learning", "DevOps Consulting", "Web Development", "Mobile App Development", "E-Commerce Solutions", "Quality Assurance", "Cloud Services", "Data & Analytics", "Cyber Security"]
    }
  ]

  // Stats data
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ]

  // Error boundary component
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#20427f] text-white px-6 py-3 rounded-lg hover:bg-[#1a3668] transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section - Fixed for iOS */}
        <section className="bg-white relative overflow-hidden">
          {/* Background with explicit colors for iOS */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#20427f]/10 via-white to-gray-50 z-0"></div>
          <div className="relative z-10 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="block md:inline">We Help Complete </span>
                <span className="bg-gradient-to-r from-[#20427f] to-cyan-600 bg-clip-text text-transparent block md:inline md:ml-2 mt-2 md:mt-0">
                  Your Zeros and Ones
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions that transform your business through innovative branding, 
                strategic marketing, and cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-[#20427f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#1a3668] transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#20427f] text-[#20427f] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#20427f]/10 transition-all duration-300 font-semibold text-base sm:text-lg"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 md:p-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#20427f] mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-gray-50 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                End-to-end digital solutions designed to transform your business and drive sustainable growth
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {serviceCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                >
                  <div className="p-6 md:p-8 flex-grow">
                    <div className="text-[#20427f] mb-4 md:mb-6 flex justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4">{category.title}</h3>
                    <p className="text-gray-600 text-center mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 md:mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-gray-700 text-sm sm:text-base">
                          <svg className="w-4 h-4 text-[#20427f] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button container that will stick to bottom */}
                  <div className="p-6 md:p-8 pt-0 mt-auto">
                    <Link
                      href={category.link}
                      className="w-full bg-gray-900 text-white text-center py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium inline-flex items-center justify-center text-sm sm:text-base"
                    >
                      Explore {category.title}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                A structured approach to ensure your project's success from concept to completion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { step: "01", title: "Discover", desc: "We analyze your needs and define project goals" },
                { step: "02", title: "Design", desc: "Create solutions tailored to your requirements" },
                { step: "03", title: "Develop", desc: "Build and implement with cutting-edge technology" },
                { step: "04", title: "Deliver", desc: "Launch and provide ongoing support" }
              ].map((process, index) => (
                <div key={index} className="text-center p-4 md:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#20427f] text-white rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg font-bold mx-auto mb-3 md:mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3 text-gray-900">{process.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#20427f] to-cyan-600 relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can help you achieve your digital goals and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#20427f] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-[#20427f] transition-all duration-300 font-semibold text-base sm:text-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}