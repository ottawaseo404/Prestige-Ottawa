# Prestige Moving Vancouver - Website & Booking System

## Overview
This project delivers a modern, responsive website for Prestige Moving Vancouver, featuring an integrated booking system and an admin dashboard. Its primary purpose is to streamline lead management by directly integrating with the SmartMoving CRM platform. The system offers real-time pricing, comprehensive booking management, and an AI-powered blog system. The business vision is to enhance operational efficiency, improve customer experience, and increase market reach through a robust online presence.

## User Preferences
I want iterative development. I prefer detailed explanations for complex features. I expect the agent to ask before making major architectural changes or introducing new dependencies. Ensure the communication is clear and concise, focusing on practical outcomes.

## System Architecture

### UI/UX Decisions
The design system utilizes Gold (#C5A572), Navy (#1A2332), White, and Gray colors with the Inter font. Components are built using Shadcn UI with custom theming, ensuring a consistent aesthetic. Spacing follows a consistent 4/6/8/12/16/20/24 scale. Interactions include hover and active elevate systems. The homepage features a bold redesign with a dark navy navigation, full-bleed hero section, stats bars, trust badges, and featured services grid. All service pages are modernized with interactive tabs, testimonials, service area sections, FAQs, and enhanced SEO elements. The navigation includes a 2-column dropdown grid for desktop and a Sheet component for mobile.

### Technical Implementations
The application is built with a React, TypeScript, Tailwind CSS, and Shadcn UI frontend, and a Node.js, Express, TypeScript backend. State management is handled by TanStack Query, and forms utilize React Hook Form with Zod validation. Wouter is used for routing. Data persistence is managed via PostgreSQL with Drizzle ORM and Neon serverless, ensuring all booking data survives server restarts.

### Feature Specifications
- **Public Website**: Includes a landing page with pricing packages, services grid, and trust indicators. A multi-step booking form (move details, origin, destination, contact, review) provides real-time price estimation and Zod validation, automatically syncing submissions to SmartMoving.
- **Admin Dashboard**: Offers an overview with stats cards, recent bookings, and business metrics. Bookings management includes a searchable, filterable table with status updates and manual SmartMoving sync. Package management allows editing hourly rates, travel fees, and package features. An AI-powered blog system enables creation, editing, and publishing of SEO-optimized articles with AI content generation using OpenAI GPT-4o, category/tag organization, and SEO meta fields.
- **Blog System**: Features a listing page with filters and pagination, and individual post pages with rich formatting, JSON-LD schema, and social sharing.
- **SEO Optimization**: Comprehensive SEO features are implemented across all pages, including XML sitemaps, robots.txt, Open Graph tags, social preview images, canonical URLs, and JSON-LD schema markup. Hero video management allows database-driven configurations with auto-rotation and graceful fallbacks.

### System Design Choices
The system supports multiple specialized service pages (e.g., residential, commercial, long-distance moving) each with dedicated SEO optimization, JSON-LD schema markup, and rich content. SmartMoving integration is central, with both automatic lead submission and webhook-based real-time status updates for bookings. The project emphasizes modularity and reusability, seen in components like the `table-of-contents.tsx`.

## External Dependencies

- **SmartMoving CRM**: Integrated for lead management and booking synchronization.
  - **API**: `https://api.smartmoving.com/api/leads/from-provider/v2` for lead submission.
  - **Webhooks**: Used for real-time updates on opportunity status, job creation, and closure.
- **PostgreSQL Database**: Used for persistent data storage.
  - **ORM**: Drizzle ORM.
  - **Hosting**: Neon serverless.
- **OpenAI GPT-4o**: Utilized for AI content generation within the blog system.