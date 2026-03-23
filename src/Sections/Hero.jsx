import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import Parallax from "../components/Parallax";
import { Animation } from "../components/Animation";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <Parallax />

      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [9, 1, 5], fov: 50 }}>
          <Suspense fallback = {<Loader/>}>
          
          {/* 🔥 Lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-5, 3, 5]} intensity={1} />

          {/* 🌎 Environment for realistic colors */}
          <Environment preset="city" />
<Animation
  scale={isMobile ? 0.0090 : 0.014}   // 👈 taller on mobile
  position={isMobile ? [0, -3.95, 0] : [2.0, -2.7, 0]}  // 👈 lower so feet touch
/>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={!isMobile}
          />
         

          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};



export default Hero;
