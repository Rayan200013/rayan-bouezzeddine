import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-10xl leading-[30px]'
      >
       I am a results-driven Web Application Developer specializing in frontend development. Recently completing a comprehensive four-month Full Stack Bootcamp, I honed my skills in the MERN stack, notably during a two-month internship where I focused on building a React application, expanding my proficiency in React and API integration. Currently, as a full-time intern at Brava 360 Digital, I am refining my skills in WordPress and headless CMS systems like Next.js, further enhancing my understanding of backend technologies and content management solutions. Beyond development, I actively extend my expertise to SEO, quality assurance, and testing methodologies. As a proactive individual, I consistently exceed expectations. Simultaneously, I contribute as a freelance website developer, fostering connections and delivering impactful solutions for clients across the USA, Canada, Gulf countries, and Lebanon. This is just the beginning of my journey, and I eagerly anticipate the challenges and opportunities that lie ahead. "I thrive on the continuous learning inherent in this ever-evolving industry—I never get bored."
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
