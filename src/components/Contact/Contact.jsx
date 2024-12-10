import React, { useState } from 'react';


export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nombre: ${name}\nEmail: ${email}\nTeléfono:`);

    };

    return (
        <div className="container mx-auto max-w-[1170px] px-4 py-8 flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    Síguenos en nuestras redes sociales para mantenerte al día con las últimas noticias, eventos y
                    promociones
                    en Instagram, Facebook y Twitter.
                    <img src="/../../src/Assets/Images/redes sociales.jpg" className="w-full h-100 object-cover" />
                </p>
            </div>

            <div className="w-full lg:w-1/2">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full">
                    <h2 className="text-2xl font-bold mb-6 text-center">INGRESA CON TU CUENTA PERSONAL Y OBTEN DESCUENTOS EN FUTBOL MARKET</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-blue-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-blue-700">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-blue-700">Teléfono (opcional)</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}
