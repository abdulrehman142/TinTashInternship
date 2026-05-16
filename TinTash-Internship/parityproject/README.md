## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd parityproject
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

   This will install:
   - React & ReactDOM
   - TypeScript
   - Vite
   - Tailwind CSS
   - ESLint (with TypeScript, React, and hooks plugins)
   - [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite)
   - [lucide-react](https://www.npmjs.com/package/lucide-react)

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

5. **Preview the production build:**
   ```sh
   npm run preview
   ```

6. **Lint the code:**
   ```sh
   npm run lint
   ```

### Project Structure

- `src/` — Main source code (React components, styles)
- `public/` — Static assets (images, icons)
- `tailwind.config.ts` — Tailwind CSS configuration
- `vite.config.ts` — Vite configuration
- `tsconfig*.json` — TypeScript configuration files
- `eslint.config.js` — ESLint configuration

### Notes

- Tailwind CSS is configured via [tailwind.config.ts](tailwind.config.ts).
- ESLint is set up for TypeScript and React, see [eslint.config.js](eslint.config.js).
- Uses [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite) for Tailwind integration with Vite.

---

**You only need to run `npm install` once to get all dependencies.**