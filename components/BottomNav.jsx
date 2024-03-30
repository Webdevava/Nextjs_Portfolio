"use client";
import { Home, MessageSquare, Monitor, Moon, Sun, User } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname hook
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const isActive = (route) => {
    // Use usePathname to get the current route
    const pathname = usePathname();

    // Handle exact match or partial match based on your needs
    return pathname === route || pathname.startsWith(route + "/");
};

const NavButton = ({ route, name, icon }) => {
    const active = isActive(route); // Call the isActive function outside the return statement

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        className={
                            active
                                ? "rounded-full bg-secondary border-2 border-primary ground text-primary p-2 transition-all duration-500 ease-in-out  hover:scale-110"
                                : "rounded-full hover:bg-foreground hover:text-background p-2 transition-all duration-500 ease-in-out  hover:scale-110"
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
                </TooltipTrigger>
                <TooltipContent>
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

const BottomNav = () => {
    const [themeIcon, setThemeIcon] = useState(false);

    const handleTheme = () => {
        document.body.classList.toggle("dark");
        setThemeIcon(!themeIcon);
    };

    return (
        <div className="w-full text-foreground fixed bottom-0 flex items-center justify-center p-4 z-50">
            <nav className="w-full lg:w-fit md:w-fit flex items-center justify-evenly gap-6 border-2 border-ring rounded-xl py-2 bg-background/50  shadow-md shadow-secondary px-6 backdrop-blur-sm backdrop-opacity-75">
                <NavButton route="/" name="Home" icon={<Home />} />
                <NavButton route="/projects" name="Projects" icon={<Monitor />} />
                


                <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <button
                    onClick={handleTheme}
                    data-tooltip-id="Theme"
                    className="rounded-full hover:bg-foreground hover:text-background p-2 transition-all duration-500 ease-in-out  hover:scale-110"
                >
                    {themeIcon ? <Moon /> : <Sun />}
                </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Theme</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>


                <NavButton route="/about" name="About" icon={<User />} />
                <NavButton route="/contact" name="Contact" icon={<MessageSquare />} />
            </nav>
        </div>
    );
};

export default BottomNav;
