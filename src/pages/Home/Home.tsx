import { Banner, HeroSlider, Notice, Stats } from "../../features";
import { MainLayout } from "../../layouts";

const Home = () => {
  return (
    <MainLayout className="space-y-10 pb-10">
      <HeroSlider />
      <Notice />
      <Banner />
      <Stats />
      {/* <AnimatedPinDemo /> */}
    </MainLayout>
  );
};

export default Home;
