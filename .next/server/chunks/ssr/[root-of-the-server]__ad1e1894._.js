module.exports = [
"[project]/OneDrive/Documents/yzo/it-company-website/.next-internal/server/app/services/technology/cloud-services/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CloudServices,
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
function CloudServices() {
    const cloudModels = [
        {
            type: "IaaS (Infrastructure)",
            managedByYou: [
                "Applications",
                "Data",
                "Runtime",
                "Middleware",
                "OS"
            ],
            managedByProvider: [
                "Virtualization",
                "Servers",
                "Storage",
                "Networking"
            ],
            analogy: "You get a kitchen space and appliances. You bring your own ingredients and cook the pizza yourself.",
            useCases: [
                "Migrating enterprise workloads",
                "Hosting complex websites",
                "Big Data analysis",
                "Disaster recovery solutions"
            ],
            icon: "🏗️"
        },
        {
            type: "PaaS (Platform)",
            managedByYou: [
                "Applications",
                "Data"
            ],
            managedByProvider: [
                "Runtime",
                "Middleware",
                "OS",
                "Virtualization",
                "Servers",
                "Storage",
                "Networking"
            ],
            analogy: "You get a delivered pizza kit (dough, sauce, toppings). You assemble and bake it.",
            useCases: [
                "Application development & deployment",
                "API development and management",
                "Internet of Things (IoT) applications",
                "Containerized applications"
            ],
            icon: "🛠️"
        },
        {
            type: "SaaS (Software)",
            managedByYou: [
                "Nothing - just use it"
            ],
            managedByProvider: [
                "Applications",
                "Data",
                "Runtime",
                "Middleware",
                "OS",
                "Virtualization",
                "Servers",
                "Storage",
                "Networking"
            ],
            analogy: "You get a fully cooked pizza delivered. You just eat it.",
            useCases: [
                "Web-based email (Gmail)",
                "Collaboration tools (Slack, Microsoft 365)",
                "CRM systems (Salesforce)",
                "Project management tools"
            ],
            icon: "💻"
        }
    ];
    const cloudServices = [
        {
            category: "Compute Services",
            description: "The fundamental processing power for running applications and workloads",
            services: [
                {
                    name: "AWS EC2",
                    provider: "AWS"
                },
                {
                    name: "Azure Virtual Machines",
                    provider: "Azure"
                },
                {
                    name: "Google Compute Engine",
                    provider: "GCP"
                },
                {
                    name: "AWS Lambda",
                    provider: "AWS"
                },
                {
                    name: "Azure Functions",
                    provider: "Azure"
                },
                {
                    name: "Google Cloud Functions",
                    provider: "GCP"
                }
            ],
            icon: "⚡"
        },
        {
            category: "Storage Services",
            description: "Object, block, and file storage for data of all types and sizes",
            services: [
                {
                    name: "AWS S3",
                    provider: "AWS"
                },
                {
                    name: "Azure Blob Storage",
                    provider: "Azure"
                },
                {
                    name: "Google Cloud Storage",
                    provider: "GCP"
                },
                {
                    name: "AWS EBS",
                    provider: "AWS"
                },
                {
                    name: "Azure Disk Storage",
                    provider: "Azure"
                },
                {
                    name: "Google Persistent Disk",
                    provider: "GCP"
                }
            ],
            icon: "💾"
        },
        {
            category: "Database Services",
            description: "Managed relational (SQL) and non-relational (NoSQL) databases",
            services: [
                {
                    name: "Amazon RDS",
                    provider: "AWS"
                },
                {
                    name: "Azure SQL Database",
                    provider: "Azure"
                },
                {
                    name: "Google Cloud SQL",
                    provider: "GCP"
                },
                {
                    name: "Amazon DynamoDB",
                    provider: "AWS"
                },
                {
                    name: "Azure Cosmos DB",
                    provider: "Azure"
                },
                {
                    name: "Google Firestore",
                    provider: "GCP"
                }
            ],
            icon: "🗄️"
        },
        {
            category: "AI & Machine Learning",
            description: "Pre-built APIs and custom model training tools for artificial intelligence",
            services: [
                {
                    name: "AWS SageMaker",
                    provider: "AWS"
                },
                {
                    name: "Azure AI",
                    provider: "Azure"
                },
                {
                    name: "Google AI Platform",
                    provider: "GCP"
                },
                {
                    name: "AWS Rekognition",
                    provider: "AWS"
                },
                {
                    name: "Azure Cognitive Services",
                    provider: "Azure"
                },
                {
                    name: "Google Vision AI",
                    provider: "GCP"
                }
            ],
            icon: "🧠"
        },
        {
            category: "Networking Services",
            description: "Virtual networks, load balancers, CDNs, and DNS management",
            services: [
                {
                    name: "AWS VPC",
                    provider: "AWS"
                },
                {
                    name: "Azure Virtual Network",
                    provider: "Azure"
                },
                {
                    name: "Google VPC",
                    provider: "GCP"
                },
                {
                    name: "CloudFront",
                    provider: "AWS"
                },
                {
                    name: "Azure CDN",
                    provider: "Azure"
                },
                {
                    name: "Google Cloud CDN",
                    provider: "GCP"
                }
            ],
            icon: "🌐"
        },
        {
            category: "IoT & Serverless",
            description: "Platforms for connected devices and event-driven computing",
            services: [
                {
                    name: "AWS IoT Core",
                    provider: "AWS"
                },
                {
                    name: "Azure IoT Hub",
                    provider: "Azure"
                },
                {
                    name: "Google Cloud IoT Core",
                    provider: "GCP"
                },
                {
                    name: "Serverless Computing",
                    provider: "All"
                },
                {
                    name: "Event-driven Architecture",
                    provider: "All"
                },
                {
                    name: "Microservices",
                    provider: "All"
                }
            ],
            icon: "📡"
        }
    ];
    const platforms = [
        {
            name: "Amazon Web Services (AWS)",
            description: "Comprehensive cloud platform with extensive global infrastructure and service catalog",
            strengths: [
                "Market Leader",
                "Extensive Services",
                "Global Reach",
                "Enterprise Focus"
            ],
            icon: "/images/cloud-platforms/aws.svg"
        },
        {
            name: "Microsoft Azure",
            description: "Enterprise-grade cloud platform with strong integration with Microsoft ecosystem",
            strengths: [
                "Hybrid Cloud",
                "Enterprise Integration",
                "Microsoft Stack",
                "Security"
            ],
            icon: "/images/cloud-platforms/azure.svg"
        },
        {
            name: "Google Cloud Platform (GCP)",
            description: "Innovative cloud services with strong data analytics and AI/ML capabilities",
            strengths: [
                "Data Analytics",
                "AI/ML",
                "Kubernetes",
                "Open Source"
            ],
            icon: "/images/cloud-platforms/gcp.svg"
        },
        {
            name: "Multi-Cloud Solutions",
            description: "Hybrid and multi-cloud strategies for optimal performance and risk mitigation",
            strengths: [
                "Flexibility",
                "Risk Mitigation",
                "Best-of-Breed",
                "Cost Optimization"
            ],
            icon: "/images/cloud-platforms/multi-cloud.svg"
        }
    ];
    const benefits = [
        {
            title: "Scalability & Flexibility",
            description: "Easily scale resources up or down based on demand with pay-as-you-go pricing",
            metric: "Auto-scaling"
        },
        {
            title: "Cost Efficiency",
            description: "Reduce capital expenditure with operational expense model and optimized resource usage",
            metric: "60% Savings"
        },
        {
            title: "Security & Compliance",
            description: "Enterprise-grade security with compliance certifications for various industries",
            metric: "99.9% Uptime"
        },
        {
            title: "Global Reach",
            description: "Deploy applications closer to your users with global data center presence",
            metric: "200+ Regions"
        }
    ];
    const ctaLinks = [
        {
            text: "Start Cloud Migration",
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
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                lineNumber: 194,
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
                                    children: "Cloud Services"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed",
                                    children: "Cloud infrastructure, migration, and management services for scalable, secure, and cost-effective solutions."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center mt-8",
                                    children: ctaLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `${link.variant === "primary" ? "bg-[#20427f] text-white hover:bg-[#1a3568] shadow-lg hover:shadow-xl" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"} px-8 py-4 rounded-lg transition-all duration-200 font-medium`,
                                            children: link.text
                                        }, index, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                        lineNumber: 197,
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
                                            children: "Cloud Service Models"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "Understanding the shared responsibility model from Infrastructure to Software as a Service"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                                    children: cloudModels.map((model, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#20427f] group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4 text-center",
                                                    children: model.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-gray-900 mb-4 text-center",
                                                    children: model.type
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-900 mb-2",
                                                            children: "Managed by You:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                            lineNumber: 247,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2 mb-4",
                                                            children: model.managedByYou.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-[#20427f] text-white px-3 py-1 rounded-full text-xs font-medium",
                                                                    children: item
                                                                }, itemIndex, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                                    lineNumber: 250,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                            lineNumber: 248,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-900 mb-2",
                                                            children: "Managed by Provider:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                            lineNumber: 259,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: model.managedByProvider.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium",
                                                                    children: item
                                                                }, itemIndex, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                                    lineNumber: 262,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                            lineNumber: 260,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-50 rounded-lg p-4 mb-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 italic",
                                                        children: model.analogy
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-gray-900 mb-2",
                                                            children: "Use Cases:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                            lineNumber: 279,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2",
                                                            children: model.useCases.map((useCase, useCaseIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center text-sm text-gray-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-4 h-4 text-[#20427f] mr-2 flex-shrink-0",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 3,
                                                                                d: "M5 13l4 4L19 7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                                                lineNumber: 284,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                                            lineNumber: 283,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        useCase
                                                                    ]
                                                                }, useCaseIndex, true, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                                    lineNumber: 282,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                            lineNumber: 280,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                        lineNumber: 224,
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
                                            children: "Cloud Services Catalog"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "Comprehensive cloud services across computing, storage, databases, AI, and networking"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                    children: cloudServices.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-4",
                                                    children: service.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-900 mb-3",
                                                    children: service.category
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 316,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mb-6 text-sm",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: service.services.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between bg-gray-50 rounded-lg p-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-gray-900 text-sm",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                                    lineNumber: 329,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs px-2 py-1 rounded-full ${item.provider === 'AWS' ? 'bg-orange-100 text-orange-800' : item.provider === 'Azure' ? 'bg-blue-100 text-blue-800' : item.provider === 'GCP' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`,
                                                                    children: item.provider
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                                    lineNumber: 332,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, itemIndex, true, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                            lineNumber: 325,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                        lineNumber: 298,
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
                                            children: "Cloud Platforms We Support"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "Expertise across leading cloud providers with multi-cloud and hybrid solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                                    children: platforms.map((platform, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: platform.icon,
                                                        alt: platform.name,
                                                        className: "w-16 h-16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                        lineNumber: 368,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-900 mb-3",
                                                    children: platform.name
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm mb-4",
                                                    children: platform.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 377,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 justify-center",
                                                    children: platform.strengths.map((strength, strengthIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-[#20427f] text-white px-3 py-1 rounded-full text-xs font-medium",
                                                            children: strength
                                                        }, strengthIndex, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                            lineNumber: 382,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 380,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-gray-900 mb-4",
                                            children: "Why Choose Our Cloud Services"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "Transform your business with scalable, secure, and cost-effective cloud solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 399,
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
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-gray-900 mb-2",
                                                    children: benefit.title
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm",
                                                    children: benefit.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                                    lineNumber: 417,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-gradient-to-r from-[#20427f] to-[#2c5aa0]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold text-white mb-6",
                                    children: "Ready to Move to the Cloud?"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto",
                                    children: "Let's design and implement cloud solutions that drive efficiency and support your business growth."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: ctaLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `${link.variant === "primary" ? "bg-white text-[#20427f] hover:bg-gray-100 shadow-lg hover:shadow-xl" : "border border-white text-white hover:bg-white hover:text-[#20427f]"} px-8 py-4 rounded-lg transition-all duration-200 font-medium`,
                                            children: link.text
                                        }, index, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                            lineNumber: 428,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js",
                lineNumber: 453,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const metadata = {
    title: 'Cloud Services - YourZerosAndOnes',
    description: 'Comprehensive cloud services including migration, architecture, and management for AWS, Azure, and Google Cloud'
};
}),
"[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/cloud-services/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ad1e1894._.js.map