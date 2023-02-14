import React from 'react'
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { faDigitalOcean,faRocketchat, faSquareFontAwesomeStroke, faStrava, faTelegramPlane, faWordpress,} from '@fortawesome/free-brands-svg-icons'
import { useInView} from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
const Content = () => {
  const{ref,inView} = useInView();

  const animation = useAnimation();

  useEffect(()=>{
    console.log("use effec hook,inView = ",inView)
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:'spring',
          duration :1,
          bounce :0.3

        }
      })
    }
    if(!inView){
      animation.start({x:'-100vh'})
    }
  });
  return (
    <div >
        <h1 className='htitle'> How We Work</h1>
      <div ref={ref} class="wrapper">
    <div class="center-line">
      <a href="#!" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <motion.div className="row row-1"
    animate={animation}>
      <section>
        <i class="icon fas fa-home">
        <FontAwesomeIcon icon={faSquareFontAwesomeStroke} />
        </i>
        <div class="details">
          <span class="title">BUSINESS ANALYSIS</span>
        </div>
        <p>ZEITT focuses on the needs of your target audience to perform requirements engineering and outline the scope of the solution</p>
      </section>
    </motion.div>
    <motion.div  className="row row-2"
    animate={animation}
    >
      <section>
        <i class="icon fas fa-star">
        <FontAwesomeIcon icon={faStrava} />
        </i>
        <div class="details">
          <span class="title">FRONT END DESIGN AND DEVELOPMENT</span>
        </div>
        <p>The ZEITT designers closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, we bring it to life with front-end coding.</p>
      </section>
    </motion.div>
    <motion.div class="row row-1"
    animate={{x:0}}
    initial={{x:-200}}
    transition={{duration:'0.8'}}
    >
      <section>
        <i class="icon fas fa-rocket">
        <FontAwesomeIcon icon={faRocketchat} />
        </i>
        <div class="details">
          <span class="title">BACK END DEVELOPMENT</span>
        </div>
        <p>We accurately implement the business logic of your web app on the back end. We rely on proven frameworks to ensure fast and quality coding.</p>
      </section>
    </motion.div>
    <motion.div className="row row-2"
    animate={{x:0}}
    initial={{x:200}}
    transition={{duration:'0.8'}}
    >
      <section>
        <i class="icon fas fa-globe">
        <FontAwesomeIcon icon={faWordpress} />
        </i>
        <div class="details">
          <span class="title">INTEGRATION</span>
        </div>
        <p>We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems</p>
        
      </section>
    </motion.div>
    <motion.div className="row row-1"
    animate={{x:0}}
    initial={{x:-200}}
    transition={{duration:'0.8'}}>
      <section>
        <i class="icon fas fa-paper-plane">
        <FontAwesomeIcon icon={faTelegramPlane} />
        </i>
        <div class="details">
          <span class="title">CONTINUOUS SUPPORT AND EVOLUTION</span>
        </div>
        <p>ZEITT advances your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs.
          We help you provide high availability and trouble-free functionality of your web app.
        </p>
      </section>
    </motion.div>
    <motion.div class="row row-2"
    animate={{x:0}}
    initial={{x:-200}}
    transition={{duration :'0.8'}}
    >
      <section>
        <i class="icon fas fa-map-marker-alt">
        <FontAwesomeIcon icon={faDigitalOcean} />
        </i>
        <div class="details">
          <span class="title">WEB REDESIGN</span>
        </div>
        <p>ZEITT also improves visual appeal, functional fullness and usability of existing web apps.As result our clients see increased web conversions, reduced maintenance costs, better ROI from optimized business operations.</p>
       
      </section>
    </motion.div>
  </div>
    </div>
  )
}

export default Content
