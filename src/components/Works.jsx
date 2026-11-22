/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../HOC";
import { projects } from "../const";
import ProjectCarousel from "./ProjectCarousel";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  image_alt,
  image_style,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.05, 0.75)}>
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col'
      >
        <div className='relative w-full h-[230px]'>
          <img
            loading="lazy"
            decoding="async"
            src={image}
            alt={image_alt || name}
            style={image_style}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} source code on GitHub`}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </a>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-auto pt-4 flex flex-wrap gap-2'>
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
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Explore my work in agentic AI, retrieval-augmented generation,
          generative models, and machine-learning pipelines, alongside earlier
          full-stack and game projects. Each card links to its source repository.
        </motion.p>
      </div>

      <ProjectCarousel projects={projects} renderProject={(project) => <ProjectCard {...project} />} />
    </>
  );
};

export default SectionWrapper(Works, "projects");