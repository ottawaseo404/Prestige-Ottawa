# Prestige Moving Vancouver - Design Guidelines

## Design Approach
**Reference-Based Design** drawing from premium service platforms:
- **Airbnb**: Trust-building through visual storytelling, clean card-based layouts
- **Uber**: Streamlined booking flow with minimal friction
- **Linear**: Modern admin dashboard aesthetics with data clarity
- **Stripe**: Professional confidence through restraint and precision

**Core Principle**: Premium moving service deserves premium digital experience - sophisticated, trustworthy, effortless.

## Brand Colors (From Logo)
- **Primary Gold**: #C5A572 (warm, prestigious)
- **Deep Navy**: #1A2332 (professional, trustworthy)
- **Crisp White**: #FFFFFF (clean, spacious)
- **Soft Gray**: #F7F7F7 (background sections)
- **Success Green**: #22C55E (booking confirmations)
- **Alert Red**: #EF4444 (urgent CTAs)

## Typography System

**Primary Font**: Inter (Google Fonts)
- Headings: 600-700 weight
- Body: 400-500 weight
- UI Elements: 500 weight

**Scale**:
- Hero Headline: text-5xl md:text-7xl (bold, commanding)
- Section Headers: text-3xl md:text-4xl
- Package Titles: text-2xl md:text-3xl
- Body Text: text-base md:text-lg
- Form Labels: text-sm (500 weight)
- Buttons: text-base (600 weight)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Form spacing: space-y-6
- Grid gaps: gap-6 md:gap-8

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Booking forms: max-w-4xl centered
- Admin dashboard: Full-width with max-w-screen-2xl

## Images Strategy

**Hero Section**: Large, compelling moving imagery
- Full-width hero: Professional movers in action, pristine truck with Prestige branding
- Height: min-h-[600px] md:min-h-[700px]
- Overlay: Dark gradient overlay (from transparent to rgba(26, 35, 50, 0.7))
- CTA buttons on blurred glass-morphism backgrounds

**Service Showcase**:
- 3-column grid of moving scenarios (residential, commercial, packing)
- Each image: rounded-xl with subtle hover scale effect
- Aspect ratio: 4:3 for consistency

**Trust Section**:
- Team photo: Professional crew with trucks
- Customer testimonials with authentic customer photos
- Trust badges: WSIB, BBB logos in grayscale

**Use images from prestigemoving.ca**: movers in action, trucks, satisfied customers, packed items

## Component Library

### Landing Page Components

**Hero Section**:
- Full-bleed image background
- Centered headline: "Vancouver's Premium Moving Service"
- Subheadline emphasizing trust/speed
- Primary CTA: "Get Instant Quote" (gold button, large)
- Secondary CTA: "Book Now" (outlined white)
- Phone number prominently displayed

**Package Cards (Premium/Deluxe/Diamond)**:
- 3-column grid on desktop, stacked mobile
- White cards with subtle shadow
- Gold accent border on hover
- Price: Large, bold at top
- Features: Checkmark list with icons
- "Book This Package" CTA at bottom
- Distinct visual hierarchy for Diamond (featured border treatment)

**Quick Quote Form**:
- Sticky sidebar or modal overlay
- Multi-step wizard feel
- Progress indicator for multi-page forms
- Inline validation with gentle error states
- Date picker with availability highlighting
- Move size dropdown with visual icons
- Address autocomplete for origin/destination
- Stairs counter with +/- buttons
- Real-time price estimation display

**Trust Indicators Section**:
- Logo wall of certifications (WSIB, BBB)
- Statistics counter: "10,000+ Happy Moves" with animation
- 5-star rating display
- Recent testimonials carousel

**Services Grid**:
- Icon + Title + Description cards
- Residential, Commercial, Long-distance, Packing, Storage
- Hover state reveals "Learn More" link

### Booking System Components

