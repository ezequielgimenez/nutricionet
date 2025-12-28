import HeaderComp from "./components/Header";
import HeroSectionComp from "./components/Hero";
import PlanesComp from "./components/Planes";
import PlanesProximosComp from "./components/PlanesProxim";
import SobreMiComp from "./components/AcercaDe";
import ContactForm from "./components/Contact";

export default function Home() {
  return (
    <div>
      <HeaderComp />
      <HeroSectionComp />
      <PlanesComp />
      <PlanesProximosComp />
      <SobreMiComp />
      <ContactForm />
    </div>
  );
}
