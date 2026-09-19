# HawkDigi — React + Bootstrap

A small, responsive, one-page site based on the supplied dark/gold references. Each section has its own JSX and CSS file. Navigation uses native anchors: no routing library, Bootstrap JS, animation library, web fonts, or external image requests.

## Run locally

Install Node.js 22.12+ (or a newer supported LTS), then open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. To create and inspect production output:

```sh
npm run build
npm run preview
```

Upload the contents of `dist/` to your static hosting document root. Do not upload the source folder or node_modules. Relative asset paths support subfolder hosting. You don't need Node.js on the production server for this static build. Preview is only for local checks, not a production server.

## Files

```
src/
  App.jsx                 assembles the single page
  main.jsx                React entry and Bootstrap CSS imports
  components/
    Brand.jsx             editable brand and temporary mark
    Header.jsx            navigation and accessible mobile menu
    Footer.jsx            contact details and footer
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    WhyUs.jsx
    Contact.jsx
  data/site.js            public contact info, services and example stats
  styles/
    global.css            colors, typography and shared elements
    header.css
    home.css
    about.css
    services.css
    why-us.css
    contact.css
    footer.css
public/_headers           example production response headers
```

## Customize before launch

- Change public contact details and example statistics in `src/data/site.js`. The phone number is deliberately a placeholder; email uses the reference address and must be verified before launch.
- Replace the LOGO box in `Home.jsx` with your own image (put it under `public/`, give it descriptive alt text and explicit width/height). `Brand.jsx` uses a small temporary star mark, not the exact hawk logo; replace it with your original logo asset.
- Edit section text in the matching JSX file. Change colors and global spacing in `global.css`.
- Contact buttons open the visitor's email app. No messages are stored or sent by this site and no backend/form service is configured.
- Remove the footer's preview notice once all dummy content is replaced and approved.

## Security and browser inspection

No frontend can prevent visitors from reading downloaded JavaScript, inspecting displayed values, changing their local DOM or viewing network requests. Disabling right-click/DevTools or obfuscation does not protect secrets. Production minification and disabled source maps make delivery smaller but are not security boundaries.

This project has no credentials, private data, authentication, database, HTML injection or third-party scripts. React escapes the text values. Never store API secrets in frontend code or VITE_* environment variables: they become public build content. Browser changes affect that visitor's copy; any future backend must independently validate inputs and enforce authentication and authorization.

The `public/_headers` file is copied into `dist/`. Hosts such as Netlify/Cloudflare Pages can use that format; Apache, IIS and Nginx require equivalent HTTP response-header configuration. Verify headers in your actual hosting environment. The CSP is intended for the production build, not the Vite development server. If you later add YouTube or an API, explicitly adjust only the needed CSP directives for those origins. Serve over HTTPS. Keep dependencies patched and run `npm audit` periodically. There is no claim that a site is impossible to hack.

For a future contact backend, validate input server-side, add rate limits and abuse protection, and keep mail credentials on the server. No backend is needed for the supplied email links.

## Validation

The production build completed successfully. Output JavaScript and CSS total approximately 83 KB gzip. Browser layout and interaction checks could not run in the delivery environment because a Chromium executable was unavailable. Before launch, review desktop/mobile layouts, keyboard navigation, the mobile menu, contact email and actual hosting response headers.
