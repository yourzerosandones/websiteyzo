// app/about/page.js
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      description: '15+ years in tech leadership and business strategy'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/api/placeholder/150/150',
      description: 'Expert in cloud architecture and software development'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: '/api/placeholder/150/150',
      description: 'Specialized in UX/UI and product design'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      image: '/api/placeholder/150/150',
      description: 'Full-stack development and team leadership'
    }
  ]

  const testimonials = [
    {
      quote: "TechSolutions transformed our digital presence completely. Their team delivered beyond our expectations.",
      author: "Jennifer Smith",
      company: "Innovate Corp",
      rating: 5
    },
    {
      quote: "Professional, reliable, and highly skilled. They understood our vision and made it a reality.",
      author: "Robert Brown",
      company: "Global Solutions Inc",
      rating: 5
    },
    {
      quote: "The mobile app they developed for us has increased our customer engagement by 200%.",
      author: "Maria Garcia",
      company: "Retail Plus",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section - Fixed for iOS */}
        <section className="bg-white relative overflow-hidden">
          {/* iOS-safe gradient background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(135deg, rgba(32, 66, 127, 0.1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 1) 100%)'
            }}
          ></div>
          <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
                About Your Zeros and Ones
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
                Leading the digital transformation journey for businesses worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Your Zeros and Ones is a premier IT consulting and software development company dedicated to helping businesses thrive in the digital age. We combine technical expertise with business acumen to deliver innovative solutions that drive growth and efficiency.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Our team of passionate developers, designers, and strategists work collaboratively to transform complex challenges into elegant, user-friendly solutions.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-[#20427f] mb-1 sm:mb-2">50+</div>
                    <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-[#20427f] mb-1 sm:mb-2">15+</div>
                    <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-[#20427f] mb-1 sm:mb-2">30+</div>
                    <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-[#20427f] mb-1 sm:mb-2">24/7</div>
                    <div className="text-sm sm:text-base text-gray-600">Support</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 sm:p-8">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                  <span className="text-gray-500 text-lg">Company Image/Video</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-[#20427f] text-white rounded-full p-3 sm:p-4 flex-shrink-0">
                    <span className="text-lg sm:text-xl font-bold">2010</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">The Beginning</h3>
                    <p className="text-gray-700 text-base sm:text-lg">
                      Founded with a vision to make technology accessible to businesses of all sizes. Our first project was a simple e-commerce website that grew into a long-term partnership.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-[#20427f] text-white rounded-full p-3 sm:p-4 flex-shrink-0">
                    <span className="text-lg sm:text-xl font-bold">2015</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">Expansion & Growth</h3>
                    <p className="text-gray-700 text-base sm:text-lg">
                      Expanded our team and services to include mobile app development and cloud solutions. Partnered with major corporations and startups alike, delivering over 20 successful projects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-[#20427f] text-white rounded-full p-3 sm:p-4 flex-shrink-0">
                    <span className="text-lg sm:text-xl font-bold">2020</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">Digital Transformation Leaders</h3>
                    <p className="text-gray-700 text-base sm:text-lg">
                      Recognized as industry leaders in digital transformation. Adapted to remote work seamlessly and helped clients navigate the challenges of the digital-first world.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-[#20427f] text-white rounded-full p-3 sm:p-4 flex-shrink-0">
                    <span className="text-lg sm:text-xl font-bold">2024</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">Today & Beyond</h3>
                    <p className="text-gray-700 text-base sm:text-lg">
                      Continuing to innovate with AI, machine learning, and cutting-edge technologies. Committed to delivering exceptional value and building lasting partnerships with our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Vision */}
              <div className="bg-[#20427f]/10 rounded-lg p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="bg-[#20427f] text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg text-center leading-relaxed">
                  To be the leading catalyst for digital innovation, empowering businesses worldwide to achieve their full potential through transformative technology solutions that create lasting impact and drive sustainable growth.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="bg-[#20427f] text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg text-center leading-relaxed">
                  To deliver exceptional, customized IT solutions that solve complex business challenges. We are committed to building long-term partnerships based on trust, innovation, and measurable results that help our clients stay ahead in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Passionate professionals dedicated to delivering excellence in every project
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gray-200 h-48 sm:h-56 flex items-center justify-center">
                    <span className="text-gray-500 text-sm sm:text-base">Team Member Photo</span>
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                    <p className="text-[#20427f] font-medium mb-2 sm:mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Why Choose Us?</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Discover what sets us apart and makes us the right partner for your digital journey
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Innovation First */}
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg">
                <div className="bg-[#20427f]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Innovation First</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We stay at the forefront of technology trends, ensuring your solutions are built with the latest and most effective tools and methodologies.
                </p>
              </div>

              {/* Rapid Delivery */}
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg">
                <div className="bg-[#20427f]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Rapid Delivery</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Agile development processes and experienced teams ensure your projects are delivered on time and within budget.
                </p>
              </div>

              {/* Quality & Security */}
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg">
                <div className="bg-[#20427f]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Quality & Security</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Rigorous testing protocols and security measures guarantee robust, reliable, and secure applications for your business.
                </p>
              </div>

              {/* Dedicated Support */}
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg">
                <div className="bg-[#20427f]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Dedicated Support</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Our relationship doesn't end at delivery. We provide ongoing support and maintenance to ensure your success.
                </p>
              </div>

              {/* Custom Solutions */}
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg">
                <div className="bg-[#20427f]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Custom Solutions</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Every project is tailored to your specific needs, ensuring perfect alignment with your business objectives.
                </p>
              </div>

              {/* Proven Results */}
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-lg">
                <div className="bg-[#20427f]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#20427f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Proven Results</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Track record of delivering measurable business outcomes and ROI for our diverse client portfolio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                  <div className="flex mb-3 sm:mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-3 sm:pt-4">
                    <div className="font-semibold text-base sm:text-lg text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm sm:text-base">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const metadata = {
  title: 'About Us - Your Zeros and Ones',
  description: 'Learn about our story, mission, team, and why clients choose Your Zeros and Ones for their IT needs',
}