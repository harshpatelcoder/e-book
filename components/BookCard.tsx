import { ArrowRight } from "lucide-react";
import type { Book } from "@/data/books";
import { formatPrice, getDiscountPercentage, isPurchasable } from "@/data/books";
import { BookCoverPlaceholder } from "@/components/BookCoverPlaceholder";

export function BookCard({ book }: { book: Book }) {
  const sellingPrice = formatPrice(book);
  const originalPrice = formatPrice(book, book.originalPrice);
  const discount = getDiscountPercentage(book);
  const purchasable = isPurchasable(book);

  return (
    <article className="book-card">
      <div className="book-card-visual">
        <BookCoverPlaceholder book={book} />
        <span className={`file-badge ${book.isPlaceholder ? "preview" : ""}`}>{book.isPlaceholder ? "DESIGN PREVIEW" : "DIGITAL FILE"}</span>
      </div>
      <div className="book-card-content">
        <div className="product-info-row">
          <h2>{book.title}</h2>
          {!book.isPlaceholder && <div className="price-stack" aria-label="Book pricing"><span className="selling-price">{sellingPrice || "Price to be announced"}</span>{originalPrice && <span className="original-price">{originalPrice}</span>}{discount !== null && <span className="discount-badge">-{discount}%</span>}</div>}
        </div>
        {purchasable ? <a className="buy-link" href={book.paymentUrl} aria-label={`Buy ${book.title} now`}>Buy Now <ArrowRight size={15} /></a> : <span className="buy-link disabled" aria-label="Purchase link coming soon">Coming Soon</span>}
      </div>
    </article>
  );
}
