import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const ContactCard = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("ankurauti@gmail.com");
  };
  return (
    <div className="w-full p-4 border border-zinc-800 rounded-lg text-xl">
      <div className="flex flex-col">
        <span className="w-full">Email:</span>
        <h1
          className="text-3xl text-center w-fit self-center cursor-pointer relative"
          onClick={copyEmail}
          title="Tap to copy"
        >
          ankurauti@gmail.com
        </h1>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-4">
        <span>Socials:</span>
        <div className="links flex lg:flex-row md:flex-row flex-col justify-center items-center gap-4">
          <a
            href="https://github.com/webdevava"
            className="border border-zinc-800 rounded-md p-4 w-full flex justify-center"
          >
            <span>
              <Github size={35} />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ankur-auti-862953250/"
            className="border border-zinc-800 rounded-md p-4 w-full flex justify-center"
          >
            <span>
              <Linkedin size={35} />
            </span>
          </a>
          <a
            href="https://twitter.com/ankur_auti"
            className="border border-zinc-800 rounded-md p-4 w-full flex justify-center"
          >
            <span>
              <Twitter size={35} />
            </span>
          </a>
          <a
            href="https://www.instagram.com/ankurauti382/"
            className="border border-zinc-800 rounded-md p-4 w-full flex justify-center"
          >
            <span>
              <Instagram size={35} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
