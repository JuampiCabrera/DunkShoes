// import React, { useContext } from 'react';
// import { cartContext } from './cartContext';

// function CartDetail() {
//     const { cart, getQuantity } = useContext(cartContext);

//   // Calcular el total del carrito
//     const calculateTotal = () => {
//         return cart.reduce((total, item) => total + item.price * item.qty, 0);
//     };

//     return (
//         <div>
//             <h1>Carrito de Compras</h1>
//             {cart.length === 0 ? (<p>Tu carrito está vacío</p>) : ( 
//             <div border="1" style={{ width: '100%', textAlign: 'left' }}>
//                 <div>
//                     <div>
//                         <div>Producto</div>
//                         <div>Cantidad</div>
//                         <div>Precio Unitario</div>
//                         <div>Subtotal</div>
//                         <div>Acciones</div>
//                     </div>
//                 </div>
//                 <div>
//                     {cart.map((item) => (
//                     <div key={item.id}>
//                         <div>{item.name}</div>
//                         <div>{item.qty}</div>
//                         <div>${item.price.toFixed(2)}</div>
//                         <div>${(item.price * item.qty).toFixed(2)}</div>
//                         <div><button onClick={() => removeItemFromCart(item.id)} style={{ backgroundColor: 'red', color: 'white' }}>
//                         Eliminar
//                         </button></div>
//                     </div>
//                     ))}
//                 </div>
//                 <div>
//                     <div>
//                         <div colSpan="3" style={{ textAlign: 'right' }}><strong>Total:</strong></div>
//                     <div>${calculateTotal().toFixed(2)}</div>
//                     </div>
//                 </div>
//             </div>
//         )}
//         <p><strong>Total de productos:</strong> {getQuantity()}</p>
//     </div>
//     );
// }

// export default CartDetail;