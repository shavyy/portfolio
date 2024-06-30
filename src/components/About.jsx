import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant  } from "../utils/motion";
import { serviceCard } from "../constants";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
  
  const About = () => {
    return (
      <>
        <motion.div variants={textVariant()} className='flex flex-col justify-center items-center w-full h-full'>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Vue d'ensemble</h2>
        </motion.div>
  
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] leading-[30px] justify-left text-left flex flex-col justify-center items-center w-full h-full'
        >
          Ingénieur électronique de formation puis responsable technique, 
          j’ai plus de 10 ans d’expérience dans le métier dans les domaines de l’énergie, l’automobile et le spatial. <br/>
          Fort de l’expérience en développement de projet industriel, je souhaite aujourd’hui me tourner vers
          le métier de développeur WEB.
        </motion.p>
  
        <div className='mt-20 flex flex-wrap gap-10 flex flex-row justify-center items-center w-full h-full'>
          {serviceCard.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
    );
  };
  
  export default SectionWrapper(About, "about");