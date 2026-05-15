---
trigger: model_decision
description: this provides project coding standards
---

# Coding Standards

## 1. Absolute Path Resolution

- **Rule:** All import paths must strictly map to the aliases configured in `tsconfig.json` or `jsconfig.json`.
- **Execution:** Never guess or generate deeply nested relative paths (e.g., `../../../../components`) if path aliases (e.g., `@/components`) are defined. Inspect the configuration files before writing imports.

## 2. Dead Export Elimination

- **Rule:** Keep all code entities (functions, classes, types, interfaces, constants) private to the file scope by default.
- **Execution:** Do not preemptively use the `export` keyword. Only export an entity if it is explicitly imported and consumed by another file in the project.
