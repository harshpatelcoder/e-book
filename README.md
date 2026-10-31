# YOUR BRAND — E-book storefront

A focused, single-page digital publishing catalogue built with Next.js, TypeScript, Tailwind CSS, and CSS design tokens. It currently displays five supplied cover artworks, ordered in `data/books.ts`, with ₹49 selling prices.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` or the port shown by Next.js.

Checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Central configuration

- `lib/site.ts` — brand name, logo path, Instagram handle/URL, page title, and description
- `data/books.ts` — every published book and its display order
- `components/ProfileHeader.tsx` — centered profile-style header
- `components/BookCard.tsx` — reusable cover, pricing, discount, and purchase-link UI
- `public/images/books/` — real cover artwork

## Add a real e-book

1. Add the supplied cover to `public/images/books/`.
2. Add a product entry to `data/books.ts` with a unique `id`, `slug`, `title`, and `sortOrder`.
3. Set `coverImage` to its public path, for example `/images/books/my-book.jpg`.
4. Add the real `sellingPrice` and `currency` (normally `INR`).
5. Add `originalPrice` only when it is genuine and higher than the selling price.
6. Add the exact SuperProfile `paymentUrl`.
7. Set `isPlaceholder: false` and `isPublished: true`.
8. Choose the desired position using the lower-is-earlier `sortOrder` value.
9. Run the checks above before deploying.

Real covers use `object-fit: cover` inside an exact 16:9 desktop frame and a 1:1 mobile thumbnail. If a future product has no cover image, the reusable CSS fallback can be used instead.

## Pricing rules

Selling and original prices are validated as finite, nonnegative numbers. A discount appears only when `originalPrice > sellingPrice` and is calculated automatically with:

```ts
Math.round(((originalPrice - sellingPrice) / originalPrice) * 100)
```

Missing prices do not become `₹0`. Placeholder products never display pricing UI.

## Purchase links

Only a published, non-placeholder book with a configured `paymentUrl` gets a `Buy Now →` link. The link opens the configured SuperProfile URL in the same browser tab. This site does not process payments or collect card details.

If a real product has no payment URL, it shows a neutral disabled state instead.

## Brand and Instagram setup

Update `lib/site.ts` before launch. Leave `logoImage` empty to use the built-in local fallback. Add a real `instagramUrl` only when the profile is finalized; an empty URL renders the handle as non-clickable development text.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy and verify the profile header, 16:9 frames, responsive grid, pricing, and SuperProfile links.

No database, payment SDK, authentication, or external API is required.
