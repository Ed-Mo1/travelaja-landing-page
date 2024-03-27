import { headingAnimation, headingText, testimonial } from "../../constants";
import TestimonialCard from "../TestimonialCard";
import { motion } from "framer-motion";
const Testimonial = () => {
  return (
    <section className="container">
      <motion.div
        variants={headingAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h5 variants={headingText} className="text-secondary font-bold">
          Testimonial
        </motion.h5>
        <motion.h2 variants={headingText} className="font-bold text-title mt-2">
          What they say about us
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10">
        {testimonial.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1 * i,
              type: "spring",
              stiffness: 120,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            key={item.id}
          >
            <TestimonialCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
