import './app.css'

function Booklist() {
  return (
    <div className='book-list'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL604_SR604,400_.jpg'
    alt=''
  />
)

const Title = () => <h1>The Very Hungry Caterpillar</h1>

const Author = () => (
  <h2 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    Eric Carle{' '}
  </h2>
)

export default Booklist
