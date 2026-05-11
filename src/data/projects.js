import zyraBanner from '../assets/Zyra-landing.png';
import zyra2 from '../assets/zyra-2.png';
import zyra3 from '../assets/zyra-3.png';
import zyra4 from '../assets/zyra-4.png';
import diacareBanner from '../assets/diacare-1.png';
import diacare2 from '../assets/diacare-2.png';
import facBanner from '../assets/fac-1.png';
import fac2 from '../assets/fac-2.png';
import fac3 from '../assets/fac-3.png';
import fac4 from '../assets/fac-4.png';
import muhinzi1 from '../assets/muhinzi-1.png';
import muhinzi2 from '../assets/muhinzi-2.png';
import muhinzi3 from '../assets/muhinzi-3.png';
import muhinzi4 from '../assets/muhinzi-4.png';

export const projects = [
  {
    id: 'zyra',
    title: 'Zyra — Luxury Leather Goods',
    desc: 'Full-stack platform digitising the entire lifecycle of a luxury leather goods brand, from raw material procurement to customer orders.',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
    live: 'https://zyra-atlier.netlify.app/',
    github: 'https://github.com/Afanyu-Emmanuel-Delonie/kenia',
    banner: zyraBanner,
    color: 'from-amber-500/20 to-yellow-500/20',
    category: 'Web App',
    featured: true,
    top: true,
    caseStudy: {
      overview: 'Zyra implements the Digital Twin concept — every physical bag has a single software record that follows it from the cutting table to the customer\'s hands.',
      problem: 'Luxury leather ateliers managed complex multi-stage production across raw materials, artisans, QA, and sales — all on paper or disconnected spreadsheets, creating traceability gaps and stock miscounts.',
      solution: 'Built a unified platform with a staff artisan dashboard and a public store. Production moves through stages (Cutting → Stitching → Finishing → QA → Completed), QA-approved bags receive an OTP for digital activation, and only activated products can be listed in the public store.',
      outcome: 'Full traceability from raw material to delivered order, with automated costing, low-stock alerts, and a clean public catalog with order tracking.',
      images: [zyraBanner, zyra2, zyra3, zyra4],
      tools: ['React 19', 'Vite', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT', 'Docker', 'Nginx', 'Recharts', 'Lucide React'],
      sections: [
        { heading: 'Production Pipeline', body: 'Bags move through 5 stages with a full audit trail — each transition is logged with timestamp, notes, and the staff member who signed it off.' },
        { heading: 'Digital Activation', body: 'After QA, an OTP is generated. The artisan enters it to activate the bag, unlocking store listing. The OTP is cleared from the database after use.' },
        { heading: 'Public Store & Orders', body: 'Customers browse available listings, place orders (no account needed), and track by reference number. Staff manage order status from Pending to Delivered.' },
        { heading: 'Role-Based Access', body: 'Admin, Manager, and Artisan roles with granular endpoint permissions enforced via Spring Security @PreAuthorize.' },
      ],
    },
  },
  {
    id: 'diacare',
    title: 'DiaCare — Diabetes Care System',
    desc: 'Diabetes care management platform for Rwanda Diabetics Association with real-time chat, SOS emergency escalation, and role-based dashboards.',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'WebSocket', 'Docker'],
    live: 'https://diacarerw.netlify.app/',
    github: 'https://github.com/Shemaplacide/Diacare-best-programing',
    banner: diacareBanner,
    color: 'from-blue-500/20 to-cyan-500/20',
    category: 'Web App',
    featured: true,
    top: true,
    caseStudy: {
      overview: 'DiaCare is a prototype digital support platform for an organisation that coordinates diabetes care, patient follow-up, doctor communication, health education, and emergency response.',
      problem: 'Patients, doctors, and administrators had no unified digital system for tracking glucose readings, managing appointments, or handling emergencies — coordination happened through phone calls and paper records.',
      solution: 'Built a multi-role platform with dedicated dashboards for patients, doctors, and admins. Includes glucose tracking, health metrics, appointments, prescriptions, meal plans, real-time chat via WebSocket/STOMP, and SOS emergency escalation with admin acknowledgement.',
      outcome: 'A fully functional prototype demonstrating end-to-end diabetes care coordination, from patient self-monitoring to doctor review and emergency response.',
      images: [diacareBanner, diacare2],
      tools: ['React', 'Vite', 'Tailwind CSS', 'Spring Boot', 'Spring Security', 'WebSocket', 'STOMP', 'SockJS', 'PostgreSQL', 'JWT', 'Docker', 'Recharts'],
      sections: [
        { heading: 'Role-Based Dashboards', body: 'Patients track glucose and book appointments. Doctors review records and write prescriptions. Admins manage users, view reports, and handle emergency alerts.' },
        { heading: 'Real-Time Chat & SOS', body: 'WebSocket/STOMP powers live chat between all roles. Patients can send SOS emergency messages that trigger instant alerts to doctors and admins, who acknowledge them from the dashboard.' },
        { heading: 'Health Tracking', body: 'Patients log glucose readings with meal context, and the system tracks BMI, HbA1c, blood pressure, and cholesterol over time with visual charts.' },
        { heading: 'Appointments & Prescriptions', body: 'Patients book appointments with doctors. Doctors confirm, create prescriptions, and assign meal plans — all linked to the appointment record.' },
      ],
    },
  },
  {
    id: 'fac-ltd',
    title: 'FAC Ltd — Corporate Website',
    desc: 'Trilingual corporate website for a circular agribusiness in Rwanda, built with React and Tailwind CSS v4.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Netlify'],
    live: 'https://facrwanda.netlify.app/',
    github: null,
    banner: facBanner,
    color: 'from-green-500/20 to-emerald-500/20',
    category: 'Business Site',
    featured: true,
    top: true,
    caseStudy: {
      overview: 'Official marketing and information website for FAC Ltd, a circular agribusiness that bio-converts agricultural by-products into premium oyster mushrooms and certified organic vermicompost.',
      problem: 'FAC Ltd had no digital presence to reach B2B buyers, outgrowers, or investors — and needed to communicate in three languages to serve their local and international audience.',
      solution: 'Built a fully trilingual site (English, French, Kinyarwanda) with browser language detection, a blog with category filters, animated sections, and SEO-optimised pages for each route.',
      outcome: 'A fast, accessible, multilingual corporate site deployed on Netlify with automatic deploys on push.',
      images: [facBanner, fac2, fac3, fac4],
      tools: ['React 19', 'Vite', 'Tailwind CSS v4', 'React Router v7', 'Lucide React', 'Sharp', 'Netlify'],
      sections: [
        { heading: 'Internationalisation', body: 'All UI strings and blog post content live in a single translations file. Browser language is detected on first visit — FR and RW trigger a one-time confirmation prompt. Selection is persisted in localStorage.' },
        { heading: 'Blog System', body: 'Full blog with listing page, category filter tabs (All / Farming / Sustainability / News), and individual post reader with related posts. All content is translated across all three languages.' },
        { heading: 'Performance', body: 'All images converted to WebP with Sharp (92% average size reduction). LCP image uses fetchpriority="high", all others use loading="lazy". PageLoader fades out at 1.2s.' },
        { heading: 'SEO', body: 'Dynamic meta tags, Open Graph, and JSON-LD schema injected per page. Google Translate blocked to prevent interference with the custom i18n system.' },
      ],
    },
  },
  {
    id: 'muhinzi',
    title: 'Muhinzi — Farm & Cooperative App',
    desc: 'UI/UX design for a cooperative management and farm-to-market platform connecting farmers, cooperatives, and consumers.',
    stack: ['Figma', 'UI/UX', 'Prototyping'],
    live: null,
    github: null,
    banner: muhinzi1,
    color: 'from-lime-500/20 to-green-500/20',
    category: 'UI/UX',
    featured: false,
    top: false,
    caseStudy: {
      overview: 'Muhinzi is a farm-to-market platform concept designed to connect farmers, cooperatives, and consumers in a single digital marketplace.',
      problem: 'Farmers and cooperatives lacked a unified digital channel to manage cooperative operations, track produce, and reach end consumers directly.',
      solution: 'Designed a comprehensive UI/UX covering cooperative management tools, a farmer marketplace, and a consumer-facing store — all in one cohesive product.',
      outcome: 'A complete design prototype ready for development handoff, covering all three user roles with consistent design language.',
      images: [muhinzi1, muhinzi2, muhinzi3, muhinzi4],
      tools: ['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems'],
      sections: [
        { heading: 'Cooperative Management', body: 'Tools for cooperative administrators to manage members, track contributions, and distribute payments.' },
        { heading: 'Farmer Marketplace', body: 'Farmers list produce, set prices, and manage orders. Cooperatives can aggregate listings from member farmers.' },
        { heading: 'Consumer Store', body: 'Consumers browse fresh produce, place orders, and track delivery — with direct traceability back to the farm.' },
      ],
    },
  },
];

export const categories = ['All', 'Web App', 'Mobile App', 'Dashboard', 'Business Site', 'UI/UX'];
export const featuredProjects = projects.filter((p) => p.featured);
