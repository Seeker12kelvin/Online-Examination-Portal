# Online Examination Portal

A React + Vite online examination portal built with Firebase Authentication and Firestore. The app lets students sign up, log in, access a protected dashboard, take exams, and track performance results.

## Key Features

- Firebase Authentication for sign-up and sign-in
- Firestore user profile storage and exam result persistence
- Protected routes for dashboard and exam pages
- Responsive student dashboard with performance summary and quiz cards
- Timed exam runner with question navigation, review, and scoring
- Tailwind CSS styling and GSAP animations for a polished UI

## Tech Stack

- React 19
- Vite
- Firebase Auth
- Firestore
- Tailwind CSS 4
- React Router DOM 7
- GSAP
- React Icons

## Project Structure

- `src/App.jsx` – application root; wraps routes with `UserAuth`
- `src/components/userAuth.jsx` – Firebase auth listener and shared `UserContext`
- `src/components/routes.jsx` – route definitions for signup, login, dashboard, exams, and performance
- `src/components/protectedLayouts.jsx` – protects authenticated pages
- `src/pages/Sign-up/` – signup page and form with validation
- `src/pages/Login/` – exam login page
- `src/pages/Dashboard/` – dashboard layout, overview, quizzes, and performance components
- `src/pages/Exams/` – exam runner and exam logic
- `src/firebase/config.js` – Firebase initialization
- `src/firebase/firestore.js` – Firestore helper functions for users and exam scoring

## Firebase Configuration

Create a `.env` file in the project root with these variables:

```env
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
VITE_MEASUREMENT_ID=
```

## Setup & Run

Install dependencies and start development:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- `UserAuth` listens for Firebase auth state and populates user profile data.
- `ProtectedLayouts` waits for a valid authenticated user before rendering protected children.
- Exam results are updated in Firestore using `handleExamLogic`.
- The app uses `UserContext` to share state like user profile, exam score info, and UI state across components.
