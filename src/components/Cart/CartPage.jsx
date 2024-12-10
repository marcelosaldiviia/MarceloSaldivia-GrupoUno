import React from 'react';
import useBag from '../../store/useBag';
import './cart.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const cart = useBag(state => state.cart);
    const total = useBag(state => state.total);
    const removeFromCart = useBag(state => state.removeFromCart);
    const clearCart = useBag(state => state.clearCart);

    return (
        <div className="cart">
            <h1> TU LISTA DE COMPRAS :)</h1>
            <div className="cart-container">

                {cart.length === 0 ? (
                    <div className="bg-white shadow-md rounded-lg overflow-hidden p-10 text-center">
                        <h3>NO HAS SELECCIONADO NADA PARA COMPRAR:(</h3>

                        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 ">
                            INICIO DE PAGINA
                        </Link>
                    </div>
                ) : (
                    <ul>
                    {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.img} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Precio: ${item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <button onClick={() => removeFromCart(item)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <div className="cart-total">
                        <h3>Total: ${total}</h3>
                        <button onClick={clearCart}>Vaciar Carrito</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;
