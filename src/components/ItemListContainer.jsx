function ItemListContainer({color , width, height, border, display, alignItems, justifyContent, flexDirection,label}) {
    return (
        <div style={{color: color,
            width: width,
            height: height,
            border: border,
            display: display,
            alignItems: alignItems,
            justifyContent: justifyContent,
            flexDirection: flexDirection
        }}>
            <h1>
                {label}
            </h1>
        </div>
    )
}

export default ItemListContainer