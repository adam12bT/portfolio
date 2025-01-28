/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../HOC";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex flex-col xl:flex-row gap-10 overflow-hidden w-full h-auto">
      <div className="flex flex-col gap-10 w-full xl:w-[35%]">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 p-12 rounded-2xl "
        >
          <p className={`${styles.sectionSubText}`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

          <p className="text-white font-medium">
            For inquiries, please contact me at:
          </p>

          <p className="text-white font-medium">
            <a href="mailto:adambouacida7@gmail.com" className="underline">
              adambouacida7@gmail.com
            </a>
          </p>
        </motion.div>

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 p-12 rounded-2xl max-w-md min-h-[250px]"
        >
          <h1 className={`${styles.sectionSubText}`}>For The Game</h1>
          <p className="mt-10">Press Z, Q, S, D to move</p>
          <p className="mt-5">Press R to reset</p>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[80vh] h-[60vh]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
