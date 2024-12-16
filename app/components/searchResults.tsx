'use client';
import React, { useState } from 'react';

const SearchResults = ({ result }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  // Sort results by score in descending order
  const sortedResults = [...result].sort((a, b) => (b.score || 0) - (a.score || 0));

  return (
    <div className="results-container">
      <h1 className="results-title">Search Results:</h1>
      {sortedResults.length > 0 ? (
        sortedResults.map((document, index) => (
          <div
            key={document.fileName || index}
            className="result-card"
            onClick={() => openModal(document.content || 'No details available.')}
          >
            <p><b>File name:</b> {document.fileName ?? 'No file available'}</p>
            <p><b>Score:</b> {document.score ?? 'No score available'}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                openModal(document.content || 'No details available.');
              }}
            >
              Content
            </button>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>Details</h2>
            <p>{modalContent}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
