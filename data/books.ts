export interface Book {
  id: string;
  slug: string;
  title: string;
  coverImage?: string;
  sellingPrice?: number;
  originalPrice?: number;
  currency?: string;
  paymentUrl?: string;
  isPublished: boolean;
  isPlaceholder: boolean;
  sortOrder?: number;
}

/** Published catalogue entries. Titles and order can be edited here without changing the UI. */
export const books: Book[] = [
  {
    id: "ebook-selling",
    slug: "ebook-selling-ideas-to-income",
    title: "E-book Selling: Ideas to Income",
    coverImage: "/images/books/ebook-selling-ideas-to-income.png",
    sellingPrice: 49,
    originalPrice: 249,
    currency: "INR",
    paymentUrl: "https://superprofile.bio/vp/ai-e-book-business",
    isPublished: true,
    isPlaceholder: false,
    sortOrder: 10,
  },
  {
    id: "100-ebook-ideas",
    slug: "100-ebook-ideas-that-sell",
    title: "100 E-book Ideas That Sell",
    coverImage: "/images/books/100-ebook-ideas-that-sell.png",
    sellingPrice: 29,
    originalPrice: 249,
    currency: "INR",
    paymentUrl: "https://superprofile.bio/vp/100-e-book-ideas-that-sell",
    isPublished: true,
    isPlaceholder: false,
    sortOrder: 20,
  },
  {
    id: "gita-for-modern-life",
    slug: "the-gita-for-modern-life",
    title: "The Gita for Modern Life",
    coverImage: "/images/books/gita-for-modern-life.png",
    sellingPrice: 49,
    originalPrice: 329,
    currency: "INR",
    paymentUrl: "https://superprofile.bio/vp/the-gita-for-modern-life",
    isPublished: true,
    isPlaceholder: false,
    sortOrder: 30,
  },
  {
    id: "ghar-par-fit",
    slug: "ghar-par-fit-30-day-home-workout",
    title: "Ghar Par Fit: 30-Day Home Workout",
    coverImage: "/images/books/ghar-par-fit.png",
    sellingPrice: 29,
    originalPrice: 149,
    currency: "INR",
    paymentUrl: "https://superprofile.bio/vp/homefit-starter",
    isPublished: true,
    isPlaceholder: false,
    sortOrder: 40,
  },
];

export function getPublishedBooks() {
  return books
    .map((book, index) => ({ book, index }))
    .filter(({ book }) => book.isPublished)
    .sort((a, b) => (a.book.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.book.sortOrder ?? Number.MAX_SAFE_INTEGER) || a.index - b.index)
    .map(({ book }) => book);
}

export function isValidPrice(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

export function getDiscountPercentage(book: Book) {
  if (!isValidPrice(book.sellingPrice) || !isValidPrice(book.originalPrice) || book.originalPrice <= book.sellingPrice || book.isPlaceholder) return null;
  return Math.round(((book.originalPrice - book.sellingPrice) / book.originalPrice) * 100);
}

export function formatPrice(book: Book, value: number | undefined = book.sellingPrice) {
  if (!isValidPrice(value) || !book.currency) return null;
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: book.currency, maximumFractionDigits: 0 }).format(value);
}

export function isPurchasable(book: Book) {
  return book.isPublished && !book.isPlaceholder && Boolean(book.paymentUrl);
}
