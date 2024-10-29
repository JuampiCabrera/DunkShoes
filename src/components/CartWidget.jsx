import styles from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <button className={styles.cartButton} ><i className="bi bi-cart-plus">4</i></button> 
    )
}

export default CartWidget
