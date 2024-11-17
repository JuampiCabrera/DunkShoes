import { useCart } from "../context/cartContext"

function Cart () {
    const { cart } = useCart
    console.log(cart)
    return (
        <div>Cart</div>
    )
}

export default Cart