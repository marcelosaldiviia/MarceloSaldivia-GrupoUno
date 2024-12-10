import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useBag from '../../store/useBag';

export default function CartIcon() {
    const cart = useBag(state => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart className="text-2xl text-gray-700" />
            {totalItems > 0 && (
                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-600 text-white text-xs text-center leading-tight">
                    {totalItems}
                </span>
            )}
        </Link>
    );
}
