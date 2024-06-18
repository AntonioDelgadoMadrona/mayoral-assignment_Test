import React, { useState } from 'react';
import './index.css';

interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Busca productos por nombre..."
        className="search-input"
      />
    </div>
  );
};

export default Search;
