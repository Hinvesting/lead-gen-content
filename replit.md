# Multi-Content Generator Landing Page

## Overview

This is a production-ready single-page application (SPA) built as a landing page for the "Multi-Content Generator" tool. The application captures user emails through a modal form and integrates with a Make.com webhook for email processing. It's built using React with TypeScript, styled with Tailwind CSS and shadcn/ui components, and includes a full-stack Express.js backend with PostgreSQL database support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme (midnight blue background)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with React plugin and runtime error overlay

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful API structure (routes prefixed with `/api`)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with tsx

### Database Architecture
- **Database**: PostgreSQL via Neon Database serverless
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Schema**: User management system with username/password authentication
- **Connection**: Pooled connections via @neondatabase/serverless

## Key Components

### Frontend Components
- **Landing Page**: Dark-themed single page with hero section, demo video, and features
- **Email Modal**: Captures user emails with form validation and toast notifications
- **UI System**: Complete shadcn/ui component library including forms, dialogs, buttons, and more
- **Typography**: Custom fonts (Montserrat for headings, Open Sans for body text)

### Backend Components
- **Route Handler**: Centralized route registration system
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Vite Integration**: Development server with HMR and static file serving
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### External Integration
- **Make.com Webhook**: Email submission endpoint at `https://hook.us1.make.com/43i0zrryriegg6grhe995mveumvpwi`
- **Asset Management**: Static assets served from `/images/` and `/videos/` directories

## Data Flow

1. **User Journey**: User visits landing page → clicks CTA button → modal opens → enters email → submits form
2. **Email Processing**: Form submission → client-side validation → POST to Make.com webhook → success/error toast
3. **Asset Loading**: Static assets (logo, creator image, demo video) loaded from public directory
4. **API Requests**: Client makes requests to Express backend via TanStack Query with automatic error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management
- **@radix-ui/**: Accessible UI primitives
- **wouter**: Lightweight routing
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling
- **tailwindcss**: Utility-first CSS framework

## Deployment Strategy

### Build Process
1. **Frontend Build**: `vite build` compiles React app to `dist/public`
2. **Backend Build**: `esbuild` bundles server code to `dist/index.js`
3. **Database**: `drizzle-kit push` applies database schema changes

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required for Drizzle config)
- **NODE_ENV**: Environment setting (development/production)

### Production Setup
- Static files served from `dist/public`
- Server runs from `dist/index.js`
- Database migrations applied via Drizzle Kit
- Sessions stored in PostgreSQL with connect-pg-simple

### Development Workflow
- **Dev Server**: `npm run dev` starts Express with Vite middleware
- **Type Checking**: `npm run check` validates TypeScript
- **Database**: `npm run db:push` updates schema

## Changelog
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.