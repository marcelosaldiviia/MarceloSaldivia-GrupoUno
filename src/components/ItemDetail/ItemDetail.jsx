import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import useBag from '../../store/useBag.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ product: 0, stock: 0 });
    const [loading, setLoading] = useState(true);
    const addToCart = useBag(state => state.addToCart);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);
    const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };
    const precioTotal = product.price * quantity;
    if (loading) {
        return <div className="container mx-auto max-w-[1170px]"><Loading /></div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div className="container mx-auto max-w-[1170px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-[50px] pb-[100px]">
                <div className="col-span-1 lg:pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className="w-full rounded-[20px] shadow-lg" />
                </div>
                <div className="p-[30px] rounded-[20px] shadow-lg bg-white">
                    <h1 className="text-[45px] font-medium uppercase mb-[20px]">{product.name}</h1>

                    <p className="text-[20px] mb-[20px]">{product.description}</p>
                    <div>
                        <h3 className="text-[20px] font-bold mb-[10px]">Tallas disponibles:</h3>

                        <ul className="flex flex-wrap gap-4 mb-[20px]">
                            {product.sizes.map((size, index) => (
                                <li key={index}
                                    className="text-[20px] border-[1px] px-[10px] py-[5px] rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-200">{size}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-[20px] mb-[20px]">Stock: {product.stock}</p>
                    <div className="flex items-center mb-[20px]">

                        <button onClick={decrementQuantity}
                                className="rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center items-center">-
                        </button>
                        <p className="text-[20px] px-[10px]">{quantity}</p>

                        <button onClick={incrementQuantity}
                                className="rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center items-center">+
                        </button>

                    </div>
                    <p className="text-[20px] mb-[20px]">Precio: ${product.price} por unidad</p>
                    <p className="text-[20px] mb-[20px] font-bold">Precio Total: ${precioTotal}</p>

                    <button
                        onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, img: product.img })}
                        className="bg-blue-700 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
                    >
                        <Link to="/cart" className="bg-blue-700">
                            Añadir al Carrito
                        </Link>


                    </button>

                </div>
            </div>
        </div>
    );
}
