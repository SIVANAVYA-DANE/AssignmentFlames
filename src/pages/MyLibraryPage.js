import {useContext} from 'react'
import {LibraryContext} from '../context/LibraryContext'
import BookList from '../components/BookList'

const MyLibraryPage = () => {
  const {myLibrary, removeFromLibrary} = useContext(LibraryContext)

  return (
    <div className="my-library">
      <h1>My Library</h1>
      {myLibrary.length > 0 ? (
        <BookList books={myLibrary} removeBook={removeFromLibrary} />
      ) : (
        <p>No books in your library yet.</p>
      )}
    </div>
  )
}

export default MyLibraryPage