**Multi-Step Form Flow**:
1. Move Details (date, size, type)
2. Locations (origin/destination with map preview)
3. Additional Services (stairs, packing, storage)
4. Contact Information
5. Review & Confirm

**Form Elements**:
- Large, touch-friendly inputs (h-12 minimum)
- Floating labels or top-aligned labels
- Calendar date picker with disabled past dates
- Dropdown selectors with search functionality
- Step navigation: Pills/breadcrumb style
- Next/Previous buttons: Full-width on mobile

**Booking Confirmation**:
- Success modal with checkmark animation
- Booking reference number
- Email confirmation message
- "Add to Calendar" button
- Next steps outlined clearly

### Admin Dashboard Components

**Navigation**:
- Vertical sidebar with collapsible menu
- Dashboard, Bookings, Customers, Calendar, Settings, SmartMoving Sync
- Prestige logo at top
- User profile at bottom with logout

**Dashboard Overview**:
- Stats cards: Today's Moves, Pending Quotes, Revenue (This Month)
- Recent bookings table with status badges
- Calendar view of upcoming moves
- Quick actions: "Create Booking", "Sync SmartMoving"

**Bookings Table**:
- Sortable columns: Date, Customer, Origin→Destination, Package, Status
- Status badges: Pending (yellow), Confirmed (green), Completed (blue), Cancelled (gray)
- Action menu (3 dots): View, Edit, Sync to SmartMoving
- Search bar with filters (date range, status, package type)
- Pagination controls

**SmartMoving Sync Panel**:
- Connection status indicator (Connected/Disconnected)
- Manual sync button
- Last sync timestamp
- Sync logs table showing API calls
- Error notifications if sync fails

**Booking Detail View**:
- Customer information card
- Move details timeline
- Package breakdown with pricing
- Notes section
- Status update controls
- "Push to SmartMoving" button

## Layout Patterns

**Landing Page Flow**:
1. Hero with booking CTA
2. Trust indicators bar
3. Package comparison section (3 cards)
4. Quick quote form (embedded or sticky)
5. Services grid (6 services)
6. Why Choose Us (3 columns)
7. Testimonials carousel
8. Final CTA banner
9. Footer with contact info

**Admin Dashboard Layout**:
- Fixed sidebar (260px wide)
- Top bar with breadcrumbs, search, notifications
- Main content area with cards/tables
- Responsive: Sidebar collapses to hamburger on mobile

## Interaction Patterns

**Booking Flow**:
- Smooth transitions between form steps (slide animation)
- Real-time validation with green checkmarks
- Price updates as options change
- Progress saved automatically
- Mobile-optimized: Full-screen modals for pickers

**Admin Dashboard**:
- Instant search with debounced API calls
- Loading skeletons for data tables
- Toast notifications for actions (Success/Error)
- Confirmation dialogs for destructive actions
- Keyboard shortcuts (optional power-user feature)

## Accessibility Standards

- WCAG 2.1 AA compliance
- Form inputs with proper labels and ARIA attributes
- Keyboard navigation for all interactive elements
- Focus indicators (blue ring on focus)
- High contrast mode support
- Screen reader announcements for dynamic content

## Mobile Optimization

**Booking Forms**:
- Single column layouts
- Larger touch targets (min 44px)
- Native mobile inputs (date, tel, email)
- Bottom-fixed CTA buttons
- Sticky header with progress

**Landing Page**:
- Hamburger menu for navigation
- Stacked cards instead of grid
- Touch-friendly carousels
- Click-to-call phone numbers
- Simplified hero (shorter height)

## Animation Guidelines

**Use sparingly and purposefully**:
- Page transitions: Subtle fade-in (200ms)
- Form validation: Gentle shake on error
- Success states: Checkmark scale animation
- Hover effects: Scale(1.02) on cards
- Loading states: Pulse skeletons
- No auto-playing carousels (user-controlled only)

This design system creates a premium, trustworthy booking experience while maintaining operational efficiency through the admin dashboard.