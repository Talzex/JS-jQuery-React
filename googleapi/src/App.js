import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Library from './Components/Library';
import axios from "axios"

const book_per_page = 9;

function App() {

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(book_per_page);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q=Victor+Hugo&maxResults=40")
    .then((res) => setBooks(res.data.items))


  },[]);

  let myBooks = books
  const idLastBook = currentPage * booksPerPage;
  const idFirstBook = idLastBook - booksPerPage;

  if(query != "") {
    myBooks = books.filter(book => {
        return book.volumeInfo.title.toLowerCase().includes(query.toLowerCase());
    });
}

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const currentBooks = myBooks.slice(idFirstBook, idLastBook);
  return (
    <div className="App">
      <Header
        query={query}
        setQuery={setQuery}
      />
      <Library
        books={currentBooks}
        query={query}
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
