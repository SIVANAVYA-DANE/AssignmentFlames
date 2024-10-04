import {createContext, useState} from 'react'
import bookData from '../services/bookData' // Simulate fetching books

export const LibraryContext = createContext()

const LibraryProvider = ({children}) => {
  const [books] = useState(bookData.books) // JSON data for books
  const [myLibrary, setMyLibrary] = useState([])

  const addToLibrary = book => {
    if (!myLibrary.some(b => b.id === book.id)) {
      setMyLibrary([...myLibrary, book])
    }
  }

  const removeFromLibrary = id => {
    setMyLibrary(myLibrary.filter(book => book.id !== id))
  }

  return (
    <LibraryContext.Provider
      value={{books, myLibrary, addToLibrary, removeFromLibrary}}
    >
      {children}
    </LibraryContext.Provider>
  )
}

export default LibraryProvider
