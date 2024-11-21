import styles from './CartWidget.module.css'
import {useCart} from '../context/cartContext'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const CartWidget = () => {
    const {getQuantity} = useCart()
    return (
        <Button as={Link} to={'/cart'} className={styles.cartButton}>
            <i className="bi bi-cart-plus">
                {getQuantity()}
            </i>
        </Button> 
    )
}

export default CartWidget
