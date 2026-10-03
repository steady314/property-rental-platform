# Property Rental Platform

A responsive property rental platform built with React to simulate a real-world rental business workflow.

The application allows customers to browse and search properties, filter and sort listings, save favorite properties, create accounts, request property viewings, and track their viewing requests.

Property managers can access a protected dashboard to review customer viewing requests and update their status.

Live Demo: https://property-rental-platform-sepia.vercel.app/

GitHub Repository: https://github.com/steady314/property-rental-platform

## Project Overview

This project was built as a portfolio application to demonstrate practical frontend development skills using React.

The application focuses on building a realistic rental workflow rather than a collection of isolated UI components. It demonstrates reusable component architecture, application state management, client-side routing, responsive UI, accessibility fundamentals, authentication flows, protected routes, form validation, and business workflows.

### Business Workflow

The platform supports two primary user roles:

Customers

* Discover and search properties
* Filter and sort available listings
* View detailed property information
* Save favorite properties
* Request property viewings
* Track submitted viewing requests

Property Managers

* Access a protected management dashboard
* Review customer viewing requests
* View customer and property information
* Approve or reject requests
* Return requests to a pending state

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

* Account registration
* Login and logout
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
* Loading states
* Error states
* Empty states
* Form validation
* Protected routes
* Reusable UI components

## Demo Manager Account

The following demonstration account can be used to test manager functionality:

Email

`manager@propertyrental.com`

Password

`manager123`

> This is a frontend demonstration account only.

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

Reusable interface elements include:

* Navbar
* Footer
* PropertyCard
* PropertyGrid
* ProtectedRoute
* StatusMessage
* LoadingState
* ErrorState

### Context

Application-wide state is managed using React Context.

Current contexts include:

* Authentication
* Favorites
* Viewing Requests

### Pages

Major user experiences are separated into individual pages:

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

### Clone the repository

```bash
git clone https://github.com/steady314/property-rental-platform.git
```

### Move into the project directory

```bash
cd property-rental-platform
```

### Install dependencies

```bash
npm install
```

### Start the development server

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

Screenshots can be added here to demonstrate the main application workflows.

Recommended screenshots:

* Home page
* Property listings
* Property details
* Favorites
* Viewing request form
* My Requests
* Manager dashboard
* Manager request management

## Known Limitations

This project currently uses a frontend-only demonstration architecture.

Authentication and user data are stored using browser `localStorage`. Password handling in this version is therefore **not suitable for a real production authentication system**.

Property data is currently static rather than being retrieved from a backend API.

Viewing requests are stored locally in the browser and are not shared between different devices or browsers.

The current version does not include:

* Real email notifications
* Payment processing
* Database integration
* Server-side authentication
* Backend API integration

## Future Improvements

Potential future development includes:

* REST API integration
* Secure server-side authentication
* Password hashing
* Database integration
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
