// pages/index.js

import Header from "./components/Header";
import AaojiSection from "./components/AaojiSection";
import AboutSection from "./components/AboutSection";
import IcecreamCarousel from "./components/IcecreamCarousel";
import MenuSlider from "./components/MenuSlider";
import Gallery from "./components/Gallery";
import Testimonials from "./components/TestimonialsAndBooking";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="bg-[#e4cb8d] min-h-screen">
      <Header />
      <AaojiSection />
      <AboutSection />
      <IcecreamCarousel />
      <MenuSlider />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
