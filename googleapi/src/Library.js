import Book from './Book'
import './Library.css'

const Library = ({ books }) => {
    return(
        <div className="Library">
            {books.map((book, index) => (
                <Book key={index} book={book}/>
            ))}
        </div>
    );
};

export default Library