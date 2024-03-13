"use client";
import { Home, MessageSquare, Monitor, Moon, Sun, User } from "lucide-react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname hook
import Link from "next/link";

const isActive = (route) => {
  // Use usePathname to get the current route
  const pathname = usePathname();

  // Handle exact match or partial match based on your needs
  return pathname === route || pathname.startsWith(route + "/");
};

const NavButton = ({ route, name, icon }) => {
  const active = isActive(route); // Call the isActive function outside the return statement

  return (
    <button
      className={
        active
          ? "rounded-full bg-white text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
          : "rounded-full hover:bg-gray-200 hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
      }
      data-tooltip-id={name}
    >
      <Link
        href={route}
        className="w-full h-full flex items-center justify-center text-lg font-medium"
      >
        {icon}
      </Link>
    </button>
  );
};

const BottomNav = () => {
  const [white, setWhite] = useState(false);

  const handleTheme = () => {
    const currentTheme = document.body.style.getPropertyValue("--fn").trim();
    if (currentTheme === "white") {
      document.body.style.setProperty("--fn", "black");
      document.body.style.setProperty("--bg", "white");
      setWhite(true);
    } else {
      document.body.style.setProperty("--fn", "white");
      document.body.style.setProperty("--bg", "black");
      setWhite(false);
    }
  };

  return (
    <div className="w-full text-white fixed bottom-0 flex items-center justify-center p-4 z-50">
      <nav className="w-full lg:w-fit md:w-fit flex items-center justify-evenly gap-6 border border-zinc-600 rounded-xl py-2 bg-black opacity-70 px-6">
        <NavButton route="/" name="Home" icon={<Home />} />
        <NavButton route="/projects" name="Projects" icon={<Monitor />} />
        <button
          onClick={handleTheme}
          data-tooltip-id="Theme"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          {white ? <Moon /> : <Sun />}
        </button>
        <NavButton route="/about" name="About" icon={<User />} />
        <NavButton route="/contact" name="Contact" icon={<MessageSquare />} />
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
