import './app.css'

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL604_SR604,400_.jpg',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
  },

  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL302_SR302,200_.jpg',
    title: 'If Animals Kissed Good Night',
    author: 'Ann Whitford Paul ',
  },
]

function Booklist() {
  return (
    <div className='book-list'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </div>
  )
}

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('hello world')
  }
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type='button' onClick={clickHandler}>
        Buy It!
      </button>
    </article>
  )
}

export default Booklist
