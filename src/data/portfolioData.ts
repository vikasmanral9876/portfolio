import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  name: "Vikas Manral",
  title: "Full-Stack / Software Developer",
  headline: "Building Full-Stack Experiences That Solve Real Problems.",
  subheadline:
    "Full-Stack Developer building modern web applications with React, Next.js, Node.js, databases, REST APIs, and AI integrations.",
  
  socialLinks: {
    github: "https://github.com/vikasmanral9876",
    linkedin: "https://www.linkedin.com/in/vikas-manral-942aa6201",
    email: "vikasmanral9876@gmail.com",
    leetcode: "https://leetcode.com/vikasmanral",
  },

  about: {
    summary:
      "I am an Electronics & Communication Engineering graduate building my career as a Full-Stack / Software Developer. My engineering education has provided a strong foundation in first-principles thinking, analytical reasoning, and disciplined problem solving.",
    story: [
      "During my engineering degree at I.T.S Engineering College, I gained hands-on experience bridging hardware and software through embedded systems projects, such as building a physical RFID-controlled vehicle speed management car with Arduino.",
      "In software development, I build end-to-end full-stack applications with React, Next.js, Node.js, and Express.js, integrating databases including MongoDB, Convex, and Sequelize. I have also developed AI-assisted applications integrating Gemini APIs for practical workflows such as resume analysis and interview preparation.",
      "Alongside building web applications, I actively practice Data Structures & Algorithms in Java to maintain clean algorithmic thinking, optimal time and space complexity, and structured code quality.",
    ],
    coreValues: [
      {
        title: "Engineering Foundation",
        desc: "Electronics & Communication background providing disciplined problem breakdown and hardware-software awareness.",
        icon: "Cpu",
      },
      {
        title: "Full-Stack Web Development",
        desc: "Building complete applications with React, Next.js, Node.js, Express.js, and relational or NoSQL databases.",
        icon: "Layers",
      },
      {
        title: "AI API Integration",
        desc: "Integrating Gemini / AI API endpoints into practical web applications with backend controllers and secure authentication.",
        icon: "Sparkles",
      },
      {
        title: "DSA in Java",
        desc: "Regular algorithmic problem-solving practice in Java focusing on clean logic and complexity analysis.",
        icon: "Binary",
      },
    ],
  },

  skillCategories: [
    {
      id: "frontend",
      title: "Frontend",
      description: "Developing modern, component-driven client interfaces.",
      icon: "Layout",
      skills: [
        { name: "HTML5", isKeySkill: true },
        { name: "CSS3", isKeySkill: true },
        { name: "JavaScript ES6+", isKeySkill: true },
        { name: "React", isKeySkill: true },
        { name: "Next.js", isKeySkill: true },
        { name: "Tailwind CSS", isKeySkill: true },
        { name: "shadcn/ui", isKeySkill: true },
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      description: "Building server-side logic, controllers, and REST services.",
      icon: "Server",
      skills: [
        { name: "Node.js", isKeySkill: true },
        { name: "Express.js", isKeySkill: true },
        { name: "REST APIs", isKeySkill: true },
      ],
    },
    {
      id: "database",
      title: "Database",
      description: "Data storage, models, and queries across NoSQL and SQL.",
      icon: "Database",
      skills: [
        { name: "MongoDB", isKeySkill: true },
        { name: "Convex", isKeySkill: true },
        { name: "Sequelize", isKeySkill: true },
      ],
    },
    {
      id: "auth",
      title: "Authentication",
      description: "Implementing secure authentication and protected routes.",
      icon: "ShieldCheck",
      skills: [
        { name: "JWT", isKeySkill: true },
        { name: "Clerk", isKeySkill: true },
      ],
    },
    {
      id: "ai",
      title: "AI Integration",
      description: "Connecting AI capabilities to full-stack applications.",
      icon: "Bot",
      skills: [
        { name: "Gemini / AI API Integration", isKeySkill: true },
      ],
    },
    {
      id: "programming",
      title: "Programming Languages",
      description: "Core programming and algorithmic foundations.",
      icon: "Terminal",
      skills: [
        { name: "Java", isKeySkill: true },
        { name: "Python", isKeySkill: false },
        { name: "C", isKeySkill: false },
        { name: "Data Structures & Algorithms", isKeySkill: true },
      ],
    },
    {
      id: "tools",
      title: "Tools",
      description: "Development environment, version control, and API testing.",
      icon: "Wrench",
      skills: [
        { name: "Git", isKeySkill: true },
        { name: "GitHub", isKeySkill: true },
        { name: "VS Code", isKeySkill: true },
        { name: "Postman", isKeySkill: true },
      ],
    },
  ],

  projects: [
    {
      id: "hirepilot",
      title: "HirePilot",
      subtitle: "AI-powered job preparation platform",
      description:
        "An AI-powered full-stack web application designed to help users prepare for job applications through resume workflows, job-description analysis, interview preparation, and AI-assisted career preparation.",
      features: [
        "User registration and login",
        "JWT-based authentication",
        "Protected authentication flow",
        "Resume/file upload using Multer",
        "MongoDB integration",
        "Gemini / AI API integration",
        "Job description analysis",
        "Interview preparation",
        "Axios-based API communication",
        "REST API architecture",
      ],
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Gemini / AI APIs",
        "Axios",
        "REST APIs",
        "Multer",
      ],
      category: "AI Applications",
      githubUrl: "https://github.com/vikasmanral9876/HirePilot-AI-Powered-Job-Preparation-Platform",
      liveDemoUrl: "https://hirepilot-frontend-7a9v.onrender.com",
      featured: true,
      projectType: "Software",
      imageUrl: "/projects/hirepilot/dashboard.png",
      screenshots: [
        {
          src: "/projects/hirepilot/dashboard.png",
          label: "Dashboard",
          alt: "HirePilot Dashboard Overview showing active preparation workspace, readiness metrics, and quick actions",
          caption: "Dashboard Overview — Active preparation workspace and role analysis",
        },
        {
          src: "/projects/hirepilot/interview-plan.png",
          label: "Interview Preparation",
          alt: "HirePilot Technical Questions interview preparation with 85% role match score and skill gaps",
          caption: "Interview Preparation — Technical questions, match scoring, and skill gaps",
        },
        {
          src: "/projects/hirepilot/roadmap.png",
          label: "Preparation Road Map",
          alt: "HirePilot Preparation Road Map showing 5-day structured plan covering React internals and database optimization",
          caption: "Preparation Road Map — Structured 5-day technical roadmap",
        },
        {
          src: "/projects/hirepilot/login.png",
          label: "User Authentication",
          alt: "HirePilot sign-in and user authentication interface with email and Google OAuth options",
          caption: "User Authentication — JWT-protected sign-in and account access",
        },
      ],
      codeSnippet: `// Backend JWT Verification & Auth Middleware
const jwt = require("jsonwebtoken");
const tokenBlacklist = require("../models/tokenBlacklist");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access token required" });

  const isBlacklisted = await tokenBlacklist.findOne({ token });
  if (isBlacklisted) return res.status(403).json({ message: "Token has been invalidated" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};`,
    },
    {
      id: "fullstack-ecommerce",
      title: "Full-Stack E-Commerce Application",
      subtitle: "Production E-Commerce Platform with React, Node.js & Sequelize",
      description:
        "Full-stack e-commerce platform with product browsing, cart, checkout, delivery selection, and order tracking.",
      features: [
        "Product catalog browsing with category filtering and shopping cart state management",
        "Delivery selection, checkout process flow, and order tracking functionality",
        "Relational database integration and schema management using Sequelize",
        "REST API architecture connecting React/Vite frontend with Express backend",
        "Deployed and running live in production on Render",
      ],
      tags: ["React", "Vite", "Node.js", "Express.js", "Sequelize", "REST APIs"],
      category: "Full-Stack",
      githubUrl: "https://github.com/vikasmanral9876/my-ecommerce-project",
      liveDemoUrl: "https://my-ecommerce-project-y969.onrender.com",
      featured: true,
      projectType: "Software",
      imageUrl: "/projects/ecommerce/home.png",
      screenshots: [
        {
          src: "/projects/ecommerce/home.png",
          label: "Home",
          alt: "Full-Stack E-Commerce Application Home page featuring product catalog and shopping cart",
          caption: "Home — Product catalog browsing, category filtering, and shopping storefront",
        },
        {
          src: "/projects/ecommerce/checkout.png",
          label: "Checkout",
          alt: "Full-Stack E-Commerce Application Checkout page featuring order review and delivery selection",
          caption: "Checkout — Order review, delivery address selection, and payment options",
        },
        {
          src: "/projects/ecommerce/order.png",
          label: "Order Tracking",
          alt: "Full-Stack E-Commerce Application Order Tracking page featuring real-time delivery status",
          caption: "Order Tracking — Order confirmation and live delivery tracking status",
        },
      ],
      codeSnippet: `// Express & Sequelize Order Controller
const { Order, OrderItem, Product } = require("../models");

exports.createOrder = async (req, res) => {
  try {
    const { items, deliveryAddress, deliveryType } = req.body;
    const order = await Order.create({
      userId: req.user.id,
      deliveryAddress,
      deliveryType,
      status: "Processing"
    });
    await OrderItem.bulkCreate(
      items.map(item => ({ orderId: order.id, productId: item.productId, quantity: item.quantity }))
    );
    res.status(201).json({ success: true, orderId: order.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};`,
    },
    {
      id: "spott-event-organizer",
      title: "Spott — Event Organizer SaaS",
      subtitle: "Modern Event Organization SaaS Application",
      description:
        "Modern event organization SaaS application built with Next.js, Convex, Clerk, and Tailwind CSS.",
      features: [
        "User authentication and identity management powered by Clerk",
        "Event organization and event-related workflow management",
        "Real-time database queries and backend data integration using Convex",
        "Responsive, modern component-based UI with Tailwind CSS and shadcn/ui",
      ],
      tags: ["React", "Next.js", "Tailwind CSS", "Convex", "Clerk", "shadcn/ui", "JavaScript"],
      category: "Full-Stack",
      githubUrl: "https://github.com/vikasmanral9876",
      liveDemoUrl: "https://spott-mocha.vercel.app/",
      featured: true,
      projectType: "Software",
      imageUrl: "/projects/spott/home.png",
      screenshots: [
        {
          src: "/projects/spott/home.png",
          label: "Home",
          alt: "Spott Home page featuring event discovery and hero action",
          caption: "Home — Event discovery hero, featured concert preview, and quick access navigation",
        },
        {
          src: "/projects/spott/explore.png",
          label: "Explore Events",
          alt: "Spott Discover Events screen browsing local and national events",
          caption: "Explore Events — Discover events across regions with interactive carousel and event details",
        },
        {
          src: "/projects/spott/create-event.png",
          label: "Create Event",
          alt: "Spott Create Event form with date/time pickers, category selection, and venue details",
          caption: "Create Event — Event creation interface with scheduling, categories, and venue specifications",
        },
        {
          src: "/projects/spott/tickets.png",
          label: "My Tickets",
          alt: "Spott My Tickets screen showing upcoming registered events and ticket QR codes",
          caption: "My Tickets — Overview of registered events with quick access to digital tickets",
        },
      ],
      codeSnippet: `// Convex Backend Query for Events
import { query } from "./_generated/server";
import { v } from "convex/values";

export const getEventsByUser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("organizerId"), args.userId))
      .order("desc")
      .collect();
  },
});`,
    },
    {
      id: "speed-control-car",
      title: "Zone Based Automatic Speed Control Car",
      subtitle: "Physical Embedded Systems & Hardware Project",
      description:
        "Embedded systems project that uses RFID and ultrasonic sensing to automatically control vehicle speed in restricted zones.",
      features: [
        "RFID-based restricted-zone detection using MFRC522 module to recognize zone tags",
        "Automatic vehicle speed reduction inside restricted zones via Arduino Nano and L298N motor driver",
        "Automatic speed restoration upon exiting the restricted zone",
        "Ultrasonic distance sensing to detect obstacles in the vehicle pathway",
        "Real-time status and distance readouts on an LCD display with LED indicator feedback",
      ],
      tags: [
        "Arduino Nano",
        "MFRC522 RFID",
        "L298N Motor Driver",
        "Ultrasonic Sensor",
        "LCD Display",
        "LEDs",
        "DC Motors",
        "C",
      ],
      category: "Embedded Systems",
      githubUrl: "https://github.com/vikasmanral9876",
      liveDemoUrl: undefined,
      featured: true,
      projectType: "Hardware / Embedded",
      imageUrl: "/projects/zone-based-speed-control-car/image.png",
      screenshots: [
        {
          src: "/projects/zone-based-speed-control-car/image.png",
          label: "Physical Prototype",
          alt: "Zone Based Automatic Speed Control Car physical hardware prototype with Arduino Nano and sensors",
          caption: "Physical Prototype — Real embedded system build with Arduino Nano, L298N motor driver, MFRC522 RFID module, and ultrasonic obstacle sensing",
        },
      ],
      codeSnippet: `// Arduino Zone Detection & Speed Control Logic
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9
MFRC522 rfid(SS_PIN, RST_PIN);

const int motorPWM = 5;
const int restrictedSpeed = 90;
const int normalSpeed = 220;
bool insideRestrictedZone = false;

void loop() {
  if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) {
    insideRestrictedZone = !insideRestrictedZone;
    analogWrite(motorPWM, insideRestrictedZone ? restrictedSpeed : normalSpeed);
    rfid.PICC_HaltA();
  }
}`,
    },
  ],

  journey: [
    {
      id: "j-1",
      title: "Full-Stack Web Development",
      subtitle: "React, Next.js, Node.js, Express.js & Databases",
      period: "Full-Stack Development",
      category: "fullstack",
      description:
        "Built full-stack applications with React, Next.js, Node.js, and Express.js. Implemented REST API architectures, user authentication flows, and database integration using MongoDB, Convex, and Sequelize.",
      keyPoints: [
        "Built production e-commerce application with React, Vite, Node.js, Express.js, and Sequelize",
        "Developed modern event organization application with Next.js, Convex, Clerk, and Tailwind CSS",
        "Engineered RESTful backends with route protection, JWT authentication, and Postman testing",
      ],
      technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Convex", "Sequelize"],
    },
    {
      id: "j-2",
      title: "AI Application Development",
      subtitle: "Gemini / AI API Integration & Job Preparation Tools",
      period: "AI Applications",
      category: "ai",
      description:
        "Developed full-stack web applications integrating Gemini / AI APIs to deliver practical tools for resume analysis, interview preparation, and career readiness.",
      keyPoints: [
        "Built HirePilot connecting frontend and backend AI API workflows",
        "Implemented Multer file upload handling for resume ingestion and processing",
        "Structured authentication flows with JWT token blacklisting and MongoDB storage",
      ],
      technologies: ["Gemini / AI APIs", "React", "Node.js", "Express.js", "MongoDB", "JWT", "Axios", "Multer"],
    },
    {
      id: "j-3",
      title: "IoT & Embedded Systems Training",
      subtitle: "Electronics & Communication Engineering Physical Project",
      period: "Hardware / Embedded",
      category: "iot",
      description:
        "Applied core Electronics & Communication Engineering knowledge to design and physically construct an RFID-based automatic speed control vehicle.",
      keyPoints: [
        "Integrated Arduino Nano, MFRC522 RFID reader, and L298N motor driver to control DC motors",
        "Programmed automatic speed reduction in restricted zones and speed restoration on exit",
        "Added ultrasonic obstacle sensing and real-time LCD/LED status indication",
      ],
      technologies: ["Arduino Nano", "MFRC522 RFID", "L298N Motor Driver", "Ultrasonic Sensor", "LCD", "C"],
    },
    {
      id: "j-4",
      title: "Data Structures & Algorithms Preparation",
      subtitle: "Problem Solving & Core Computer Science Foundations",
      period: "DSA Practice",
      category: "dsa",
      description:
        "Active practice of Data Structures & Algorithms using Java. Focused on foundational problem solving, data structures, and algorithmic complexity.",
      keyPoints: [
        "Solving problems across Arrays, Strings, Linked Lists, Stacks, Queues, Trees, and Dynamic Programming",
        "Analyzing time and space complexity to write clean, optimized code",
        "Strengthening object-oriented programming principles in Java",
      ],
      technologies: ["Java", "Data Structures", "Algorithms", "Time & Space Complexity"],
    },
  ],

  dsaTopics: [
    {
      title: "Arrays & Strings",
      description: "Two-pointer techniques, sliding window, prefix sums, and element manipulation.",
      concepts: ["Two Pointers", "Sliding Window", "Prefix Sums", "String Parsing"],
      status: "Active Practice",
    },
    {
      title: "Linked Lists",
      description: "Singly linked lists, cycle detection, list traversal, and pointer manipulation.",
      concepts: ["Traversal", "Reversals", "Cycle Detection", "List Merging"],
      status: "Active Practice",
    },
    {
      title: "Stacks & Queues",
      description: "LIFO and FIFO operations, parenthesis validation, and queue-based processing.",
      concepts: ["Stack Operations", "Valid Parentheses", "Queue Processing"],
      status: "Active Practice",
    },
    {
      title: "Trees & Binary Search Trees",
      description: "Tree traversals, binary search tree properties, search and insertion.",
      concepts: ["Inorder Traversal", "Preorder Traversal", "Postorder Traversal", "BST Search"],
      status: "Active Practice",
    },
    {
      title: "Searching & Sorting",
      description: "Linear and binary search, comparison-based sorting algorithms.",
      concepts: ["Binary Search", "Merge Sort", "Quick Sort"],
      status: "Active Practice",
    },
    {
      title: "Recursion & Dynamic Programming",
      description: "Recursive problem breakdown, memoization, and overlapping subproblems.",
      concepts: ["Recursion", "Memoization", "Subproblem Breakdown"],
      status: "Active Practice",
    },
  ],

  education: {
    degree: "B.Tech / B.E. in Electronics & Communication Engineering",
    field: "Electronics & Communication Engineering",
    institution: "I.T.S Engineering College, Greater Noida",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    location: "Greater Noida, Uttar Pradesh, India",
    duration: "Undergraduate Degree",
    focus: "Electronics & Communication Engineering",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Computer Networks",
      "Microprocessors & Microcontrollers",
      "Digital Electronics",
      "Signals & Systems",
    ],
    skillsGained: [
      "First-principles analytical problem solving",
      "Hardware-software integration experience",
      "Systematic debugging and testing approach",
      "Continuous learning and software engineering transition",
    ],
  },
};
