import Cap from "./Components/Cap";
import HomeAbout from "./Components/HomeAbout";
import HomePartner from "./Components/HomePartner";
import Navigation from "./Components/Navigation/index";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Cap />
      <HomePartner />
      <HomeAbout />
    </div>
  );
}
