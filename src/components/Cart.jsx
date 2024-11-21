import { useCart } from "../context/cartContext"
import styles from './Cart.module.css';

function Cart () {
    const { cart } = useCart()
    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.title}>Detalle del Carrito</h2>
            <div>
                    <div>
                        <ul className={styles.itemList}>
                            <li className={styles.item}>
                                <div className={styles.itemDetails}>
                                    {cart.map(prod=>(
                                        <div >
                                        <img src={prod.thumbnail} className={styles.itemImage} />
                                            <h3 className={styles.itemName}>{prod.title}</h3>
                                            <p>{prod.qty}</p>
                                            <p className={styles.itemPrice}>{prod.price}</p>
                                        </div>
                                    ))}
                                </div>
                                <button className={styles.removeButton} onClick={() => onRemoveItem(item.id)} >
                                    Eliminar
                                </button>
                            </li>
                        </ul>
                    </div>
                    
                    <div className={styles.total}>
                        <span>Total:</span>
                        <span></span>
                    </div>
                    <div>
                        <button onClick={() => clearCart()}>Vaciar el carrito</button>
                    </div>

                    <div>
                        <form className={styles.form}>
                            <input type="text" placeholder="Nombre" required/>
                            <input type="email" placeholder="Dunk@gmail.com" required/>
                            <input type="text" placeholder="Numero de telefono" required/>
                            <button type="submit">Finalizar la compra</button>
                        </form>
                    </div>
                    
            </div>
        </div>
    )
}

export default Cart