import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `DESIGN-LED DEVELOPER WITH A FULL-STACK MINDSET
I BUILD WEBSITES AND WEB APPS THAT FEEL PREMIUM
FROM FIRST WIREFRAME TO FINAL DEPLOYMENT`;
  const aboutText = `I’m Fenar — a full-stack developer who also thinks like a designer. I build modern websites and web apps that are clean, fast, and easy to maintain. I care about the stuff people notice (layout, flow, micro-interactions) and the stuff they don’t (structure, reliability, scalability).

I currently work at DAD Concepts, building everything from custom React/Next.js projects to platform sites on WordPress, Framer, and Wix — depending on what the product actually needs. My approach is simple: understand the goal, design the experience, then engineer it properly.
WHEN I’M NOT SHIPPING:
⚡ Refining UI systems and components so every screen feels consistent
🎨 Designing in Figma — layouts, flows, and brand visuals that match the product
🛠️ Fixing performance and polish on real projects (the unglamorous work that matters)`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
