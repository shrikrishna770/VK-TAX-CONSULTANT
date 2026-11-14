This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## VK Tax Consultant — project notes

- **Business details, services, FAQs, pricing, testimonials, tax calendar:** `src/data/site.js`.
  Search for `TODO(client)` to find everything that must be confirmed before launch.
- **Lead form:** `src/components/LeadForm.js` → `src/pages/api/contact.js`.
  Copy `.env.example` to `.env.local` and configure at least one delivery channel
  (Google Sheet via `GOOGLE_SCRIPT_URL` and/or email via Resend). In production the form
  returns an error if no channel is configured, so leads are never silently lost.
  The Sheet payload now includes `phone`, `page` and `receivedAt` — add those columns to the Apps Script.
- **Analytics:** set `NEXT_PUBLIC_GA_ID` to enable GA4; form submissions fire a `generate_lead` event.
- **Sitemap:** `public/sitemap.xml` — update when adding pages.
