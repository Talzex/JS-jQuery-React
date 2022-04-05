import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Library from './Library';
import axios from "axios"

const book_per_page = 9;

function App() {

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage] = useState(book_per_page);

  useEffect(() => {
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q=Victor+Hugo&maxResults=40")
    .then((res) => setBooks(res.data.items))


  },[]);

  let myBooks = books
  const idLastBook = currentPage * booksPerPage;
  const idFirstBook = idLastBook - booksPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const currentBooks = myBooks.slice(idFirstBook, idLastBook);
  return (
    <div className="App">
      <Header/>
      <Library
        books={currentBooks}
      />
      <Footer
        pageNumber={currentPage}
        maxPages={Math.ceil(myBooks.length / booksPerPage)}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
