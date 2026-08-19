export const PROFILE = {
  name: 'Nwadike Chiamaka JaneFrances',
  role: 'Front-End Web Developer',
  heroStatement:
    'I build modern, responsive and user-focused web applications that turn ideas into functional digital experiences.',
  secondaryStatement:
    'I enjoy turning real-world problems into clean, intuitive and functional digital products.',
  availability: 'Open to opportunities and collaborations',
  github: 'https://github.com/JennyCapricon',
  githubLabel: 'github.com/JennyCapricon',
  email: 'Jennynwadike894@gmail.com',
  location: 'Nigeria',
  linkedin: 'https://www.linkedin.com/in/jenny-nwadike-b515773a8',
  portfolioUrl: 'https://jenny-nwadike.netlify.app',
  cvUrl: '/cv/Jenny_CV.pdf',
  professionalFocus:
    'Front-End Web Development • React • JavaScript • Responsive Design • Web Applications',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'CV', href: '#profile' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS = {
  frontend: {
    title: 'Front-End',
    description: 'Building interfaces that look great and work on every screen.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'],
  },
  apps: {
    title: 'Application Development',
    description: 'Turning static pages into usable, functional products.',
    items: ['Responsive Design', 'API Integration', 'Authentication', 'Role-Based Interfaces'],
  },
  database: {
    title: 'Database / Backend Services',
    description: 'Connecting interfaces to real, secure data.',
    items: ['Supabase', 'PostgreSQL', 'Row Level Security'],
  },
  tools: {
    title: 'Tools',
    description: 'The workflow behind every project I ship.',
    items: ['Git', 'GitHub', 'VS Code', 'OpenCode'],
  },
};

export const JOURNEY_STAGES = [
  {
    phase: 'Foundations',
    label: 'The Basics',
    items: ['HTML', 'CSS', 'JavaScript'],
    description: 'Learning how the web is built — structure, styling and interactivity.',
  },
  {
    phase: 'Modern Front-End',
    label: 'Component-Based UI',
    items: ['React', 'Vite', 'Tailwind CSS'],
    description: 'Building reusable components, fast dev servers and utility-first styling.',
  },
  {
    phase: 'Application Development',
    label: 'Full Apps',
    items: ['APIs', 'Authentication', 'Dashboards'],
    description: 'Turning static pages into real applications that read and write data.',
  },
  {
    phase: 'Database-Connected Applications',
    label: 'Real Data',
    items: ['Supabase', 'PostgreSQL', 'Row Level Security'],
    description: 'Designing secure, role-aware systems where users only see their own data.',
  },
  {
    phase: 'Real-World Projects',
    label: 'Production Builds',
    items: ['E-Commerce', 'Multi-role applications', 'Admin systems'],
    description: 'Applying everything learned to complete, multi-user applications people can use.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the problem, the users and the requirements before writing any code.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Plan the structure, interface and user experience the application needs.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop the responsive front-end and the application functionality.',
  },
  {
    step: '04',
    title: 'Connect',
    description: 'Integrate APIs, authentication and databases where required.',
  },
  {
    step: '05',
    title: 'Test & Improve',
    description: 'Test responsiveness, usability and functionality — then improve the product.',
  },
];

export const LEARNING = [
  'Advanced React',
  'JavaScript',
  'API Integration',
  'Supabase',
  'PostgreSQL',
  'UI/UX',
  'Secure Web Application Development',
];

export const WHY_ME = [
  {
    title: 'User-Focused',
    description:
      'I care about creating interfaces that are clear and easy to use — not just pages that look nice.',
  },
  {
    title: 'Problem Solver',
    description:
      'I enjoy turning real problems into functional digital solutions people can actually use.',
  },
  {
    title: 'Responsive',
    description:
      'I build experiences that work across different screen sizes, from phones to desktops.',
  },
  {
    title: 'Continuous Learner',
    description:
      'I improve my skills by consistently building practical projects — not only tutorials.',
  },
];

