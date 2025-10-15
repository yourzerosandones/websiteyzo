module.exports = [
"[project]/OneDrive/Documents/yzo/it-company-website/.next-internal/server/app/services/technology/qa-testing/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QATesting,
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
function QATesting() {
    const testingTypes = [
        {
            category: "Functional Testing",
            description: "Verifies that the software functions according to its specified requirements.",
            tests: [
                {
                    name: "Unit Testing",
                    description: "Testing individual components or pieces of code (done by developers)",
                    icon: "🔍"
                },
                {
                    name: "Integration Testing",
                    description: "Testing how different modules or services work together",
                    icon: "🔄"
                },
                {
                    name: "System Testing",
                    description: "Testing the complete, integrated system as a whole",
                    icon: "⚡"
                },
                {
                    name: "Sanity/Smoke Testing",
                    description: "A quick check to ensure a new build is stable enough for further testing",
                    icon: "🚀"
                },
                {
                    name: "Regression Testing",
                    description: "Ensuring that new features or bug fixes haven't broken existing functionality",
                    icon: "🔄"
                },
                {
                    name: "User Acceptance Testing (UAT)",
                    description: "The final phase where end-users validate if the system meets their business needs",
                    icon: "👥"
                }
            ]
        },
        {
            category: "Non-Functional Testing",
            description: "Verifies how the system behaves under various conditions, focusing on quality attributes.",
            tests: [
                {
                    name: "Performance Testing",
                    description: "Load Testing: Checks system behavior under expected user loads",
                    icon: "📊"
                },
                {
                    name: "Stress Testing",
                    description: "Pushes the system beyond its normal capacity to find its breaking point",
                    icon: "💥"
                },
                {
                    name: "Endurance/Soak Testing",
                    description: "Checks for performance degradation over a long period",
                    icon: "⏱️"
                },
                {
                    name: "Spike Testing",
                    description: "Checks system reaction to sudden, large increases in load",
                    icon: "📈"
                },
                {
                    name: "Security Testing",
                    description: "Identifies vulnerabilities, threats, and risks to prevent malicious attacks",
                    icon: "🔒"
                },
                {
                    name: "Usability Testing",
                    description: "Evaluates how user-friendly and intuitive the application is",
                    icon: "🎯"
                },
                {
                    name: "Compatibility Testing",
                    description: "Ensures the software works across different browsers, devices, and operating systems",
                    icon: "📱"
                },
                {
                    name: "Accessibility Testing",
                    description: "Ensures the application is usable by people with disabilities (WCAG compliance)",
                    icon: "♿"
                }
            ]
        },
        {
            category: "Specialized Testing Services",
            description: "Advanced testing methodologies for specific technologies and compliance requirements.",
            tests: [
                {
                    name: "API Testing",
                    description: "Testing application programming interfaces for functionality, reliability, performance, and security",
                    icon: "🔌"
                },
                {
                    name: "Mobile App Testing",
                    description: "Covers functional, performance, battery usage, and interrupt testing on real devices",
                    icon: "📱"
                },
                {
                    name: "Test Automation",
                    description: "Using scripts and tools (Selenium, Cypress, Appium) to automate repetitive test cases",
                    icon: "🤖"
                },
                {
                    name: "Compliance Testing",
                    description: "Ensuring software adheres to industry regulations (GDPR, HIPAA, PCI-DSS)",
                    icon: "📋"
                }
            ]
        }
    ];
    const processes = [
        {
            step: "01",
            title: "Test Analysis",
            description: "Comprehensive requirement analysis to understand testing scope and objectives",
            activities: [
                "Requirement Review",
                "Scope Definition",
                "Risk Assessment",
                "Stakeholder Alignment"
            ]
        },
        {
            step: "02",
            title: "Test Planning",
            description: "Developing comprehensive test strategy and resource allocation",
            activities: [
                "Test Strategy",
                "Resource Planning",
                "Timeline Creation",
                "Tool Selection"
            ]
        },
        {
            step: "03",
            title: "Test Design",
            description: "Creating detailed test cases, scenarios, and automation scripts",
            activities: [
                "Test Case Creation",
                "Scenario Development",
                "Automation Scripting",
                "Data Preparation"
            ]
        },
        {
            step: "04",
            title: "Test Execution",
            description: "Systematic execution of test cases and defect identification",
            activities: [
                "Test Case Execution",
                "Defect Logging",
                "Progress Tracking",
                "Environment Management"
            ]
        },
        {
            step: "05",
            title: "Test Result Analysis",
            description: "Comprehensive analysis of test outcomes and defect patterns",
            activities: [
                "Result Analysis",
                "Defect Analysis",
                "Performance Metrics",
                "Quality Assessment"
            ]
        },
        {
            step: "06",
            title: "Reporting and Tracking",
            description: "Detailed reporting and continuous defect tracking until resolution",
            activities: [
                "Test Reporting",
                "Defect Tracking",
                "Stakeholder Updates",
                "Metrics Dashboard"
            ]
        },
        {
            step: "07",
            title: "Re-testing and Closure",
            description: "Verification of fixes and final test cycle completion",
            activities: [
                "Defect Verification",
                "Regression Testing",
                "Closure Report",
                "Lessons Learned"
            ]
        }
    ];
    const tools = [
        {
            category: "Test Automation",
            items: [
                {
                    name: "Selenium",
                    description: "Web automation",
                    icon: "/images/qa-tools/selenium.svg"
                },
                {
                    name: "Cypress",
                    description: "Modern web testing",
                    icon: "/images/qa-tools/cypress.svg"
                },
                {
                    name: "Appium",
                    description: "Mobile automation",
                    icon: "/images/qa-tools/appium.svg"
                },
                {
                    name: "JUnit/TestNG",
                    description: "Java testing",
                    icon: "/images/qa-tools/junit.svg"
                },
                {
                    name: "Jest",
                    description: "JavaScript testing",
                    icon: "/images/qa-tools/jest.svg"
                }
            ]
        },
        {
            category: "Performance Testing",
            items: [
                {
                    name: "JMeter",
                    description: "Load testing",
                    icon: "/images/qa-tools/jmeter.svg"
                },
                {
                    name: "LoadRunner",
                    description: "Enterprise performance",
                    icon: "/images/qa-tools/loadrunner.svg"
                },
                {
                    name: "Gatling",
                    description: "Scala-based testing",
                    icon: "/images/qa-tools/gatling.svg"
                },
                {
                    name: "k6",
                    description: "Modern load testing",
                    icon: "/images/qa-tools/k6.svg"
                }
            ]
        },
        {
            category: "Test Management",
            items: [
                {
                    name: "JIRA",
                    description: "Defect tracking",
                    icon: "/images/qa-tools/jira.svg"
                },
                {
                    name: "TestRail",
                    description: "Test case management",
                    icon: "/images/qa-tools/testrail.svg"
                },
                {
                    name: "Zephyr",
                    description: "Test management",
                    icon: "/images/qa-tools/zephyr.svg"
                },
                {
                    name: "qTest",
                    description: "Enterprise TMS",
                    icon: "/images/qa-tools/qtest.svg"
                }
            ]
        }
    ];
    const ctaLinks = [
        {
            text: "Start QA Testing",
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
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                lineNumber: 208,
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
                                    children: "Quality Assurance & Testing"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed",
                                    children: "Comprehensive testing services to ensure software quality, reliability, and exceptional user experience across all platforms."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center mt-8",
                                    children: ctaLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `${link.variant === "primary" ? "bg-[#20427f] text-white hover:bg-[#1a3568] shadow-lg hover:shadow-xl" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"} px-8 py-4 rounded-lg transition-all duration-200 font-medium`,
                                            children: link.text
                                        }, index, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                        lineNumber: 211,
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
                                            children: "Comprehensive Testing Services"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "End-to-end testing solutions covering functional, non-functional, and specialized testing requirements"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                                    children: testingTypes.map((type, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#20427f] group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-gray-900 mb-3",
                                                    children: type.category
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 255,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mb-6 text-sm",
                                                    children: type.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: type.tests.map((test, testIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl flex-shrink-0",
                                                                        children: test.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                        lineNumber: 269,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-semibold text-gray-900 text-sm mb-1",
                                                                                children: test.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                                lineNumber: 271,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-600 text-xs",
                                                                                children: test.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                                lineNumber: 274,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                        lineNumber: 270,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                lineNumber: 268,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, testIndex, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                        lineNumber: 238,
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
                                            children: "Our Testing Process"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "A systematic approach to ensure comprehensive test coverage and software quality"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: processes.map((process, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 bg-[#20427f] text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 group-hover:scale-110 transition-transform duration-300",
                                                    children: process.step
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-900 mb-3",
                                                    children: process.title
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mb-4 text-sm",
                                                    children: process.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1",
                                                    children: process.activities.map((activity, activityIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                        lineNumber: 319,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                    lineNumber: 318,
                                                                    columnNumber: 25
                                                                }, this),
                                                                activity
                                                            ]
                                                        }, activityIndex, true, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                            lineNumber: 317,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                        lineNumber: 289,
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
                                            children: "Tools & Technologies"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "Industry-leading tools and frameworks we use for comprehensive testing solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                                    children: tools.map((toolCategory, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-2xl p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-900 mb-6 text-center",
                                                    children: toolCategory.category
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: toolCategory.items.map((tool, toolIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: tool.icon,
                                                                        alt: tool.name,
                                                                        className: "w-8 h-8"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                        lineNumber: 356,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-semibold text-gray-900 text-sm",
                                                                                children: tool.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                                lineNumber: 362,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-600",
                                                                                children: tool.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                                lineNumber: 365,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                        lineNumber: 361,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                                lineNumber: 355,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, toolIndex, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                        lineNumber: 332,
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
                                            children: "Why Choose Our QA Services"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                            children: "Expertise and methodologies that ensure superior software quality and reliability"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                                    children: [
                                        {
                                            title: "Bug Detection Rate",
                                            description: "Comprehensive testing identifying critical issues early",
                                            metric: "98%"
                                        },
                                        {
                                            title: "Test Coverage",
                                            description: "Thorough coverage across all functional and non-functional aspects",
                                            metric: "95%"
                                        },
                                        {
                                            title: "Automation Coverage",
                                            description: "Efficient automated testing for faster release cycles",
                                            metric: "80%"
                                        },
                                        {
                                            title: "Client Satisfaction",
                                            description: "Consistently delivering quality that exceeds expectations",
                                            metric: "99%"
                                        }
                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-[#20427f] mb-2",
                                                    children: item.metric
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-gray-900 mb-2",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 418,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                                    lineNumber: 421,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-gradient-to-r from-[#20427f] to-[#2c5aa0]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold text-white mb-6",
                                    children: "Ready to Ensure Software Quality?"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto",
                                    children: "Let's implement comprehensive testing strategies that guarantee exceptional software performance and reliability."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: ctaLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `${link.variant === "primary" ? "bg-white text-[#20427f] hover:bg-gray-100 shadow-lg hover:shadow-xl" : "border border-white text-white hover:bg-white hover:text-[#20427f]"} px-8 py-4 rounded-lg transition-all duration-200 font-medium`,
                                            children: link.text
                                        }, index, false, {
                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                            lineNumber: 432,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js",
                lineNumber: 457,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const metadata = {
    title: 'Quality Assurance & Testing - YourZerosAndOnes',
    description: 'Comprehensive QA and testing services including functional, performance, and security testing for software excellence'
};
}),
"[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/app/services/technology/qa-testing/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cec2c4d1._.js.map