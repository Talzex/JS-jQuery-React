import './css/Searchbar.css'
const Searchbar = ({query,setQuery}) => {
    return (
        <div className="Searchbar">
            <form>
                <input type="text" className="searchInput" placeholder="Rechercher" value={query} onInput={ (f) => setQuery(f.target.value)}></input>
            </form>
        </div>
    )
}

export default Searchbar