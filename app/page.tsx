import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floatNavbar";
import { FaHome } from "react-icons/fa";
import { Grid } from "@/components/Grid"
export default function Home() {
  return (
    <main className="relative bg-black-100">
      <div>
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />}
        ]} />
        <Hero />
      </div>
    </main>
  )
}