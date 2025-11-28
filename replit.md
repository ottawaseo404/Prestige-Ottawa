# Prestige Moving Vancouver - Website & Booking System

## Project Overview
Modern, responsive website for Prestige Moving Vancouver franchise with integrated booking system and admin dashboard. Features direct integration with SmartMoving CRM platform for seamless lead management.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Node.js, Express, TypeScript
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter
- **Integration**: SmartMoving API

## Features

### Public Website
- **Landing Page** (`/`):
  - Hero section with Prestige Moving branding
  - Three pricing packages (Premium, Deluxe, Diamond)
  - Services grid showcasing all moving services
  - Trust indicators (10,000+ moves, 5.0 rating, WSIB insured)
  - Why Choose Us section
  - Mobile responsive design

- **Booking System** (`/book`):
  - Multi-step form (5 steps):
    1. Move details (date, size, service type, package)
    2. Origin address
    3. Destination address
    4. Contact information
    5. Review & submit
  - Real-time price estimation
  - Form validation with Zod
  - Progress indicator
  - Automatic SmartMoving sync on submission

### Admin Dashboard
- **Dashboard** (`/admin`):
  - Stats cards (today's moves, pending quotes, confirmed moves)
  - Recent bookings table
  - Quick overview of business metrics

- **Bookings Management** (`/admin/bookings`):
  - Searchable bookings table
  - Filter and sort capabilities
  - Status management (pending, confirmed, completed, cancelled)
  - Individual booking detail view
  - Manual sync to SmartMoving
  - SmartMoving sync status tracking

- **SmartMoving Sync** (`/admin/smartmoving`):
  - Connection status indicator
  - Sync statistics (total, synced, pending)
  - Bulk sync all pending bookings
  - Sync activity monitoring

- **Customers** (`/admin/customers`):
  - Placeholder for SmartMoving customer data
  - Ready for future SmartMoving API integration

## API Integration

### SmartMoving Lead API
- **Endpoint**: `https://api.smartmoving.com/api/leads/from-provider/v2`
- **Authentication**: Provider Key (query parameter)
- **Auto-sync**: Bookings automatically synced on submission
- **Manual sync**: Individual or bulk sync from admin panel

### Environment Variables
- `SMARTMOVING_PROVIDER_KEY`: Required for lead submission
- `SMARTMOVING_API_KEY`: Required for data fetching (future use)
- `SESSION_SECRET`: Session management

## Data Model

### Booking Schema
```typescript
{
  id: string
  firstName, lastName: string
  email, phone, phoneType: string
  moveDate: Date
  moveSize: string
  serviceType: string
  packageType: "Premium" | "Deluxe" | "Diamond"
  origin: { street, city, province, postalCode, stairs }
  destination: { street, city, province, postalCode, stairs }
  notes?: string
  referralSource: string
  estimatedPrice?: number
  status: "pending" | "confirmed" | "completed" | "cancelled"
  smartmovingSynced: boolean
  smartmovingId?: string
  smartmovingSyncedAt?: Date
}
```

## Package Pricing
- **Premium**: $155/hr (2 movers, 16-20ft truck) - Min 3hrs + $155 travel
- **Deluxe**: $195/hr (3 movers, 26ft truck) - Min 3hrs + $195 travel
- **Diamond**: $315/hr (4 movers, 2 trucks) - Min 3hrs + $315 travel

## Routes

### Public
- `/` - Landing page
- `/book` - Booking form

### Service Pages (All SEO Optimized with JSON-LD Schema)
- `/services/residential-moving` - Apartments, condos, houses
- `/services/commercial-moving` - Office relocations, business moves
- `/services/long-distance-moving` - Cross-BC and Canada-wide moves
- `/services/packing-services` - Full-service packing, materials
- `/services/moving-supplies` - Boxes, tape, packing supplies delivery
- `/services/student-moving` - Affordable moves for students
- `/services/storage-solutions` - Climate-controlled storage
- `/services/specialty-item-moving` - Hot tubs, pool tables, gym equipment
- `/services/antique-moving` - Careful handling of valuables
- `/services/piano-moving` - Specialized piano transport
- `/services/senior-moving` - Compassionate elderly relocations
- `/services/military-moving` - PCS moves and base relocations

### Admin
- `/admin` - Dashboard overview
- `/admin/bookings` - Bookings management
- `/admin/customers` - Customer data
- `/admin/smartmoving` - SmartMoving sync panel

## API Endpoints

### Bookings
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create booking (auto-syncs to SmartMoving)
- `PATCH /api/bookings/:id/status` - Update booking status
- `POST /api/bookings/:id/sync-smartmoving` - Manual sync to SmartMoving

### SmartMoving
- `GET /api/smartmoving/status` - Get sync status and connection state
- `POST /api/smartmoving/sync-all` - Bulk sync all pending bookings
- `GET /api/smartmoving/customers` - Get customers from SmartMoving API (pagination supported)
- `POST /api/webhooks/smartmoving` - Webhook endpoint for real-time updates from SmartMoving

## Design System
- **Colors**: Gold (#C5A572), Navy (#1A2332), White, Gray
- **Font**: Inter
- **Components**: Shadcn UI with custom theming
- **Spacing**: Consistent 4/6/8/12/16/20/24 scale
- **Interactions**: Hover elevate, active elevate system

## Development
```bash
npm run dev  # Starts both frontend (Vite) and backend (Express)
```

## Storage
**PostgreSQL Database** - All booking data persists in PostgreSQL database using Drizzle ORM with Neon serverless. Data survives server restarts. DbStorage class implements all CRUD operations with proper connection pooling.

## Recent Changes

### Latest Updates (November 2025)
- **Bold Homepage Redesign**: Complete visual overhaul inspired by industry leaders:
  - Dark navy (#1A2332) navigation with gold accents
  - Full-bleed hero section with gradient overlay and experience badge
  - Stats bar with key metrics (10,000+ moves, 5.0 rating, 15+ years, 50+ movers)
  - Trust badges section (BBB A+, WSIB, Google 5-Star, Fully Licensed)
  - Featured services grid on dark background with hover effects
  - About section with two-column layout and company stats
  - Package pricing cards with "Most Popular" highlight on Diamond
  - Testimonials carousel with accessible navigation (aria-labels)
  - Why Choose Us section with 6 feature blocks
  - Strong CTA section with gold background
  - Modern footer with all 12 service links organized in columns
  - Fully responsive design with mobile-optimized layouts

- **Complete 12-Service Page Suite**: All 12 moving services now have dedicated SEO-optimized pages:
  - Residential, Commercial, Long Distance, Packing, Moving Supplies, Student
  - Storage, Specialty Item, Antique, Piano, Senior, and Military Moving
  - Each page includes: JSON-LD schema markup, meta descriptions, keywords, canonical URLs, Open Graph tags
  - Comprehensive content sections with features, benefits, process steps, and clear CTAs
  - Consistent navigation with back button, logo, and Get Quote CTA

- **Enhanced Navigation**: 2-column dropdown grid displaying all 12 services:
  - Desktop: Shadcn NavigationMenu with hover-activated dropdown (700px wide, 2-column grid)
  - Mobile: Hamburger menu with Sheet component for responsive navigation
  - Fixed logo sizing (h-16), header height h-20
  - Enhanced styling: backdrop blur, shadow, smooth transitions, hover states

### Phase 2 - Advanced Features
- **Database Persistence**: Migrated from in-memory storage to PostgreSQL with Drizzle ORM - all bookings now persist across restarts
- **SmartMoving Customer Integration**: Admin customers page now fetches real customer data from SmartMoving API
- **Webhook System**: Implemented SmartMoving webhook endpoint for real-time booking status updates
  - Handles Opportunity Status Changed, Job Created/Finalized/Closed events
  - Automatically updates local booking status when SmartMoving sends notifications
  - Comprehensive event logging for debugging

## Phase 1 Completion
- Implemented complete booking flow with SmartMoving Lead API integration
- Built admin dashboard with comprehensive booking management
- Added manual and bulk SmartMoving sync operations
- Configured Prestige Moving branding throughout
- Mobile-responsive design across all pages

## Completed Enhancements
- ✅ PostgreSQL persistence (implemented)
- ✅ SmartMoving webhooks for real-time updates (implemented)
- ✅ SmartMoving customer data integration (implemented)

## Upcoming Enhancements
- Customer portal for tracking moves
- Payment processing (Stripe) integration
- SMS/Email notifications
- Advanced analytics dashboard with revenue tracking
- Service image gallery from prestigemoving.ca

## Webhook Configuration
To enable real-time sync from SmartMoving:
1. Login to SmartMoving at https://app.smartmoving.com
2. Navigate to Settings → Integrations → SmartMoving API → Webhooks
3. Click "Add Webhook"
4. Enter callback URL: `https://your-replit-url.replit.app/api/webhooks/smartmoving`
5. Select events: Opportunity Status Changed, Opportunity Changed, Job Created, Job Finalized, Job Closed
6. Save webhook configuration
