'use client'
import React from "react";
import Introcard from "@/components/Introcard";
import Faq from "@/components/Faq";
import ContactCard from "@/components/ContactCard";

const Contact = () => {

  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Introcard name={"Contact Me"} />
      <div className="flex flex-col w-full justify-center items-center px-4 py-12 lg:px-24 gap-10">
        <div className="p-4 border border-zinc-800 rounded-lg text-xl">
          <p>
            I&apos;m thrilled to connect with you! Whether you have a website
            project in mind, a collaboration proposal, or just want to chat
            about the fascinating world of internet, feel free to reach out.
          </p>
        </div>
    <ContactCard/>
      </div>
      <div className="flex border-b-2 border-zinc-700 px-20 ">
        <p className="text-5xl my-4 marby">FAQs</p>
      </div>
      <Faq />
    </div>
  );
};

export default Contact;
