'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import { IProduct } from '@/types/product';
import { getProductsHandler } from '@/services/productService';
import './index.css';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProductsHandler().then((response) => {
      setProducts([...response]);
    });
  }, []);

  return (
    <div className="productList">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
