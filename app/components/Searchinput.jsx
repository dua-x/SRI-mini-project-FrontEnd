'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchResults from './searchResults';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const getResult = async () => {
    if (!search.trim()) return;

    setHasSearched(true);

    try {
      const response = await fetch('http://172.20.10.4:3001/RIproject/documents/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ request: search }),
      });

      if (!response.ok) throw new Error('Failed to fetch results');

      const data = await response.json();
      setResult(data.results || []);
    } catch (error) {
      console.error('Error fetching results:', error);
      setResult([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') getResult();
  };

  return (
    <>
      <div className={`search-section ${hasSearched ? 'hasSearched' : ''}`}>
        <div className="logo">
          <span className="logo-sri">SRI</span>
          <span className="logo-search">Search</span>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search the web..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <FaSearch className="search-icon" onClick={getResult} />
        </div>
      </div>

      {hasSearched && <SearchResults result={result} />}
    </>
  );
};

export default SearchInput;
