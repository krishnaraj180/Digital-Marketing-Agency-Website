Digital Marketing Agency Website — React + TailwindCSS + shadcn/ui:

A UI-only 2-page digital marketing agency website built with React.js (React Router), TailwindCSS, and shadcn/ui.
This project is frontend-only (no backend, no real data) and focuses on responsive design, dark mode, smooth interactions, and reusable components.

Features:

2 Pages

Home Page (/): Hero, Services, Case Studies, Testimonials, CTA, Footer
About Page (/about): Mission & Vision, Team Section, Stats/Fun Facts, CTA

UI Enhancements:

Dark Mode Toggle (UI-only, no persistence)
Smooth hover effects on buttons, cards, and nav links
Skeleton loaders for services & testimonials
Responsiveness: Works across desktop, tablet, and mobile
Consistent design system: Typography, spacing, and color scheme
Shadcn/ui components used: Card, Button.

 Tech Stack:

React
 (React Router for navigation)

TailwindCSS
 (utility-first styling)

shadcn/ui
 (prebuilt UI components)

 Project Structure:
src/
├─ main.jsx
├─ App.jsx
├─ routes/
│  ├─ Home.jsx
│  └─ About.jsx
├─ components/
│  ├─ Navbar.jsx
│  ├─ Footer.jsx
│  ├─ ServiceCard.jsx
│  ├─ TestimonialSlider.jsx
│  ├─ TeamCard.jsx
│  ├─ StatsBlock.jsx
│  ├─ CTASection.jsx
│  └─ DarkModeToggle.jsx
└─ assets/ (illustrations, team photos, etc.)

🚀 Getting Started:

Clone the repo:

  git clone https://github.com/Krishnaraj180/dm-agency-ui.git
  cd dm-agency-ui


Install dependencies:

  npm install


Run the project:

   npm run dev


Build for production:

  npm run build

Design Guidelines:

Color Scheme: Blue primary + white background + gradient accents
Typography: Google Font – Inter (Headings & Body)
Layout: Flexbox/Grid for responsiveness, consistent spacing
Dark Mode: Class-based toggle (dark: utilities from Tailwind)