export const BUILD_ITEMS = [
  {
    title: 'E-Commerce Platforms',
    description:
      'I build marketplace experiences with products, vendors, buyers, inventory and payment integrations.',
    icon: 'cart',
  },
  {
    title: 'Dashboards',
    description:
      'I create structured dashboards and role-based interfaces for different types of users.',
    icon: 'dashboard',
  },
  {
    title: 'Responsive Websites',
    description:
      'I build interfaces that adapt smoothly across desktop, tablet and mobile devices.',
    icon: 'responsive',
  },
  {
    title: 'Interactive Web Applications',
    description:
      'I connect front-end interfaces with APIs, authentication and databases to create functional applications.',
    icon: 'app',
  },
];

export const CONTACT = {
  heading: "Let's Build Something Great",
  description:
    "Have a project idea, collaboration opportunity, or simply want to connect? I'd love to hear from you.",
};

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web-apps', label: 'Web Apps' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'frontend', label: 'Front-End' },
  { id: 'apis', label: 'APIs' },
];

export const PROJECTS = [
  {
    id: 'jay-enterprise',
    name: 'Jay Enterprise',
    category: 'E-Commerce',
    filters: ['web-apps', 'ecommerce', 'dashboards', 'apis'],
    tagline: 'Fabric & Fashion Marketplace',
    description:
      'An e-commerce marketplace designed to connect fabric vendors with customers and wholesale buyers. The platform includes product browsing, vendor management, secure checkout, order management, and a responsive shopping experience.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Supabase', 'Paystack'],
    keyFeatures: [
      'Multi-vendor marketplace for fabrics and fashion accessories',
      'Dedicated buyer, vendor, importer and admin spaces',
      'Product listings with categories, galleries and bulk/wholesale pricing',
      'Vendor product management and inventory management',
      'Vendor and importer approval workflows',
      'Orders with payment via Paystack and Flutterwave',
      'Disputes, refunds and notifications',
      'Platform analytics and platform settings',
      'Authentication with role-based access',
      'Personal user spaces for buyers and resellers',
      'Wholesale / bulk purchasing for importers and resellers',
      'Supabase + PostgreSQL database with Row Level Security',
    ],
    contribution: [
      'Front-end development across the entire platform',
      'Responsive interfaces that work from mobile to desktop',
      'Dashboard interfaces for vendors, importers, buyers and admins',
      'Authentication flows with role-based routing and protected routes',
      'Product management, cart, checkout and order interfaces',
      'Database-connected features via Supabase',
      'Security-aware structure using Row Level Security policies',
    ],
    github: 'https://github.com/JennyCapricon/LSM-enterprise',
    live: '',
    caseStudy: true,
    featured: true,
    image: '/projects/jay-enterprise.png',
  },
  {
    id: 'flowboard',
    name: 'FlowBoard',
    category: 'Web App',
    filters: ['web-apps'],
    tagline: 'Productivity / Project-Management Application',
    description:
      'A personal task manager with authentication and task CRUD built on a shared task-manager API. Part of a front-end collaboration project built with React and Vite.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Axios', 'React Hook Form'],
    keyFeatures: ['Login and register flows', 'Task list with status updates', 'Task detail views', 'API integration with error handling'],
    contribution: [
      'Front-end implementation of the task-manager experience',
      'Forms with validation via React Hook Form',
    ],
    github: 'https://github.com/JennyCapricon/flowboard',
    live: '',
    image: '/projects/flowboard.svg',
    featured: true,
  },
  {
    id: 'creatorhub',
    name: 'Creator Hub',
    category: 'Web App',
    filters: ['web-apps', 'apis'],
    tagline: 'Creator Platform',
    description:
      'A full-stack creator platform with a React front-end (Firebase, Zustand, charts) and an Express + MongoDB API with JWT authentication.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'MUI', 'Firebase', 'Zustand', 'Recharts', 'Express', 'MongoDB', 'JWT'],
    keyFeatures: ['Client app with state management (Zustand)', 'Charts and analytics visuals (Recharts)', 'Node API with authentication (JWT + bcrypt)'],
    contribution: ['Full front-end build', 'Server and database layer'], 
    github: 'https://github.com/JennyCapricon/CreatorHub',
    live: '',
    image: '/projects/creatorhub.svg',
  },
  {
    id: 'acetest',
    name: 'AceTest',
    category: 'Web App',
    filters: ['web-apps', 'dashboards'],
    tagline: 'Education / Assessment Platform',
    description:
      'A computer-based testing (CBT) platform for schools and training centres — exams, question banks, results and analytics with role-based student, teacher and admin accounts.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Knex', 'JWT'],
    keyFeatures: ['Role-based accounts (student, teacher, admin)', 'Question bank and exam scheduling', 'Timed CBT interface with flagging and navigation', 'Instant grading and performance reports', 'Analytics dashboard'],
    contribution: ['Front-end build with React and Tailwind', 'Backend API with Express and PostgreSQL'],
    github: 'https://github.com/JennyCapricon/AceTest',
    live: '',
    image: '/projects/acetest.svg',
    featured: true,
  },
  {
    id: 'jenny-store',
    name: 'Jenny Store',
    category: 'E-Commerce',
    filters: ['ecommerce', 'frontend'],
    tagline: 'Jewelry & Body Accessories Store',
    description:
      'A storefront concept for jewelry and body accessories — a product-focused single-page shop with cart interaction, built with plain HTML, CSS and JavaScript.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    keyFeatures: ['Product showcase for jewelry and accessories', 'Cart interaction', 'Responsive layout'],
    contribution: ['Complete front-end design and development'],
    live: '',
    image: '/projects/jenny-store.svg',
  },
  {
    id: 'evolve30',
    name: 'Evolve30',
    category: 'Web App',
    filters: ['web-apps', 'dashboards'],
    tagline: '30-Day Personal Growth Challenge Platform',
    description:
      'A full-stack challenge platform where users pick 30-day goals (reading, fitness, coding and more), complete daily missions, track streaks and earn badges.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Zustand', 'Zod', 'Recharts'],
    keyFeatures: ['Daily missions and 30-day progress calendar', 'Streak counters and milestone badges', 'Progress analytics and achievement system'],
    contribution: ['Front-end and application development'],
    live: '',
    image: '/projects/evolve30.svg',
    featured: true,
  },
  {
    id: 'hgam',
    name: 'HGAM',
    category: 'Web App',
    filters: ['web-apps', 'dashboards'],
    tagline: 'Holy Ghost Adoration Ministry — Digital Platform',
    description:
      'A digital platform for Holy Ghost Adoration Ministry with a React front-end and an API backend for content and administration.',
    technologies: ['React', 'Vite', 'Node.js', 'Express'],
    keyFeatures: ['Front-end with Vite and React', 'API backend for platform data'],
    contribution: ['Full front-end build', 'Backend API'],
    live: '',
    image: '/projects/hgam.svg',
  },
  {
    id: 'fraudwatch',
    name: 'FraudWatch',
    category: 'Web App',
    filters: ['web-apps'],
    tagline: 'Fraud Reporting & Verification Portal',
    description:
      'A React application for reporting and verifying fraud cases. Reports are stored locally and surfaced through a clean, section-based interface.',
    technologies: ['React', 'Vite', 'JavaScript'],
    keyFeatures: ['Report fraud flow with success feedback', 'Verify and browse existing reports', 'Persistence via localStorage'],
    contribution: ['Front-end development'],
    live: '',
    image: '/projects/fraudwatch.svg',
  },
  {
    id: 'temu-clone',
    name: 'Temu Clone',
    category: 'E-Commerce',
    filters: ['ecommerce', 'frontend'],
    tagline: 'E-Commerce UI Recreation',
    description:
      'A front-end recreation of a modern discount e-commerce storefront built with React and Vite — a practice build focused on layout and UI polish.',
    technologies: ['React', 'Vite', 'CSS'],
    keyFeatures: ['E-commerce storefront layout', 'Product grid and sections'],
    contribution: ['Front-end implementation'],
    practice: true,
    live: '',
    image: '/projects/temu-clone.svg',
  },
];

