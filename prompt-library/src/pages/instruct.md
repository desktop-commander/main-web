---

## Purpose
This folder contains top-level React components that correspond to specific pages or routes within the application. Each file in this directory typically represents a single, navigable page.

---

## Conventions
- **Naming:** Page components are named in `PascalCase` (e.g., `Prompts`).
- **Exports:** Each page component should be the `default` export of its file.
- **Structure:** Pages are typically functional components that manage their own state and data fetching.

---

## Design Decisions
- **Page-Level Logic:** Pages are responsible for fetching the data they need and managing page-specific state (e.g., filters, modals).
- **Component Composition:** Page components act as containers that compose smaller, reusable "dumb" components from the `src/components` directory to build the final UI.
- **Routing:** These components are rendered by `react-router-dom` based on the route definitions in `src/App.tsx`.

---

## File Overview
Below is the list of page components in this folder.

### `Index.tsx`
- **Components:**
  - `Index()`: The main landing page of the application. It displays a hero section, featured prompts, category filters, and testimonials. It serves as the primary entry point for users.

### `NotFound.tsx`
- **Components:**
  - `NotFound()`: A simple page component that is displayed when a user attempts to navigate to a URL that does not match any defined routes.

### `Prompts.tsx`
- **Components:**
  - `Prompts()`: The main page for browsing the entire prompt library. It includes advanced filtering and sorting controls and displays all prompts in a grid.

---

## Guidelines for Modification
- When a new top-level route is added to the application in `App.tsx`, a corresponding page component should be created in this folder.
- Keep page components focused on layout and data orchestration. Reusable UI logic should be extracted into the `src/components` directory.
- Remember to update the **File Overview** and **Changelog** when adding or removing pages.

---

## Changelog
- **2025-09-19** – Created `instruct.md` and documented the initial page components.