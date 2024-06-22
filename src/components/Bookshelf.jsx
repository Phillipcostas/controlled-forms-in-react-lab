import React, { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (newBook.title.trim() !== '' && newBook.author.trim() !== '') {
      const updatedBooks = [...books, newBook];
      setBooks(updatedBooks);
      setNewBook({ title: '', author: '' }); 
    }
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Enter title"
          />

          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            type="text"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Enter author"
          />

          <button onClick={handleSubmit}>Add Book</button>
        </div>

        <div className="bookCardsDiv">
          <h2>Book List</h2>
          {books.map((book, index) => (
            <div key={index} className="bookCard">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
