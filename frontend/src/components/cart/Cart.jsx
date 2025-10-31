import { useCart } from '../../contexts/CartContext'
import '../../styles/components/Cart.css'
import API_BASE_URL from '../../config/api'

function Cart(){
    const {cart, removeFromCart, cleanCart, totalItems, totalPrice} = useCart()

    return(
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (<p>Carrito vacío</p>) : (
                <>
                    <ul id='lista-cart'>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <img
                                    id='img-cart' 
                                    src={`${API_BASE_URL}${item.imageUrl}`} 
                                    alt={item.name_article} 
                                />

                                <p>
                                   {item.name_article} - ${item.price} 
                                </p>
                                
                                <button id='borrarDelCart' onClick={()=> removeFromCart(item.id)}>
                                    🗑
                                </button>
                            </li>
                        ))}
                    </ul>

                    <p>Cantidad total de artículos: {totalItems}</p>
                    <p>Precio total: ${totalPrice}</p>
                    <div>
                        <button id='vaciarCart' onClick={cleanCart}>Vaciar carrito</button>
                        <a id='comprar' href="">Finalizar compra</a>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart