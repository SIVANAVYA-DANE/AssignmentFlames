import {Link} from 'react-router-dom'

const BookCard = ({book, removeBook}) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p>
      <strong>Author:</strong> {book.author}
    </p>
    <p>
      <strong>Genre:</strong> {book.genre}
    </p>
    <p>
      <strong>Rating:</strong> {book.rating}
    </p>
    <p>
      <strong>Year:</strong> {book.publication_year}
    </p>
    <Link to={`/book/${book.id}`}>View Details</Link>

    {/* Optional: Show "Remove from Library" button if removeBook is passed */}
    {removeBook && (
      <button onClick={() => removeBook(book.id)} type="button">
        Remove from Library
      </button>
    )}
  </div>
)

export default BookCard
