import React from 'react'
import './About.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className='team'>
        <h1 className='atitle'>Our Team</h1>
        <div className='team1'>
        <Card className='person' >
      <Card.Img  className='image'src="ananth.png"/>
      <Card.Body>
        <Card.Title className='name'>Ananth</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <li>
              <a href='https://instagram.com/_.ananth._76?igshid=YmMyMTA2M2Y='>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.linkedin.com/in/ananth-m-a1923221a'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href='https://twitter.com/Ananth3112?t=TVBGtXRmgl6cxdiKjo6m4w&s=08'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              </li>
      </Card.Body>
    </Card>

    <Card className='person'>
      <Card.Img  className='image'src="harsha.png"/>
      <Card.Body>
        <Card.Title className='name'>Harsha</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <li>
              <a href='https://www.instagram.com/har_sha_2003/'>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.linkedin.com/in/harsha-varthini-shanmugam-b8002823a' >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href='https://twitter.com/har_sha_shan?t=qaoxOOPw_Xs3NOyfS1Q1kQ&s=09' >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              </li>
      </Card.Body>
    </Card>

    <Card className='person'>
      <Card.Img  className='image'src="sindhu.png"/>
      <Card.Body>
        <Card.Title className='name'>Sindhu</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <li>
        <a href='https://instagram.com/sindhu__siva__?r=nametag'>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.linkedin.com/in/sindhu-chidambaram-2b0451243'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href='https://twitter.com/imsindhu29'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>

        </li>
        

      </Card.Body>
    </Card>
        </div>


        <div className='team2'>
        <Card className='person'>
      <Card.Img  className='image'src="revanth.png"/>
      <Card.Body>
        <Card.Title className='name'>Revanth</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <li>
              <a href='https://instagram.com/revanth020?igshid=YmMyMTA2M2Y='>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.linkedin.com/in/revanth-p-b45b32212'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href='https://twitter.com/Revanth2014' >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              </li>
      </Card.Body>
    </Card>

    <Card className='person'>
      <Card.Img  className='image'src="vishan.png"/>
      <Card.Body>
        <Card.Title className='name'>Vishan PG</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <li>
              <a href='https://www.instagram.com/iam_vishan_/'>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.linkedin.com/in/vishan-p-g-047327200'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href='https://twitter.com/iam_vishan?t=1SYFRseZFd_AoyhSlHJI9g&s=08'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              </li>
      </Card.Body>
    </Card>

    <Card className='person'>
      <Card.Img  className='image'src="mano.png"/>
      <Card.Body>
        <Card.Title className='name'>Manoharan</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <li>
              <a href='https://instagram.com/manoharan__nagarajan?igshid=NmNmNjAwNzg='>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.linkedin.com/in/manoharan-nagarajan-768a27211'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href='https://twitter.com/Manoharnagarajn'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              </li>
      </Card.Body>
    </Card>
        </div>
      
    </div>
  )
}

export default About
