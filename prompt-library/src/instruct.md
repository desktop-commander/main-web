---

## Purpose
This folder is the main source root for the `prompt-library` frontend application. It contains the application's entry point, routing, and core components.

---

## Conventions
- **Language/Framework:** React (v18+), TypeScript, Vite
- **Naming:**
  - Files/Folders: `kebab-case` (e.g., `prompt-library`) or `PascalCase` for components (e.g., `AnalyticsDashboard.tsx`)
  - Variables/Functions: `camelCase`
  - Classes/Interfaces/Types: `PascalCase`
- **Imports:** Prefer absolute imports using `@/` path alias configured in `tsconfig.json`.
- **Code Style:** ESLint + Prettier rules enforced.
- **Tests:** Unit tests should be co-located with components or placed in a relevant `__tests__` directory.

---

## Design Decisions
- The application uses a component-based architecture, with reusable UI elements located in the `components/` directory.
- Routing is managed by `react-router-dom`, with all top-level routes defined in `App.tsx`.
- Global state and data fetching are handled by `@tanstack/react-query`, initialized in `App.tsx`.
- UI components are built using Radix UI and styled with Tailwind CSS.

---

## File Overview
Below is the list of files and folders in this directory.

### `App.tsx`
- **Components:**
  - `App()` – The root component that sets up providers (`QueryClientProvider`, `TooltipProvider`, `BrowserRouter`) and defines the application's routes.

### `main.tsx`
- **Execution:**
  - Renders the root `App` component into the DOM using `createRoot`. This is the main entry point for the React application.

### Subdirectories
- **`components/`**: Contains reusable React components used across the application.
- **`data/`**: Likely holds static data, mock data, or data-related utilities.
- **`hooks/`**: Contains custom React hooks.
- **`lib/`**: For utility functions, libraries, and helper scripts.
- **`pages/`**: Contains top-level page components that are rendered by the router.
- **`types/`**: Holds TypeScript type definitions and interfaces.

---

## Guidelines for Modification
- Always check existing dependencies before introducing new ones.
- Keep functions/modules small and single-purpose.
- Document **public methods** and component props; private/internal methods do not need to be listed.
- Update documentation and comments for any significant change.
- Update the **File Overview** and **Changelog** sections whenever code changes.

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the structure and conventions of the main `src` folder.