import "./ProductPage.css"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';

import Loading from '../../Loading/Loading.jsx';
import BannerMw from "../../BannerMw/BannerMw.jsx";

export default function ProductPage(){
    const { productId } = useParams();
    const [product, setProduct] = useState({product: 0, stock: 0});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        if(quantity < product.stock){ //
            setQuantity(quantity + 1)
        }
    }

    const decrementQuantity = () => {
        if(quantity > 1 ){ 
            setQuantity(quantity - 1)
        }
    }

    const precioTotal = product.price * quantity;

    if (loading) {
        return <div><Loading /></div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }      
    return(
        <>
        <div className='mw-banner1'>
            <BannerMw  
            title="Bienvenido a Nuestro Sitio"
            subtitle="Ofrecemos los mejores servicios"
            backgroundImage="/mw-banner.jpg"
            />
        </div>
            <div className="l-container">
                <div className='s-container'>
                    <div className="img-p">
                        <img src={product.img} alt="Imagen del productos" />
                    </div>
                    <div className="text-container">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p className=''>Precio Unitario: ${product.price}</p>
                        <p className=''>Precio Total: ${precioTotal}</p>

                        <div className='i-d-button'>
                            <button onClick={decrementQuantity} className='d-button'> - </button>
                            <p className='number'>{quantity}</p>
                            <button onClick={incrementQuantity} className='i-button'> + </button>
                        </div>

                        <p>Stock: {product.stock}</p>

                        <button className='buy-button'>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}