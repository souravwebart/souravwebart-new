import type { NextPage } from "next";
import HeroAboutSection from "../Component/HeroAboutSection";
import HomeComponent from "../Component/HomeComponent";
import ProfessionalCompanies from "../Component/professionalCompanies";
import SocialSection from "../Component/SocialSection";
import SummaryList from "../Component/SubComponent/SummaryList";
import Testimonal from "../Component/Testimonal";
import WorkFeatures from "../Component/WorkFeatures";

const Home: NextPage = () => {
  return (
    <>
      <HomeComponent />
      <WorkFeatures />
      <HeroAboutSection />
      <SocialSection />
      <ProfessionalCompanies />
      <Testimonal />
      <SummaryList />
    </>
  );
};

export default Home;
