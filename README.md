# Task Management System

A full-stack task management application built with React, Vite, Express, and MongoDB. The project provides a single-page frontend, a REST API backend, and persistent task storage for everyday todo management.

## Features

- Create new tasks
- Edit task titles inline
- Delete tasks
- Mark tasks as active or completed
- Filter tasks by `all`, `active`, and `completed`
- Show active and completed task counts
- Display `createdAt` and `completedAt` timestamps
- Show toast notifications for user actions
- Custom `404` page for unknown routes
- Serve the frontend build from Express in production

## Tech Stack

### Frontend

- `React 19`
- `Vite 7`
- `Tailwind CSS 4`
- `React Router`
- `Axios`
- `Radix UI`
- `shadcn/ui`
- `Lucide React`
- `Sonner`

### Backend

- `Node.js`
- `Express 4`
- `MongoDB`
- `Mongoose`
- `dotenv`
- `cors`
- `nodemon`

## Project Structure

```text
Task-Management-System/
├── LICENSE
├── README.md
├── package.json
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── node_modules/
│   │   └── ...
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   └── tasksControllers.js
│       ├── models/
│       │   └── Task.js
│       ├── routes/
│       │   └── tasksRoutes.js
│       └── server.js
└── frontend/
    ├── .gitignore
    ├── README.md
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.js
    ├── dist/
    │   ├── 404NotFound.png
    │   ├── index.html
    │   ├── vite.svg
    │   └── assets/
    │       ├── index-CWUIBFBE.css
    │       └── index-OzH5_EHE.js
    ├── public/
    │   ├── 404NotFound.png
    │   └── vite.svg
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── assets/
        │   └── react.svg
        ├── components/
        │   ├── AddTask.jsx
        │   ├── Footer.jsx
        │   ├── Header.jsx
        │   ├── StatsAndFilters.jsx
        │   ├── TaskCard.jsx
        │   ├── TaskEmptyState.jsx
        │   ├── TaskFilters.jsx
        │   ├── TaskList.jsx
        │   └── ui/
        │       ├── badge.jsx
        │       ├── button.jsx
        │       ├── card.jsx
        │       ├── command.jsx
        │       ├── dialog.jsx
        │       ├── input.jsx
        │       ├── pagination.jsx
        │       └── popover.jsx
        ├── lib/
        │   ├── axios.js
        │   ├── data.js
        │   └── utils.js
        └── pages/
            ├── HomePage.jsx
            └── NotFound.jsx
```

## Requirements

- `Node.js >= 18`
- `npm >= 9`
- `MongoDB` local instance or MongoDB Atlas

## Installation

```bash
git clone https://github.com/HUYTG17/Task-Management-System.git
cd Task-Management-System
npm install --prefix backend
npm install --prefix frontend
```


## Run Locally

Open two terminals.

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

Default URLs:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5001/api`

## Production Build

From the project root:

```bash
npm run build
npm start
```

## Author

**Tran Gia Huy**  
GitHub: [trangiahuy17112005](https://github.com/trangiahuy17112005)

