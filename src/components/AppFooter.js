import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col , Form} from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { RiTiktokFill } from 'react-icons/ri';
import { BsInstagram } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import '../Css/appFooter.css'
function AppFooter() {
  const { theme, setThemeMode } = useContext(ThemeContext); 
  const [darkMode, setDarkMode] = useState(theme);
    return (
        <footer  className={` text-lg-start footer ${theme ? 'bg-light-black text-light' : 'bg-light text-black'}`}>
            <Container className="p-3">
                {/* <Row className="justify-content-center">
                    <Col lg={12} className="mb-4 mb-lg-0">
                        <ul className="list-unstyled d-flex justify-content-center mb-3">
                            <li className="ms-3">
                                <a href="#!" className={theme ? ' link-Footer' : 'text-black  link-Footer'}>
                                ABOUT US 
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? ' link-Footer' : 'text-black link-Footer'}>
                                PRIVACY POLICY
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? ' link-Footer' : 'text-black link-Footer'}>
                                RETURN & REFUND POLICY 
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? ' link-Footer' : 'text-black link-Footer'}>
                                FAQ 
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? 'link-Footer' : 'text-black link-Footer'}>
                                TERMS OF SERVICE 
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? ' link-Footer' : 'text-black link-Footer'}>
                                EMAIL US
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#!" className={theme ? 'link-Footer' : 'text-black link-Footer'}>
                                CONTACT US
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row> */}
            <Row className="justify-content-between align-items-center">
    <Col lg={6} className="text-start">
        <h6 className="text-uppercase">JOIN OUR FAMILY</h6>
        <Form.Group className="mb-3 position-relative">
            <IoIosArrowRoundForward 
                size="1.5rem" 
                className="position-absolute" 
                style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} 
            />
            <Form.Control 
                name="email" 
                type="email" 
                placeholder="Email" 
                required 
            />
        </Form.Group>
    </Col>

    <Col lg={6} className="text-end">
        {/* Social media icons */}
        <FaFacebook size="1.1rem" className="ms-3" />
        <RiTiktokFill size="1.1rem" className="ms-3" />
        <BsInstagram size="1.1rem" className="ms-3" />
        
       {/* Contact Information */}
<div className="mt-3">
    <p className="mb-1">
       <a href="mailto:Info@hadiyyeh.com" className="link-Footer">Info@hadiyyeh.com</a>
    </p>
   
    <p className="mb-0">
       <a href="tel:+962775831777" className="link-Footer">+962 77 5831 777</a>
    </p>
</div>

    </Col>
</Row>


                <hr/>
                <Row className="text-start g-0">
  <Col lg={6} className="text-start style-formG m-2">
    <Form.Group className="mb-3"> {/* Adjusted to full width */}
      <Form.Label>Language</Form.Label>
      <Form.Select name="language" required>
        <option value="en" className={theme? 'bg-light-black text-light ': 'bg-light text-black'}>English</option>
        <option value="es" className={theme? 'bg-light-black text-light ': 'bg-light text-black'}>العربي</option>
      </Form.Select>
    </Form.Group>
  </Col>

  <Col lg={6} className="text-start style-formG m-2">
    <Form.Group className="mb-3"> {/* Adjusted to full width */}
      <Form.Label>Country/Region</Form.Label>
      <Form.Select  name="country"  required>
        <option value="us" className={theme? 'bg-light-black text-light ': 'bg-light text-black'}>Jordan</option>
        <option value="uk" className={theme? 'bg-light-black text-light ': 'bg-light text-black'}>Palestinian</option>
      </Form.Select>
    </Form.Group>
  </Col>
</Row>
<Row className="justify-content-start">
  <Col lg={12} className="mt-4 mb-lg-0">
    <ul className="list-unstyled d-flex flex-column flex-lg-row justify-content-start mt-3">
      <li className="ms-3 mb-2 mb-lg-0">
        <a href="/" className={theme ? 'linkbottom-Footer' : 'text-black linkbottom-Footer'}>
          © 2024, Hadiyyeh 
        </a>
      </li>
      <li className="ms-3 mb-2 mb-lg-0">
        <a href="/refund" className={theme ? 'linkbottom-Footer' : 'text-black linkbottom-Footer'}>
          Refund policy
        </a>
      </li>
      <li className="ms-3 mb-2 mb-lg-0">
        <a href="/privacy" className={theme ? 'linkbottom-Footer' : 'text-black linkbottom-Footer'}>
          Privacy policy
        </a>
      </li>
      <li className="ms-3 mb-2 mb-lg-0">
        <a href="/terms" className={theme ? 'linkbottom-Footer' : 'text-black linkbottom-Footer'}>
          Terms of service
        </a>
      </li>
    </ul>
  </Col>
</Row>



            </Container>
        </footer>
    );
}

export default AppFooter;
