'use client'
import { Home, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


const Error = () => {

  return (
    <motion.div  className="px-4 lg:px-16 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="w-full border-2 border-ring bg-gradient rounded-xl flex flex-col-reverse lg:flex-row p-2 lg:p-5 gap-4 h-fit mb-12"
      >
        <div
          style={{ flex: 3 }}
          className="texts flex flex-col justify-between gap-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center  border-2 border-ring  bg-background rounded-md p-4"
          >
            <h1 className="lg:text-7xl text-4xl my-2">404</h1>
            <hr className=" border-2 my-3 w-full" />
            <h2 className="lg:text-5xl text-3xl text-foreground/75 my-2 font-medium ">
              Page Not Found!
            </h2>
          </motion.div>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="intro p-4 text-lg text-center text-foreground/75 font-medium border-2 border-ring rounded-md  bg-background"
          >
            The page you were looking for might have been moved, deleted, or
            never existed.
          </motion.p>

          <div className="flex gap-10 justify-center items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-2 w-full  border-2 border-ring rounded-md  bg-background"
            >
            <Link href="/" className="w-full h-full flex justify-center gap-2 text-xl">
            <Home/> Back Home
            </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-2 w-full border-2 border-ring rounded-md  bg-background"
            >
            <Link href="/contact" className="w-full h-full flex justify-center gap-2 text-xl">
            <MessageSquare/> Contact me
            </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Error;
