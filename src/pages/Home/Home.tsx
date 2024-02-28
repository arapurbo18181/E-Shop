import { Banner, Hero, Notice, Stats, ThreeDCardDemo } from "../../components";
import { MainLayout } from "../../layouts";

const Home = () => {
  return (
    <MainLayout className="space-y-10 pb-10">
      <Hero />
      <Notice />
      <Banner />
      <ThreeDCardDemo />
      <Stats />
      {/* <AnimatedPinDemo /> */}
    </MainLayout>
  );
};

export default Home;
