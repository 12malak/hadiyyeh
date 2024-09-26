import React, { useState } from 'react';

import { Image } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import slider1 from '../images/gift.webp';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Container, Row, Col , Form} from 'react-bootstrap';
import { IoFilterCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// Sample Product Data
const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is a great product This is a great product.', 
      image: '../images/blog.jpj',
      price: '$49.99',
    },
    
  ];
function Gift() {
    const [theme] = useThemeHook();
   
  return (
    <section className={theme ? 'bg-light-black text-light margin_section full-screen-slider' : 'bg-light text-black margin_section full-screen-slider'} data-aos="fade-up">
            <div className="container text-center container-all">
  <div className="row mt-5 ">
  {products .map((product) => (
      <div className="col-lg-3 col-md-4 col-sm-12   mb-5" key={product.id}>
          <div className="image-container">
              <Image
                  src={slider1}
                  className="img-fluid img-all "
                  alt="First slide"
                  
              />
            
          </div>
          <h6 className={`mt-5 ${theme ? 'text-light' : 'text-black'}`}>{product.description}</h6>

          <p className={theme ? 'text-light' : 'text-black'}>
           From
              <del className="original-price">{product.price}</del>
          </p>
          <button type="button"  className={theme? 'text-light btn btn-card m-5 ': 'text-black btn btn-card m-5'}>
CHOOSE OPTION
</button>
      </div>
  ))}
</div>
</div>
</section>
  )
}

export default Gift