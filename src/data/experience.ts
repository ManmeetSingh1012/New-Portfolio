export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    id: "equasar-software-developer",
    company: "Equasar",
    role: "Software Developer",
    duration: "Dec 2024 - Present",
    location: "Ludhiana, Punjab, India",
    description:
      "Building backend services and core product modules for a multi-domain short-video platform, with ownership across monetization, wallet systems, video delivery, and third-party integrations.",
    achievements: [
      "Built coin-based monetization with Stripe and Apple Pay, processing 1,100+ transactions during rollout without production balance mismatches",
      "Implemented a concurrent digital wallet using SQL transactions and row-level locking to eliminate race conditions found during pre-launch load testing",
      "Built an AWS S3, CloudFront, and HLS video delivery pipeline that reduced average initial mobile load time from 3.5s to 2.1s",
      "Solved browser autoplay restrictions by decoupling audio and video streams, increasing first-play success rate from about 55% to over 90%",
      "Implemented an engagement-based feed ranking system using views, likes, and watch time to improve retention over a chronological baseline",
      "Integrated Square POS, DoorDash, and Uber APIs for an internal food-delivery module with menu customization and automated receipt printing",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "SQL Transactions",
      "Stripe",
      "Apple Pay",
      "AWS S3",
      "CloudFront",
      "HLS",
    ],
    type: "full-time",
  },
  {
    id: "01-synergy-software-developer",
    company: "01 Synergy",
    role: "Software Developer",
    duration: "Jun 2024 - Nov 2024",
    location: "Ludhiana, Punjab, India",
    description:
      "Worked across backend and frontend systems for a real-time consultation platform, focusing on messaging, video, analytics, payments, and operational automation.",
    achievements: [
      "Developed a real-time consultation platform using WebSockets and Video SDK, supporting up to 200 concurrent users with sub-200ms message delivery in load tests",
      "Built an admin dashboard across 10+ key metrics and integrated Razorpay payment processing with automated reconciliation over 1,000+ MySQL transactions",
      "Automated fake social account detection and reporting with a Python workflow integrated with external APIs, reducing manual case handling from around 30 minutes to under 10 minutes",
      "Contributed across a TypeScript codebase using Prisma, Mongoose, Node.js, MySQL, AWS S3, and Redux for both backend services and frontend state management",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "WebSockets",
      "Video SDK",
      "MySQL",
      "Prisma",
      "Mongoose",
      "AWS S3",
      "Redux",
      "Python",
    ],
    type: "full-time",
  },
];
