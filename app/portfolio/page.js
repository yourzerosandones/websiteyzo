// app/portfolio/page.js
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      category: "Web Development",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Healthcare Mobile App",
      description: "Patient management app for healthcare providers",
      category: "Mobile Development",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Cloud Migration",
      description: "Enterprise cloud infrastructure migration",
      category: "Cloud Services",
      image: "/api/placeholder/400/250"
    },
    {
      title: "FinTech Dashboard",
      description: "Real-time financial data visualization",
      category: "Web Development",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Brand Identity Design",
      description: "Complete branding package for tech startup",
      category: "Branding & Design",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Social Media Campaign",
      description: "Digital marketing campaign with 300% ROI",
      category: "Digital Marketing",
      image: "/api/placeholder/400/250"
    }
  ]

  const categories = ["All", "Web Development", "Mobile Development", "Cloud Services", "Branding & Design", "Digital Marketing"]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See how we've helped businesses succeed with our innovative technology solutions and creative designs
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-[#20427f] hover:text-white hover:border-[#20427f] transition-all duration-300 text-sm sm:text-base font-medium"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-gray-100 h-48 sm:h-56 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#20427f]/10 to-transparent"></div>
                    <span className="text-gray-500 text-sm sm:text-base relative z-10">Project Image</span>
                  </div>
                  <div className="p-4 sm:p-6 bg-white">
                    <span className="text-[#20427f] text-sm font-semibold bg-[#20427f]/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-3 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{project.description}</p>
                    <button className="mt-4 text-[#20427f] font-semibold text-sm hover:text-[#1a3668] transition-colors duration-200 flex items-center">
                      View Case Study
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 sm:mt-16 md:mt-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
                Let's discuss how we can bring your ideas to life with our expertise and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#20427f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#1a3668] transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl">
                  Start Your Project
                </button>
                <button className="border-2 border-[#20427f] text-[#20427f] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#20427f]/10 transition-all duration-300 font-semibold text-base sm:text-lg">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#20427f] mb-2">50+</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#20427f] mb-2">30+</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">Happy Clients</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#20427f] mb-2">15+</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#20427f] mb-2">99%</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">Client Satisfaction</div>
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
  title: 'Portfolio - Your Zeros and Ones',
  description: 'View our successful projects and case studies across web development, mobile apps, cloud services, and digital marketing',
}