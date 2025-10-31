import { useParams } from "react-router-dom"
import { useCart } from '../contexts/CartContext'
import { useArticles } from "../contexts/ArticlesContext"
import API_BASE_URL from "../config/api"
import "../styles/pages/Detalles.css"

function Detalles() {

    const { id } = useParams()
    const { addToCart } = useCart()
    
    const { articles } = useArticles()

    const article = articles.find(article => article.id === parseInt(id))

    return(
        <div id="detalles">
            <h1>Detalles del artículo</h1>

            <p>ID de artículo: { id }</p>

            <img 
                className="img-detalle"
                src={`${API_BASE_URL}${article.imageUrl}`} 
                alt={article.name_article} 
            />

            <p>Nombre: {article.name_article}</p>

            <p>Precio: ${article.price}</p>

            <button onClick={() => addToCart(article)}>
                Agregar al carrito 
            </button>
        </div>
    )
} 

export default Detalles