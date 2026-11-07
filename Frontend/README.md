# Tourism frontend

This directory contains the React 18 application for the Tourism Application. It uses Create React App (`react-scripts`) and calls the backend through the API gateway.

## Run locally

From this directory:

```bash
npm install
npm start
```

The development server runs at `http://localhost:3000`. Set `REACT_APP_API_URL` in `.env.development` to the API gateway URL (by default, `http://localhost:8080`).

## Build

```bash
npm run build
```

The production build is served by Nginx in the frontend Docker image. For a direct `npm run build`, set `REACT_APP_API_URL` in `.env.production`. For production Compose, set it in the root `.env`; it is passed into the Docker build. Create React App embeds this value in the build.

## Project layout

- `src/` – application code, API clients, and UI components
- `public/` – static assets
- `Dockerfile` and `nginx.conf` – production image and SPA routing configuration

The unrelated real-estate project README that previously occupied this file was moved out of this project by the project owner.
