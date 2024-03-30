import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MoveLeft } from "lucide-react";

const Project = ({ title, desc, date, image, service, url, repo }) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  if (inView) {
    controls.start({
      x: 0,
      transition: {
        type: "spring",
        duration: 1.75,
        stiffness: 250,
        damping: 50,
        once: true,
        delay: 0.25,
      },
    });
  }

  return (
    <div className="px-4 py-12 lg:px-24 relative">
      <motion.div
        ref={ref}
        initial={{ x: "90%" }}
        animate={controls}
        className="rounded-lg bg-gradient flex border-2 border-primary shadow-lg flex-col lg:flex-row md:flex-row project relative "
      >
        <a
          href={url}
          className="bg-black text-white p-3 rounded-full border-2 border-primary  items-center justify-center absolute projectBtn z-50 hidden lg:flex"
        >
          <MoveLeft fill="#fefefe" />
        </a>

        <a href={repo} className="image overflow-hidden flex-2 aspect-video imgContainer flex-1 p-3">
          <img
            src={image}
            alt="project pic"
            className="flex border-2 border-primary justify-between object-fill h-full max-h-screen w-full  transition-all duration-500 ease-in-out  contrast-100 hover:contrast-125 rounded-lg contrast"
          />
        </a>

        <div className="desc p-3 flex h-full w-full infoContainer flex-1">
          <div className="flex flex-col rounded-lg border-2 border-primary bg-background p-2 gap-4">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Project</h2>
              <span className="rounded-lg border-2 border-primary text-foreground/75 p-2 text-end font-medium mt-3 capitalize bg-secondary">
                {title}
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Date</h2>
              <span className="rounded-lg border-2 border-primary text-foreground/75 p-2 text-end font-medium mt-3 capitalize bg-secondary">
                {date}
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Service</h2>
              <span className="rounded-lg border-2 border-primary text-foreground/75 p-2 text-end font-medium mt-3 capitalize bg-secondary">
                {service}
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Description</h2>
              <span className="rounded-lg border-2 text-foreground/75 border-primary p-2 font-medium mt-3 capitalize bg-secondary ">
                {desc}
              </span>
            </div>
            <a
              href={url}
              className="rounded-lg border-2 border-zinc-800 p-2 flex items-center justify-center gap-2 text-xl  text-blue-600 font-medium mt-3 lg:hidden"
            >
              <MoveLeft />
              Live Preview
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
