import './css/Header.css';
import Searchbar from './Searchbar'

const Header = ({query, setQuery}) => {
    return (
        <header className="Header">
            <h1 className="Title-header">GOOGLE API</h1>
            <Searchbar
            query={query}
            setQuery={setQuery}
            />
        </header>
    );
}

export default Header;