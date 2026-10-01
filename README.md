# Property Rental Platform

A responsive property rental platform built with React and designed to simulate a real-world rental business workflow.

The application allows customers to browse properties, search and filter listings, save favorite properties, create accounts, request property viewings, and track their viewing requests.

Property managers can access a protected dashboard to review viewing requests and update their status.

## Overview

This project was built as a portfolio application to demonstrate practical frontend development skills using React.

The project focuses on reusable components, application state, client-side routing, responsive UI, accessibility, authentication flows, protected routes, business workflows, and maintainable project structure.

## Features

### Property Discovery

* Browse available properties
* Search properties by location
* Filter by maximum price
* Filter by minimum bedrooms
* Sort properties by price
* View detailed property information
* View property images and amenities

### Customer Features

* Register an account
* Log in and log out
* Persistent login state
* Save properties to favorites
* View saved properties
* Request property viewings
* Select viewing date and time
* Add a message to viewing requests
* Prevent duplicate viewing requests
* View submitted requests and their statuses

### Manager Features

* Protected manager dashboard
* View total viewing requests
* View pending, approved, and rejected requests
* Review customer information
* Review requested property information
* Approve viewing requests
* Reject viewing requests
* Return requests to pending status

### User Experience

* Responsive layouts
* Mobile, tablet, and desktop support
* Accessible form labels
* Keyboard focus states
* Loading state component
* Error state component
* Empty states
* Form validation
* Protected routes
* Reusable UI components

## Demo Manager Account

Use the following account to test the manager functionality:

**Email**

`manager@propertyrental.com`

**Password**

`manager123`

This is a frontend demonstration account only.

## Tech Stack

* React
* JavaScript
* React Router
* CSS
* Vite
* Git
* GitHub
* Browser localStorage

## Project Architecture

The project is organized around reusable components, pages, application context, and data.

```text
src/
├── assets/
├── components/
├── context/
├── data/
├── pages/
├── App.jsx
├── index.css
└── main.jsx
```

### Components

Reusable interface elements such as:

* Navbar
* Footer
* PropertyCard
* PropertyGrid
* ProtectedRoute
* StatusMessage
* LoadingState
* ErrorState

### Context

Application-wide state is handled using React Context.

Current contexts include:

* Authentication
* Favorites
* Viewing Requests

### Pages

The application separates major user experiences into individual pages, including:

* Home
* Properties
* Property Details
* Favorites
* Login
* Register
* Request Viewing
* My Requests
* Manager Dashboard
* Manager Requests
* 404 Not Found

## Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/property-rental-platform.git
```

Move into the project:

```bash
cd property-rental-platform
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Screenshots

Screenshots can be added here to demonstrate the main parts of the application.

Suggested screenshots:

* Home page
* Property listing page
* Property details page
* Favorites page
* Viewing request form
* My Requests page
* Manager dashboard
* Manager request management

## Known Limitations

This project currently uses frontend-only demonstration architecture.

Authentication and user data are stored using browser localStorage. Password handling in this version is therefore not suitable for a real production authentication system.

Property data is currently static rather than being retrieved from a backend API.

Viewing requests are stored locally in the browser and are not shared between different devices or browsers.

There are currently no real email notifications, payment processing, database integration, or server-side authentication.

## Future Improvements

Potential future development includes:

* REST API integration
* Secure server-side authentication
* Password hashing
* Database integration
* Real property management
* Property creation and editing
* Cloud image storage
* Email notifications
* Property availability management
* Map integration
* Advanced search
* Automated frontend testing
* TypeScript migration
* Production analytics

## What This Project Demonstrates

This project demonstrates practical experience with:

* React component architecture
* React state management
* Context API
* React Router
* Protected routes
* Form handling
* Form validation
* Responsive CSS
* Accessibility fundamentals
* CRUD-style business workflows
* Local persistence
* Reusable UI components
* Error and empty states
* Git and GitHub workflow
* Production builds
* Frontend project organization

## License

This project was created as a portfolio project for educational and demonstration purposes.
