import { Link } from "react-router-dom"

function Tienda() {
    const articulos = [
        {id: 1, nombre: "Figuritas", precio:1300},
        {id: 2, nombre: "Bermuda", precio:20000},
        {id: 3, nombre: "Bufanda", precio:2500}
    ]

    return(
        <>
            {articulos.map(articulo => (
                <div key={articulo.id}>

                    <Link to={`/detalles/${articulo.id}`}>

                        <h2>{articulo.nombre}</h2>
                        
                        <p>Ver detalles:</p>
                    </Link>
                </div>
            ))}
        </>
    )
}
 
export default Tienda