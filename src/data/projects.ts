// Projects data from Manmeet Singh's portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "checkinsuite",
    title: "AI-Powered Hotel Management System (CheckinSuite)",
    description:
      "Production-grade hotel PMS for bookings, check-ins, billing, food orders, and AI-assisted operational insights.",
    longDescription:
      "CheckinSuite is a full hotel property management system built to handle the end-to-end operational flow of a modern hotel. It supports room bookings, check-ins and check-outs, food orders, expenses, payment tracking, invoices, and reporting. The platform also includes an AI Hotel Manager Dashboard that analyzes revenue, occupancy, expenses, and pending payments to surface actionable operational insights for faster decision-making.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "Redis",
      "React.js",
      "Tailwind CSS",
      "OpenAI API",
    ],
    features: [
      "Conflict-free room booking with date-range overlap detection",
      "Transaction-driven checkout workflows for reliable billing",
      "Integrated food orders, expenses, invoices, and payment tracking",
      "AI dashboard for revenue, occupancy, and pending payment analysis",
      "Reporting workflows designed for production hotel operations",
      "Scalable full-stack architecture with responsive admin UX",
    ],
    image: "",
    demoUrl: "https://checkinsuite.in/",
    githubUrl: "https://github.com/ManmeetSingh1012",
    
    category: "ai",
  },
  {
    id: "ai-job-scraper",
    title: "AI Job Scraper (JobSpy-Based)",
    description:
      "Multi-source job aggregation platform that collects, normalizes, and filters listings for AI-powered job discovery workflows.",
    longDescription:
      "AI Job Scraper is a multi-source job aggregation project built on top of JobSpy's concurrent scraping engine. It collects listings from platforms such as LinkedIn, Indeed, Glassdoor, Naukri, and Google Jobs, then extracts and normalizes structured fields including skills, experience, salary, company details, remote status, and application links. The project focuses on turning fragmented job-board data into a unified dataset that can support search, filtering, exports, and downstream automation or AI matching workflows.",
    technologies: [
      "Python",
      "JobSpy",
      "Pandas",
      "REST APIs",
      "CSV/JSON",
      "Data Processing",
    ],
    features: [
      "Concurrent multi-source job scraping across major job boards",
      "Normalization of skills, salary, experience, company, and remote-work metadata",
      "Filtering, deduplication, and keyword search for faster job discovery",
      "Unified dataset creation for downstream AI-powered matching workflows",
      "CSV and JSON export for reporting, automation, and analysis",
      "Data pipeline focused on scalable aggregation and clean structured output",
    ],
    image: "",
    githubUrl: "https://github.com/ManmeetSingh1012",
    category: "ai",
  },
  {
    id: "stable-billing",
    title: "Stable Billing System",
    description:
      "Billing and inventory platform with invoicing, stock tracking, secure APIs, and concurrency-safe order workflows.",
    longDescription:
      "Stable Billing System is a backend-heavy billing and inventory management application built for reliable day-to-day business operations. It supports invoice generation, product management, stock tracking, authentication, and REST APIs. The system was designed with production concerns in mind, including transaction safety, idempotent workflows, and row-level locking to prevent duplicate orders and race conditions.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "JWT",
      "SQL Transactions",
    ],
    features: [
      "Invoice generation with product and inventory management",
      "Stock tracking workflows for daily billing operations",
      "Race-condition prevention using SQL transactions and row locks",
      "Idempotent backend flows to avoid duplicate order creation",
      "JWT-based authentication and secure REST APIs",
      "Production-oriented backend design with data consistency focus",
    ],
    image: "",
    githubUrl: "https://github.com/ManmeetSingh1012",
    category: "web",
  },
  {
    id: "real-time-consultation-platform",
    title: "Real-Time Consultation Platform",
    description:
      "Consultation platform with live messaging, video sessions, analytics, and payment reconciliation.",
    longDescription:
      "This real-time consultation platform was built for live expert-user interactions with secure and scalable communication flows. It supports WebSocket-powered messaging, Video SDK integration for live consultations, analytics dashboards, and payment processing with automated reconciliation. The architecture emphasizes low-latency communication, secure authentication, and operational visibility for both users and administrators.",
    technologies: [
      "Node.js",
      "TypeScript",
      "React.js",
      "WebSockets",
      "Video SDK",
      "MySQL",
      "Prisma",
      "AWS",
    ],
    features: [
      "Low-latency real-time messaging using WebSockets",
      "Live consultation experience powered by Video SDK integration",
      "Analytics dashboard for monitoring usage and platform activity",
      "Payment processing with automated reconciliation workflows",
      "Secure authentication for real-time user sessions",
      "Scalable cloud-ready architecture for production deployment",
    ],
    image: "",
    githubUrl: "https://github.com/ManmeetSingh1012",
    category: "web",
  },
  {
    id: "upsc-prep-kit",
    title: "UPSC Prep Kit (Android)",
    description:
      "Native Android study companion for organizing UPSC prep, tracking progress, and accessing content offline.",
    longDescription:
      "UPSC Prep Kit is a native Android application built to help UPSC aspirants manage their preparation in a focused and mobile-first way. The app provides a clean study workflow for organizing notes, tracking progress, and accessing study material efficiently. Built with Jetpack Compose and MVVM, it emphasizes maintainability, reactive UI patterns, and offline-first access through local persistence.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Room",
      "Coroutines",
      "Material Design",
    ],
    features: [
      "Native Android study workflow tailored for UPSC aspirants",
      "Jetpack Compose UI with MVVM for scalable app structure",
      "Offline-first access to notes and study content",
      "Local data persistence using Room database",
      "Reactive mobile experience powered by Kotlin Coroutines",
      "Clean Material Design-based interface for daily usage",
    ],
    image: "",
    githubUrl: "https://github.com/ManmeetSingh1012/UPSCprepKit",
    category: "mobile",
  },
];
