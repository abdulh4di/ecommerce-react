import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SuccessPopup = ({successOpen}) => {
    return (
    <>
    <div className={`success ${successOpen && 'success-open' }`}>
      <FontAwesomeIcon icon={faCircle}  />
      <span>Item added to cart!</span>
    </div>
    </>
    
    );
}

export default SuccessPopup;
