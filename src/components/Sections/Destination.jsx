import { destination, headingAnimation, headingText } from "../../constants";
import DestinationCard from "../DestinationCard";
import { motion } from "framer-motion";
const Destination = () => {
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
          top destination
        </motion.h5>
        <motion.h2 variants={headingText} className="font-bold text-title mt-2">
          Discover your love
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {destination.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1 * i,
              type: "spring",
              stiffness: 120,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <DestinationCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
