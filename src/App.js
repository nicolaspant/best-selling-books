import './app.css'
import books from './books'
import Book from './Book'
function Booklist() {
  return (
    <div className='book-list'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </div>
  )
}

export default Booklist
