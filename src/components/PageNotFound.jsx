import React from 'react'
import styles from '../style';
import Footer from './Footer';
import Navbar from './Navbar';

const PageNotFound = () => {
  return (
    <div className='relative z-0 bg-primary'>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
            <Navbar />
            <div className={`mt-60 mb-40 ${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <h2 className={`${styles.flexCenter} ${styles.heading2}`}>
                        Error 404 : Page Not Found
                    </h2>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PageNotFound