import React from 'react'
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { faDigitalOcean, faHouzz,  faRocketchat, faStrava, faTelegramPlane, faWordpress,} from '@fortawesome/free-brands-svg-icons'
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
        <FontAwesomeIcon icon={faHouzz} />
        </i>
        <div class="details">
          <span class="title">Title of Section 1</span>
          <span>1st Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          <a href="#!">Read more</a>
          <i>- Someone famous</i>
        </div>
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
          <span class="title">Title of Section 2</span>
          <span>2nd Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          <a href="#!">Read more</a>
          <i>- Someone famous</i>
        </div>
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
          <span class="title">Title of Section 3</span>
          <span>3rd Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          <a href="#!">Read more</a>
          <i>- Someone famous</i>
        </div>
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
          <span class="title">Title of Section 4</span>
          <span>4th Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          <a href="#!">Read more</a>
          <i>- Someone famous</i>
        </div>
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
          <span class="title">Title of Section 5</span>
          <span>5th Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          <a href="#!">Read more</a>
          <i>- Someone famous</i>
        </div>
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
          <span class="title">Title of Section 6</span>
          <span>6th Jan 2021</span>
        </div>
        <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        <div class="bottom">
          <a href="#!">Read more</a>
          <i>- Someone famous</i>
        </div>
      </section>
    </motion.div>
  </div>
    </div>
  )
}

export default Content
