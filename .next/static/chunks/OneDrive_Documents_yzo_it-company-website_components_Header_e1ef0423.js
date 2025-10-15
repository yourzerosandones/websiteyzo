(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Header.js
__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/yzo/it-company-website/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Header() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isServicesOpen, setIsServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Prevent hydration mismatch by only rendering after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMounted(true);
        }
    }["Header.useEffect"], []);
    const navItems = [
        {
            href: '/services',
            label: 'Services',
            hasDropdown: true
        },
        {
            href: '/about',
            label: 'About'
        },
        {
            href: '/portfolio',
            label: 'Portfolio'
        },
        {
            href: '/blog',
            label: 'Blog'
        },
        {
            href: '/contact',
            label: 'Contact'
        }
    ];
    const services = [
        {
            category: 'Branding & Design',
            href: '/services/branding-design',
            subServices: [
                {
                    name: 'Brand Consulting',
                    href: '/services/branding-design/brand-consulting'
                },
                {
                    name: 'Logo Design',
                    href: '/services/branding-design/logo-design'
                },
                {
                    name: 'Graphic Design',
                    href: '/services/branding-design/graphic-design'
                },
                {
                    name: '2D & 3D Visualization',
                    href: '/services/branding-design/2d-3d-visualization'
                },
                {
                    name: 'Video Production',
                    href: '/services/branding-design/video-production'
                },
                {
                    name: 'Audio Production',
                    href: '/services/branding-design/audio-production'
                },
                {
                    name: 'AI Video Production',
                    href: '/services/branding-design/ai-video-production'
                }
            ]
        },
        {
            category: 'Digital Marketing',
            href: '/services/digital-marketing',
            subServices: [
                {
                    name: 'Search Engine Optimization (SEO)',
                    href: '/services/digital-marketing/seo'
                },
                {
                    name: 'Social Media Management (SMM)',
                    href: '/services/digital-marketing/social-media-management'
                },
                {
                    name: 'Performance Marketing',
                    href: '/services/digital-marketing/performance-marketing'
                },
                {
                    name: 'Content Marketing',
                    href: '/services/digital-marketing/content-marketing'
                },
                {
                    name: 'Marketing Automations',
                    href: '/services/digital-marketing/marketing-automation'
                },
                {
                    name: 'Analytics',
                    href: '/services/digital-marketing/analytics'
                }
            ]
        },
        {
            category: 'Technology',
            href: '/services/technology',
            subServices: [
                {
                    name: 'AI & Machine Learning',
                    href: '/services/technology/ai-ml'
                },
                {
                    name: 'DevOps Consulting',
                    href: '/services/technology/devops-consulting'
                },
                {
                    name: 'Web Development',
                    href: '/services/technology/web-development'
                },
                {
                    name: 'Mobile App Development',
                    href: '/services/technology/mobile-app-development'
                },
                {
                    name: 'E-Commerce',
                    href: '/services/technology/ecommerce'
                },
                {
                    name: 'Quality Assurance & Testing',
                    href: '/services/technology/qa-testing'
                },
                {
                    name: 'Cloud Services',
                    href: '/services/technology/cloud-services'
                },
                {
                    name: 'Data & Analytics',
                    href: '/services/technology/data-analytics'
                },
                {
                    name: 'Cyber Security',
                    href: '/services/technology/cyber-security'
                }
            ]
        }
    ];
    const closeAllMenus = ()=>{
        setIsServicesOpen(false);
        setIsMenuOpen(false);
    };
    // Helper function to check if path is active
    const isActivePath = (href)=>{
        if (!mounted) return false;
        if (href === '/services') {
            return pathname === null || pathname === void 0 ? void 0 : pathname.startsWith('/services');
        }
        return pathname === href;
    };
    // Don't render anything on server to prevent hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-white shadow-sm sticky top-0 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 sm:space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 sm:w-14 md:w-16 bg-gray-200 rounded animate-pulse h-10"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-40 bg-gray-200 rounded animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex space-x-6 lg:space-x-8 ml-20",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-16 bg-gray-200 rounded animate-pulse"
                                }, i, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden h-6 w-6 bg-gray-200 rounded animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
            lineNumber: 92,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white shadow-sm sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center space-x-2 sm:space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 sm:w-14 md:w-16",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.svg",
                                        alt: "YourZerosAndOnes",
                                        width: 50,
                                        height: 11,
                                        className: "w-full h-auto",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg sm:text-xl font-semibold text-gray-900 whitespace-nowrap",
                                    children: "Your Zeros and Ones"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex space-x-6 lg:space-x-8 ml-20",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: item.hasDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        onMouseEnter: ()=>setIsServicesOpen(true),
                                        onMouseLeave: ()=>setIsServicesOpen(false),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center text-sm lg:text-base hover:text-[#20427f] transition-colors ".concat(isActivePath('/services') ? 'text-[#20427f] font-semibold' : 'text-gray-700'),
                                                children: [
                                                    item.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 ml-1 transition-transform ".concat(isServicesOpen ? 'rotate-180' : ''),
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 9l-7 7-7-7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                            lineNumber: 153,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                        lineNumber: 147,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, this),
                                            isServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-[-10vw] transform -translate-x-1/2 mt-6 w-[95vw] max-w-6xl bg-white rounded-lg shadow-xl border border-gray-200 py-6 z-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-6 left-0 right-0 h-6 bg-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                        lineNumber: 159,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-6 pb-4 border-b border-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-2xl text-gray-900",
                                                                children: "Our Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                lineNumber: 162,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600 mt-1",
                                                                children: "Comprehensive solutions for your digital needs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                lineNumber: 163,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                        lineNumber: 161,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-4",
                                                        children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "group",
                                                                onMouseEnter: ()=>setIsServicesOpen(true),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "block p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: service.href,
                                                                            className: "flex items-start mb-4 no-underline",
                                                                            onClick: closeAllMenus,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-bold text-xl text-gray-900 group-hover:text-[#20427f] transition-colors",
                                                                                children: service.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                lineNumber: 179,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                            lineNumber: 174,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "space-y-2",
                                                                            children: service.subServices.map((subService, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: subService.href,
                                                                                        className: "flex items-center text-gray-600 hover:text-[#20427f] transition-colors group/subservice no-underline",
                                                                                        onClick: closeAllMenus,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                className: "w-3 h-3 text-[#20427f] mr-2 flex-shrink-0 group-hover/subservice:scale-110 transition-transform",
                                                                                                fill: "none",
                                                                                                stroke: "currentColor",
                                                                                                viewBox: "0 0 24 24",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    strokeLinecap: "round",
                                                                                                    strokeLinejoin: "round",
                                                                                                    strokeWidth: 2,
                                                                                                    d: "M5 13l4 4L19 7"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                                    lineNumber: 198,
                                                                                                    columnNumber: 43
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                                lineNumber: 192,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-sm hover:underline",
                                                                                                children: subService.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                                lineNumber: 200,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                        lineNumber: 187,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, subIndex, false, {
                                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                    lineNumber: 186,
                                                                                    columnNumber: 37
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                            lineNumber: 184,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                    lineNumber: 173,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, service.category, false, {
                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                lineNumber: 168,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                        lineNumber: 166,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-6 pt-4 border-t border-gray-100",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-600 text-sm flex-1",
                                                                    children: "Ready to transform your business? Let's discuss your project."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                    lineNumber: 212,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col sm:flex-row gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/services",
                                                                            className: "bg-gray-100 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium no-underline text-center",
                                                                            onClick: closeAllMenus,
                                                                            children: "View All"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                            lineNumber: 216,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/contact",
                                                                            className: "bg-[#20427f] text-white py-2 px-6 rounded-lg hover:bg-[#1a3566] transition-colors text-sm font-medium no-underline text-center",
                                                                            onClick: closeAllMenus,
                                                                            children: "Get Started"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                            lineNumber: 223,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                    lineNumber: 215,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                            lineNumber: 211,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                        lineNumber: 210,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                lineNumber: 158,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "text-sm lg:text-base hover:text-[#20427f] transition-colors no-underline ".concat(isActivePath(item.href) ? 'text-[#20427f] font-semibold' : 'text-gray-700'),
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                        lineNumber: 237,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden p-2 rounded-md text-gray-600 hover:text-[#20427f] hover:bg-gray-100 transition-colors",
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            "aria-label": "Toggle menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                    lineNumber: 257,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden mt-4 border-t border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-[80vh] overflow-y-auto py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-3",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: item.hasDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ".concat(isActivePath('/services') ? 'bg-[#20427f] text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-[#20427f]'),
                                                onClick: ()=>setIsServicesOpen(!isServicesOpen),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                            lineNumber: 282,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4 transition-transform ".concat(isServicesOpen ? 'rotate-180' : ''),
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M19 9l-7 7-7-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                lineNumber: 289,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                            lineNumber: 283,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                    lineNumber: 281,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                lineNumber: 273,
                                                columnNumber: 25
                                            }, this),
                                            isServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-4 bg-gray-50 rounded-lg p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-b border-gray-200 last:border-b-0 pb-4 last:pb-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: service.href,
                                                                        className: "block py-2 hover:text-[#20427f] transition-colors mb-2 no-underline",
                                                                        onClick: closeAllMenus,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-gray-900 text-base",
                                                                            children: service.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                            lineNumber: 304,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                        lineNumber: 299,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "space-y-1",
                                                                        children: service.subServices.map((subService, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: subService.href,
                                                                                    className: "flex items-center text-gray-600 text-sm hover:text-[#20427f] transition-colors py-1 no-underline",
                                                                                    onClick: closeAllMenus,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            className: "w-2 h-2 text-[#20427f] mr-2 flex-shrink-0",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            viewBox: "0 0 24 24",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M5 13l4 4L19 7"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                                lineNumber: 322,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                            lineNumber: 316,
                                                                                            columnNumber: 43
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "hover:underline",
                                                                                            children: subService.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                            lineNumber: 324,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                    lineNumber: 311,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, subIndex, false, {
                                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                                lineNumber: 310,
                                                                                columnNumber: 39
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                        lineNumber: 308,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, service.category, true, {
                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                lineNumber: 298,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                        lineNumber: 296,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pt-4 mt-4 border-t border-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/services",
                                                                className: "text-center bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium no-underline",
                                                                onClick: closeAllMenus,
                                                                children: "View All Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                lineNumber: 333,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/contact",
                                                                className: "text-center bg-[#20427f] text-white py-2 px-4 rounded-lg hover:bg-[#1a3566] transition-colors text-sm font-medium no-underline",
                                                                onClick: closeAllMenus,
                                                                children: "Contact Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                                lineNumber: 340,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                        lineNumber: 332,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                                lineNumber: 295,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                        lineNumber: 272,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "block px-4 py-3 rounded-lg text-base font-medium transition-colors no-underline ".concat(isActivePath(item.href) ? 'bg-[#20427f] text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-[#20427f]'),
                                        onClick: closeAllMenus,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                        lineNumber: 352,
                                        columnNumber: 23
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                                    lineNumber: 270,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                            lineNumber: 268,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                        lineNumber: 267,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
                    lineNumber: 266,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/yzo/it-company-website/components/Header.js",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(Header, "WDVe1Fkya8+jcmnZHA1RCcP9aE8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$yzo$2f$it$2d$company$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Documents_yzo_it-company-website_components_Header_e1ef0423.js.map