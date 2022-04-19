import React from 'react'

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

export default Book
