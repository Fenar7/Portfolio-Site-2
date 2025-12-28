import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-hidden">
      {!isReady && (
        <div className="fixed left-0 top-0 z-[999] grid h-[100dvh] w-screen place-items-center bg-black text-white transition-opacity duration-700 font-light">
          <div className="flex w-full max-w-[280px] flex-col items-center px-6 text-center sm:max-w-[320px]">
            <p className="mb-4 text-base tracking-widest animate-pulse sm:text-xl">
              Loading {Math.floor(progress)}%
            </p>
            <div className="relative h-1 w-full overflow-hidden rounded bg-white/20">
              <div
                className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
