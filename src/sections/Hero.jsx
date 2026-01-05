import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Link } from "react-scroll";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I BUILD FAST, CLEAN WEBSITES AND APPS
THAT LOOK PREMIUM AND RUN SMOOTH
SO YOUR BRAND FEELS TRUSTWORTHY`;
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        // subTitle={"404 No Bugs Found"}
        title={"Fenar Khan"}
        text={text}
        textColor={"text-black"}
        cta={
          <Link
            to="contact"
            smooth
            duration={1200}
            offset={-10}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/70 px-6 py-3 text-xs font-light uppercase tracking-[0.3em] text-black transition-colors duration-300 hover:bg-black hover:text-primary sm:w-auto"
          >
            Start Your Project
            <span aria-hidden="true">→</span>
          </Link>
        }
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows={!isMobile}
          frameloop={isMobile ? "demand" : "always"}
          dpr={isMobile ? 1 : [1, 2]}
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          {isMobile ? (
            <Planet scale={0.7} animate={false} />
          ) : (
            <Float speed={0.5}>
              <Planet scale={1} />
            </Float>
          )}
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
