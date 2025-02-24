import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floatNavbar";
import { FaHome } from "react-icons/fa";
import  RecentProjects  from "@/components/Projects"  
import { navItems } from "@/data";
export default function Home() {
  return (
    <main className="relative bg-black-100">
      <div>
        <FloatingNav navItems= { navItems }/>
        <Hero />
        <RecentProjects />
      </div>
    </main>
  )
}