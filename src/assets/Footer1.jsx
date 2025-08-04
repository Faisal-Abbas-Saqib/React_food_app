import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
  faApplePay,
  faGooglePay
} from '@fortawesome/free-brands-svg-icons';


const Footer1 = () => {
  return (   
    <>
     <div className="social-icons">
        
  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>  
</div>
<div className='card'>
      <h3>
        Adress: Stockholmsvägen 235,
        15285, Södertälje.
        Mobil:0754254121        
      </h3>          
    </div>  
    <div className="payment-icons">
      <FontAwesomeIcon icon={faCcVisa} />
      <FontAwesomeIcon icon={faCcMastercard} />
      <FontAwesomeIcon icon={faCcAmex} />
      <FontAwesomeIcon icon={faCcPaypal} />
      <FontAwesomeIcon icon={faApplePay} />
      <FontAwesomeIcon icon={faGooglePay} />
    </div>
</>  

    
  )
}

export default Footer1
