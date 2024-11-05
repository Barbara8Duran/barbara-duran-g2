import './Navbar.css'
import {Link} from "react-router-dom"
import React, {useState} from "react"


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false) 
    return(
        <>
            <nav>
                <div className='menu' onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/shop">Tienda</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contactos</Link>
                    </li>
                    <li><Link to="/about">About</Link>
                    </li>
                    <li><Link to="/cart">Carrito</Link>
                    </li>
                </ul>

            </nav>
        </>)
}