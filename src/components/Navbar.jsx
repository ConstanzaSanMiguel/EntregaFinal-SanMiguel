
import CartWidget from './CartWidget'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="menu">
                <div><a href="#"><img src="src\images\vibelogo.png" alt="Vibe logo" /></a></div>
                <nav className="navbar">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#">Kpop albums<i className="fa-solid fa-angle-down"></i></a>
                            <div className="dropdown-content">
                                <a href="#">Shop by group <i className="fa-solid fa-angle-right"></i></a>
                                <a href="#">Shop by solo <i className="fa-solid fa-angle-right"></i></a>
                                <a href="#">Hot groups <i className="fa-solid fa-angle-right"></i></a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#">Kpop merch / DVD<i className="fa-solid fa-angle-down"></i></a>
                            <div className="dropdown-content">
                                <a href="#">Official goods</a>
                                <a href="#">Official lightsticks</a>
                                <a href="#">Hot sale</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#">Latest</a>
                        </li>
                        <li className="search-icon"><i className="fa-solid fa-magnifying-glass fa-rotate-90"></i></li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </>
    )
}

export default Navbar