import styles from './ItemDetail.module.css'
import ItemCount from './ItemCount'

function ItemDetail ({detail}){
    return(
        <div className={styles.containerDetail}>
            <div>
                <img src={detail?.thumbnail} className={styles.imgDetail}/>
            </div>
            <div className={styles.containerText}>
                <h1>{detail?.title}</h1>
                <h2>{detail?.category}</h2>
                <p>{detail?.description}</p>
                <p>${detail?.price}</p>
                <ItemCount detail={detail}/>
            </div>
        </div>
    )
}

export default ItemDetail