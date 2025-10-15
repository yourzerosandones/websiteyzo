import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Link from 'next/link'

export default function CyberSecurity() {
  const services = [
    {
      title: "Managed Detection and Response",
      description: "24/7 threat monitoring, detection, and response services with advanced security analytics and rapid incident response.",
      icon: "🔍",
      features: ["24/7 Monitoring", "Threat Hunting", "Incident Response", "Security Analytics"]
    },
    {
      title: "Network Security",
      description: "Comprehensive network protection including firewall management, intrusion detection, and network segmentation.",
      icon: "🌐",
      features: ["Firewall Management", "Intrusion Detection", "Network Segmentation", "VPN Security"]
    },
    {
      title: "Cloud Security",
      description: "End-to-end cloud security solutions for AWS, Azure, and GCP with compliance and data protection.",
      icon: "☁️",
      features: ["Cloud Compliance", "Data Protection", "Identity Management", "Configuration Auditing"]
    },
    {
      title: "Identity and Access Management",
      description: "Secure identity management with multi-factor authentication, role-based access control, and privileged access management.",
      icon: "🔑",
      features: ["MFA Implementation", "RBAC Systems", "Privileged Access", "Single Sign-On"]
    },
    {
      title: "Server Security and Hardening",
      description: "Comprehensive server security including OS hardening, patch management, and configuration auditing.",
      icon: "🖥️",
      features: ["OS Hardening", "Patch Management", "Configuration Auditing", "Vulnerability Scanning"]
    },
    {
      title: "Database Hardening",
      description: "Database security solutions including encryption, access controls, and activity monitoring.",
      icon: "🗄️",
      features: ["Database Encryption", "Access Controls", "Activity Monitoring", "Backup Security"]
    },
    {
      title: "Web and Mobile App Security Testing",
      description: "Comprehensive security testing including penetration testing, code review, and vulnerability assessment.",
      icon: "📱",
      features: ["Penetration Testing", "Code Review", "Vulnerability Assessment", "Security Scanning"]
    },
    {
      title: "Technical Support",
      description: "Ongoing security support, maintenance, and expert guidance for all your cybersecurity needs.",
      icon: "🛠️",
      features: ["24/7 Support", "Security Maintenance", "Expert Guidance", "Quick Response"]
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Understanding your business needs, current security posture, and specific security requirements",
      activities: ["Business Analysis", "Requirement Gathering", "Scope Definition", "Objective Setting"]
    },
    {
      step: "02",
      title: "Risk Assessment",
      description: "Comprehensive security assessment to identify vulnerabilities and potential threats",
      activities: ["Vulnerability Scanning", "Threat Analysis", "Risk Evaluation", "Gap Analysis"]
    },
    {
      step: "03",
      title: "Customised Security Strategy",
      description: "Developing tailored security strategies aligned with your business objectives and risk profile",
      activities: ["Strategy Development", "Roadmap Creation", "Technology Selection", "Implementation Plan"]
    },
    {
      step: "04",
      title: "Implementation Planning",
      description: "Detailed planning for security solution deployment with minimal business disruption",
      activities: ["Project Planning", "Resource Allocation", "Timeline Creation", "Stakeholder Alignment"]
    },
    {
      step: "05",
      title: "Security Solution Deployment",
      description: "Systematic implementation of security controls, tools, and protection mechanisms",
      activities: ["Tool Deployment", "Configuration Setup", "Integration Testing", "Quality Assurance"]
    },
    {
      step: "06",
      title: "Continuous Monitoring",
      description: "24/7 security monitoring with real-time threat detection and alerting systems",
      activities: ["Real-time Monitoring", "Alert Management", "Log Analysis", "Performance Tracking"]
    },
    {
      step: "07",
      title: "Threat Detection and Incident Response",
      description: "Proactive threat hunting and rapid response to security incidents and breaches",
      activities: ["Threat Hunting", "Incident Response", "Forensic Analysis", "Recovery Procedures"]
    },
    {
      step: "08",
      title: "Regular Security Audits",
      description: "Periodic security assessments and compliance audits to ensure ongoing protection",
      activities: ["Compliance Audits", "Security Assessments", "Policy Review", "Control Testing"]
    },
    {
      step: "09",
      title: "Security Updates and Patch Management",
      description: "Regular security updates, patch deployment, and vulnerability management",
      activities: ["Patch Deployment", "Update Management", "Vulnerability Patching", "System Updates"]
    },
    {
      step: "10",
      title: "User Education and Training",
      description: "Security awareness training and education programs for employees and stakeholders",
      activities: ["Security Training", "Awareness Programs", "Phishing Simulations", "Best Practices"]
    },
    {
      step: "11",
      title: "Documentation and Reporting",
      description: "Comprehensive security documentation, compliance reports, and performance metrics",
      activities: ["Documentation", "Compliance Reporting", "Performance Metrics", "Executive Reports"]
    },
    {
      step: "12",
      title: "Review and Improvement",
      description: "Continuous improvement of security posture based on evolving threats and business changes",
      activities: ["Performance Review", "Strategy Updates", "Technology Refresh", "Process Improvement"]
    }
  ];

  const securityFrameworks = [
    {
      name: "NIST Cybersecurity Framework",
      description: "Comprehensive framework for managing cybersecurity risk",
      components: ["Identify", "Protect", "Detect", "Respond", "Recover"],
      icon: "🏛️"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      components: ["Risk Assessment", "Security Controls", "Continuous Improvement", "Compliance"],
      icon: "📋"
    },
    {
      name: "CIS Controls",
      description: "Critical security controls for effective cyber defense",
      components: ["Basic Controls", "Foundational Controls", "Organizational Controls"],
      icon: "🛡️"
    },
    {
      name: "Zero Trust Architecture",
      description: "Security model assuming no trust for any entity inside or outside the network",
      components: ["Verify Explicitly", "Least Privilege", "Assume Breach", "Micro-segmentation"],
      icon: "🚫"
    }
  ];

  const benefits = [
    {
      title: "Threat Prevention",
      description: "Proactive security measures preventing 99% of common cyber threats",
      metric: "99%"
    },
    {
      title: "Incident Response Time",
      description: "Average response time for security incidents and breaches",
      metric: "< 15 min"
    },
    {
      title: "Compliance Coverage",
      description: "Coverage for major regulatory frameworks and standards",
      metric: "100%"
    },
    {
      title: "Client Satisfaction",
      description: "Satisfaction rate from our security service clients",
      metric: "98%"
    }
  ];

  const ctaLinks = [
    {
      text: "Get Security Assessment",
      href: "/contact",
      variant: "primary"
    },
    {
      text: "Explore Services",
      href: "/services/technology",
      variant: "secondary"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#f0f4ff] to-[#e8efff] py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cyber Security
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your digital assets with comprehensive security solutions and monitoring to safeguard your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {ctaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`${
                    link.variant === "primary" 
                      ? "bg-[#20427f] text-white hover:bg-[#1a3568] shadow-lg hover:shadow-xl" 
                      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  } px-8 py-4 rounded-lg transition-all duration-200 font-medium`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Cyber Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions to protect your business from evolving cyber threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#20427f] group"
                >
                  <div className="text-3xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm text-center">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-[#20427f] text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Frameworks Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Security Frameworks & Standards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-proven frameworks and standards we implement for comprehensive security
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFrameworks.map((framework, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl mb-4 text-center">{framework.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {framework.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm text-center">
                    {framework.description}
                  </p>
                  <ul className="space-y-2">
                    {framework.components.map((component, componentIndex) => (
                      <li key={componentIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#20427f] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Security Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive 12-step approach to building and maintaining robust cybersecurity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processes.map((process, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-[#20427f] text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {process.description}
                  </p>
                  <ul className="space-y-1">
                    {process.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center text-xs text-gray-600">
                        <svg className="w-3 h-3 text-[#20427f] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cyber Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven results and expertise that keep your business secure and compliant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#20427f] mb-2">
                    {benefit.metric}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#20427f] to-[#2c5aa0]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Strengthen Your Security?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's implement comprehensive cyber security solutions that protect your business from digital threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`${
                    link.variant === "primary" 
                      ? "bg-white text-[#20427f] hover:bg-gray-100 shadow-lg hover:shadow-xl" 
                      : "border border-white text-white hover:bg-white hover:text-[#20427f]"
                  } px-8 py-4 rounded-lg transition-all duration-200 font-medium`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Cyber Security - YourZerosAndOnes',
  description: 'Comprehensive cyber security services including threat protection, compliance, and incident response for business protection',
}