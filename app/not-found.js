import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#20427f]/10 via-white to-[#20427f]/5 py-6">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Animated 404 Number */}
            <div className="relative mb-8">
              <div className="text-[180px] md:text-[240px] font-bold text-gray-900 opacity-10 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl md:text-9xl font-bold text-[#20427f]">
                  404
                </div>
              </div>
            </div>

            {/* Content */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into the digital wilderness. 
              Don't worry, let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="bg-[#20427f] text-white px-8 py-4 rounded-lg hover:bg-[#1a3566] transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Homepage
              </Link>
              <Link
                href="/services"
                className="border border-[#20427f] text-[#20427f] px-8 py-4 rounded-lg hover:bg-[#20427f]/5 transition-all duration-200 font-medium flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explore Services
              </Link>
            </div>

            {/* Help Section */}
            <div className="mt-12 p-6 bg-[#20427f]/5 rounded-2xl border border-[#20427f]/20 max-w-2xl mx-auto">
              <div className="flex items-start">
                <div className="bg-[#20427f] rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h4>
                  <p className="text-gray-600 mb-3">
                    Can't find what you're looking for? Our team is here to help you navigate our website and find the information you need.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#20427f] font-semibold hover:text-[#1a3566] transition-colors duration-200"
                  >
                    Contact Support
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const metadata = {
  title: 'Page Not Found - 404 Error | YourZerosAndOnes',
  description: 'The page you are looking for cannot be found. Return to the homepage or explore our services.',
}