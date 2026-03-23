import {motion, useScroll, useTransform, useSpring } from 'motion/react'
import { section } from 'motion/react-client'


const Parallax = () => {
  const {scrollYProgress} = useScroll();
  const x = useSpring(scrollYProgress, {damping: 50});
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]); 
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]); 
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]); 
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]); 
  return (
    <section className="absolute inset-0 bg-black/40">
        <div className="relative h-screen overflow-y-hidden">
        {/* Sky */}
      <div
        className="absolute inset-0 -z-50"
        style={{
          backgroundImage: "url('/assets/Sky.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          
        }}
      />

      {/* Mountain */}
      <motion.div
        className="absolute inset-0 -z-40"
        style={{
          backgroundImage: "url('/assets/mountain-3.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          y: mountain3Y,
        }}
            />
         {/* Planets*/}
            <motion.div
         className="absolute inset-0 -z-30"
        style={{
          backgroundImage: "url('/assets/planets.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          x: planetsX,
        }}
            />
         {/* Mountatin 2 */}
             <motion.div
         className="absolute inset-0 -z-20"
          style={{
          backgroundImage: "url('/assets/mountain-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          y: mountain2Y,
        }}
            />
         {/* Mountain 1 */}
           <motion.div
         className="absolute inset-0 -z-10"
          style={{
          backgroundImage: "url('/assets/mountain-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          y: mountain1Y,
        }}
            />
        </div>
    </section>
  )
}

export default Parallax
