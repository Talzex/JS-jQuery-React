import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Library from './Components/Library';
import axios from "axios"

const book_per_page = 6;

function App() {

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(book_per_page);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q=Jules+Verne&maxResults=40")
    .then((res) => setBooks(res.data.items))
  },[]);

  const idLastBook = currentPage * booksPerPage;
  const idFirstBook = idLastBook - booksPerPage;

  let searchAuthors = (event) => {
      event.preventDefault();
      axios.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:"+query+"&maxResults=40")
      .then(function (response){
        setBooks(response.data.items)
      }).catch(function (error) {
        console.log(error)
      });
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let currentBooks = [];
  let maxPage = 1;
    if(books){
        currentBooks = books.slice(idFirstBook, idLastBook);
        maxPage = Math.ceil(books.length / booksPerPage);
        console.log(maxPage)
    }

  return (
    <div className="App">
      <Header
        setQuery={setQuery}
        search={searchAuthors}
      />
      <Library
        books={currentBooks}
      />
      <Footer
        pageNumber={currentPage}
        maxPages={maxPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
