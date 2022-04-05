import './css/Book.css'

const Book = ({ book,query }) => {
    let thumbnail =  "https://via.placeholder.com/150x200";
    if(book.volumeInfo.imageLinks) thumbnail = book.volumeInfo.imageLinks.thumbnail;

    let title = book.volumeInfo.title;
    let year = book.volumeInfo.publishedDate;
    let buylink = book.saleInfo.buyLink

    let summary = book.volumeInfo.description;
    if(book.volumeInfo.description){
        if (book.volumeInfo.description.length > 100)
            summary = CapitalizeFirstLetter(
                book.volumeInfo.description.substring(0, 100).toLowerCase() + "..."
            );
    } else {
        summary = "Pas de description...";
    }

    return (
        <div className="book">
            <img src={thumbnail} alt={book.volumeInfo.title} className="img"/>
            <div className="text">
                <div className="title-year">
                    <a href={buylink}>
                        <h3 className="title">{title}</h3>
                    </a>
                    <h3 className="year">{year}</h3>
                </div>
                <span className="desc">{summary}</span>
            </div>
        </div>
    );
}

function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Book