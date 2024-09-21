import React from 'react';
import '../Css/brands.css'; // For custom styling
import { Image } from 'react-bootstrap'; // Import Image component from react-bootstrap
import Brand1 from '../images/ARMAF_Logo.webp';
import Brand2 from '../images/Afnan_Logo.webp';

const Brands = () => {
  return (
    <div className="container-Brands my-4">
      <div className="row">
        <div className="col-6 col-md-2 text-center brand-image-container">
          <Image src={Brand1} alt="Brand 1" className="brand-image" />
          <a href="https://brand1.com" target="_blank" rel="noopener noreferrer">Brand 1</a>
        </div>
        <div className="col-6 col-md-2 text-center brand-image-container">
          <Image src={Brand2} alt="Brand 2" className="brand-image" />
          <a href="https://brand2.com" target="_blank" rel="noopener noreferrer">Brand 2</a>
        </div>
        <div className="col-6 col-md-2 text-center brand-image-container">
          <Image src={Brand1} alt="Brand 3" className="brand-image" />
          <a href="https://brand3.com" target="_blank" rel="noopener noreferrer">Brand 3</a>
        </div>
        <div className="col-6 col-md-2 text-center brand-image-container">
          <Image src={Brand2} alt="Brand 4" className="brand-image" />
          <a href="https://brand4.com" target="_blank" rel="noopener noreferrer">Brand 4</a>
        </div>
        <div className="col-6 col-md-2 text-center brand-image-container">
          <Image src={Brand1} alt="Brand 5" className="brand-image" />
          <a href="https://brand5.com" target="_blank" rel="noopener noreferrer">Brand 5</a>
        </div>
        <div className="col-6 col-md-2 text-center brand-image-container">
          <Image src={Brand1} alt="Brand 5" className="brand-image" />
          <a href="https://brand5.com" target="_blank" rel="noopener noreferrer">Brand 5</a>
        </div>
      </div>
    </div>
  );
};

export default Brands;
