import { create } from 'zustand';


const getLocalStorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
};


const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const useBag = create((set) => ({
    cart: getLocalStorage('cart', []),
    total: getLocalStorage('total', 0),
    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
        let newCart;

        if (existingItem) {
            newCart = state.cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        } else {
            newCart = [...state.cart, { ...item, quantity: 1 }];
        }
        const newTotal = state.total + item.price;

        setLocalStorage('cart', newCart);
        setLocalStorage('total', newTotal);

        return { cart: newCart, total: newTotal };
    }),
    removeFromCart: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
        let newCart;

        if (existingItem.quantity > 1) {
            newCart = state.cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
        } else {
            newCart = state.cart.filter(cartItem => cartItem.id !== item.id);
        }

        const newTotal = state.total - item.price;

        setLocalStorage('cart', newCart);
        setLocalStorage('total', newTotal);

        return { cart: newCart, total: newTotal };
    }),
    clearCart: () => set(() => {

        localStorage.removeItem('cart');
        localStorage.removeItem('total');

        return { cart: [], total: 0 };
    })
}));

export default useBag;
