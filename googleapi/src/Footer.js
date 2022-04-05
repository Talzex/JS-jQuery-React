import './Footer.css'

const Footer = ({ pageNumber, maxPages, paginate }) => {
    let next = pageNumber === maxPages ? pageNumber : pageNumber + 1;
    let previous = pageNumber === 1 ? pageNumber : pageNumber - 1;
    return(
        <footer className="Footer">
            <input
                type="submit"
                id="pageprec"
                value="<"
                onClick={() => paginate(previous)}
                disabled = {pageNumber === 1 ? true : ""}
            />
            <input
                type="submit"
                id="pagenext"
                value=">"
                onClick={() => paginate(next)}
                disabled = {pageNumber === maxPages ? true : ""}
            />
            
        </footer>
    );
};

export default Footer