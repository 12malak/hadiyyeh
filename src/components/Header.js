import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav,Image } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCart } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "react-router-dom";

import { useCart } from "react-use-cart";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Css/header.css'
import { IoIosSearch } from "react-icons/io";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { RiTiktokFill } from "react-icons/ri";
import { MdGTranslate } from "react-icons/md";
import Logo from '../images/Logo.avif';
import RightCart from './RightCart';


const Header = ({ cartItems }) => {
    const { theme, setThemeMode } = useContext(ThemeContext); 
    const [darkMode, setDarkMode] = useState(theme);
    const [showBanner, setShowBanner] = useState(true); // State for the banner visibility
    const [isCanvasOpen, setCanvasOpen] = useState(false);
    const toggleCanvas = () => {
        setCanvasOpen(!isCanvasOpen);
    };
    useEffect(() => {
        setThemeMode(darkMode);

        // Function to handle scroll
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowBanner(false);
            } else {
                setShowBanner(true);
            }
        };

        // Adding the scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up the event listener
        };
    }, [darkMode, setThemeMode]);

    const {
        isEmpty,
        totalItems,
    } = useCart();

    return (
        <>
         {/* Banner section for the discount code */}
         <div className="banner-fixed">
             {/* Icons on the right side */}
             <div 
                className="text-Icons show-on-large"
              >
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-light">
                        <FaFacebook size="1.3rem" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-light">
                        <CiInstagram size="1.3rem" />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="text-light">
                        <RiTiktokFill size="1.3rem" />
                    </a>
                </div>
                    <span style={{ 
          
           
            maxWidth: '1000px',  // Optional: Limit width for larger screens
            width: '100%',       // Ensure it scales with screen width
            textAlign: 'center' , // Center text within the banner
        }}>
                        USE CODE "10OFF" FOR 10% OFF ON ORDERS WORTH 50 JDS & ABOVE
                    </span>
                </div>
       


            {/* Top section with logo and icons */}
            <Navbar variant={darkMode ? 'dark' : 'light'} className={`navbar-fixed ${darkMode ? 'bg-light-black border-bottom' : 'bg-light border-bottom'}`}>
            <Container className="d-flex align-items-center justify-content-between">
                {/* Left Icons: Sign in */}
                <Nav className="d-flex align-items-center">
                <Link to="cart" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
                      
                        <IoIosSearch 
                        size="1.5rem"/>
                    </Link>
                </Nav>

                {/* Centered Logo */}
                <Link to="/">
                    <Navbar.Brand className="mx-auto">
                        {/* <img src="/images/logo2.png" alt="Logo" style={{ maxHeight: '50px' }} /> */}

                        <Image
                                    src={Logo}
                                    style={{ maxHeight: '70px' , margin: '10px' }}
                                    thumbnail
                                    fluid
                                    roundedCircle
                                    className="p-0"/>
                    </Navbar.Brand>
                </Link>

                {/* Right Icons: Dark mode toggle, Cart, Account */}
                <Nav className="d-flex align-items-center show-on-large ">
                    <Nav.Link className={darkMode ? 'text-dark-primary' : 'text-light-primary'} onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <BiSun size="1.2rem" /> : <BiMoon size="1.2rem" />}
                    </Nav.Link>
                    <div
                     style={{ cursor: 'pointer' }}
                      to=""
                      onClick={toggleCanvas}
                     className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center`}>
                        <BiCart size="1.4rem" />
                        {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
                    </div>
                    <Link to="/sign-in" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
                        <VscAccount size="1.2rem" />
                    </Link>
                    <Link to="my-account" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
                        <MdGTranslate size="1.2rem" />
                    </Link>
                </Nav>
            </Container>
        </Navbar>
            {/* Bottom section with navigation links */}
            {[false, 'sm', 'md','lg', 'xl'].map((expand) => (
                <Navbar key={expand} expand={expand} variant={darkMode ? 'dark' : 'light'} className={`navbar2-fixed ${darkMode ? 'bg-light-black border-bottom' : 'bg-light border-bottom'}`} >
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Hadiyyeh
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                           
      
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href="/">HOME</Nav.Link>
                                   
                                    <NavDropdown title="FRAGRANCES" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="WATCHES" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="BAGS & POUCHES" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="SHOP BY BRAND" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="SHOP BY SEASON" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#action2" >FRAGRANCE TYPES</Nav.Link>
                                    <Nav.Link href="#action2" >GIFT CARDS</Nav.Link>
                                    <Nav.Link href="/allproducts" >ALL PRODUCTS</Nav.Link>
                                  
                                </Nav>

                                  {/* Social media icons (hidden on large screens, visible on small screens) */}
        <div className="social-icons-toggle">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-dark">
                <FaFacebook size="1.3rem" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-dark">
                <CiInstagram size="1.3rem" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="text-dark">
                <RiTiktokFill size="1.3rem" />
            </a>
            
        </div>
        {/* <Nav className=" social-icons-toggle">
                    <Nav.Link className={darkMode ? 'text-dark-primary' : 'text-light-primary'} onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <BiSun size="1.2rem" /> : <BiMoon size="1.2rem" />}
                    </Nav.Link>
                    <Link to="/cart" className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center`}>
                        <BiCart size="1.4rem" />
                        {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
                    </Link>
                    <Link to="my-account" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
                        <VscAccount size="1.2rem" />
                    </Link>
                    <Link to="my-account" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
                        <MdGTranslate size="1.2rem" />
                    </Link>
                </Nav> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

              {/* Include the RightCart component */}
              <RightCart 
                cartItems={cartItems} 
                isCanvasOpen={isCanvasOpen} 
                toggleCanvas={toggleCanvas} 
            />

            {/* Spacer div to add space below the fixed navbar */}
            <div style={{ height: '80px' }}></div> {/* Adjust height as needed */}
        </>
    );
};

export default Header;
