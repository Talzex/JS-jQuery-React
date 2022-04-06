import './css/Searchbar.css'

const Searchbar = ({setQuery, search}) => {
    return (
        <div className="Searchbar">
            <form>
                <input type="text" className="searchInput" placeholder="Rechercher" onChange={f => setQuery(f.target.value)}></input>
                <input type="submit"  className="submitInput"value='Rechercher' onClick={(e) => {search(e)}}></input>
            </form>
        </div>
    );
}

export default Searchbar