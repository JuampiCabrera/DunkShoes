import React from "react";
import CartWidget from "./CartWidget"
function NavBar ({color, display, justifyContent, alignItems, flexDirection, padding, margin,width,height,textAlign,colorTitle}) {
    return (
        <nav style={{backgroundColor: color ,
            display: display,
            justifyContent: justifyContent,
            alignItems: alignItems,
            flexDirection: flexDirection,
            padding: padding,
            margin: margin,
            width: width,
            height: height,
            textAlign: textAlign,
            color: colorTitle,
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