export const SMALL_PROJECTS = [
  {
    id: 'terminal-page',
    name: 'Developer Terminal Page',
    label: 'Front-End Project',
    description: 'A developer-themed single page styled like a terminal.',
    technologies: ['HTML', 'CSS'],
    image: '/projects/terminal.svg',
  },
  {
    id: 'trust-app',
    name: 'Trust App Page',
    label: 'Front-End Project',
    description: 'A clean landing page design with a modern layout.',
    technologies: ['HTML', 'CSS'],
    image: '/projects/trust-app.svg',
  },
  {
    id: 'fabric-page',
    name: 'Fabric Store Page',
    label: 'Front-End Project',
    description: 'A fabric store product page with a bold visual layout.',
    technologies: ['HTML', 'CSS'],
    image: '/projects/fabric-page.svg',
  },
  {
    id: 'gallery-practice',
    name: 'Design & Layout Explorations',
    label: 'Practice Project',
    description: 'Multiple responsive page layouts exploring grids, hero sections and product styling.',
    technologies: ['HTML', 'CSS'],
    image: '/projects/layout-practice.svg',
  },
];

export const JAY_ENTERPRISE_CASE_STUDY = {
  problem:
    'Traditional fabric and fashion-accessory purchasing can make it difficult for buyers to discover multiple vendors, compare products and manage purchases in one place. Vendors and importers also lacked a structured way to list products, manage inventory and operate their businesses online.',
  solution:
    'Jay Enterprise provides a centralized marketplace where buyers can discover products from verified vendors and importers while vendors can manage their products and business operations.',
  approach: [
    'Designed the marketplace around four distinct roles — buyer, vendor, importer and administrator — each with its own dashboard and permissions.',
    'Built the storefront (home, shop, categories, product details, cart, checkout) with responsive layouts in React and Tailwind CSS.',
    'Implemented authentication with Supabase and role-based routing so protected areas, including the admin and vendor dashboards, are only reachable by authorized users.',
    'Connected the platform to a Supabase database and protected records with Row Level Security policies so users only access their own data.',
    'Integrated Paystack and Flutterwave payment flows for real checkout transactions.',
    'Built the admin dashboard for approval of vendors and importers, user management, product oversight, orders, disputes, refunds and platform settings.',
  ],
  challenges: [
    'Designing four distinct role-based experiences — buyer, vendor, importer and admin — while keeping the shared codebase consistent and the interfaces familiar across roles.',
    'Structuring data access around Row Level Security so every user can only read and modify their own records.',
    'Integrating two payment providers (Paystack and Flutterwave) into a single, reliable checkout flow.',
    'Managing product complexity — categories, image galleries and wholesale/bulk pricing tiers — in clear, usable interfaces.',
    'Keeping every dashboard and storefront page responsive from mobile to desktop.',
  ],
  learned: [
    'How to structure a real multi-role application — authentication, protected routes and role-aware interfaces that feel consistent across different user spaces.',
    'How Row Level Security protects user data at the database level and why security must be designed into an application, not added afterwards.',
    'How to build responsive dashboard and storefront layouts that work from mobile to desktop without breaking the interface.',
    'How to plan and ship a large, database-connected application in stages — storefront, then accounts, then dashboards, then payments and admin tools.',
    'How to work with Supabase (authentication, PostgreSQL database, policies) as the backbone of a complete web application.',
  ],
  outcome:
    'A complete, working multi-vendor e-commerce application with dedicated dashboards for buyers, vendors, importers and administrators — including product management, inventory, approvals, payments, disputes, refunds and analytics. The platform is driven by a Supabase database with PostgreSQL and Row Level Security, making it a real, database-connected, role-aware application rather than a static site.',
};

