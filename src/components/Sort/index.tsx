import React, { useState } from 'react';
import './index.css';

interface SortProductsProps {
  onSortChange: (sortBy: string) => void;
}

const SortProducts: React.FC<SortProductsProps> = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  return (
    <div className="sort-container" data-testid="sort-component">
      <label htmlFor="sort-select">Ordenar: </label>
      <select id="sort-select" value={sortBy} onChange={handleSortChange} className="sort-select">
        <option value="asc">Precio ascendente</option>
        <option value="desc">Precio descendente</option>
      </select>
    </div>
  );
};

export default SortProducts;
