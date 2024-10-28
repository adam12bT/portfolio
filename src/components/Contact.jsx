/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden w-full h-auto`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-12 rounded-2xl max-w-md  ' // Increased padding and added max-width
      >
        <p className={`${styles.sectionSubText} mt-2`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} `}>Contact.</h3>
     
        <p className='text-white font-medium mb-4'>
          For inquiries, please contact me at:
        </p>
        <p className='text-white font-medium'>
          <a href="mailto:adambouacida7@gmail.com" className='underline'>
            adambouacida7@gmail.com
          </a>
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[80vh] h-[60vh]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
