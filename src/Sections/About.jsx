import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from "../components/Frameworks";
const About = () => {
    const grid2Container = useRef();
  return (
    <section className="c-space section-spacing ">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* 1  */}
           <div className="relative overflow-hidden flex items-end grid-default-color grid-1">
  <img
    src="assets/coding-pov.png"
    alt="Coding POV"
    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-1/2 md:inset-y-10 md:-translate-x-1/2 lg:scale-[2.5]"
  />
  <div className="relative z-10">
    <p className="headtext">Hi, I'm Gabriel Recaña</p>
    <p className="subtext">
      I build dynamic web applications and system solutions with a focus on clean code, usability, and performance. From interactive RPG projects to inventory and quiz systems, I turn ideas into scalable digital experiences.
    </p>
  </div>
  <div className="absolute inset-x-0 pointer-events-none bottom-0 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-900/90 to-transparent" />
</div>
            {/* 2 */}
            <div className="grid-default-color grid-2">
                <div ref={grid2Container} className="flex items-center justify center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">
                        I build. I debug. I optimize. I improve.
                    </p>
                    <Card style={{rotate: "75deg", top:"30%", left: "20%"}} text="GRASP" containerRef = {grid2Container} />
                    <Card style={{rotate: "-30deg", top:"60%", left: "45%"}} text="Solid" containerRef = {grid2Container}/>
                    <Card style={{rotate: "90deg", bottom:"30%", left: "70%"}} text="Design Pattern" containerRef = {grid2Container}/>
                    <Card style={{rotate: "-45deg", top:"55%", left: "0%"}} text="Design Principle" containerRef = {grid2Container}/>
                    <Card style={{rotate: "20deg", top:"10%", left: "38%"}} text="SRP" containerRef = {grid2Container}/>
                    <Card style={{rotate: "30deg", top:"70%", left: "70%"}} image="assets/logos/Python.png" containerRef = {grid2Container}/>
                    <Card style={{rotate: "-45deg", top:"70%", left: "25%"}} image="assets/logos/Godot Engine.png" containerRef = {grid2Container}/>
                    <Card style={{rotate: "-45deg", top:"5%", left: "10%"}} image="assets/logos/React.png" containerRef = {grid2Container}/>
                    <Card style={{rotate: "-45deg", top:"1%", right: "15%"}} image="assets/logos/Tailwind CSS.png" containerRef = {grid2Container}/>
                    <Card style={{rotate: "-45deg", top:"1%", right: "1%"}} image="assets/logos/Csharp.png" containerRef = {grid2Container}/>
                    
                </div>
            </div>
            {/* 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm based in Philippines, and open to remote work worldwide</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe/>

                </figure>
            </div>
            {/* 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">Let's start something new</p>
                    <CopyEmailButton/>
                </div>
            </div>
            {/* 5 */}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Teck Stack</p>
                    <p className="subtext">This are my specialize languages, frameworks, and tools that allow me to build modern applications</p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <FrameWorks/>
                    </div>
            </div>


        </div>
    </section>
  )
}

export default About
