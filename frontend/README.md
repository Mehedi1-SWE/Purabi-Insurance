

# Purabi Insurance

Purabi Insurance is a modern and responsive insurance website built with React, React Router, and Tailwind CSS.

## Features

- Modern and responsive UI
- React Router navigation
- Insurance policy information
- Why Choose Us section
- Client Portal
- Agent Portal
- Interactive video section
- Figma-based pixel-accurate design
- Tailwind CSS styling

## Tech Stack

- React
- TypeScript
- React Router
- Tailwind CSS
- Vite

## Project Purpose

This project focuses on building a clean, professional, and user-friendly insurance website while following modern frontend development practices and a Figma-based design system.


The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
Purabi-Insurance/
│
├── app/
│   │
│   ├── routes.ts
│   │
│   ├── layouts/
│   │   └── MainLayouts.tsx
│   │
│   └── routes/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Quote.tsx
│       ├── AgentPortal.tsx
│       ├── SignUp.tsx
│       ├── VerifyOtp.tsx
│       ├── ProceedOtp.tsx
│       ├── Clientportallogin.tsx
│       ├── AgentPortalProfile.tsx
│       │
│       ├── Claims.tsx
│       ├── Blogs.tsx
│       ├── ContactUs.tsx
│       ├── TermsAndConditions.tsx
│       ├── PrivacyPolicy.tsx
│       └── RefundPolicy.tsx
│
├── components/
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   └── WorkingProcess.tsx
│   │
│   ├── shared/
│   │   ├── Topbar.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── Category.tsx
│   ├── ClaimsTracker.tsx
│   ├── InsuranceCarousel.tsx
│   ├── MobileApp.tsx
│   ├── NewsEvents.tsx
│   ├── PriceCalculator.tsx
│   └── TrustedPartners.tsx
│
├── public/
│   └── [সব image file সরাসরি এখানে]
│
└── [existing json files]
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
