import React from "react";
import CartWidget from "./CartWidget"
function NavBar (props) {
    return (
        <nav style={{backgroundColor: props.color ,
            display: props.display,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            flexDirection: props.flexDirection,
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height,
            textAlign: props.textAlign,
            color: props.colorTitle,


        }}>
            <h2>DUNK SHOES STORE</h2>
            <ul>
                <div>
                    <a href="#"><CartWidget/></a>
                </div>
                <li><a href="">Zapatillas</a></li>
                <li><a href="">Accesorios</a></li>
                <li><a href="">Indumentaria</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
