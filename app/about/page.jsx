"use client";
import Divider from "@/components/Divider";
import image from "../../assets/ankur.jpeg";
import Introcard from "@/components/Introcard";
import LetsConnect from "@/components/LetsConnect";
import Faq from "@/components/Faq";
import ContactCard from "@/components/ContactCard";
import AnimatedDiv from "@/components/AnimatedDiv";


const About = () => {
  return (
    <div>
      <Introcard name={"About Me"} image={image} />

      <div className="px-4  lg:px-24 py-5 lg:py-10 flex flex-col gap-10">
        <AnimatedDiv>
          <div className="p-4 flex flex-col border-2 border-ring rounded-lg bg-gradient  ">
            <h1 className="text-3xl">Hey there! I&apos;m Ankur!</h1>
            <hr className="w-full bg-ring h-0.5 my-4" />
            <p className="text-lg font-semibold text-foreground/80">
              A Web developer on a mission to blend innovation with aesthetic
              finesse.
            </p>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="p-4 flex flex-col border-2 border-ring rounded-lg bg-gradient  ">
            <h1 className="text-3xl">Innovation at the Core</h1>
            <hr className="w-full bg-ring h-0.5 my-4" />
            <p className="text-lg font-semibold text-foreground/80">
              In every project, I strive to infuse a spark of innovation. From
              conceptualizing sleek interfaces to devising user-centric
              solutions, my design philosophy rev
            </p>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="p-4 flex flex-col border-2 border-ring rounded-lg bg-gradient  ">
            <h1 className="text-3xl">Crafting Digital Experiences</h1>
            <hr className="w-full bg-ring h-0.5 my-4" />
            <p className="text-lg font-semibold text-foreground/80">
              With a passion for pixels and a penchant for problem-solving, I
              navigate the ever-evolving landscape of digital design. My journey
              began with a curiosity about how technology intersects with
              creativity, and it&apos;s been a thrilling ride ever since.
            </p>
          </div>
        </AnimatedDiv>
      </div>

      <Divider name="Experience" />
      <div className=" flex flex-col px-8  lg:px-24 py-5 lg:py-10 gap-10">
        <AnimatedDiv>
          <div className="p-4 flex flex-col border-2 border-ring rounded-lg bg-gradient  ">
            <h1 className="text-3xl">Full Stack Developer Intern</h1>
            <p className=" text-foreground/85">
              Bharat Intern{" "}
              <span className="text-sm"> (Jan 2024 - Feb 2024)</span>
            </p>
            <hr className="w-full bg-ring h-0.5 my-4" />
            <p className="text-lg font-semibold text-foreground/80">
              During my internship at Bharat Intern, I developed a range of
              full-stack applications over a three-month period. This included
              implementing user authentication, building a blog website, and
              creating an expense tracker application. My responsibilities
              involved designing and developing these applications from scratch.
            </p>
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div className="p-4 flex flex-col border-2 border-ring rounded-lg bg-gradient ">
            <h1 className="text-3xl">Junior Full Stack Developer</h1>
            <p className=" text-foreground/85">
              Inditronics PVT. LTD.
              <span className="text-sm"> (March 2024 - Present)</span>
            </p>
            <hr className="w-full bg-ring h-0.5 my-4" />
            <p className="text-lg font-semibold text-foreground/80">
              At Inditronics, I am primarily focused on server-side development
              and AWS for integrating IoT devices with web applications. My work
              involves developing scalable server-side solutions, integrating
              AWS services such as S3 and DynamoDB for storage,IoT core for
              managing IoT devices and implementing authentication APIs for
              secure communication between IoT devices and the web. I also work
              on monitoring and managing roles for efficient operation of the
              IoT portal.
            </p>
          </div>
        </AnimatedDiv>
      </div>

      <LetsConnect />

      <Divider name="FAQs" />
      <Faq />
      <div className="px-4  lg:px-24 py-5 lg:py-10 flex flex-col gap-10">
        <AnimatedDiv>

        <ContactCard />
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default About;
