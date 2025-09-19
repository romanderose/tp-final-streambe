import { Link } from "react-router-dom"

function Tienda() {
    const articulos = [
        {id: 1, nombre: "Figuritas"},
        {id: 2, nombre: "Bermuda"},
        {id: 3, nombre: "Bufanda"}
    ]

    return(
        <>
            {articulos.map(articulo => (
                <div key={articulo.id}>
                    <Link to={`/detalles/${articulo.id}`}>
                        <h2>{articulo.nombre}</h2>
                    </Link>
                </div>
            ))}
        </>
    )
}
 
export default Tienda