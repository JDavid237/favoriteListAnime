import { NavLink } from "react-router"

export function Header() {
    return (
        <header className="header">
            <div className="banner">
                <div><span>Anime</span> list</div>   
            </div>
            <div className="navbar">
                <nav>
                    <NavLink to="/" className={`button ${({isActive}) => isActive ? 'active' : ''}`}><span>Animes</span></NavLink>
                    <NavLink to="/favoritos" className={`button ${({isActive}) => isActive ? 'active' : ''}`}><span>Mi Lista</span></NavLink>
                </nav>
            </div>
        </header>
    )
}