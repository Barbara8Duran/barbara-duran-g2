import './CartPage.css'
import React from 'react';
import useCartStore from '../../../store/store';

export default function CartPage() {
    const cart = useCartStore((state) => state.cart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const clearCart = useCartStore((state) => state.clearCart);

    const handleIncrease = (productId, quantity, stock) => {
        if (quantity < stock) {
            updateQuantity(productId, quantity + 1);
        }
    };

    const handleDecrease = (productId, quantity) => {
        if (quantity > 1) {
            updateQuantity(productId, quantity - 1);
        }
    };

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleClearCart = () => {
        clearCart();
    };

    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const formattedTotal = totalPrice % 1 === 0 ? totalPrice.toFixed(0) : totalPrice.toFixed(2);

    return (
        <div className='cart-prod'>
            <h1>Tu Carrito</h1>
            {cart.length === 0 ? (
                <p>No hay productos en tu carrito</p>
            ) : (
                <div>
                    {cart.map((product) => (
                        <div key={product.id} className="cart-item">
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <button onClick={() => handleDecrease(product.id, product.quantity)}>
                                -
                            </button>
                            <p>Cantidad: {product.quantity}</p>
                            <button onClick={() => handleIncrease(product.id, product.quantity, product.stock)}>
                                +
                            </button>
                            <button onClick={() => handleRemove(product.id)}>
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h2>Total de la compra: ${formattedTotal}</h2>
                        <button className="checkout-btn">
                            Pagar
                        </button>
                        <button className="clear-cart-btn" onClick={handleClearCart}>
                            Vaciar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
