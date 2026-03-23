import { OrbitingCircles } from "./OrbitingCircles"
export function FrameWorks() {
  const skills =[
    "Tailwind CSS",
    "React",
    "Godot Engine",
    "Python",
    "Csharp",
    "Vite.js",
    "GitHub",
    "Firebase",
   ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={25}>
        {skills.map((skill, index)=>(<Icon key={index} src={`assets/logos/${skill}.png`}/>))}
        
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
         {skills.reverse().map((skill, index)=>(<Icon key={index} src={`assets/logos/${skill}.png`}/>))}
        
      </OrbitingCircles>
    </div>
  )
}

const Icon=({src}) =>(
  <img src={src} className="rounded-sm hover:scale-110 duration-200"/>
)

