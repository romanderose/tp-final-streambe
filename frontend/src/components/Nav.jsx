import { Link } from "react-router-dom"
import { useCart } from '../contexts/CartContext'

function Nav() {
    const { cart } = useCart()

    return(
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/tienda">Tienda</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/cart">Carrito ({cart.length}) </Link>
        </nav>
    )
}

export default Nav