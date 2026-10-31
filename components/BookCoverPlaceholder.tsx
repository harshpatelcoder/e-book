import type { Book } from "@/data/books";

export function BookCoverPlaceholder({ book, compact = false }: { book: Book; compact?: boolean }) {
  if (book.coverImage) {
    return (
      <div className={`book-cover-frame ${compact ? "compact" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={book.coverImage} alt={`${book.title} cover`} className="book-cover-image" />
      </div>
    );
  }

  const number = book.id.split("-").pop()?.padStart(2, "0") || "01";
  return (
    <div className={`book-cover-frame cover-${number} ${compact ? "compact" : ""}`} aria-label="Cover preview">
      <div className="cover-grid" aria-hidden="true" />
      <div className="cover-topline"><span>YOUR BRAND</span><span>VOL. {number}</span></div>
      <div className="cover-copy">
        <span className="cover-kicker">COVER PREVIEW</span>
        <strong>{book.title}</strong>
        <span className="cover-placeholder">Placeholder artwork</span>
      </div>
      <span className="cover-orbit orbit-one" aria-hidden="true" />
      <span className="cover-orbit orbit-two" aria-hidden="true" />
      <div className="cover-footer"><span>EDITORIAL PREVIEW</span><span>2026</span></div>
    </div>
  );
}
