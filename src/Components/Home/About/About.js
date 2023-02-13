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
      <Card.Img  className='image'src={require("../../../images/ananth.png")}/>
      <Card.Body>
        <Card.Title className='name'>Ananth</Card.Title>
        <Card.Text>
        Front-end developer with a focus on delivering visually appealing and user-friendly websites and applications.<br/>
         My toolbox is filled with HTML, CSS, JavaScript, and popular front-end frameworks like React .
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
      <Card.Img  className='image'src={require("../../../images/harsha.png")}/>
      <Card.Body>
        <Card.Title className='name'>Harsha</Card.Title>
        <Card.Text>
        A skilled frontend developer with a talent for creating engaging and visually appealing user interfaces.<br/> With a strong foundation in HTML, CSS, and JavaScript,
         I has the ability to turn even the most complex designs into functioning web pages.
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
      <Card.Img  className='image'src={require("../../../images/sindhu.png")}/>
      <Card.Body>
        <Card.Title className='name'>Sindhu</Card.Title>
        <Card.Text>
          Backend developer withStrong programming skills in languages such as Python, Ruby, Java, PHP, or Node.js
          <br/> I have good Experience with server-side frameworks, such as Django, Rails, Spring, or Express
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
      <Card.Img  className='image'src={require("../../../images/revanth.png")}/>
      <Card.Body>
        <Card.Title className='name'>Revanth</Card.Title>
        <Card.Text>
        A highly skilled Full Stack Developer with a passion for building and delivering top-notch web applications. <br/>With expertise in both frontend and backend technologies, 
        I brings a unique combination of technical and creative skills to every project.
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
      <Card.Img  className='image'src={require("../../../images/vishan.png")}/>
      <Card.Body>
        <Card.Title className='name'>Vishan PG</Card.Title>
        <Card.Text>
        A talented full-stack developer with a passion for creating innovative and efficient web applications. With a strong background in both frontend and backend development,
         I has the skills and expertise to bring any project to life.
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
      <Card.Img  className='image'src={require("../../../images/mano.png")}/>
      <Card.Body>
        <Card.Title className='name'>Manoharan</Card.Title>
        <Card.Text>
        UI/UX Designer with a passion for creating intuitive, user-centered digital experiences. 
        I have a strong background in design principles and a deep understanding of the importance of user research and testing in the design process.
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
