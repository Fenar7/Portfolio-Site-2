import React, { useEffect, useRef, useState } from "react";
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
import { useMediaQuery } from "react-responsive";

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const progressRef = useRef(0);

  useEffect(() => {
    progressRef.current = progress;
    if (progress >= 100) {
      setDisplayProgress(100);
    }
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  useEffect(() => {
    let rafId = 0;
    const tick = () => {
      setDisplayProgress((prev) => {
        if (progressRef.current >= 100) {
          return 100;
        }
        const idleTarget =
          progressRef.current === 0 ? Math.min(15, prev + 0.4) : prev;
        const target = Math.max(progressRef.current, idleTarget);
        const next = prev + (target - prev) * 0.12;
        return Math.min(next, 99);
      });

      if (progressRef.current < 100) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const wrapperClassName =
    "relative w-screen min-h-screen overflow-x-hidden";
  const content = (
    <>
      {!isReady && (
        <div className="fixed left-0 top-0 z-[999] grid h-[100dvh] w-screen place-items-center bg-black text-white transition-opacity duration-700 font-light">
          <div className="flex w-full max-w-[280px] flex-col items-center px-6 text-center sm:max-w-[320px]">
            <p className="mb-4 text-base tracking-widest animate-pulse sm:text-xl">
              Loading {Math.floor(displayProgress)}%
            </p>
            <div className="relative h-1 w-full overflow-hidden rounded bg-white/20">
              <div
                className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
                style={{ width: `${displayProgress}%` }}
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
    </>
  );

  if (isMobile) {
    return <div className={wrapperClassName}>{content}</div>;
  }

  return (
    <ReactLenis
      root
      className={wrapperClassName}
      options={{ smoothWheel: true, smoothTouch: false }}
    >
      {content}
    </ReactLenis>
  );
};

export default App;
