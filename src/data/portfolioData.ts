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
      "I’m a Full-Stack / Software Developer with a B.Tech background in Electronics & Communication Engineering. I build practical web applications using React, Next.js, Node.js, Express.js, databases, REST APIs, and AI integrations.",
    story: [
      "My ECE background gave me hands-on experience connecting hardware and software through embedded systems, including a physical RFID-based automatic speed-control car built with Arduino.",
      "My current focus is full-stack development, where I build end-to-end applications with modern frontend, backend, database, authentication, and API architectures. I’ve also built AI-assisted applications using Gemini APIs for practical workflows such as resume analysis and interview preparation.",
      "Alongside development, I practice Data Structures & Algorithms in Java, focusing on problem solving, time and space complexity, and writing efficient, maintainable code.",
    ],
    coreValues: [
      {
        title: "Software Engineering",
        desc: "Building maintainable applications across frontend, backend, databases, APIs, and authentication.",
        icon: "Cpu",
      },
      {
        title: "Full-Stack Web Development",
        desc: "React, Next.js, Node.js, Express.js, REST APIs, MongoDB, and Convex.",
        icon: "Layers",
      },
      {
        title: "AI API Integration",
        desc: "Integrating Gemini and other AI APIs into practical application workflows.",
        icon: "Sparkles",
      },
      {
        title: "DSA in Java",
        desc: "Regular problem-solving practice focused on algorithms, complexity, and clean implementation.",
        icon: "Binary",
      },
    ],
  },

  skillCategories: [
    {
      id: "frontend",
      title: "Frontend",
      filterLabel: "Frontend",
      description: "Building responsive, component-driven interfaces for modern web applications.",
      icon: "Layout",
      skills: [
        { name: "HTML5", isKeySkill: true },
        { name: "CSS3", isKeySkill: true },
        { name: "JavaScript ES6+", isKeySkill: true },
        { name: "React", isKeySkill: true },
        { name: "Next.js", isKeySkill: true },
        { name: "Tailwind CSS", isKeySkill: true },
        { name: "shadcn/ui", isKeySkill: true },
        { name: "Responsive Design", isKeySkill: true },
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      filterLabel: "Backend",
      description: "Building server-side logic, REST APIs, middleware, and application services.",
      icon: "Server",
      skills: [
        { name: "Node.js", isKeySkill: true },
        { name: "Express.js", isKeySkill: true },
        { name: "REST APIs", isKeySkill: true },
        { name: "API Integration", isKeySkill: true },
      ],
    },
    {
      id: "data",
      title: "Data & Persistence",
      filterLabel: "Data",
      description: "Working with application data, database models, queries, and persistence layers.",
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
      filterLabel: "Authentication",
      description: "Implementing authentication and protected application flows.",
      icon: "ShieldCheck",
      skills: [
        { name: "JWT", isKeySkill: true },
        { name: "Clerk", isKeySkill: true },
      ],
    },
    {
      id: "ai",
      title: "AI Integration",
      filterLabel: "AI",
      description: "Integrating AI APIs into practical application workflows.",
      icon: "Bot",
      skills: [
        { name: "Gemini / AI API Integration", isKeySkill: true },
      ],
    },
    {
      id: "programming",
      title: "Programming & DSA",
      filterLabel: "Programming",
      description: "Programming fundamentals and algorithmic problem solving.",
      icon: "Terminal",
      skills: [
        { name: "Java", isKeySkill: true },
        { name: "Python", isKeySkill: false },
        { name: "C", isKeySkill: false },
        { name: "JavaScript", isKeySkill: true },
        { name: "Data Structures & Algorithms", isKeySkill: true },
      ],
    },
    {
      id: "tools",
      title: "Developer Tools",
      filterLabel: "Tools",
      description: "Development, version control, debugging, and API testing tools.",
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
        "Building end-to-end web applications with React, Next.js, Node.js, and Express.js, with experience integrating REST APIs, authentication, and databases.",
      keyPoints: [
        "Built and deployed full-stack applications using React, Node.js, Express.js, and Sequelize.",
        "Developed modern web applications with Next.js, Convex, Clerk, and Tailwind CSS.",
        "Worked across frontend interfaces, backend APIs, authentication, database integration, and application architecture.",
      ],
      technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Convex", "Sequelize"],
    },
    {
      id: "j-2",
      title: "AI-Powered Application Development",
      subtitle: "Gemini / AI APIs & Job Preparation Tools",
      period: "AI Applications",
      category: "ai",
      description:
        "Building full-stack applications that integrate Gemini and other AI APIs into practical workflows such as resume analysis and interview preparation.",
      keyPoints: [
        "Built HirePilot, an AI-powered job preparation application with resume analysis and interview preparation workflows.",
        "Implemented AI API integration for generating interview preparation content and career-focused assistance.",
        "Integrated authentication, file uploads, backend APIs, and MongoDB alongside AI-powered workflows.",
      ],
      technologies: ["Gemini / AI APIs", "React", "Node.js", "Express.js", "MongoDB", "JWT", "Axios", "Multer"],
    },
    {
      id: "j-3",
      title: "Embedded Systems & Hardware Project",
      subtitle: "Electronics & Communication Engineering Physical Project",
      period: "Hardware / Embedded",
      category: "iot",
      description:
        "Applied Electronics & Communication Engineering knowledge to design and physically build an RFID-based automatic speed-control vehicle.",
      keyPoints: [
        "Integrated Arduino Nano, MFRC522 RFID reader, L298N motor driver, ultrasonic sensing, and DC motors.",
        "Programmed automatic speed reduction in designated zones and speed restoration outside those zones.",
        "Implemented audible status indication and real-time LCD/LED status feedback.",
      ],
      technologies: ["Arduino Nano", "MFRC522 RFID", "L298N Motor Driver", "Ultrasonic Sensor", "LCD", "C"],
    },
    {
      id: "j-4",
      title: "Data Structures & Algorithms in Java",
      subtitle: "Problem Solving & Core Computer Science Foundations",
      period: "DSA Practice",
      category: "dsa",
      description:
        "Regular practice of Data Structures & Algorithms in Java, focused on problem solving, algorithmic thinking, and complexity analysis.",
      keyPoints: [
        "Solving problems involving arrays, strings, linked lists, stacks, queues, trees, searching, sorting, and dynamic programming.",
        "Analyzing time and space complexity to improve solution efficiency.",
        "Strengthening object-oriented programming and problem-solving fundamentals through Java.",
      ],
      technologies: ["Java", "Data Structures", "Algorithms", "Time & Space Complexity"],
    },
  ],

  dsaTopics: [
    {
      title: "Arrays & Strings",
      description:
        "Practicing array and string problems involving traversal, two pointers, sliding windows, prefix sums, and manipulation.",
      concepts: ["Two Pointers", "Sliding Window", "Prefix Sums", "String Parsing"],
      status: "Java / DSA",
    },
    {
      title: "Linked Lists",
      description:
        "Working with linked-list traversal, pointer manipulation, reversals, merging, and cycle detection.",
      concepts: ["Traversal", "Reversals", "Cycle Detection", "List Merging"],
      status: "Java / DSA",
    },
    {
      title: "Stacks & Queues",
      description:
        "Practicing LIFO and FIFO data structures through common validation, traversal, and processing problems.",
      concepts: ["Stack Operations", "Valid Parentheses", "Queue Processing"],
      status: "Java / DSA",
    },
    {
      title: "Trees & Binary Search Trees",
      description:
        "Practicing tree traversal, binary search tree properties, searching, insertion, and recursive tree problems.",
      concepts: ["Inorder Traversal", "Preorder Traversal", "Postorder Traversal", "BST Search"],
      status: "Java / DSA",
    },
    {
      title: "Searching & Sorting",
      description:
        "Implementing and analyzing common searching and comparison-based sorting algorithms.",
      concepts: ["Binary Search", "Merge Sort", "Quick Sort"],
      status: "Java / DSA",
    },
    {
      title: "Recursion & Dynamic Programming",
      description:
        "Practicing recursive problem decomposition, memoization, overlapping subproblems, and structured solution design.",
      concepts: ["Recursion", "Memoization", "Subproblem Breakdown"],
      status: "Java / DSA",
    },
  ],

  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
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
