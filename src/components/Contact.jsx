/* eslint-disable react-refresh/only-export-components */
import { useState, lazy, Suspense } from "react";
import { useSectionVisibility } from "../hooks/useSectionVisibility";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../HOC";
import { slideIn } from "../utils/motion";
const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const game = useSectionVisibility("600px");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    link: "",
    message: "",
     delivered:"false",

  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { saveContact } = await import("../lib/contactStorage");
      await saveContact(form);

      alert("Message sent successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        link: "",
        message: "",
        delivered:"false",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="xl:mt-12 flex flex-col xl:flex-row gap-10 overflow-hidden w-full h-auto">
      <div className="flex flex-col gap-10 w-full xl:w-[35%]">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 p-8 rounded-2xl w-full max-w-md"
        >
          <p className={`${styles.sectionSubText}`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText} mb-6`}>Contact.</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-white text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white text-sm font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="link" className="block text-white text-sm font-semibold mb-2">
                Link
              </label>
              <input
                type="url"
                id="link"
                name="link"
                value={form.link}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        ref={game.ref}
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[80vh] h-[60vh]"
      >
        {game.hasEntered && <Suspense fallback={null}><EarthCanvas active={game.isActive} /></Suspense>}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

