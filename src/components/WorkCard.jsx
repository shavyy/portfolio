import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects_elec, projects_web } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
  );
};

const Works = () => {
  return (
    <section id="realizations" className={`${styles.paddingY}`}>

        <p className={`${styles.sectionSubText} flex flex-col justify-center items-center w-full h-full`}>Mon Travail</p>
        <h2 className={`${styles.sectionHeadText} flex flex-col justify-center items-center w-full h-full`}>Projets personnel</h2>

      <div className='flex flex-col justify-center items-center w-full h-full mt-3 text-secondary text-[17px] max-w-15xl leading-[30px]'>
            Les projets suivants ont été développés à titre personnel et montrent une partie
            de mon expérience et de mes compétences. Chaque projet est brièvement décrit
            et certains sont disponibles via les liens associés.
            Ce travail reflète ma capacité à résoudre des problèmes, apprendre de nouvelles compétences 
            et à les concrétiser.<br/>
            Ci-dessous, les projets personnels de l'année 2023 ...
      </div>
      <h3 className={`${styles.flexCenter} ${styles.heading3} mt-20`}> Produits Electroniques </h3>
      <div className='mt-5 flex flex-wrap gap-7 justify-center items-center'>
        {projects_elec.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <h3 className={`${styles.flexCenter} ${styles.heading3} mt-20`}> Développement WEB </h3>
      <div className='mt-5 flex flex-wrap gap-7 justify-center items-center'>
        {projects_web.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");