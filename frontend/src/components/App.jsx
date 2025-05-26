import React, { useState } from 'react';
import AddBook from './components/AddBook';

const App = () => {
  const [books, setBooks] = useState([]);

  const addNewBook = (newBook) => {
    setBooks([...books, newBook]); // Add new book to the list
  };

  return (
    <div>
      <AddBook addNewBook={addNewBook} />
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
