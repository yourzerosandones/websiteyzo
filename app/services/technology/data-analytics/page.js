import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Link from 'next/link'

export default function DataAnalytics() {
  const analyticsMaturity = [
    {
      type: "Descriptive Analytics",
      question: "What happened?",
      purpose: "Looks at past data to describe what has occurred",
      examples: [
        "Reporting on last quarter's sales figures",
        "Website traffic analysis",
        "Customer demographics reporting",
        "Monthly performance dashboards"
      ],
      icon: "📊"
    },
    {
      type: "Diagnostic Analytics",
      question: "Why did it happen?",
      purpose: "Digs deeper into past data to understand the causes of events and behaviors",
      examples: [
        "Analyzing sales drop causes",
        "Root cause analysis for operational issues",
        "Customer behavior pattern analysis",
        "Marketing campaign performance deep-dive"
      ],
      icon: "🔍"
    },
    {
      type: "Predictive Analytics",
      question: "What is likely to happen?",
      purpose: "Uses statistical models and machine learning to forecast future outcomes",
      examples: [
        "Predicting customer churn",
        "Forecasting inventory demand",
        "Sales revenue predictions",
        "Risk assessment modeling"
      ],
      icon: "🔮"
    },
    {
      type: "Prescriptive Analytics",
      question: "What should we do?",
      purpose: "Recommends actions to affect desired outcomes or avoid future risks",
      examples: [
        "Optimal discount recommendations",
        "Supply chain optimization routes",
        "Personalized marketing actions",
        "Resource allocation optimization"
      ],
      icon: "🎯"
    }
  ];

  const services = [
    {
      category: "Data Strategy & Consulting",
      description: "Strategic planning and governance for data-driven transformation",
      services: [
        {
          name: "Business Intelligence Strategy",
          description: "Designing roadmap for data usage to meet business goals"
        },
        {
          name: "Data Governance & Assessment",
          description: "Establishing policies and standards for data management"
        },
        {
          name: "Use Case Identification",
          description: "Pinpointing valuable business problems data can solve"
        }
      ],
      icon: "🎯"
    },
    {
      category: "Data Engineering & Management",
      description: "Building robust data infrastructure and pipelines",
      services: [
        {
          name: "Data Integration & ETL/ELT",
          description: "Combining data from various sources into centralized repositories"
        },
        {
          name: "Data Warehouse/Lakehouse Design",
          description: "Architecting scalable modern data platforms"
        },
        {
          name: "Data Cleaning & Transformation",
          description: "Ensuring data accuracy and consistency for analysis"
        }
      ],
      icon: "⚙️"
    },
    {
      category: "Data Analysis & Visualization",
      description: "Transforming data into actionable insights and visualizations",
      services: [
        {
          name: "Dashboard & Report Development",
          description: "Creating interactive BI dashboards for KPI tracking"
        },
        {
          name: "Advanced Analytics",
          description: "Applying statistical analysis and machine learning"
        },
        {
          name: "Ad-hoc Analysis",
          description: "Deep-dive analysis for specific business questions"
        }
      ],
      icon: "📈"
    },
    {
      category: "Specialized Advanced Analytics",
      description: "Domain-specific analytics solutions for business functions",
      services: [
        {
          name: "Customer Analytics",
          description: "Segmentation, LTV prediction, churn analysis"
        },
        {
          name: "Marketing Analytics",
          description: "Campaign ROI, attribution modeling, market mix"
        },
        {
          name: "Operations Analytics",
          description: "Logistics optimization, predictive maintenance"
        },
        {
          name: "Financial Analytics",
          description: "Fraud detection, risk modeling, forecasting"
        }
      ],
      icon: "🔬"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Scoping",
      description: "Understand business objectives, key questions, and available data sources",
      activities: ["Stakeholder Interviews", "Requirement Gathering", "Data Assessment", "Scope Definition"]
    },
    {
      step: "02",
      title: "Data Collection & Ingestion",
      description: "Gathering data from all identified sources and systems",
      activities: ["Data Source Identification", "API Integration", "Database Connection", "Data Extraction"]
    },
    {
      step: "03",
      title: "Data Preparation & Cleaning",
      description: "Handling missing values, correcting errors, and transforming data into usable format",
      activities: ["Data Cleaning", "Transformation", "Quality Assurance", "Data Validation"]
    },
    {
      step: "04",
      title: "Exploratory Analysis & Modeling",
      description: "Analyzing data to find patterns and building statistical or ML models",
      activities: ["Pattern Analysis", "Model Development", "Feature Engineering", "Algorithm Selection"]
    },
    {
      step: "05",
      title: "Visualization & Interpretation",
      description: "Creating dashboards and interpreting findings in business context",
      activities: ["Dashboard Creation", "Report Generation", "Insight Synthesis", "Business Translation"]
    },
    {
      step: "06",
      title: "Deployment & Automation",
      description: "Integrating insights into business processes and automating pipelines",
      activities: ["Pipeline Automation", "System Integration", "Process Implementation", "User Training"]
    }
  ];

  const techStack = [
    {
      category: "Cloud Data Warehouses",
      technologies: [
        { name: "Snowflake", description: "Cloud data platform", icon: "/images/data-tools/snowflake.svg" },
        { name: "Google BigQuery", description: "Serverless data warehouse", icon: "/images/data-tools/bigquery.svg" },
        { name: "Amazon Redshift", description: "Cloud data warehouse", icon: "/images/data-tools/redshift.svg" },
        { name: "Azure Synapse", description: "Analytics service", icon: "/images/data-tools/synapse.svg" }
      ]
    },
    {
      category: "Data Integration & ETL",
      technologies: [
        { name: "Fivetran", description: "Automated data integration", icon: "/images/data-tools/fivetran.svg" },
        { name: "dbt", description: "Data transformation tool", icon: "/images/data-tools/dbt.svg" },
        { name: "Airbyte", description: "Open-source ELT", icon: "/images/data-tools/airbyte.svg" },
        { name: "Talend", description: "Data integration platform", icon: "/images/data-tools/talend.svg" }
      ]
    },
    {
      category: "BI & Visualization",
      technologies: [
        { name: "Tableau", description: "Business intelligence", icon: "/images/data-tools/tableau.svg" },
        { name: "Power BI", description: "Microsoft analytics", icon: "/images/data-tools/powerbi.svg" },
        { name: "Looker", description: "Google BI platform", icon: "/images/data-tools/looker.svg" },
        { name: "Qlik Sense", description: "Associative analytics", icon: "/images/data-tools/qlik.svg" }
      ]
    },
    {
      category: "Data Science & ML",
      technologies: [
        { name: "Databricks", description: "Data analytics platform", icon: "/images/data-tools/databricks.svg" },
        { name: "DataRobot", description: "AI platform", icon: "/images/data-tools/datarobot.svg" },
        { name: "SageMaker", description: "AWS ML service", icon: "/images/data-tools/sagemaker.svg" },
        { name: "Azure ML", description: "Microsoft ML platform", icon: "/images/data-tools/azureml.svg" }
      ]
    }
  ];

  const benefits = [
    {
      title: "Drive Revenue Growth",
      description: "Identify upsell opportunities, optimize pricing, and personalize marketing",
      metric: "25%"
    },
    {
      title: "Reduce Operational Costs",
      description: "Improve efficiency, optimize supply chains, and predict maintenance",
      metric: "30%"
    },
    {
      title: "Risk Mitigation",
      description: "Detect fraud and proactively manage financial and compliance risks",
      metric: "40%"
    },
    {
      title: "Customer Experience",
      description: "Understand behavior and preferences to create superior products",
      metric: "50%"
    }
  ];

  const ctaLinks = [
    {
      text: "Start Data Project",
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
              Data & Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Data solutions and analytics platforms to drive business insights, informed decisions, and strategic growth.
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

        {/* Analytics Maturity Model Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Analytics Maturity Model
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From understanding what happened to prescribing what to do next - your journey to data-driven excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {analyticsMaturity.map((analytics, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#20427f] group"
                >
                  <div className="text-4xl mb-4 text-center">{analytics.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {analytics.type}
                  </h3>
                  <div className="bg-[#20427f] text-white rounded-lg p-3 mb-4 text-center">
                    <div className="font-semibold text-sm">{analytics.question}</div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {analytics.purpose}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Examples:</h4>
                    <ul className="space-y-2">
                      {analytics.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-xs text-gray-600">
                          <svg className="w-3 h-3 text-[#20427f] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Data Analytics Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data solutions covering the entire analytics lifecycle
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.category}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {service.services.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="border-l-4 border-[#20427f] bg-gray-50 rounded-r-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Analytics Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured methodology for delivering actionable insights and measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#20427f] text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.activities.map((activity, activityIndex) => (
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

        {/* Technology Stack Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Modern Data Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-leading technologies powering our data and analytics solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <img 
                          src={tech.icon} 
                          alt={tech.name}
                          className="w-8 h-8"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {tech.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {tech.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your organization with data-driven decision making
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#20427f] mb-2">
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
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's build data and analytics solutions that transform information into actionable business intelligence.
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
  title: 'Data & Analytics - YourZerosAndOnes',
  description: 'Comprehensive data and analytics services including data engineering, business intelligence, and predictive analytics',
}