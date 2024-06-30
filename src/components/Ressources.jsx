import React from 'react'
import styles from '../style';
import Footer from './Footer';
import Navbar from './Navbar';

const LegalNotice = () => {
  return (
      <div className='relative z-0 bg-primary'>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
            <Navbar />
            <div className='mt-40'>
            <h2 className={`${styles.flexCenter} ${styles.heading2}`}>
                     Ressources
            </h2>
            <h3 className={`${styles.flexCenter} ${styles.sectionSubText} mb-5 mt-10`}>
                Développement Web
            </h3>
            <div className={`${styles.paragraphLink}`}>
            <a href="https://fr.legacy.reactjs.org/" target="_blank" rel="noopener noreferrer" >
              REACT<br/><br/>
            </a>
            <a href="https://www.npmjs.com/package/react-tilt" target="_blank" rel="noopener noreferrer">
              REACT-tilt<br/><br/>
            </a>
            <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" >
              Framer Motion<br/><br/>
            </a>
            <a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer" >
              REACT Router<br/><br/>
            </a>
            <a href="https://github.com/pmndrs/react-three-fiber" target="_blank" rel="noopener noreferrer" >
              REACT-three<br/><br/>
            </a>
            <a href="https://www.npmjs.com/package/react-image-gallery" target="_blank" rel="noopener noreferrer" >
              REACT-image-gallery <br/><br/>
            </a>
            <a href="https://www.npmjs.com/package/react-vertical-timeline-component" target="_blank" rel="noopener noreferrer" >
              REACT-vertical-timeline-component<br/><br/>
            </a>
            <a href="https://react.semantic-ui.com/" target="_blank" rel="noopener noreferrer" className={`${styles.paragraph}`}>
              semantic-ui-react<br/><br/>
            </a>
            <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className={`${styles.paragraph}`}>
              Emailjs<br/><br/>
            </a>
            <a href="https://sweetalert2.github.io/" target="_blank" rel="noopener noreferrer" className={`${styles.paragraph}`}>
              sweetalert2<br/><br/>
            </a>
            </div>
            <h3 className={`${styles.flexCenter} ${styles.sectionSubText} mb-5 mt-10`}>
                Loisirs
            </h3>
            <a href="https://lichess.org/fr" target="_blank" rel="noopener noreferrer" className={`${styles.paragraph}`}>
              Lichess<br/><br/>
            </a>
      
        </div>
        </div>
        <Footer />
      </div>
  )
}

export default LegalNotice