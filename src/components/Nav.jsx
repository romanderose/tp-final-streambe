import { Link } from "react-router-dom"

function Nav() {
    return(
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/tienda">Tienda</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
    )
}

export default Nav