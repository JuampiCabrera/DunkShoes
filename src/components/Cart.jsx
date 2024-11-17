import { useCart } from "../context/cartContext"

function Cart () {
    const { cart } = useCart()
    
    return (
        <div>
            cart
        </div>
    )
}

export default Cart