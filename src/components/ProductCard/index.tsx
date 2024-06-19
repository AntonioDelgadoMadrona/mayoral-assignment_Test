import React from 'react';
import { IProduct } from '@/types/IProduct';
import './index.css';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, discount, colors, description, imageUrl } = product;

  const discountedPrice =
    discount > 0 ? (price - (price * discount) / 100).toFixed(2) : price.toFixed(2);

  return (
    <div className="productCard">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${window.origin}/images/${imageUrl}`} alt={name} className="productImage" />
      <div className="productDetails">
        <h3 className="productName">{name}</h3>
        <div className="productPrice">
          <p className={`originalPrice ${discount > 0 ? 'discounted' : ''}`}>{price.toFixed(2)}€</p>
          {discount > 0 ? (
            <p className="discountedPrice">
              {discountedPrice}€ {discount > 0 ? `(-${discount}%)` : ''}
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="productColors">{colors.length > 1 ? 'Más colores' : ''}</div>
      </div>
      <button className="addButton" onClick={() => alert('Añadido al carrito')}>
        AÑADIR
      </button>
    </div>
  );
};

export default ProductCard;
