# Favourite Student List

A responsive React application for browsing students and managing a favourite student list. Built to demonstrate React Router, global state with Context, and conditional rendering.

## Features

- Two pages: Student List and Favourite Students.
- Navigation with React Router's `Link` component, without page reloads.
- Student names and IDs stored in an array of objects and rendered with `map()`.
- Shared favourites managed with `createContext`, `useContext`, and `useState`.
- Add students to favourites with immediate UI updates.
- Duplicate prevention and a disabled button for students already added.
- Remove students from the Favourite Students page.
- Empty-state message: “No favourite students added yet.”
- Responsive CSS for mobile and desktop screens.

## Technologies

- React
- React Router DOM
- JavaScript and JSX
- CSS
- Vite

## Getting Started

Install Node.js with npm, then extract the project and open its folder in VS Code.

### 1. Open the project terminal

Make sure the terminal is inside the folder containing `package.json`.

For example, in Windows PowerShell:

```powershell
cd "D:\sakthi\fs\Favourite-Student-List"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the Local URL printed in the terminal. Keep the terminal running while using the app. Press `Ctrl+C` to stop the server.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally after building |

## Fix: Missing Script "start"

The original project uses `npm run dev`, so running `npm start` produces a missing-script error.

Use:

```bash
npm run dev
```

If you prefer `npm start`, replace the `scripts` section in `package.json` with the following, keeping the other fields unchanged:

```json
"scripts": {
  "start": "vite --host 0.0.0.0",
  "dev": "vite --host 0.0.0.0",
  "build": "vite build",
  "preview": "vite preview"
}
```

Save the file, then run:

```bash
npm start
```

## Project Files

| File | Purpose |
| --- | --- |
| `index.html` | HTML entry point |
| `src/main.jsx` | Renders the application inside BrowserRouter and StudentProvider |
| `src/App.jsx` | Navigation and route definitions |
| `src/pages/StudentContext.jsx` | Global favourites state and add/remove functions |
| `src/pages/StudentListPage.jsx` | Displays all students |
| `src/pages/FavouriteStudentsPage.jsx` | Displays favourites or the empty state |
| `src/style.css` | Responsive styling |
| `vite.config.js` | Vite configuration with automatic JSX transformation |
| `package.json` | Dependencies and npm scripts |

## Routes

| Path | Page |
| --- | --- |
| `/` | Student List |
| `/favourites` | Favourite Students |
| Other paths | Page not found |

## How State Management Works

`StudentProvider` wraps the application above both pages, so favourites remain available during navigation. Components access the shared context through the `useStudents()` hook, which calls `useContext(StudentContext)`.

When adding a student, the provider uses `some()` to check whether the ID already exists. It adds only new students. Removing a student uses `filter()` to produce an updated list. React then updates the cards and favourite count.

Favourites are stored in memory and reset on browser refresh. This project does not use a database or local storage.

## Customise the Student List

Edit `src/data/students.js`. Give every student a unique ID:

```javascript
export const students = [
  { id: 1, name: "Sakthivel", roll: "FSWD-101" },
];
```

## Manual Check List

1. Open Favourites before adding anyone and confirm the empty message appears.
2. Add a student from Student List and confirm the count increases.
3. Confirm the added student's button is disabled to prevent duplicates.
4. Navigate to Favourites and confirm the selected student appears.
5. Remove the student and confirm the list and count update.
6. Return to Student List and confirm the student can be added again.
7. Check the layout at mobile and desktop widths.

## Production Build

```bash
npm run build
npm run preview
```

The build output is stored in `dist/`. When hosting the app, configure the hosting service to serve `index.html` for client-side routes such as `/favourites`.
