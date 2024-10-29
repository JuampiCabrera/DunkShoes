import styles from './ItemDetail.module.css'

function ItemDetail ({detail}){
    return(
        <div className={styles.containerDetail}>
            <div>
                <img src={detail?.images[0]} className={styles.imgDetail}/>
            </div>
            <div className={styles.containerText}>
                <h1>{detail?.title}</h1>
                <h2>{detail?.category}</h2>
                <p>{detail?.description}</p>
                <p>${detail?.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail