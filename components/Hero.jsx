import myImage from "../assets/ankur.jpeg";
import { Dot } from "lucide-react";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]); 

  return (
    <motion.div
    
      style={{ scale }}
      className="px-4 lg:px-16 py-10 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="w-full border-2 border-primary bg-gradient rounded-lg flex flex-col-reverse lg:flex-row p-2 lg:p-5 gap-4 h-fit mb-12 shadow-md"
      >
        <div
          style={{ flex: 3 }}
          className="texts flex flex-col justify-between gap-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col border-2 border-ring bg-background rounded-md p-4"
          >
            <h1 className="lg:text-6xl text-4xl my-2 md:text-5xl">Hey! I&apos;m Ankur</h1>
            <hr className="border-2 border-border-2 my-3" />
            <h2 className="lg:text-4xl text-3xl text-primary/70 my-2 font-medium md:text-4xl">
              I Design the Web!
            </h2>
          </motion.div>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="intro p-4 text-lg text-foreground font-medium border-2 border-ring bg-background rounded-md"
          >
            I&apos;m a passionate and dedicated web developer with a love for crafting
            innovative digital solutions and bringing creative ideas to life
            through code.
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-2 w-full work flex justify-between border-2 border-ring bg-background flex-col lg:flex-row rounded-md"
          >
            <span 
            className="flex items-center text-md lg:text-xl">
              <Dot className="animate-blink" color="green" size={40} />
              Available for Work
            </span>
            <Link href="/contact" className="rounded-sm border-2 border-dashed border-ring bg-secondary px-6 py-1 font-semibold uppercase text-foreground transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl dark:hover:shadow-[4px_4px_0px_#344851] hover:shadow-[4px_4px_0px_#282848] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none flex justify-center items-center">
              Let&apos;s Connect!
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className=" flex items-center justify-center w-full lg:w-1/2 h-fit lg:h-full border-2 p-2 rounded-md border-ring bg-background overflow-hidden"
        >
          <Image
          height={800}
          width={800}
            src={myImage}
            priority={true}
            alt="profile pic"
            className="object-cover max-h-96 w-full grayscale rounded-md"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
