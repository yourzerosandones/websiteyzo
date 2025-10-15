// app/blog/page.js
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function BlogComingSoon() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* iOS-safe background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(135deg, rgba(32, 66, 127, 0.1) 0%, rgba(249, 250, 251, 0.8) 50%, rgba(255, 255, 255, 1) 100%)'
            }}
          ></div>
          
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center w-full">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100 mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20427f] rounded-full flex items-center justify-center text-white mx-auto mb-6 sm:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Blog Coming Soon
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                We're crafting valuable content to help you grow your brand. 
                Stay tuned for insightful articles and expert tips.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <Link
                  href="/"
                  className="block w-full bg-[#20427f] text-white py-3 px-6 rounded-lg hover:bg-[#1a3566] transition-colors duration-200 font-medium text-base sm:text-lg"
                >
                  Back to Home
                </Link>
                
                <Link
                  href="/contact"
                  className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-base sm:text-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const metadata = {
  title: 'Blog Coming Soon - Your Zeros and Ones',
  description: 'Our blog is coming soon with valuable insights about branding, design, digital marketing, and technology solutions',
}