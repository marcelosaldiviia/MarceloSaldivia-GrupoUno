import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useBag from '../../store/useBag';

export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useBag(state => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-blue-950 text-white py-4">
            <div className="container mx-auto max-w-[1170px] flex flex-wrap justify-between items-center bg-white p-4">
                <div className="flex flex-grow justify-center items-center space-x-4">
                    <img src='/logo.png' alt="Logo Principal" className="h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-28" />
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber text-black">FUTBOL MARKET</h1>
                </div>

                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="flex col-auto pr-4">
                    <li className="list-none mx-[15px] my-2 lg:my-0 text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,115,0)] hover:outline-0 hover:no-underline hover:bg-none">
                        <Link to="/cart" className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <FaShoppingCart className="text-xl mr-2" />
                            {totalItems > 0 && (
                                <span className="bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                            Tu Carrito
                        </Link>
                    </li>
                </div>
                <div className={`lg:flex lg:items-center w-full lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}
