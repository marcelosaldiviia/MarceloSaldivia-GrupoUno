import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { getProducts, getProductByCategory } from '../../data/asyncMock';
import Loading from '../Loading/Loading';

export default function ItemList({ products: initialProducts, category }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            let data;
            if (category) {
                console.log('Fetching products for category:', category);
                data = await getProductByCategory(category);
            } else {
                data = await getProducts();
            }
            console.log('Fetched products:', data);
            setProducts(data);
            setLoading(false);
        };

        if (!initialProducts) {
            fetchProducts();
        } else {
            setLoading(false);
        }
    }, [initialProducts, category]);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <Loading />
                </div>
            ) : (
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap justify-center">
                        {products.map((prod) => (
                            <Item {...prod} key={prod.id} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
