import img from "../../assets/images/Group 34.jpg";
import { motion } from "framer-motion";
const TravelersPoint = () => {
  return (
    <section className="container gap-10 flex justify-between max-md:flex-col">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 120,
        }}
        className="flex-1"
      >
        <img src={img} alt="img" className="w-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          type: "spring",
          stiffness: 120,
        }}
        className="flex-1"
      >
        <h5 className="text-secondary font-bold">Travelers Point</h5>

        <h2 className="font-bold text-title mt-5">
          We help to find your dream place
        </h2>

        <p className="text-title leading-7 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>

        <div className="grid grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-secondary font-bold">100+</h2>
            <p className="text-title">Holiday Package</p>
          </div>
          <div>
            <h2 className="text-secondary font-bold">172</h2>
            <p className="text-title">Hotels</p>
          </div>
          <div>
            <h2 className="text-secondary font-bold">68</h2>
            <p className="text-title">Elite Transportation</p>
          </div>
          <div>
            <h2 className="text-secondary font-bold">32M+</h2>
            <p className="text-title">we help to find your dream place</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TravelersPoint;
