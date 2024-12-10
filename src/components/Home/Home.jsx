import React from 'react';
import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import imgbanner from "../../Assets/Images/navidad24_ES.jpg";
import './HomePage.css';


export default function HomePage() {
    const imgBanner = imgbanner;

    return (
        <div>

            <div className="banner">
                <div className="marquee">
                    <span>OFERTA EN CALZADO DE FUTBOL POR LA COMPRA DE UN ACCESORIO</span>
                </div>
            </div>

            <div
                className="h-[450px] w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${imgBanner})` }}
            >
                <div className="container mx-auto max-w-[720px] flex flex-col h-full justify-center text-center relative">
                    <Link
                        to="/products"
                        className="bg-blue-700 px-[70px] py-[15px] text-[19px] uppercase leading-[40px] text-center text-[#ffffff] absolute bottom-[30px] right-[12px]"
                    >
                        COMPRA AQUI
                    </Link>
                </div>
            </div>

            <div className="container mx-auto max-w-[1200px] my-[90px]">
                <h2 className="text-6xl font-bold text-center my-[80px]">PRODUCTOS DISPONIBLES</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Link to="/category/Botines">
                            <img src='/../../src/Assets/Images/adidas portada.jpg' className="w-full h-100 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">BOTINES DE FUTBOL</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Link to="/category/Balones">
                            <img src='/../../src/Assets/Images/BALON DE FUTBOL.jpg' alt='Balones' className="w-full h-100 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">BALONES DE FUTBOL</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Link to="/category/Camisetas">
                            <img src='/../../src/Assets/Images/camiseta real madrid.jpg' alt='Camisetas Deportivas' className="w-full h-100 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">CAMISETAS DEPORTIVAS</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Link to="/category/Accesorios">
                            <img src='/../../src/Assets/Images/Canillera Nike PORTADA.jpg' alt='Accesorios' className="w-full h-100 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">ACCESORIOS</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-[1170px] my-[50px]">
                <ItemList />
            </div>
        </div>
    );
}
