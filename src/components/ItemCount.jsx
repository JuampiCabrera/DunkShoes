import { useState, useContext } from "react"
import { cartContext } from "../context/cartContext"
import styles from './ItemCount.module.css'

function ItemCount({detail}){
    const [count, setCount] = useState(1)
    const {addToCart} = useContext(cartContext)

    const handleAdd =() => setCount(count + 1)
    const handleSub = () => setCount(count - 1)


    const handleAddToCart = () => addToCart({...detail, qty:count})

    return(
        <div className={styles.countContainer}>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button className={styles.buttonAdd} onClick={handleAddToCart} >add to cart</button>
            <button onClick={handleSub}>-</button>
        </div>
    )
}

export default ItemCount