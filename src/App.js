import './app.css'

function Booklist() {
  return (
    <div className='book-list'>
      <Book />
    </div>
  )
}

const Book = () => {
  const title = 'The Very Hungry Caterpillar'
  const author = 'Eric Carle'
  const image = ''
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL604_SR604,400_.jpg'
        alt=''
      />

      <h1>{title}</h1>

      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

export default Booklist
