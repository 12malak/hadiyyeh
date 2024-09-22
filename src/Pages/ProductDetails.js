import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import 'react-lightbox-component/build/css/index.css';
import './product-details.css';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import slider2 from '../images/Girl-removebg-preview.png';
import slider3 from '../images/Girl-removebg-preview.png';
import slider4 from '../images/1_2d21e22d-6de8-4907-a90f-944c70501700.webp';
import slider5 from '../images/girl2-removebg-preview.png';
import Lightbox from 'react-lightbox-component';

const ProductDetails = () => {
    const [theme] = useThemeHook();
    const { addItem } = useCart();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const productData = {
        id: 1,
        name: "DUMONT CELERIO OROS EDP FOR MEN",
        price: 69.00,
        description: "Indulge in the enchanting scent of Celerio Oros...",
        images: [slider2, slider3, slider4, slider5]
    };

    const handleLightboxOpen = () => {
        setIsLightboxOpen(true);
    };

    const handleLightboxClose = () => {
        setIsLightboxOpen(false);
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center mt-5">
                <Col xs={10} md={7} lg={5} className="p-0">
                    <div onClick={handleLightboxOpen} style={{ cursor: 'pointer' }}>
                        <Lightbox
                            images={productData.images.map((src, index) => ({
                                src,
                                title: `Image ${index + 1}`,
                                description: `img ${index + 1}`
                            }))}
                            isOpen={isLightboxOpen}
                            onClose={handleLightboxClose}
                        />
                    </div>
                </Col>

                <Col xs={10} md={7} lg={7} className={`${theme ? 'text-light' : 'text-black'} product-details`}>
                    <h1>{productData.name}</h1>
                    <br />
                    <b className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`}>
                        {productData.price} JD
                    </b>
                    <br />
                    <b className="h5">4.1 ⭐</b>
                    <br />
                    <Button
                        onClick={() => addItem(productData)}
                        className={theme ? 'bg-dark-primary text-black' : 'bg-light-primary'}
                        style={{ borderRadius: '0', border: 0 }}
                    >
                        <BsCartPlus size="1.8rem" />
                        Add to cart
                    </Button>
                    <p className="mt-3 h5" style={{ opacity: '0.8', fontWeight: '400' }}>
                        {productData.description}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
