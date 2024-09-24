import React, { useState } from 'react';
import "../Css/allproducts.css";
import { Image } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import slider1 from '../images/girl2-removebg-preview.png';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Container, Row, Col , Form} from 'react-bootstrap';
// Sample Product Data
const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is a great product.', 
      image: '../images/blog.jpj',
      price: '$49.99',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Another awesome product.',
      image: 'https://via.placeholder.com/200',
      price: '$59.99',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'You will love this product.',
      image: 'https://via.placeholder.com/200',
      price: '$29.99',
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'Our latest collection.',
      image: 'https://via.placeholder.com/200',
      price: '$39.99',
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'A must-have product.',
      image: 'https://via.placeholder.com/200',
      price: '$89.99',
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'Another great product.',
      image: 'https://via.placeholder.com/200',
      price: '$79.99',
    },
    {
      id: 7,
      title: 'Product 7',
      description: 'An amazing product.',
      image: 'https://via.placeholder.com/200',
      price: '$99.99',
    },
    {
      id: 8,
      title: 'Product 8',
      description: 'A stylish product.',
      image: 'https://via.placeholder.com/200',
      price: '$39.99',
    },
    {
      id: 9,
      title: 'Product 9',
      description: 'A fantastic product.',
      image: 'https://via.placeholder.com/200',
      price: '$69.99',
    },
    {
      id: 10,
      title: 'Product 10',
      description: 'This is a unique product.',
      image: 'https://via.placeholder.com/200',
      price: '$119.99',
    },
    {
        id: 11,
        title: 'Product 1',
        description: 'This is a great product.', 
        image: '../images/blog.jpj',
        price: '$49.99',
      },
      {
        id: 12,
        title: 'Product 2',
        description: 'Another awesome product.',
        image: 'https://via.placeholder.com/200',
        price: '$59.99',
      },
      {
        id: 13,
        title: 'Product 3',
        description: 'You will love this product.',
        image: 'https://via.placeholder.com/200',
        price: '$29.99',
      },
      {
        id: 14,
        title: 'Product 4',
        description: 'Our latest collection.',
        image: 'https://via.placeholder.com/200',
        price: '$39.99',
      },
      {
        id: 15,
        title: 'Product 5',
        description: 'A must-have product.',
        image: 'https://via.placeholder.com/200',
        price: '$89.99',
      },
      {
        id: 16,
        title: 'Product 6',
        description: 'Another great product.',
        image: 'https://via.placeholder.com/200',
        price: '$79.99',
      },
      {
        id: 17,
        title: 'Product 7',
        description: 'An amazing product.',
        image: 'https://via.placeholder.com/200',
        price: '$99.99',
      },
      {
        id: 18,
        title: 'Product 8',
        description: 'A stylish product.',
        image: 'https://via.placeholder.com/200',
        price: '$39.99',
      },
      {
        id: 19,
        title: 'Product 9',
        description: 'A fantastic product.',
        image: 'https://via.placeholder.com/200',
        price: '$69.99',
      },
      {
        id: 20,
        title: 'Product 10',
        description: 'This is a unique product.',
        image: 'https://via.placeholder.com/200',
        price: '$119.99',
      },
  ];
// Set items per page to 16
const ITEMS_PER_PAGE = 16;

function Allproducts() {
    const [theme] = useThemeHook();
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    // Get current products for the active page
    const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page navigation
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section className={theme ? 'bg-light-black text-light margin_section full-screen-slider' : 'bg-light text-black margin_section full-screen-slider'} data-aos="fade-up">
            <div className="container text-center container-all">
            {/* <Row className="justify-content-center">
  <Col lg={6} className="mt-4 mb-lg-0">
    <ul className="list-unstyled d-flex justify-content-start mt-3"> 
      <li className="ms-3">
        <a href="#!" className={theme ? ' linkbottom-Footer' : 'text-black linkbottom-Footer'}>
        © 2024, Hadiyyeh 
        </a>
      </li>
      <li className="ms-3">
        <a href="#!" className={theme ? ' linkbottom-Footer' : 'text-black linkbottom-Footer'}>
        Refund policy

        </a>
      </li>
      <li className="ms-3">
        <a href="#!" className={theme ? 'linkbottom-Footer' : 'text-black linkbottom-Footer'}>
        Privacy policy

        </a>
      </li>
      <li className="ms-3">
        <a href="#!" className={theme ? ' linkbottom-Footer' : 'text-black linkbottom-Footer'}>
        Terms of service

        </a>
      </li>
      <li className="ms-3">
        <a href="#!" className={theme ? 'linkbottom-Footer' : 'text-black linkbottom-Footer'}>
        Contact information
        </a>
      </li>
    </ul>
  </Col>
  <Col lg={6} className="mt-4 mb-lg-0">
    <ul className="list-unstyled d-flex justify-content-center mt-3">
      <li className="ms-3">
        <a href="#!" className={theme ? ' linkbottom-Footer' : 'text-black linkbottom-Footer'}>
        © 2024, Hadiyyeh 
        </a>
      </li>
      <li className="ms-3">
        <a href="#!" className={theme ? ' linkbottom-Footer' : 'text-black linkbottom-Footer'}>
        Refund policy

        </a>
      </li>
     
    </ul>
  </Col>
</Row> */}
                <div className="row mt-5 justify-content-center">
                    {currentProducts.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-12 product-allcard mb-5" key={product.id}>
                            <div className="image-container">
                                <Image
                                    src={slider1}
                                    className="img-fluid img_all m-3"
                                    alt="First slide"
                                />
                                <button className={theme ? 'text-light btn-top-left' : 'text-black btn-top-left'}>
                                    Sale
                                </button>
                            </div>
                            <h6 className={theme ? 'text-light' : 'text-black'}>{product.description}</h6>
                            <p className={theme ? 'text-light' : 'text-black'}>
                                {product.price}
                                <del className="original-price">{product.price}</del>
                            </p>
                        </div>
                    ))}
                </div>
                {/* Pagination Controls */}
                <div className="pagination-controls m-5">
                    <a href="#" onClick={handlePreviousPage} className={currentPage === 1 ? "disabled-link mx-2" : "mx-2"}>
                        <IoIosArrowBack size={20} />
                    </a>
                    <span>{`Page ${currentPage} of ${totalPages}`}</span>
                    <a href="#" onClick={handleNextPage} className={currentPage === totalPages ? "disabled-link mx-2" : "mx-2"}>
                        <IoIosArrowForward size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Allproducts;