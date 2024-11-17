import {useCart} from '../context/cartContext'
import { Link } from 'react-router-dom';
import styles from './CartWidget.module.css'

const CartWidget = () => {
    const {getQuantity} = useCart()
    return (
        <button as={Link} to={'/cart'} className={styles.cartButton}><i className="bi bi-cart-plus">{getQuantity()}</i></button> 
    )
}

export default CartWidget
