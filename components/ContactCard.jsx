import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const ContactCard = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("ankurauti@gmail.com");
  };
  return (
    <div className="w-full p-4 border-2 border-primary bg-gradient rounded-lg text-xl">
      <div className="flex flex-col">
        <span className="w-full">Email:</span>
        <h1
          className="text-3xl border-2 border-primary bg-secondary hover:bg-card rounded-md p-4 w-full flex justify-center text-center self-center cursor-pointer relative"
          onClick={copyEmail}
          title="Tap to copy"
        >
          ankurauti@gmail.com
        </h1>
      </div>
      <hr className="my-8 border-2 border-primary/50" />
      <div className="flex flex-col gap-4">
        <span>Socials:</span>
        <div className="links flex lg:flex-row md:flex-row flex-col justify-center items-center gap-4">
        <a
  href="https://github.com/webdevava"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-full justify-center rounded-md border-2 border-dashed border-ring bg-secondary px-6 py-3 font-semibold uppercase text-foreground transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl dark:hover:shadow-[4px_4px_0px_#344851] hover:shadow-[4px_4px_0px_#282848] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none"
>
  <span>
    <Github size={35} />
  </span>
</a>
<a
  href="https://www.linkedin.com/in/ankur-auti-862953250/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-full justify-center rounded-md border-2 border-dashed border-ring bg-secondary px-6 py-3 font-semibold uppercase text-foreground transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl dark:hover:shadow-[4px_4px_0px_#344851] hover:shadow-[4px_4px_0px_#282848] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none"
>
  <span>
    <Linkedin size={35} />
  </span>
</a>
<a
  href="https://twitter.com/ankur_auti"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-full justify-center rounded-md border-2 border-dashed border-ring bg-secondary px-6 py-3 font-semibold uppercase text-foreground transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl dark:hover:shadow-[4px_4px_0px_#344851] hover:shadow-[4px_4px_0px_#282848] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none"
>
  <span>
    <Twitter size={35} />
  </span>
</a>
<a
  href="https://www.instagram.com/ankurauti382/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex w-full justify-center rounded-md border-2 border-dashed border-ring bg-secondary px-6 py-3 font-semibold uppercase text-foreground transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-xl dark:hover:shadow-[4px_4px_0px_#344851] hover:shadow-[4px_4px_0px_#282848] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none"
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
