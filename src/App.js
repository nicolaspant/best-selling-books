function Booklist() {
  return (
    <div>
      <Book />
    </div>
  )
}

const Book = () => {
  return (
    <article>
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

const Author = () => <h2>Eric Carle </h2>

export default Booklist
