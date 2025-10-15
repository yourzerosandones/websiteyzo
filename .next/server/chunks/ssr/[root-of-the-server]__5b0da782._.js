module.exports = [
"[project]/OneDrive/Documents/yzo/it-company-website/.next-internal/server/app/services/technology/data-analytics/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/OneDrive/Documents/yzo/it-company-website/app/favicon.ico.mjs { IMAGE => \"[project]/OneDrive/Documents/yzo/it-company-website/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/app/favicon.ico.mjs { IMAGE => \"[project]/OneDrive/Documents/yzo/it-company-website/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/OneDrive/Documents/yzo/it-company-website/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Documents/yzo/it-company-website/app/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/app/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataAnalytics,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$components$2f$Header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/components/Footer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
function DataAnalytics() {
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
            activities: [
                "Stakeholder Interviews",
                "Requirement Gathering",
                "Data Assessment",
                "Scope Definition"
            ]
        },
        {
            step: "02",
            title: "Data Collection & Ingestion",
            description: "Gathering data from all identified sources and systems",
            activities: [
                "Data Source Identification",
                "API Integration",
                "Database Connection",
                "Data Extraction"
            ]
        },
        {
            step: "03",
            title: "Data Preparation & Cleaning",
            description: "Handling missing values, correcting errors, and transforming data into usable format",
            activities: [
                "Data Cleaning",
                "Transformation",
                "Quality Assurance",
                "Data Validation"
            ]
        },
        {
            step: "04",
            title: "Exploratory Analysis & Modeling",
            description: "Analyzing data to find patterns and building statistical or ML models",
            activities: [
                "Pattern Analysis",
                "Model Development",
                "Feature Engineering",
                "Algorithm Selection"
            ]
        },
        {
            step: "05",
            title: "Visualization & Interpretation",
            description: "Creating dashboards and interpreting findings in business context",
            activities: [
                "Dashboard Creation",
                "Report Generation",
                "Insight Synthesis",
                "Business Translation"
            ]
        },
        {
            step: "06",
            title: "Deployment & Automation",
            description: "Integrating insights into business processes and automating pipelines",
            activities: [
                "Pipeline Automation",
                "System Integration",
                "Process Implementation",
                "User Training"
            ]
        }
    ];
    const techStack = [
        {
            category: "Cloud Data Warehouses",
            technologies: [
                {
                    name: "Snowflake",
                    description: "Cloud data platform",
                    icon: "/images/data-tools/snowflake.svg"
                },
                {
                    name: "Google BigQuery",
                    description: "Serverless data warehouse",
                    icon: "/images/data-tools/bigquery.svg"
                },
                {
                    name: "Amazon Redshift",
                    description: "Cloud data warehouse",
                    icon: "/images/data-tools/redshift.svg"
                },
                {
                    name: "Azure Synapse",
                    description: "Analytics service",
                    icon: "/images/data-tools/synapse.svg"
                }
            ]
        },
        {
            category: "Data Integration & ETL",
            technologies: [
                {
                    name: "Fivetran",
                    description: "Automated data integration",
                    icon: "/images/data-tools/fivetran.svg"
                },
                {
                    name: "dbt",
                    description: "Data transformation tool",
                    icon: "/images/data-tools/dbt.svg"
                },
                {
                    name: "Airbyte",
                    description: "Open-source ELT",
                    icon: "/images/data-tools/airbyte.svg"
                },
                {
                    name: "Talend",
                    description: "Data integration platform",
                    icon: "/images/data-tools/talend.svg"
                }
            ]
        },
        {
            category: "BI & Visualization",
            technologies: [
                {
                    name: "Tableau",
                    description: "Business intelligence",
                    icon: "/images/data-tools/tableau.svg"
                },
                {
                    name: "Power BI",
                    description: "Microsoft analytics",
                    icon: "/images/data-tools/powerbi.svg"
                },
                {
                    name: "Looker",
                    description: "Google BI platform",
                    icon: "/images/data-tools/looker.svg"
                },
                {
                    name: "Qlik Sense",
                    description: "Associative analytics",
                    icon: "/images/data-tools/qlik.svg"
                }
            ]
        },
        {
            category: "Data Science & ML",
            technologies: [
                {
                    name: "Databricks",
                    description: "Data analytics platform",
                    icon: "/images/data-tools/databricks.svg"
                },
                {
                    name: "DataRobot",
                    description: "AI platform",
                    icon: "/images/data-tools/datarobot.svg"
                },
                {
                    name: "SageMaker",
                    description: "AWS ML service",
                    icon: "/images/data-tools/sagemaker.svg"
                },
                {
                    name: "Azure ML",
                    description: "Microsoft ML platform",
                    icon: "/images/data-tools/azureml.svg"
                }
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$components$2f$Header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gradient-to-br from-[#f0f4ff] to-[#e8efff] py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto px-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-6xl font-bold text-gray-900 mb-6",
                                    children: "Data & Analytics"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed",
                                    children: "Data solutions and analytics platforms to drive business insights, informed decisions, and strategic growth."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center mt-8",
                                    children: ctaLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `${link.variant === "primary" ? "bg-[#20427f] text-white hover:bg-[#1a3568] shadow-lg hover:shadow-xl" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"} px-8 py-4 rounded-lg transition-all duration-200 font-medium`,
                                            children: link.text
                                        }, index, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-gray-900 mb-4",
                                            children: "Analytics Maturity Model"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "From understanding what happened to prescribing what to do next - your journey to data-driven excellence"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8",
                                    children: analyticsMaturity.map((analytics, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#20427f] group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4 text-center",
                                                    children: analytics.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-900 mb-3 text-center",
                                                    children: analytics.type
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#20427f] text-white rounded-lg p-3 mb-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-sm",
                                                        children: analytics.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm mb-4 text-center",
                                                    children: analytics.purpose
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-900 mb-3 text-sm",
                                                            children: "Examples:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2",
                                                            children: analytics.examples.map((example, exampleIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-start text-xs text-gray-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-3 h-3 text-[#20427f] mr-2 mt-0.5 flex-shrink-0",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 3,
                                                                                d: "M5 13l4 4L19 7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                                lineNumber: 320,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                            lineNumber: 319,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        example
                                                                    ]
                                                                }, exampleIndex, true, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                    lineNumber: 318,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-gray-900 mb-4",
                                            children: "Data Analytics Services"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "Comprehensive data solutions covering the entire analytics lifecycle"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-4 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-3xl",
                                                            children: service.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                            lineNumber: 352,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold text-gray-900 mb-2",
                                                                    children: service.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                    lineNumber: 354,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600 text-sm",
                                                                    children: service.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                    lineNumber: 357,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                            lineNumber: 353,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: service.services.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-l-4 border-[#20427f] bg-gray-50 rounded-r-lg p-4 hover:bg-gray-100 transition-colors duration-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-900 text-sm mb-1",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                    lineNumber: 369,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600 text-xs",
                                                                    children: item.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                    lineNumber: 372,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, itemIndex, true, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                            lineNumber: 365,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-gray-900 mb-4",
                                            children: "Our Analytics Process"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "A structured methodology for delivering actionable insights and measurable results"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: process.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-[#20427f] text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 group-hover:scale-110 transition-transform duration-300",
                                                    children: step.step
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-900 mb-3",
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 405,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mb-4 text-sm",
                                                    children: step.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 408,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1",
                                                    children: step.activities.map((activity, activityIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center text-xs text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3 h-3 text-[#20427f] mr-2 flex-shrink-0",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 3,
                                                                        d: "M5 13l4 4L19 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                        lineNumber: 415,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                    lineNumber: 414,
                                                                    columnNumber: 25
                                                                }, this),
                                                                activity
                                                            ]
                                                        }, activityIndex, true, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                            lineNumber: 413,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-gray-900 mb-4",
                                            children: "Modern Data Stack"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 431,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "Industry-leading technologies powering our data and analytics solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: techStack.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-900 mb-4 text-center",
                                                    children: category.category
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 442,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: category.technologies.map((tech, techIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: tech.icon,
                                                                    alt: tech.name,
                                                                    className: "w-8 h-8"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                    lineNumber: 451,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-900 text-sm",
                                                                            children: tech.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                            lineNumber: 457,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-600",
                                                                            children: tech.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                            lineNumber: 460,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                                    lineNumber: 456,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, techIndex, true, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                            lineNumber: 447,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 445,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                            lineNumber: 429,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-gray-900 mb-4",
                                            children: "Business Benefits"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "Transform your organization with data-driven decision making"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                                    children: benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-[#20427f] mb-2",
                                                    children: benefit.metric
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-gray-900 mb-2",
                                                    children: benefit.title
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm",
                                                    children: benefit.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                            lineNumber: 475,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-gradient-to-r from-[#20427f] to-[#2c5aa0]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold text-white mb-6",
                                    children: "Ready to Unlock Your Data's Potential?"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto",
                                    children: "Let's build data and analytics solutions that transform information into actionable business intelligence."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 509,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: ctaLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `${link.variant === "primary" ? "bg-white text-[#20427f] hover:bg-gray-100 shadow-lg hover:shadow-xl" : "border border-white text-white hover:bg-white hover:text-[#20427f]"} px-8 py-4 rounded-lg transition-all duration-200 font-medium`,
                                            children: link.text
                                        }, index, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                            lineNumber: 514,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js",
                lineNumber: 530,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const metadata = {
    title: 'Data & Analytics - YourZerosAndOnes',
    description: 'Comprehensive data and analytics services including data engineering, business intelligence, and predictive analytics'
};
}),
"[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/data-analytics/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5b0da782._.js.map