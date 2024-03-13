"use client";
import Divider from "@/components/Divider";
import image from "../../assets/ankur.jpeg";
import Introcard from "@/components/Introcard";
import LetsConnect from "@/components/LetsConnect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Faq from "@/components/Faq";
import ContactCard from "@/components/ContactCard";

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

const About = () => {
  return (
    <div>
      <Introcard name={"About Me"} image={image} />

      <div className="px-4  lg:px-24 py-5 lg:py-10 flex flex-col gap-10">
        <AnimatedDiv>
          <div className="p-4 flex flex-col border border-zinc-800 rounded-lg ">
            <h1 className="text-3xl">Hey there! I&apos;m Ankur!</h1>
            <hr className="w-full bg-zinc-800 h-0.5 my-4" />
            <p className="text-lg font-semibold text-zinc-600">
              A Web developer on a mission to blend innovation with aesthetic
              finesse.
            </p>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="p-4 flex flex-col border border-zinc-800 rounded-lg ">
            <h1 className="text-3xl">Innovation at the Core</h1>
            <hr className="w-full bg-zinc-800 h-0.5 my-4" />
            <p className="text-lg font-semibold text-zinc-600">
              In every project, I strive to infuse a spark of innovation. From
              conceptualizing sleek interfaces to devising user-centric
              solutions, my design philosophy rev
            </p>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="p-4 flex flex-col border border-zinc-800 rounded-lg ">
            <h1 className="text-3xl">Crafting Digital Experiences</h1>
            <hr className="w-full bg-zinc-800 h-0.5 my-4" />
            <p className="text-lg font-semibold text-zinc-600">
              With a passion for pixels and a penchant for problem-solving, I
              navigate the ever-evolving landscape of digital design. My journey
              began with a curiosity about how technology intersects with
              creativity, and it&apos;s been a thrilling ride ever since.
            </p>
          </div>
        </AnimatedDiv>
      </div>

      <Divider name="Experience" />
        <div className=" flex flex-col px-8  lg:px-24 py-5 lg:py-10 gap-10">
          <AnimatedDiv>
            <div className="p-4 flex flex-col border border-zinc-800 rounded-lg ">
              <h1 className="text-3xl">Full Stack Developer Intern</h1>
              <p className=" opacity-60">Bharat Intern <span className="text-xs"> (Jan 2024 - Feb 2024)</span></p>
              <hr className="w-full bg-zinc-800 h-0.5 my-4" />
              <p className="text-lg font-semibold text-zinc-600">
              During my internship at Bharat Intern, I developed a range of full-stack applications over a three-month period. This
              included implementing user authentication, building a blog website, and creating an expense tracker application. My
              responsibilities involved designing and developing these applications from scratch. 
              </p>
            </div>
          </AnimatedDiv>
        
        </div>

      <LetsConnect />

      <Divider name="FAQs" />
      <Faq />
      <div className="px-4  lg:px-24 py-5 lg:py-10 flex flex-col gap-10">
      <ContactCard/></div>
    </div>
  );
};

export default About;
