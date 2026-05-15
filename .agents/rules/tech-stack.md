---
trigger: model_decision
description: this provides core technology, architectural principles
---

# Tech Stack & Development Rules

## 1. Core Technology Versions

- **Framework:** Next.js 16 (App Router)
- **Runtime:** React 19 (using latest hooks like `use`, `useActionState`, and Server Actions)
- **Language:** TypeScript 5.x (Strict mode)
- **Form Management:** TanStack React Form v1
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **UI & Components:** shadcn/ui v4 & Radix UI v1
- **Icons:** Lucide React v1

---

## 2. Architectural Principles

- **Feature-Based Structure:** Organize code into `src/features/[feature-name]`. Each feature folder should encapsulate its own components, hooks, and logic.
- **Component Isolation:** Keep reusable, generic UI components in `src/components/ui`. Place domain-specific components inside their respective feature directories.
- **Server-First Approach:** Default to **React Server Components (RSC)**. Use the `'use client'` directive strictly for components requiring interactivity or browser-only APIs.

---

## 3. Coding Standards & Patterns

- **React 19:** Utilize modern patterns; prefer **Server Actions** for data mutations and forms.
- **TypeScript:** Enforce strict typing. Use `interface` for component props and `type` for complex unions. Avoid `any`.
- **Forms:** Always use **TanStack React Form** for state management. Ensure proper integration with UI components for validation and submission.
- **Styling:** Use **Tailwind CSS v4** utility classes. Adhere to the theme-first approach and shadcn primitives for UI consistency.
- **Naming Conventions:**
  - Components: `PascalCase`
  - Hooks/Functions: `camelCase`
  - Files/Folders: `kebab-case`

---

## 4. AI Behavior Instructions

- **Precision:** Always check for compatibility with React 19 and Next.js 16 APIs.
- **Refactoring:** When moving components, ensure they are placed within the correct `src/features` directory if they are feature-specific.
- **Conciseness:** Provide minimal, functional code examples that follow the modular architecture described above.
