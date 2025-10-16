import { useParams } from "react-router-dom"
import { useCart } from '../contexts/CartContext'

function Detalles() {

    const { id } = useParams()
    const { addToCart } = useCart()
    
    const articles = [
        {id: 1, name: "Figuritas", precio:1300},
        {id: 2, name: "Bermuda", precio:20000},
        {id: 3, name: "Bufanda", precio:2500}
    ]

    const article = articles.find(article => article.id === parseInt(id))

    return(
        <div>
            <h1>Detalles del artículo</h1>

            <p>ID: { id }</p>

            <p>Nombre: {article.name}</p>

            <button onClick={() => addToCart(article)}>
                Agregar al carrito 
            </button>
        </div>
    )
} 

export default Detalles