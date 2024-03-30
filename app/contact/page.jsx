"use client";
import React from "react";
import Introcard from "@/components/Introcard";
import Faq from "@/components/Faq";
import ContactCard from "@/components/ContactCard";
import Divider from "@/components/Divider";
import AnimatedDiv from "@/components/AnimatedDiv";

const Contact = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Introcard name={"Contact Me"} />
      <div className="flex flex-col w-full justify-center items-center px-4 py-12 lg:px-24 gap-10">
        <AnimatedDiv>
        <div className="p-4 border-2 border-ring rounded-lg bg-gradient text-2xl ">
          <p>
            I&apos;m thrilled to connect with you! Whether you have a website
            project in mind, a collaboration proposal, or just want to chat
            about the fascinating world of internet, feel free to reach out.
          </p>
        </div></AnimatedDiv>
        <div className="w-full">
        <AnimatedDiv>
          <ContactCard />
        </AnimatedDiv>
        </div>

      </div>
      <Divider name={"FAQs"} />
      <Faq />
    </div>
  );
};

export default Contact;
