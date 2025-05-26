import React, { useState } from 'react';
import './BookList.css';

const books = [
    { id: 1, title: "You Are Born to Blossom", price: 200, author: "A.P.J. Abdul Kalam", type: "Motivational", img: "https://admitx.in/wp-content/uploads/2024/10/YoU-are-born-to-Blossom.webp" },
    { id: 2, title: "Rich Dad, Poor Dad", price: 150, author: "Robert Kiyosaki and Sharon Lechter", type: "Motivational", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Rich_Dad_Poor_Dad.jpg/220px-Rich_Dad_Poor_Dad.jpg" },
    { id: 3, title: "One Day Life will Change", price: 255, author: "SaranyaUmakanthan", type: "Dystopian", img: "https://m.media-amazon.com/images/I/61nE2R54-uL._AC_UF1000,1000_QL80_.jpg" },
    { id: 4, title: "Your Time will Come", price: 300, author: "SaranyaUmakanthan", type: "Dystopian", img: "https://www.midlandbookshop.com/s/607fe93d7eafcac1f2c73ea4/62dcef993bba623aa7ccf0bd/41ntf09wtkl-_sx460_bo1-204-203-200_.jpg" },
    { id: 5, title: "Love in a Time of War", price: 500, author: "Adrienne Chinn", type: "Dystopian", img: "https://m.media-amazon.com/images/I/513aaSFJ-lL._AC_UF350,350_QL80_.jpg" },
    { id: 6, title: "Learning How to Fly", price: 217, author: "A.P.J. Abdul Kalam", type: "Dystopian", img: "https://m.media-amazon.com/images/I/61h-KdC2RoL._SY342_.jpg" },
    { id: 7, title: "The Book of Mistakes", price: 600, author: "Prichard", type: "Dystopian", img: "https://m.media-amazon.com/images/I/51+b8tU6RxL._SL500_.jpg" },
    { id: 8, title: "Love Story", price: 800, author: "Erich Segal", type: "Love", img: "https://anylang.net/sites/default/files/styles/book_image/public/covers/love-story_0.jpg?itok=k08C1ozv" },
    { id: 9, title: "The Secret Island", price: 233, author: "Enid Blyton", type: "Cartoon", img: "https://m.media-amazon.com/images/I/91AYnjBFQ0L._SY342_.jpg" },
    { id: 10, title: "Stories of Snowmen", price: 255, author: "Russell Punter", type: "Cartoon", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAJfGTz1Q8XiIYJwawQy6NP-QkCNvFLSW88reSEhU3vDM0uhviufceOMldv6vfvhptnO03TvOjyZLVgCBDW1TKBZVRO-6bMysVKjqJiiNQl8DJqKbFDW_NFQ&usqp=CAE" },
    { id: 11, title: "The Magic of the Lost Story", price: 331, author: " Sudha Murty", type: "Cartoon", img: "https://m.media-amazon.com/images/I/812meqEmV8L._SY466_.jpg" },
    { id: 12, title: "Ruskin Bond", price: 320, author: "Bram Stoker's", type: "Horror", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0Cki0SYpuof8dA1AGaGgK1UGFuIvtO8SQOjQ9YfbtUoTBKQaiSWwn3GS30EgZXVrIRPQ-t8NQIyeeaVkYlVmeCkM3WxfPW2yGCUS2Vg-d" },
    { id: 13, title: "Ghost Stories", price: 150, author: "M.R.James", type: "Horror", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJ38-JM_cyynrotc0qkUj8CXN-Ao0-wweFAh1V9L9lbgeUAHkPHFCISnv4mKGzSDmJ0TGSjiUmOR1mC9Un_Uzb4rLWTxnMNA&usqp=CAY" },
    { id: 14, title: "Dark Harvest", price: 559, author: "Norman Partridge", type: "Horror", img: "https://orion-uploads.openroadmedia.com/sm_f35ece99d5fa-dh-1.jpg" },
    { id: 15, title: "The Butterfly Lion", price: 893, author: "Michael Morpurgo", type: "Cartoon", img: "https://m.media-amazon.com/images/I/71mTjik-miL._SY342_.jpg" },
    { id: 16, title: "The Inheritance Games", price: 299, author: "Jennifer Lynn Barnes", type: "Fantasy", img: "https://booktime584.wordpress.com/wp-content/uploads/2023/03/inhertancegames.jpg" },
    { id: 17, title: "Harry Potter and the Prisoner of Azkaban", price: 1492, author: "J.K.Rowling", type: "Fantasy", img: "https://m.media-amazon.com/images/I/81NQA1BDlnL._SY342_.jpg" },
    { id: 18, title: "The Sage's Secret ", price: 188, author: "ABHINAV ", type: "Fantasy", img: "https://m.media-amazon.com/images/I/61sbOraV0xL._SY342_.jpg" },
    { id: 19, title: "The Mystery Box", price: 180, author: "Roma N. Dessai", type: "Fantasy", img: "https://m.media-amazon.com/images/I/61GDssrhOLL._SY342_.jpg" },
    { id: 20, title: "Skyward by Brandon Sanderson", price: 455, author: "Brandon Sanderson", type: "Fantasy", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQRDAA2yzEytz3hXKyU1c0p0kPDjua6V3lPmsq_IbCKuB2gEkaVz5ztCCpn9LVgcESi52R-diXDWioT2rZRlC-GKlLfeQYv1LJWBY2JeZP1NYWpRFiWSSrB&usqp=CAE" },
    { id: 21, title: "The Dance of the Star Fairies", price: 699, author: "Elisabetta Dami", type: "Fantasy", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6UkN_BOhYsP95gjLgxdB1FxAceRKyyu94ymesYjj5v8_PGCR1BQAJcXytrUXU0G8aLAs7TKwLuoFcsHJyJnlvVX9hXolYE8UcXbgUlN8S&usqp=CAE" },
    { id: 22, title: "The Name of the Wind (The Kingkiller Chronicle) ", price: 950, author: " Patrick Rothfuss ", type: "Fantasy", img: "https://m.media-amazon.com/images/I/611iKJa7a-L._SY466_.jpg" },
    { id: 23, title: "Prisoner of Reign", price: 449, author: "Emma Right", type: "Adventure Fantasy", img: "https://m.media-amazon.com/images/I/91tVVREZrWL._SY342_.jpg" },
    { id: 24, title: "The Golden Book of 365 Stories", price: 1692, author: " Kathryn Jackson", type: "Fantasy", img: "https://m.media-amazon.com/images/I/91gQGnshu-L._SY342_.jpg" },
    { id: 25, title: "The Girl Who Became A Fish", price: 394, author: "Polly Ho-Yen", type: "Fantasy", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgzGVVohIRtKVupGXnD5wgYzb-C_nCFzfVaEhO-9QEfasRya19E8PsjnsyXtYUm3hLvd-8dggyhhhjPZddKszARpOuxsBaHkp8ZB14RWmo" }

];

const BookList = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const addToCart = (book) => {
    setCart([...cart, book]);
    setTotalPrice(totalPrice + book.price);
  };

  const filterBooks = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    // Filter books based on min and max price
    const filtered = books.filter((book) => {
      const bookPrice = book.price;
      return (
        (isNaN(min) || bookPrice >= min) &&
        (isNaN(max) || bookPrice <= max)
      );
    });

    setFilteredBooks(filtered);
  };

  // Function to handle the "Buy" button click
  const buyNow = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some books to your cart before purchasing.");
    } else {
      const bookTitles = cart.map((book) => book.title).join(", ");
      const totalAmount = cart.reduce((sum, book) => sum + book.price, 0);
      alert(`You have purchased the following books: ${bookTitles}.\nTotal: ₹${totalAmount}`);
      setCart([]);
      setTotalPrice(0);
    }
  };

  return (
    <div className="bookstore-container">
      <h1>SM BOOK WORLD</h1>

      <div className="filters">
        <label>Min Price: </label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min"
        />
        <label>Max Price: </label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max"
        />
        <button className="filter-btn" onClick={filterBooks}>
          Filter
        </button>
      </div>

      <h2>Book List</h2>

      <div className="book-list">
        {filteredBooks.map((book, index) => (
          <div className="book-item" key={index}>
            <img src={book.img} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>Price: {book.price} Rs</p>
            <button onClick={() => addToCart(book)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Cart</h3>
        <p>Total Books: {cart.length}</p>
        <p>Total Price: ₹{totalPrice}</p>
        <button className="buy-btn" onClick={buyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BookList;
