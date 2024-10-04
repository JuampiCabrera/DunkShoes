function ItemListContainer(props) {
    return (
        <div style={{color: props.color,
            width: props.width,
            height: props.height,
            border: props.border,
            display: props.display,
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
            flexDirection: props.flexDirection
        }}>
            <h1>Hola Mundo</h1>
        </div>
    )
}

export default ItemListContainer