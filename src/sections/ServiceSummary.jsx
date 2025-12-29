import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.to("#title-service-1", {
        xPercent: 20,
        scrollTrigger: {
          target: "#title-service-1",
          scrub: true,
        },
      });
      gsap.to("#title-service-2", {
        xPercent: -30,
        scrollTrigger: {
          target: "#title-service-2",
          scrub: true,
        },
      });
      gsap.to("#title-service-3", {
        xPercent: 100,
        scrollTrigger: {
          target: "#title-service-3",
          scrub: true,
        },
      });
      gsap.to("#title-service-4", {
        xPercent: -100,
        scrollTrigger: {
          target: "#title-service-4",
          scrub: true,
        },
      });
    });
    return () => mm.revert();
  }, []);
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p>FULL-STACK</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-0 md:translate-x-16"
      >
        <p className="font-normal">WEBSITES — WEB APPS</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>APIs</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 translate-x-0 md:-translate-x-48"
      >
        <p>UI/UX</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">DESIGN</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>DEPLOYMENT</p>
      </div>
      <div id="title-service-4" className="translate-x-0 md:translate-x-48">
        <p>WHAT I DO</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
