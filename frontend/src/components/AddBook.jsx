import React, { useState } from 'react';
import axios from 'axios';

const AddBook = ({ addNewBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  // Handle input change to update formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to add a book
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log('Form Data Submitted:', formData); // For debugging

    // Post the new book data to the server
    axios.post('http://localhost:3000/api/books', formData)
      .then((res) => {
        console.log('Book added successfully:', res.data); // Server response
        alert('Book added successfully');
        addNewBook(res.data); // Update parent component with the new book
        setFormData({
          title: '',
          author: '',
          price: '',
          description: '',
          imageUrl: '',
        }); // Clear form after submission
      })
      .catch((err) => {
        console.error('Error adding book:', err.response ? err.response.data : err.message);
        alert('Error adding book');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a Book</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
