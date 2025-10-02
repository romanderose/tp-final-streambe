import { useCart } from '../../contexts/CartContext'

function Cart(){
    const {cart, removeFromCart, cleanCart, totalItems, totalPrice} = useCart()

    return(
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (<p>Carrito vacío</p>) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.nombre} - {item.precio}
                                <button onClick={()=> removeFromCart(item.id)}>
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>

                    <p>Items totales: {totalItems}</p>
                    <p>Precio total: {totalPrice}</p>
                    <button onClick={cleanCart}>Vaciar carrito</button>
                </>
            )}
        </div>
    )
}

export default Cart