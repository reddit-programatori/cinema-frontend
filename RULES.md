Images go to public folder

- Should be separated by components (i.e. -> public/app/auth/placeholder.jpg)

Naming convention

- Files are named using kebab-case, e.g. api-client.ts
- Components use PascalCase
- Everything else uses camelCase (hooks, API, context, etc.)

Project Structure

- Types will be defined locally first (within features).
- If a type is reused in multiple places, it will be moved to ./src/types/types.ts as a global type.

Folder Structure

 <!-- TODO: marko -->

Component Librrary
chakra-ui

<!-- !: npx @chakra-ui/cli snippet add -->

API Layer

- axios // TODO Install ??
  // It may be better to stick with the native fetch API, just to be safe against potential supply chain attacks.

STATE Management

- zustand

Server Cache State

- react query

Form State

- Later, if needed (React Hook Form)

Testing

- Later, Unit, (Mozda? Playwright)

Security

- JWT
- RBAC todo, after communication with BE

Performance

- Image optimizations WEBP/WEBV!
- react-scan
