import type { Metadata } from "next";
import { ProfileHeader } from "@/components/ProfileHeader";
import { BookGrid } from "@/components/BookGrid";
import { getPublishedBooks } from "@/data/books";

export const metadata: Metadata = {
  title: "E-books",
  description: "Practical knowledge. Thoughtful ideas. Learn at your own pace.",
};

export default function HomePage() {
  const publishedBooks = getPublishedBooks();

  return (
    <div className="listing-page min-h-screen">
      <div className="container listing-container">
        <ProfileHeader />
        <section className="collection" id="ebooks" aria-labelledby="collection-title">
          <h1 id="collection-title">E-books</h1>
          <div className="collection-rule" />
        <BookGrid books={publishedBooks} />
        </section>
      </div>
    </div>
  );
}
