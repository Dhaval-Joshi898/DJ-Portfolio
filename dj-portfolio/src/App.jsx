import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import HelperSection from "./components/HelperSection";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import SkillsBaseImg from "./components/skillSection/SkillsBaseImg";
import SkillsMain from "./components/skillSection/SkillsMain";

function App() {
  return (
    <main className="font-body w-full min-h-screen overflow-x-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain/>
      <SkillsBaseImg/>
      <ProjectMain/>
      <ContactMeMain/>
      <FooterMain/>
      {/* <HelperSection/> */}
    </main>
  );
}

export default App;
