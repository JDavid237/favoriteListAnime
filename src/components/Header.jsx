import { Filters } from "./Filters"

export function Header({changeViewSearch, viewSearch}) {
    return (
        <header className="header">
            <div className="banner">
                <span>Anime</span> list
            </div>
            <div className="navbar">
                <nav>
                    <button onClick={() => changeViewSearch(true)} className={`button ${viewSearch ? 'active' : ''}`}><span>Animes</span></button>
                    <button onClick={() => changeViewSearch(false)} className={`button ${!viewSearch ? 'active' : ''}`}> <span>My Lista</span></button>
                </nav>
            </div>
        </header>
    )
}