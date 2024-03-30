import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedDiv = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5, // Percentage of the element's visibility
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  };

  export default AnimatedDiv