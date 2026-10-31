import type { Book } from "@/data/books";
import { BookCard } from "@/components/BookCard";

export function BookGrid({ books }: { books: Book[] }) {
  if (!books.length) {
    return <div className="empty-state"><span className="eyebrow">A quiet shelf</span><h3>No books in this category yet.</h3><p>As the collection grows, new titles will appear here.</p></div>;
  }
  return <div className="book-grid">{books.map((book) => <BookCard book={book} key={book.id} />)}</div>;
}
