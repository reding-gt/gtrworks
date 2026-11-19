# gtrworks

A production-ready Vite + React 19 + TypeScript + Tailwind CSS v4 site with React Router, ESLint, Prettier and Vitest. Every push to `main` is type-checked, linted, tested, built and deployed to GitHub Pages through GitHub Actions. Pull requests run the same checks without deploying.

## Scripts

| Script                 | Purpose                                             |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the dev server                                |
| `npm run build`        | Type-check, then produce the production build       |
| `npm run preview`      | Serve the production build locally                  |
| `npm run typecheck`    | Strict TypeScript check (`tsc -b`)                  |
| `npm run lint`         | ESLint (type-aware `strict` + `stylistic` rules)    |
| `npm run format`       | Format everything with Prettier                     |
| `npm run test`         | Run the Vitest suite once (`test:watch` to watch)   |
| `npm run check`        | Typecheck, lint, format check and tests, as CI does |
| `npm run pages:enable` | One-time: set the repo's Pages source to Actions    |

Requires Node 22 or newer (see `.nvmrc`).

## Structure

```
src/
  main.tsx              entry point
  app/
    App.tsx             creates the browser router
    routes.tsx          route table (reused by tests)
    basename.ts         maps Vite's BASE_URL to a router basename
  components/
    layout/             app shell: RootLayout, Header
    ui/                 reusable presentational components
  features/             one folder per route/feature, with its own tests
    home/  about/  not-found/
  config/site.ts        typed site content (name, tagline, stack, navigation)
  test/setup.ts         Vitest setup
```

Conventions: components are presentational and receive data through typed props; content lives in `config/`; routes are declared in one table; new pages go in `features/` and are lazy-loaded from `routes.tsx`. Import from `src` with the `@/` alias.

## Deploy to GitHub Pages

The site deploys to `https://reding-gt.github.io/gtrworks/` from the `reding-gt/gtrworks` repository. One command creates that repository, pushes the project, and sets the Pages source to GitHub Actions:

```bash
npm install
npm run deploy:init
```

It needs the [GitHub CLI](https://cli.github.com) signed in as `reding-gt` (`gh auth login`). When it finishes, the workflow is already running. Use `-- --owner <name>`, `-- --repo <name>` or `-- --private` to change the defaults, for example `npm run deploy:init -- --private`.

From then on, every push to `main` runs typecheck, lint, format check and tests, then deploys. Pull requests run the checks without deploying.

Manual route: push to the repo yourself, then run `npm run pages:enable` (or set **Settings → Pages → Source → GitHub Actions**) and re-run the workflow.

## How routing and the base path work

`.github/workflows/deploy.yml` runs `actions/configure-pages`, which reports the correct base path for the repo (`/<repo>` for project sites, empty for `<user>.github.io` and custom domains). The workflow passes it to Vite as `BASE_PATH`; `vite.config.ts` falls back to `/` locally. The router derives its `basename` from Vite's `BASE_URL`, so links and deep links work under any base without code changes.

GitHub Pages has no server-side routing, so the workflow copies `index.html` to `404.html`. Deep links such as `/gtrworks/about` are served that file with an HTTP 404 status and the router then renders the right page. If you need those URLs to return 200 (for SEO, say), pre-render the routes or use a hash router.

Reference files in `public/` through `import.meta.env.BASE_URL`, not hard-coded absolute paths.
