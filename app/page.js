import Cap from "./Components/Cap";
import ClientFeedbackHome from "./Components/ClientFeedbackHome/indx";
import HomeAbout from "./Components/HomeAbout";
import HomeBlog from "./Components/HomeBlog";
import HomeBookNow from "./Components/HomeBookNow";
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
      <ClientFeedbackHome />
      <HomeBookNow />
      <HomeBlog />
    </div>
  );
}
