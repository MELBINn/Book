const books = [
    {
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
      id: 1,
    },
    {
      author: 'James Clear',
      title: 'Atomic Habits',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
      id: 2,
    },
  ];
  
  
  function BookList() {
    return (
      <section className='booklist'>
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        />
      </section>
    );
  }
  const Book = (props) => {
    const { img, title, author } = props;
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author} </h4>
      </article>
    );
  };
  //run without index.js
  //const root = ReactDOM.createRoot(document.getElementById('root'));
  //root.render(<BookList />);
  
  export default BookList