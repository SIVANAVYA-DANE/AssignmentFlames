
import BookCard from './BookCard'

const BookList = ({books, removeBook}) => (
  <div className="book-list">
    {books.length > 0 ? (
      books.map(book => (
        <BookCard key={book.id} book={book} removeBook={removeBook} />
      ))
    ) : (
      <p>No books found.</p>
    )}
  </div>
)

export default BookList
