import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col , Form} from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { RiTiktokFill } from 'react-icons/ri';
import { MdGTranslate } from 'react-icons/md';
import { IoIosArrowRoundForward } from "react-icons/io";
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import '../Css/appFooter.css'
function AppFooter() {
  const { theme, setThemeMode } = useContext(ThemeContext); 
  const [darkMode, setDarkMode] = useState(theme);
    return (
        <footer  className={`text-center text-lg-start footer ${theme ? 'bg-light-black text-light' : 'bg-light text-black'}`}>
            <Container className="p-2">
                <Row className="justify-content-center">
                    <Col lg={12} className="mb-4 mb-lg-0">
                        <ul className="list-unstyled d-flex justify-content-center mb-3">
                            <li className="ms-3">
                                <a href="#!" className={theme ? 'm-3 link-Footer' : 'text-black m-3 link-Footer'}>
                                ABOUT US 
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? 'm-3 link-Footer' : 'text-black m-3 link-Footer'}>
                                PRIVACY POLICY
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? 'm-3 link-Footer' : 'text-black m-3 link-Footer'}>
                                RETURN & REFUND POLICY 
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? 'm-3 link-Footer' : 'text-black m-3 link-Footer'}>
                                FAQ 
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? 'm-3 link-Footer' : 'text-black m-3 link-Footer'}>
                                TERMS OF SERVICE 
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? 'm-3 link-Footer' : 'text-black m-3 link-Footer'}>
                                EMAIL US
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? 'm-3 link-Footer' : 'text-black m-3 link-Footer'}>
                                CONTACT US
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="justify-content-between align-items-center">
                    <Col lg={6} className="text-start">
                        <h5 className="text-uppercase">JOIN OUR FAMILY</h5>
                        <Form.Group className="mb-3 col-lg-6 position-relative">
            <IoIosArrowRoundForward 
                size="1.5rem" 
                className="position-absolute" 
                style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} 
            />
            <Form.Control 
                name="email" 
                type="email" 
                placeholder="Email" 
                required 
                style={{ paddingLeft: '40px' }} // Adjust padding to prevent text from overlapping the icon
            />
        </Form.Group>
                    </Col>
                    <Col lg={6} className="text-end">
                        <FaFacebook  size="1.1rem"  className="ms-3" />
                        <RiTiktokFill  size="1.1rem"  className="ms-3" />
                        <MdGTranslate   size="1.1rem"  className="ms-3" />
                    </Col>
                </Row>
                <hr/>
                <Row className="justify-content-center">
                    <Col lg={12} className="text-center mt-3">
                        <p>© 2022 Flowbite™. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default AppFooter;
