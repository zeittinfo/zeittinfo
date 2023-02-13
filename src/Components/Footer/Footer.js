import React from 'react'
import './Footer.css'
import { MDBFooter, MDBContainer,} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

  
const Footer = () => {
  return (
    <div>
       <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <div className='footer'>
            <a href='https://www.facebook.com/profile.php?id=100087382190852&sk=map'>
            <button className='fbtn'><FontAwesomeIcon icon={faFacebook} /></button>
            </a>
            <a href='https://twitter.com/Zeitt_india'>
            <button className='fbtn'><FontAwesomeIcon icon={faTwitter} /></button>
            </a>
          
          <a href='https://www.instagram.com/zeittinfo/'>
          <button className='fbtn'><FontAwesomeIcon icon={faInstagram} /></button>
          </a>
          <a href='https://www.linkedin.com/in/zeitt-info-674b98265/'>
          <button className='fbtn'><FontAwesomeIcon icon={faLinkedinIn} /></button>
          </a>
          <a href='https://github.com/zeittinfo'>
          <button className='fbtn'><FontAwesomeIcon icon={faGithub} /></button>
          </a>
          
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
