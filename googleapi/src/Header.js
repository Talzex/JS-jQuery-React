import './Header.css';
import Searchbar from './Searchbar'

const Header = () => {
    return (
        <header className="Header">
            <h1 className="Title-header">GOOGLE API</h1>
            <Searchbar/>
        </header>
    )
}

export default Header;