import './css/Header.css';
import Searchbar from './Searchbar'

const Header = ({setQuery, search}) => {
    return (
        <header className="Header">
            <h1 className="Title-header">GOOGLE API</h1>
            <Searchbar
            setQuery={setQuery}
            search={search}
            />
        </header>
    );
}

export default Header;