import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md lg:bg-transparent lg:shadow-none">
            <ul className="flex flex-col lg:flex-row lg:flex-auto lg:justify-center p-4 lg:p-0">
                <li className="mx-2 my-2 lg:my-0 text-[14px] font-normal uppercase text-black transition duration-300 ease-linear hover:text-blue-700 hover:bg-gray-200 lg:hover:bg-transparent p-2 rounded">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="mx-2 my-2 lg:my-0 text-[14px] font-normal uppercase text-black transition duration-300 ease-linear hover:text-blue-700 lg:hover:bg-transparent p-2 rounded">
                    <Link to="/products">Productos</Link>
                </li>
                <li className="mx-2 my-2 lg:my-0 text-[14px] font-normal uppercase text-black transition duration-300 ease-linear hover:text-blue-700 lg:hover:bg-transparent p-2 rounded">
                    <a href="/category/Botines">Botines</a>
                </li>
                <li className="mx-2 my-2 lg:my-0 text-[14px] font-normal uppercase text-black transition duration-300 ease-linear hover:text-blue-700 lg:hover:bg-transparent p-2 rounded">
                    <a href="/category/Balones">Balones</a>
                </li>
                <li className="mx-2 my-2 lg:my-0 text-[14px] font-normal uppercase text-black duration-300 ease-linear hover:text-blue-700 hover:bg-gray-200 lg:hover:bg-transparent p-2 rounded">
                    <a href="/category/Camisetas">Camisetas</a>
                </li>
                <li className="mx-2 my-2 lg:my-0 text-[14px] font-normal uppercase text-black transition duration-300 ease-linear hover:text-blue-700 hover:bg-gray-200 lg:hover:bg-transparent p-2 rounded">
                    <a href="/category/Accesorios">Accesorios</a>
                </li>
                <li className="mx-2 my-2 lg:my-0 text-[14px] font-normal uppercase text-black duration-300 ease-linear hover:text-blue-700 lg:hover:bg-transparent p-2 rounded">
                    <Link to="/About">Acerca de</Link>
                </li>
                <li className="mx-2 my-2 lg:my-0 text-[14px] font-normal uppercase text-black transition duration-300 ease-linear hover:text-blue-700 hover:bg-gray-200 lg:hover:bg-transparent p-2 rounded">
                    <Link to="/contact">Contáctanos</Link>
                </li>
            </ul>
        </nav>
    );
}
