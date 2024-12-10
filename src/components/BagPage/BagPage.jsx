import React from 'react';
import useBag from "../store/useBag";
import './bag.css';

const BagPage = () => {
    const cart = useBag(state => state.cart);
    const total = useBag(state => state.total);
    const removeFromCart = useBag(state => state.removeFromCart);
    const clearCart = useBag(state => state.clearCart);

    return (
        <div className="container mx-auto max-w-[1170px] px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Tu Carrito de Compras</h1>
            <div className="cart-container bg-white p-8 rounded-lg shadow-md">
                {cart.length === 0 ? (
                    <p className="text-center text-lg text-gray-700">Tu Carrito Está Vacío</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="cart-item flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg shadow">
                                <div className="flex items-center">
                                    <img src={item.img} alt={item.name} className="cart-item-img w-20 h-20 object-cover mr-4" />
                                    <div>
                                        <h3 className="text-lg font-bold">{item.name}</h3>
                                        <p className="text-gray-600">Precio: ${item.price}</p>
                                        <p className="text-gray-600">Cantidad: {item.quantity}</p>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <div className="cart-total flex justify-between items-center mt-8">
                        <h3 className="text-2xl font-bold">Total: ${total}</h3>
                        <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                            Vaciar Carrito
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BagPage;
