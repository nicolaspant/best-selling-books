import './app.css'
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL604_SR604,400_.jpg',
  title: 'The Very Hungry Caterpillar',
  author: 'Eric Carle',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
}

function Booklist() {
  return (
    <div className='book-list'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea
          natus minus excepturi aperiam nam. Deleniti eos provident quidem
          magni.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </div>
  )
}

const Book = ({ img, title, author, children }) => {
  //destructuring the same as below
  // const { img, title, author, children } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  )
}

export default Booklist
