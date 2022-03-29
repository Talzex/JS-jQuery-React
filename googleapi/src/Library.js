import React, { useState, useEffect } from "react";
import axios from "axios"
import './Library.css'

const Library = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("https://www.googleapis.com/books/v1/volumes?q=Victor+Hugo&maxResults=40")
        .then((res) => setData(res.items))


    })
    return(
        <div className="Library">
            <ul className="books-list">
                
            </ul>
        </div>
    )
}

export default Library