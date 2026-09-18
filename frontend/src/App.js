import "./App.css";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { Marquee } from "./components/site/Marquee";
import { About } from "./components/site/About";
import { Services } from "./components/site/Services";
import { Promos } from "./components/site/Promos";
import { Gallery } from "./components/site/Gallery";
import { Testimonials } from "./components/site/Testimonials";
import { Contact } from "./components/site/Contact";
import { Faq } from "./components/site/Faq";
import { Footer } from "./components/site/Footer";
import { FloatingWhatsapp } from "./components/site/FloatingWhatsapp";
import { ServicePage } from "./components/site/ServicePage";
import { SERVICE_PAGES } from "./data/site";
import { HomeStructuredData } from "./components/site/HomeStructuredData";

function App() {
  const pathname = window.location.pathname.endsWith("/")
    ? window.location.pathname
    : `${window.location.pathname}/`;
  const servicePage = SERVICE_PAGES[pathname];

  if (servicePage) {
    return (
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
        <ServicePage page={servicePage} />
        <Analytics />
      </ReactLenis>
    );
  }

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="App bg-cream min-h-screen antialiased">
        <HomeStructuredData />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Promos />
          <Gallery />
          <Testimonials />
          <Contact />
          <Faq />
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
      <Analytics />
    </ReactLenis>
  );
}

export default App;
