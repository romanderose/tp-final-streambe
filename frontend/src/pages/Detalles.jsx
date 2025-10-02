import { useParams } from "react-router-dom"
import { useCart } from '../contexts/CartContext'

function Detalles() {

    const { id } = useParams()
    const { addToCart } = useCart()
    const articulos = [
        {id: 1, nombre: "Figuritas", precio:1300},
        {id: 2, nombre: "Bermuda", precio:20000},
        {id: 3, nombre: "Bufanda", precio:2500}
    ]

    const article = articulos.find(art => art.id === parseInt(id))

    return(
        <div>
            <h1>Detalles del artículo</h1>

            <p>ID: { id }</p>

            <p>Nombre: {article.nombre}</p>

            <button onClick={() => addToCart(article)}>
                Agregar al carrito 
            </button>
        </div>
    )
} 

export default Detalles