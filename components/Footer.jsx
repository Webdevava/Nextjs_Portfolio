const Footer = () => {
    return (
        <footer className="flex items-center py-8 lg:p-12 pb-24 min-h-96 border-t-2 border-primary bg-muted shadow-lg shadow-muted flex-col lg:flex-row justify-between gap-10 p-4">
            <div className="flex flex-col justify-between">
                <div className="my-4 border-2 border-ring p-4 rounded-lg bg-background">
                    <h1 className="text-4xl">Ankur Auti</h1>
                    <p className="text-foreground/50 font-bold">Web Developer</p>
                </div>
                <p className="text-sm text-zinc-500 ">
                    © Copyright 2023. All rights Reserved.
                </p>
            </div>

            <div className="p-2 border-2 border-ring rounded-lg bg-background flex flex-col justify-between h-fit gap-8 w-full  lg:w-fit">
                <div className="">
                    <h2 className="text-xl font-bold text-primary mb-2">
                        Socials:
                    </h2>
                    <ul className="px-3 py-2 border-2 border-ring flex gap-3 rounded-lg text-lg z-50 flex-col lg:flex-row w-full bg-gradient">
                        <li className="hover:opacity-50">
                            <a
                                href="http://github.com/Webdevava"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                Github
                            </a>
                        </li>
                        <li className="hover:opacity-50">
                            <a
                                href="https://www.linkedin.com/in/ankur-auti-862953250/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="hover:opacity-50">
                            {" "}
                            <a
                                href="https://twitter.com/ankur_auti"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                Twitter/X
                            </a>
                        </li>
                        <li className="hover:opacity-50">
                            <a
                                href="https://www.instagram.com/ankurauti382/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                <a
                    href="mailto:ankurauti@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:opacity-50"
                >
                    ankurauti@gmail.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
