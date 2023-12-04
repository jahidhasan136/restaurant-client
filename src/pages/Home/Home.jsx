import Banner from "./Banner";
import CallUs from "./CallUs";
import Features from "./Features";
import OnlineOrder from "./OnlineOrder";
import OurMenu from "./OurMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <OnlineOrder />
      <OurMenu />
      <CallUs />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
