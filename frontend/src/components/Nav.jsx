import { Link } from "react-router-dom"
import { useCart } from '../contexts/CartContext'
import '../styles/components/Nav.css'

function Nav() {
    const { cart } = useCart()

    return(
        <nav>

            <ul id="menu">
                <li>
                    <Link to="/">Inicio</Link>
                </li>

                <li>
                    <Link to="/tienda">Tienda</Link>
                </li>

                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>

                <li>
                    <Link to="/cart">Carrito ({cart.length}) </Link>
                </li>    
            </ul> 
            
        </nav>
    )
}

export default Nav