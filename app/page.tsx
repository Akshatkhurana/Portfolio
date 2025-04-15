import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floatNavbar";
import  RecentProjects  from "@/components/Projects"  
import { navItems } from "@/data";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main className="relative bg-black-100">
      <div>
        <FloatingNav navItems= { navItems }/>
        <Hero />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  )
}