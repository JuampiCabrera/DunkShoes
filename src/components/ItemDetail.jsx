function ItemDetail ({detail}){
    return(
        <div>
            <img src={detail?.images[0]} style={{width:'500px', height:'500px'}}/>
            <h1>{detail?.title}</h1>
            <h2>{detail?.category}</h2>
            <p>{detail?.description}</p>
            <p>${detail?.price}</p>
        </div>
    )
}

export default ItemDetail