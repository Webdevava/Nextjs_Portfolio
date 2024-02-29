'use client'
import { Home, MessageSquare, Monitor, Moon, Sun, User } from "lucide-react";
import { useRouter } from "next/navigation";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useState } from "react";

const BottomNav = () => {
  const router = useRouter();
  const [white, setWhite] = useState(false);

  const handleTheme = () => {
    const currentTheme = document.body.style.getPropertyValue('--fn').trim();
    if (currentTheme === 'white') {
        document.body.style.setProperty('--fn', 'black');
        document.body.style.setProperty('--bg', 'white');
        setWhite(true);
    } else {
        document.body.style.setProperty('--fn', 'white');
        document.body.style.setProperty('--bg', 'black');
        setWhite(false);
    }
  };

  return (
    <div className="w-full text-white fixed bottom-0 flex items-center justify-center p-4 z-50">
      <nav className="w-full lg:w-fit md:w-fit flex items-center justify-evenly gap-6 border border-zinc-600 rounded-xl py-2 bg-black opacity-70 px-6">
        <button
          onClick={() => router.push("/")}
          data-tooltip-id="Home"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          <Home />
        </button>
        <button
          onClick={() => router.push("/projects")}
          data-tooltip-id="Projects"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          <Monitor />
        </button>
        <button
          onClick={handleTheme}
          data-tooltip-id="Theme"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          {white ? <Moon /> : <Sun />}
        </button>
        <button
          onClick={() => router.push("/about")}
          data-tooltip-id="About"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          <User />
        </button>
        <button
          onClick={() => router.push("/contact")}
          data-tooltip-id="Contact"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          <MessageSquare />
        </button>
      </nav>
      <ReactTooltip id="Home" place="top" effect="solid" content="Home" />
      <ReactTooltip
        id="Projects"
        place="top"
        effect="solid"
        content="Projects"
      />
      <ReactTooltip id="About" place="top" effect="solid" content="About" />
      <ReactTooltip id="Theme" place="top" effect="solid" content="Theme" />
      <ReactTooltip id="Contact" place="top" effect="solid" content="Contact" />
    </div>
  );
};

export default BottomNav;
