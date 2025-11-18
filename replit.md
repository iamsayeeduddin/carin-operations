# Carin Operations

## Overview
A React-based operations management application built with Vite, React Router, and Tailwind CSS. This application provides login functionality and a dashboard interface.

## Tech Stack
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Routing**: React Router DOM 7.9.6
- **Styling**: Tailwind CSS 4.1.17
- **Form Handling**: Formik 2.4.9
- **Validation**: Yup 1.7.1
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.554.0

## Project Structure
```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   └── Sidebar.jsx
│   ├── dashboard/
│   │   └── Dashboard.jsx
│   ├── login/
│   │   └── Login.jsx
│   └── NotFound.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Routes
- `/` - Redirects to `/login`
- `/login` - Login page
- `/dashboard` - Dashboard page
- `*` - 404 Not Found page

## Development
The application runs on port 5000 using Vite's development server with HMR (Hot Module Replacement) configured for the Replit environment.

## Recent Changes
- **Nov 18, 2025**: Initial setup for Replit environment
  - Configured Vite to run on port 5000 with 0.0.0.0 host
  - Added HMR configuration for Replit's proxy environment
  - Created NotFound component
  - Added root route redirect to login page
  - Configured deployment settings for static hosting
