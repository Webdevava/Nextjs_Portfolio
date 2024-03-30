"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  const faqs = [
    {
      question: "What is your approach to website development?",
      answer:
        "My approach to web development is focused on creating scalable and efficient web applications. I follow best practices for MongoDB, Express.js, React, and Node.js, ensuring that the application is well-structured and performs optimally.",
    },
    {
      question: "What types of projects have you worked on?",
      answer:
        "I have worked on a variety of projects, including e-commerce websites, social media platforms, and business management tools. My experience spans across different industries, allowing me to tackle diverse project requirements.",
    },
    {
      question: "How do you collaborate with clients and teams?",
      answer:
        "In projects, I collaborate closely with clients and teams to ensure that the development process is transparent and efficient. I use collaborative tools for communication and feedback, and I prioritize regular updates and discussions.",
    },
    {
      question: "Can you customize your services to fit our project needs?",
      answer:
        "Yes, I can customize my services to align with the specific needs and goals of your project. Whether it's implementing unique features or integrating third-party services, I can tailor my approach to meet your requirements.",
    },
    {
      question: "What is your availability for new projects?",
      answer:
        "My availability for new projects depends on my current workload. However, I am always open to discussing new opportunities. Feel free to reach out, and we can discuss your project timeline and requirements.",
    },
    {
      question: "How can we start a project with you?",
      answer:
        "To start a project with me, please contact me through the [Contact Me] section on my portfolio. Provide some details about your project, and I'll get back to you to schedule a consultation and discuss the next steps.",
    },
  ];

  const faqVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="px-4 py-12 lg:p-12">
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-2"
      >
        {faqs.map((faq, i) => (
          <motion.div
            className="w-full"
            variants={faqVariants}
            initial="hidden"
            animate={controls}
            custom={i}
          >
            <AccordionItem
              value={i.toString()}
              key={i}
              ref={ref}
              className=" bg-gradient rounded-md border-2 border-ring"
            >
              <AccordionTrigger className="text-2xl text-start px-2 py-4 rounded-t-md border-b-0">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-xl text-foreground/95 font-light  rounded-b-md p-2 border-t-0">
                <hr className="border-foreground/50 mb-3" />
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
