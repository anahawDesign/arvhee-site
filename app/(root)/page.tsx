import AboutUs from "./_components/AboutUs";
import FeaturedProducts from "./_components/FeaturedProducts";
import Hero from "./_components/Hero";
import MiniMart from "./_components/MiniMart";
import OrderOnline from "./_components/OrderOnline";
import VisitUs from "./_components/VisitUs";

const RootPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <OrderOnline />
      <MiniMart />
      <VisitUs />
    </div>
  );
};

export default RootPage;
