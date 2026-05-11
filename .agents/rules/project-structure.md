---
trigger: model_decision
description: this provides project structure guidelines
---

# Project Architecture & Component Rules

Strictly adhere to the following directory structure and component placement rules for this project.

## 1. Global Components (`src/components`)

- **General Components**: Use `src/components` for reusable components shared across multiple features or the entire application.
- **UI Kit (`src/components/ui`)**:
  - This directory contains the core primitive UI components.
  - **Strict Rule**: Use components from this folder as-is.
  - **Prohibition**: Do NOT add new components to this directory or modify existing ones unless explicitly instructed to do so.

## 2. Feature-Based Architecture (`src/features`)

Organize code by feature modules. Each feature directory should ideally contain two sub-directories:

### `src/features/[feature-name]/views`

- Contains components that serve as the main entry points for page routes.
- These are "page-level" components or layout wrappers specific to the feature.

### `src/features/[feature-name]/components`

- Contains internal components used exclusively within this specific feature.
- If a component here needs to be shared with another feature, it should be evaluated for promotion to `src/components`.

## 3. General Implementation Guidelines

- Prioritize feature-specific components within `src/features` to maintain isolation.
- Only promote components to `src/components` if they are truly generic and used in at least two distinct features.
- Always check `src/components/ui` first before building a new UI element to ensure consistency.
