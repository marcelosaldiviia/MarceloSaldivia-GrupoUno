import React from 'react';

export default function FooterComponent() {
    return (
        <footer className="bg-blue-950 py-[60px] w-full">
            <div className="container mx-auto max-w-[1170px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-[#ffffff] text-lg font-bold">Contacto</h3>
                        <p className="text-[#bbbbbb]">Email: contacto@futbolmarket.com</p>
                        <p className="text-[#bbbbbb]">Email: marcelopablo.saldivia@alumnos.ulagos.cl</p>
                        <p className="text-[#bbbbbb]">Teléfono: +56 9 77612501</p>
                    </div>
                    <div>
                        <h3 className="text-[#ffffff] text-lg font-bold">Enlaces Rápidos</h3>
                        <ul className="text-[#bbbbbb] space-y-2">
                            <li><a href="/" className="hover:underline">Inicio</a></li>
                            <li><a href="/products" className="hover:underline">Productos</a></li>
                            <li><a href="/about" className="hover:underline">Acerca de</a></li>
                            <li><a href="/contact" className="hover:underline">Contactos</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#ffffff] text-lg font-bold">Información Legal</h3>
                        <ul className="text-[#bbbbbb] space-y-2">
                            <li><a href="/privacy" className="hover:underline">Política de Privacidad</a></li>
                            <li><a href="/terms" className="hover:underline">Términos y Condiciones</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#bbbbbb]">
                        <i className="fab fa-facebook text-2xl"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#bbbbbb]">
                        <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#bbbbbb]">
                        <i className="fab fa-instagram text-2xl"></i>
                    </a>
                </div>
                <div className="text-center text-[#bbbbbb]">
                    <p>&copy; 2024 Futbol Market. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
