import useReveal from "./hooks/useReveal";
import useScrollState from "./hooks/useScrollState";
import CursorEffects from "./components/effects/CursorEffects";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Approach from "./components/sections/Approach";
import WhyMe from "./components/sections/WhyMe";
import Process from "./components/sections/Process";
import About from "./components/sections/About";
import Faq from "./components/sections/Faq";
import Contact from "./components/sections/Contact";

export default function App() {
  useReveal();
  const { showBackTop, activeId } = useScrollState();

  return (
    <>
      <CursorEffects />
      <Header activeId={activeId} />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Approach />
        <WhyMe />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop show={showBackTop} />
    </>
  );
}
