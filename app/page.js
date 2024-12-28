import Cap from "./Components/Cap";
import ClientFeedbackHome from "./Components/ClientFeedbackHome/indx";
import HomeAbout from "./Components/HomeAbout";
import HomeBlog from "./Components/HomeBlog";
import HomeBookNow from "./Components/HomeBookNow";
import HomeContact from "./Components/HomeContact";
import HomeGallery from "./Components/HomeGallery";
import HomePartner from "./Components/HomePartner";
import HomeProcess from "./Components/HomeProcess";
import HomeServices from "./Components/HomeServices";
import ProjectNumber from "./Components/ProjectNumber";

export default async function Home() {
  return (
    <div>
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
      <HomeContact />
    </div>
  );
}
