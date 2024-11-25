import { serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/cartContext"
import { createOrder } from "../firebase/db";
import styles from './Cart.module.css';

function Cart () {
    const { cart,getTotal, clearCart, removeFromCart } = useCart()

    const handleSubmit = (e) => {

        e.preventDefault()
        
        const form = e.target
        const [name, email, phone] = form

        const order = {
            buyer: {name: name.value, email: email.value, phone: phone.value},
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }
        createOrder (order)
    }
    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.title}>Detalle del Carrito</h2>
            <div>
                    <div>
                        <ul className={styles.itemList}>
                            <li className={styles.item}>
                                <div className={styles.itemDetails}>
                                    {cart.map(prod=>(
                                        <div key={prod.id} className={styles.listDetail}>
                                            <div className={styles.detail}>
                                            <img src={prod.thumbnail} className={styles.itemImage} />
                                            <h3 className={styles.itemName}>{prod.title}</h3>
                                            <p className={styles.itemPrice}>U$S {prod.price}</p>
                                            <p className={styles.quantity}>Cant: {prod.qty}</p>
                                            </div>
                                            <div className={styles.action}>
                                            <button className={styles.removeButton}  onClick={() => removeFromCart(prod.id)}>
                                            ❌ Eliminar
                                            </button>
                                            </div>
                                            
                                        </div>
                                    ))}
                                </div>

                            </li>
                        </ul>
                    </div>
                    
                    <div className={styles.total}>
                        <div>Total:</div>
                        <div>$ {getTotal()}</div>
                    </div>
                    <div>
                        <button className={styles.clearButton} onClick={() => clearCart(cart)}>Vaciar el carrito</button>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input type="text" placeholder="Nombre" required/>
                            <input type="email" placeholder="Dunk@gmail.com" required/>
                            <input type="text" placeholder="Numero de telefono" required/>
                            <button type="submit" className={styles.buyButton}>Finalizar la compra</button>
                        </form>
                    </div>
                    
            </div>
        </div>
    )
}

export default Cart