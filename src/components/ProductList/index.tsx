'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import { IProduct } from '@/types/IProduct';
import { getProductsHandler } from '@/services/productService';
import './index.css';
import SearchProducts from '../Search';
import SortProducts from '../Sort';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    getProductsHandler().then((response) => {
      setProducts([...response]);
      setFilteredProducts([...response]);
    });
  }, []);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) => product.name.toLowerCase().includes(query));
    setFilteredProducts(filtered);
  };

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);

    let sortedProducts = [...filteredProducts];
    if (sortBy === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <div className="filters">
        <SearchProducts onSearch={handleSearch} />
        <SortProducts onSortChange={handleSortChange} />
      </div>
      <div className="productList">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
