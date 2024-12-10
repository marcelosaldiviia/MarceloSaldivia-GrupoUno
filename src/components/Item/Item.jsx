import React from 'react';
import { Link } from "react-router-dom";
import useBag from '../../store/useBag.jsx';

export default function Item({ id, name, price, img }) {
    const addToCart = useBag(state => state.addToCart);

    return (
        <div className="w-72 h-[480px] rounded-lg overflow-hidden shadow-md m-4 flex flex-col items-center bg-white transition-transform transform hover:scale-105">
            <Link to={`/products/${id}`} className="w-full">
                <img className="w-full h-64 object-cover" src={img} alt="Imagen del Producto" />
            </Link>
            <div className="px-6 py-4 text-center flex-grow flex flex-col justify-between">
                <Link
                    to={`/products/${id}`}
                    className="text-xl font-semibold my-2 tracking-wide uppercase text-gray-800 hover:text-blue-700 focus:outline-none"
                >
                    {name}
                </Link>
                <h4 className="text-lg font-bold mb-4 text-green-600">
                    ${price}
                </h4>
                <button
                    onClick={() => addToCart({ id, name, price, img })}
                    className="bg-blue-700 text-white px-4 py-2 mt-2 rounded-full hover:bg-blue-800 focus:outline-none"
                >
                    Añadir al Carrito
                </button>
            </div>
        </div>
    );
}
