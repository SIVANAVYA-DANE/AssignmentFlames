
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookDetailsPage from './pages/BookDetailsPage'
import MyLibraryPage from './pages/MyLibraryPage'
import LibraryProvider from './context/LibraryContext'
import './styles/styles.css'

const App = () => (
  <LibraryProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/mylibrary" element={<MyLibraryPage />} />
      </Routes>
    </Router>
  </LibraryProvider>
)

export default App
