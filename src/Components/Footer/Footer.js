import React from 'react'
import './Footer.css'
import { MDBFooter, MDBContainer,} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

  
const Footer = () => {
  return (
    <div>
       <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <div className='footer'>
          <button className='fbtn'><FontAwesomeIcon icon={faFacebook} /></button>
          <button className='fbtn'><FontAwesomeIcon icon={faTwitter} /></button>
          <button className='fbtn'><FontAwesomeIcon icon={faGoogle} /></button>
          <button className='fbtn'><FontAwesomeIcon icon={faInstagram} /></button>
          <button className='fbtn'><FontAwesomeIcon icon={faLinkedinIn} /></button>
          <button className='fbtn'><FontAwesomeIcon icon={faGithub} /></button>
          </div>
         
           </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:<br></br>
        <a className='text-white' href='https://zeitt.info/'>
          zeitt.info
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
