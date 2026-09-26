This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# FITLOG — Workout Library

## 📌 Project Name

**FITLOG — Workout Library**

## 📝 Short Description

FITLOG is a modern workout management web application where users can explore different workouts, add exercises to their daily workout plan, save workouts for later, and manage their workout activities from one place.

The application provides an interactive and user-friendly interface with workout details, duration, calories, ratings, equipment information, and personal workout planning features.

## 🛠️ Technologies Used

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **React Icons**
* **React Toastify**
* **Context API**
* **Next.js Image**
* **JSON Data**

## ⭐ Key Features

### 1. 🏋️ Workout Library

Users can browse a collection of workouts and view important information such as workout name, image, muscle groups, difficulty, duration, calories, rating, equipment, sets, and reps.

### 2. 📋 Personal Workout Plan

Users can add workouts to their daily plan and manage them from the **My Plans** page. Each workout can be marked as completed or removed from the plan.

### 3. 🔖 Save Workouts for Later

Users can save their favorite workouts for later. Once a workout is saved, the save button becomes disabled to prevent duplicate entries.

### 4. 📊 Workout Summary & Sorting

The My Plans page provides a summary of the selected workouts, including total exercises, total minutes, and total calories. Users can also sort workouts by duration, calories, or rating.

### 5. ⚡ Interactive Navigation & State Management

The application uses **React Context API** for shared workout state management. The navigation bar dynamically displays the number of planned and saved workouts, while active navigation links are highlighted for better user experience.

## 📂 Project Purpose

FITLOG was built to provide a simple and interactive platform for discovering, organizing, and managing workout routines in one place.

The project focuses on practicing modern **Next.js, React, TypeScript, Tailwind CSS, and Context API** concepts while creating a practical real-world application.
### 6. 💾 Local Storage Persistence
Plan and saved workout data are stored in the browser's localStorage, so users do not lose their selected workouts after refreshing or reopening the page.

### 7. 🔎 Workout Search
Users can search workouts by workout name or muscle-group/tag to quickly find the exercises they are looking for.

### 8. 🔢 Five-Workout Plan Limit
Today's workout plan is limited to a maximum of 5 lifts. Once the plan reaches 5 workouts, the "Add to Today's Plan" button is automatically disabled.
## 🛠️ Technologies Used

- **Next.js** — Build the UI
- **Next.js App Router** — Page navigation and routing
- **React** — Component-based UI development
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Styling and responsive design
- **DaisyUI** — UI components
- **React Context API** — Shared workout state management
- **LocalStorage** — Persist plan and saved workout data
