import Book from './Book'
import './css/Library.css'

const Library = ({ books }) => {

    if (!books.length)
        return (
            <div className="Library">
                <h2 className="error-info">Aucun résultat</h2>
            </div>
        );

    return (
        <div className="Library">
            {books.map((book, index) => (
                <Book key={index} book={book} />
            ))}
        </div>
    );
};

export default Library