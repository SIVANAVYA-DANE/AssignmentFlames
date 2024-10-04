
import {useState, useContext} from 'react'
import SearchBar from '../components/SearchBar'
import BookList from '../components/BookList'
import {LibraryContext} from '../context/LibraryContext'

const HomePage = () => {
  const {books} = useContext(LibraryContext)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBooks = books.filter(
    book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="homepage">
      <h1>Book Library</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <BookList books={filteredBooks} />
    </div>
  )
}

export default HomePage
