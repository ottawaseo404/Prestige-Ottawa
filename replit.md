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
- `GET /api/smartmoving/customers` - Get customers (future)

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
Currently uses in-memory storage (MemStorage). Bookings are lost on server restart but this is acceptable for MVP. For production, consider migrating to PostgreSQL with Drizzle ORM.

## Recent Changes
- Implemented complete booking flow with SmartMoving integration
- Built admin dashboard with comprehensive booking management
- Added real-time sync status monitoring
- Configured Prestige Moving branding throughout
- Mobile-responsive design across all pages

## Future Enhancements
- PostgreSQL persistence
- SmartMoving webhooks for real-time updates
- Customer portal for tracking moves
- Payment processing integration
- SMS/Email notifications
- Advanced analytics dashboard
- Image gallery from prestigemoving.ca
