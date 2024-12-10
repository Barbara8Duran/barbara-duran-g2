import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => {
        set((state) => {
            const existingProductIndex = state.cart.findIndex(item => item.id === product.id);
            if (existingProductIndex >= 0) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].quantity += product.quantity;
                return { cart: updatedCart };
            } else {
                return { cart: [...state.cart, {...product, quantity: product.quantity || 1}] };
            }
        });
    },
    removeFromCart: (productId) => {
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
        }));
    },
    clearCart: () => set({ cart: [] }),
    updateQuantity: (productId, quantity) => {
        set((state) => {
            const updatedCart = state.cart.map((item) => {
                if (item.id === productId) {
                    return { ...item, quantity };
                }
                return item;
            });
            return { cart: updatedCart };
        });
    },
}));

export default useCartStore;