import React, { useState } from 'react';
import "../Css/rightCart.css";
import { Image, Modal, Button } from 'react-bootstrap'; // Import Modal and Button
import slider1 from '../images/Girl-removebg-preview.png';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
const RightCart = ({ cartItems, isCanvasOpen, toggleCanvas }) => {
    const isEmpty = cartItems.length === 0;
    const [theme] = useThemeHook();
    const [showGiftModal, setShowGiftModal] = useState(false);
    // State to track the visibility of the special instructions text box for each item
    const [specialInstructionsVisible, setSpecialInstructionsVisible] = useState({});

 // Function to toggle special instructions box
 const handleSpecialInstructionsToggle = (index) => {
    setSpecialInstructionsVisible((prevState) => ({
        ...prevState,
        [index]: !prevState[index], // Toggle visibility for the specific item
    }));
};
    // Function to open the modal
    const handleGiftClick = () => {
        setShowGiftModal(true);
    };

    // Function to close the modal
    const handleClose = () => {
        setShowGiftModal(false);
    };
    const handleQuantityChange = (itemId, action) => {
        // Logic to update quantity based on the action (increase or decrease)
        // This might involve updating state or dispatching an action if using Redux
    };
    return (
        <div
        // className={`offcanvas offcanvas-end ${isCanvasOpen ? 'show' : ''} ${theme ? 'bg-light-black' : 'bg-light'}`}
            className={`offcanvas offcanvas-end ${isCanvasOpen ? 'show' : ''} ${theme ? 'bg-dark-custom' : 'bg-light-custom'}`}
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            style={isCanvasOpen ? { display: 'block' } : {}}
        >
            <div className="offcanvas-header">
            <h5 className={`offcanvas-title ${theme ? 'text-light' : 'text-black'}`} id="offcanvasRightLabel">Your Cart</h5>

                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={toggleCanvas}
                ></button>
            </div>
            <div className="offcanvas-body">
                {isEmpty ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul className="list-group scrollable-cart-items">
                          <div className="d-flex justify-content-between w-100 mb-3">
                            <span className='Price'>PRODUCT</span>
                            <span className='Price'>TOTAL</span>
                          </div>
                    {cartItems.map((item, index) => (
                      <li
                        key={index}
                        className={`list-group-item d-flex flex-column custom-list-item ${theme ? 'bg-light-black text-light' : 'bg-light text-black'}`}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          {/* Image */}
                          <Image
                            src={slider1}
                            className="img-fluid img-card"
                            alt="First slide"
                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                          />
                          {/* Title and Price */}
                          <div className="d-flex justify-content-between w-100">
                            <span>{item.name}</span>
                            <span>{item.price.toFixed(2)}</span>
                          </div>
                        </div>
                  
                        <h6 className='Price'>{item.price.toFixed(2)}</h6>
                        <h6 className='Price'>Size: 100 ml</h6>
                        {/* "Is this a gift?" button */}
                        <button
                          className={`btn btn-link mt-2 text-decoration-none ${theme ? '' : 'text-dark'}`}
                          onClick={handleGiftClick}
                        >
                          Is this a gift?
                        </button>
                  
                        {/* Quantity Control */}
                        <div className="d-flex align-items-center mt-3 Quantity">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange(item.id, 'decrease')}
                            disabled={item.quantity <= 1} // Disable if quantity is 1 or less
                          >
                        <FiMinus size="1.4rem"/>
                          </button>
                          <span className="m-2">7</span> {/* Display current quantity */}
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange(item.id, 'increase')}
                          >
                           <IoMdAdd size="1.4rem"/>
                          </button>
                          <span><FaRegTrashCan size="1rem"/></span>
                        </div>
                        {/* <hr className='mb-1 hr-card'/> */}
                         {/* "Order Special Instructions" button */}
                         <button
                                className={`btn btn-link mt-2 text-decoration-none mt-5 ${theme ? '' : 'text-dark'}`}
                                onClick={() => handleSpecialInstructionsToggle(index)}
                            >
                                Order special instructions <TiArrowSortedDown size="1rem"/>
                            </button>

                            {/* Special Instructions Textarea */}
                            {specialInstructionsVisible[index] && (
                                <textarea
                                    className="form-control mt-2"
                                    rows="3"
                                    placeholder="Add your special instructions here..."
                                />
                            )}
                      </li>
                    ))}

<div className="d-flex justify-content-between w-100 mt-4">
                            <span >Estimated total</span>
                            <span >141.000 JD</span>
                          </div> 
                          <h1  className='Price mt-3'>Taxes included. Discounts and shipping calculated at checkout.</h1>
                          <Button  className={theme? 'bg-light-black text-light border-but m-5': 'bg-light text-black border-but m-5'} onClick={handleClose}>
            Check out
        </Button>
                  </ul>
                  
                )}
            </div>

           {/* Modal for "Is this a gift?" */}
<Modal show={showGiftModal} onHide={handleClose} className={theme ? ' text-light' : 'text-dark '}>
    <Modal.Header closeButton className={theme ? ' text-light bg-light-black' : 'text-dark bg-light'}>
        <Modal.Title >Gift Option Information</Modal.Title>
    </Modal.Header>
    <Modal.Body className={theme ? 'Gift text-light bg-light-black' : 'Gift text-dark bg-light'}>
       

        {/* Gift Wrap Option */}
        <div className="form-group">
            <label htmlFor="giftWrap">Gift Wrap</label>
            <select id="giftWrap" className={theme ? 'form-control ' : ' form-control text-dark bg-light'}>
                <option value="no" className={theme ? ' text-light bg-light-black' : 'text-dark bg-light'}>No</option>
                <option value="yes" className={theme ? ' text-light bg-light-black' : 'text-dark bg-light'}>Yes</option>
            </select>
        </div>
  {/* Gift Message Option */}
  <div className="form-group mt-3">
            <label htmlFor="giftMessage">Gift Message</label>
            <textarea 
                id="giftMessage" 
              
                className={theme ? 'form-control ' : ' form-control text-dark bg-light'} 
                rows="3" 
                
            />
        </div>
        {/* Delivery Date Option */}
        <div className="form-group mt-3">
            <label htmlFor="deliveryDate">Delivery Date</label>
            <input 
                type="date" 
                id="deliveryDate" 
                className={theme ? 'form-control ' : ' form-control text-dark bg-light'}
                placeholder="Select a delivery date" 
            />
        </div>

      
    </Modal.Body>
    <Modal.Footer  className={theme ? ' text-light bg-light-black' : 'text-dark bg-light'}>
        <Button  className={theme? 'bg-light-black text-light border-but': 'bg-light text-black border-but'} onClick={handleClose}>
            Confirm
        </Button>
    </Modal.Footer>
</Modal>

        </div>
    );
};

export default RightCart;
 // End of RightCart component
 // This component is used to display the items in the shopping cart. It also includes a modal for "Is this a gift?" option.
 // The theme can be controlled using the ThemeProvider component.
 // The component uses the React Bootstrap library for modals and buttons.
 // The styling is applied using CSS classes in the "rightCart.css" file.
 // The component is exported for use in other components.
 // Note: This is a basic implementation, and additional features can be added as needed.
