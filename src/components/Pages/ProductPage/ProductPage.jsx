import "./ProductPage.css"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';

import Loading from '../../Loading/Loading.jsx';
import Banner from "../../Banner/Banner.jsx";

import useCartStore from "../../../store/store.jsx";

export default function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ name: '', stock: 0, price: 0, img: '', description: '' });
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const addToCart = useCartStore((state) => state.addToCart);
  
    useEffect(() => {
      getProductById(productId).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }, [productId]);
  
    const incrementQuantity = () => {
      if (quantity < product.stock) setQuantity(quantity + 1);
    };
  
    const decrementQuantity = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };
  
    const handleAddToCart = () => {
      addToCart(product, quantity);
    };
  
    if (loading) {
      return <Loading />;
    }
  
    return (
      <>
        <div className="mw-banner1">
        <Banner
                title="Haz una donación"
                subtitle="Ayuda a los adorables felinos!"
                backgroundImage="/mw-banner.jpg"
                height="30vh"
                width="100%"
                h1PaddingTop="60px"
            />
        </div>

        <div className="l-container">
          <div className="s-container">
            <div className="img-p">
              <img src={product.img} alt="Imagen del productos" />
            </div>
          </div>

          <div className="text-container">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>

            <div className="i-d-button">
              <button className="i-button" onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button className="d-button" onClick={incrementQuantity}>+</button>
            </div>

            <button className="buy-button" onClick={handleAddToCart}>Agregar al carrito</button>
          </div>
        </div>
      </>
    );
  }