export const DOCUMENTATION = [
  {
    id: 'jay-enterprise',
    name: 'Jay Enterprise',
    tagline: 'Multi-Vendor E-Commerce Platform',
    image: '/projects/jay-enterprise.png',
    github: 'https://github.com/JennyCapricon/LSM-enterprise',
    overview:
      'Jay Enterprise is a multi-vendor digital marketplace that connects buyers with verified vendors and importers of fabrics and fashion accessories. It provides a public storefront plus dedicated, private spaces for buyers, vendors, importers and administrators — all built on a secure Supabase + PostgreSQL database.',
    problem:
      'Traditional fabric and fashion-accessory purchasing makes it difficult for buyers to discover multiple vendors, compare products and manage purchases in one place. Vendors and importers also lacked a structured way to list products, manage inventory and operate their businesses online.',
    objectives: [
      'Create a single marketplace where buyers can discover products from multiple verified vendors and importers.',
      'Give vendors and importers structured tools to list products, manage inventory and run their business online.',
      'Enable wholesale and bulk purchasing for importers and resellers.',
      'Provide administrators with oversight and approval controls over the platform.',
      'Keep every user\'s data private and protected with role-based access and database security.',
    ],
    targetUsers: ['Buyers', 'Vendors', 'Importers', 'Administrators'],
    roles: [
      {
        title: 'Buyer',
        description:
          'A private buyer experience — browse the catalogue by category, view product details and galleries, add to cart, check out and manage their orders and personal space.',
      },
      {
        title: 'Vendor',
        description:
          'A vendor-specific management experience — list and manage products, track inventory, receive and manage orders and operate their business data in a protected space.',
      },
      {
        title: 'Importer',
        description:
          'An importer-specific experience — work with wholesale and bulk product flows, pricing tiers and their own approved business data.',
      },
      {
        title: 'Admin',
        description:
          'Platform-level management — approve vendors and importers, oversee products and orders, handle disputes and refunds, view analytics and manage platform settings.',
      },
    ],
    features: [
      'Dedicated buyer, vendor, importer and admin spaces',
      'Product listings with categories, galleries and wholesale/bulk pricing',
      'Vendor product management and inventory management',
      'Vendor and importer approval workflows',
      'Orders with payment via Paystack and Flutterwave',
      'Disputes, refunds and notifications',
      'Platform analytics and platform settings',
      'Authentication with role-based access',
      'Personal user spaces for buyers and resellers',
      'Supabase + PostgreSQL database with Row Level Security',
    ],
    areas: [
      {
        title: 'Authentication & Security',
        text: 'Sign-up and sign-in with Supabase auth. Role-based routing keeps protected areas — including the vendor, importer and admin dashboards — reachable only by authorized users.',
      },
      {
        title: 'Product Management',
        text: 'Vendors list products with categories, galleries and pricing tiers, while buyers browse a structured storefront.',
      },
      {
        title: 'Orders & Inventory',
        text: 'Buyers place orders and check out; vendors and importers manage their inventory and receive orders.',
      },
      {
        title: 'Notifications',
        text: 'Users receive platform notifications relevant to their role and activity.',
      },
      {
        title: 'Payments',
        text: 'Real checkout transactions integrated with Paystack and Flutterwave.',
      },
      {
        title: 'Disputes & Refunds',
        text: 'Admins can oversee disputes and refunds arising from orders.',
      },
      {
        title: 'Database & RLS',
        text: 'PostgreSQL is managed through Supabase. Row Level Security policies ensure buyers, vendors and importers can only read and modify their own records.',
      },
    ],
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'MUI',
      'Supabase',
      'PostgreSQL',
      'Row Level Security',
      'Paystack',
      'Flutterwave',
      'Google OAuth',
    ],
    role: [
      'Front-end development across the entire platform',
      'Responsive interfaces that work from mobile to desktop',
      'Dashboard interfaces for vendors, importers, buyers and admins',
      'Authentication flows with role-based routing and protected routes',
      'Product management, cart, checkout and order interfaces',
      'Database-connected features via Supabase',
      'Security-aware structure using Row Level Security policies',
    ],
    process: [
      'Designed the marketplace around four distinct roles — buyer, vendor, importer and administrator — each with its own dashboard and permissions.',
      'Built the storefront (home, shop, categories, product details, cart, checkout) with responsive layouts in React and Tailwind CSS.',
      'Implemented authentication with Supabase and role-based routing so protected areas are only reachable by authorized users.',
      'Connected the platform to a Supabase database and protected records with Row Level Security policies.',
      'Integrated Paystack and Flutterwave payment flows for real checkout transactions.',
      'Built the admin dashboard for approvals, user management, product oversight, orders, disputes, refunds and platform settings.',
    ],
    challenges: [
      'Designing four distinct role-based experiences while keeping the shared codebase consistent.',
      'Structuring data access around Row Level Security so users only read and modify their own records.',
      'Integrating two payment providers into a single, reliable checkout flow.',
      'Managing product complexity — categories, galleries and wholesale/bulk pricing — in clear interfaces.',
      'Keeping every dashboard and storefront page responsive across devices.',
    ],
    solutions: [
      'A shared, role-aware routing and layout structure that reuses components across dashboards.',
      'Database security designed into the schema from the start using Supabase Row Level Security policies.',
      'A consistent checkout layer that handles both Paystack and Flutterwave cleanly.',
      'Modular product data structures that support categories, galleries and pricing tiers.',
      'A responsive design system applied consistently across all pages.',
    ],
    learned: [
      'How to structure a real multi-role application — authentication, protected routes and role-aware interfaces.',
      'How Row Level Security protects user data at the database level.',
      'How to build responsive dashboard and storefront layouts across devices.',
      'How to plan and ship a large, database-connected application in stages.',
      'How to work with Supabase as the backbone of a complete web application.',
    ],
  },
  {
    id: 'acetest',
    name: 'AceTest',
    tagline: 'Computer-Based Testing Platform',
    image: '/projects/acetest.svg',
    github: 'https://github.com/JennyCapricon/AceTest',
    overview:
      'AceTest is a secure web-based Computer-Based Testing (CBT) platform for schools, universities, tutorial centres and certification bodies. It manages exams, question banks, results and analytics with role-based student, teacher and admin accounts.',
    problem:
      'Running pen-and-paper exams at scale is slow to mark, hard to secure and difficult to analyse. Schools and training centres needed a way to administer timed tests that are marked instantly and reported clearly.',
    objectives: [
      'Provide role-based access for students, teachers and administrators.',
      'Let teachers build and schedule exams from a question bank.',
      'Give students a secure, timed testing interface.',
      'Return results instantly and surface performance analytics.',
    ],
    targetUsers: ['Students', 'Teachers / Lecturers', 'Administrators'],
    features: [
      'Role-based accounts (student, teacher, admin)',
      'Question bank and exam scheduling',
      'Timed CBT interface with flagging and navigation',
      'Instant grading and performance reports',
      'Analytics dashboard',
    ],
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Express',
      'PostgreSQL',
      'Knex',
      'JWT',
      'bcrypt',
    ],
    role: [
      'Front-end build with React and Tailwind CSS',
      'Backend API with Express and PostgreSQL',
    ],
    process: [
      'Designed the data model around schools, subjects, exams, questions, results and analytics.',
      'Built the front-end CBT experience with a timer, question navigation and flagging.',
      'Implemented JWT-based authentication and role-based access.',
      'Connected the interface to the Express + PostgreSQL API.',
    ],
    challenges: ['Designing a secure, distraction-free timed exam experience.'],
    solutions: [
      'A focused CBT interface with timer, flagging and navigation that keeps the test controlled.',
    ],
    learned: [
      'Building full-stack applications with a React front-end and an Express + PostgreSQL API.',
      'Implementing JWT authentication and role-based access.',
    ],
  },
  {
    id: 'creatorhub',
    name: 'Creator Hub',
    tagline: 'Creator Platform',
    image: '/projects/creatorhub.svg',
    github: 'https://github.com/JennyCapricon/CreatorHub',
    overview:
      'Creator Hub is a full-stack creator platform. It pairs a React front-end (Firebase, Zustand state management, charts) with an Express + MongoDB API that uses JWT authentication.',
    problem:
      'Content creators lacked a focused platform to manage their content, track growth and organise their work in one place.',
    objectives: [
      'Provide a clean creator dashboard and management interface.',
      'Use reliable state management and data visualisation on the front-end.',
      'Back the interface with a secure, authenticated API.',
    ],
    targetUsers: ['Content creators'],
    features: [
      'Client app with state management (Zustand)',
      'Charts and analytics visuals (Recharts)',
      'Node API with JWT authentication',
    ],
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'MUI',
      'Firebase',
      'Zustand',
      'Recharts',
      'Express',
      'MongoDB',
      'JWT',
    ],
    role: ['Full front-end build', 'Server and database layer'],
    process: [
      'Built the React front-end with component-based UI and Zustand state.',
      'Added charts for analytics and growth visuals.',
      'Created an Express + MongoDB API with JWT authentication.',
    ],
    challenges: ['Coordinating a client app and separate API into one cohesive product.'],
    solutions: ['Clear separation between the front-end app and the authenticated API.'],
    learned: [
      'Combining state management, charts and authentication in a full-stack React application.',
    ],
  },
  {
    id: 'flowboard',
    name: 'FlowBoard',
    tagline: 'Productivity / Project-Management Application',
    image: '/projects/flowboard.svg',
    github: 'https://github.com/JennyCapricon/flowboard',
    overview:
      'FlowBoard is a personal task and project-management application with authentication and full task CRUD, built on a shared task-manager API. It was part of a front-end collaboration project built with React and Vite.',
    problem:
      'Keeping track of tasks and projects across a workflow is easy to lose control of without a clear, structured tool.',
    objectives: [
      'Provide a simple task-manager with authentication.',
      'Let users create, update, view and manage their tasks.',
      'Integrate reliably with a shared task-manager API.',
    ],
    targetUsers: ['Individuals and small teams managing tasks'],
    features: [
      'Login and register flows',
      'Task list with status updates',
      'Task detail views',
      'API integration with error handling',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Axios', 'React Hook Form'],
    role: ['Front-end implementation of the task-manager experience', 'Forms with validation via React Hook Form'],
    process: [
      'Set up a React + Vite project with routing.',
      'Built forms with React Hook Form validation for auth and tasks.',
      'Connected the interface to the shared task-manager API with Axios.',
    ],
    challenges: ['Working with a shared external API and handling errors cleanly.'],
    solutions: ['Structured API integration with consistent error handling in the UI.'],
    learned: [
      'Form validation, client-side routing and consuming a shared API in a real collaboration project.',
    ],
  },
  {
    id: 'evolve30',
    name: 'Evolve30',
    tagline: '30-Day Personal Growth Challenge Platform',
    image: '/projects/evolve30.svg',
    overview:
      'Evolve30 is a full-stack challenge platform where users pick 30-day goals (reading, fitness, coding and more), complete daily missions, track streaks and earn badges.',
    problem:
      'Staying consistent with personal growth goals is hard without structure and accountability.',
    objectives: [
      'Let users choose 30-day goals and complete daily missions.',
      'Track streaks and award badges for consistency.',
      'Show progress through analytics.',
    ],
    targetUsers: ['People running personal 30-day growth challenges'],
    features: [
      'Daily missions and 30-day progress calendar',
      'Streak counters and milestone badges',
      'Progress analytics and achievement system',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Zustand', 'Zod', 'Recharts'],
    role: ['Front-end and application development'],
    process: [
      'Built the application with Next.js and TypeScript.',
      'Designed the 30-day challenge data model and missions.',
      'Added progress tracking, streaks and badges.',
    ],
    challenges: ['Modelling 30-day progress and streak logic clearly.'],
    solutions: ['A clear data model for daily missions, streaks and milestones.'],
    learned: ['Working with Next.js, TypeScript and a typed full-stack application.'],
  },
];