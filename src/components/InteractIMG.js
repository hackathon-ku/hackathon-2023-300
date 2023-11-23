// src/components/ImageButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const ImageButton = ({ imagePath, to }) => {
  return (
    <Link to={to}>
      <img src={imagePath} alt="Button" />
    </Link>
  );
};

export default ImageButton;
