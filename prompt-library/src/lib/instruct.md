---

## Purpose
This folder contains utility functions and helper modules that are not React components or hooks. It is intended for general-purpose, reusable code that can be used throughout the application.

---

## Conventions
- **Framework Agnostic:** Code in this folder should be as framework-agnostic as possible, avoiding dependencies on React or other UI libraries unless absolutely necessary.
- **Clarity and Reusability:** Functions should be well-documented, pure (where possible), and designed for reuse.
- **File Organization:** General utilities are placed in `utils.ts`. More specific sets of functions, like analytics, are given their own file (`analytics.ts`).

---

## Design Decisions
- Common functionalities, such as class name construction (`cn`) and data formatting, are centralized in `utils.ts` to ensure consistency and reduce code duplication.
- Third-party service integrations, such as the analytics wrapper, are abstracted into their own modules to make them easier to manage or replace in the future.

---

## File Overview
Below is the list of utility modules in this folder.

### `analytics.ts`
- **Classes:**
  - `Analytics`: A class that provides a simple wrapper for tracking analytics events. It includes a queueing system for events fired before the provider is initialized.
- **Instances:**
  - `analytics`: A singleton instance of the `Analytics` class.
- **Functions:**
  - `trackPromptView()`, `trackPromptVote()`, `trackPromptCopied()`: Specific helper functions for tracking common user interactions.

### `utils.ts`
- **Functions:**
  - `cn(...inputs)`: A helper function that merges CSS classes using `tailwind-merge` and `clsx`. It's used for conditionally applying Tailwind CSS classes.
  - `formatCompactNumber(value)`: A function that formats a number into a compact, human-readable string (e.g., 1200 becomes "1.2K").

---

## Guidelines for Modification
- Before adding a new function, check if a similar utility already exists.
- Add new, broadly applicable helper functions to `utils.ts`.
- If you are adding a new, distinct set of related utilities (e.g., for date manipulation), create a new file for them (e.g., `date-utils.ts`).
- Ensure that any new functions have clear JSDoc comments explaining their purpose, parameters, and return value.

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the utility modules and their functions.