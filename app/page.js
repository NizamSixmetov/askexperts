import Cap from "./Components/Cap";
import HomeAbout from "./Components/HomeAbout";
import HomeGallery from "./Components/HomeGallery";
import HomePartner from "./Components/HomePartner";
import HomeProcess from "./Components/HomeProcess";
import HomeServices from "./Components/HomeServices";
import Navigation from "./Components/Navigation/index";
import ProjectNumber from "./Components/ProjectNumber";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Cap />
      <HomePartner />
      <HomeAbout />
      <HomeServices />
      <HomeProcess />
      <HomeGallery />
      <ProjectNumber />
    </div>
  );
}
