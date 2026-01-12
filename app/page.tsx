import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-700">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
