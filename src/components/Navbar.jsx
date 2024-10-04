
function NavBar (props) {
    return (
        <nav style={{backgroundColor: props.color ,
            display: props.display,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height,
            textAlign: props.textAlign,
            color: props.colorTitle,


        }}>
            <h2>DUNK SHOES STORE</h2>
            <ul>
                <li><a href="">Zapatillas</a></li>
                <li><a href="">Accesorios</a></li>
                <li><a href="">Indumentaria</a></li>
            </ul>
            <div>
            </div>
        </nav>
    )
}

export default NavBar
