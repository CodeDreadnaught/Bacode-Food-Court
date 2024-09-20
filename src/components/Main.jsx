import HeroSectionMessage from "./HeroSectionMessage";
import AvailableMeals from "./AvailableMeals";

const Main = () => {
  return (
    <main>
      <div className="h-[calc(50vh-8dvh)] lg:h-[calc(60vh-8dvh)] bg-hero-image lg:bg-desktop-hero-image bg-cover lg:bg-[0_-22rem]"></div>
      <HeroSectionMessage />
      <AvailableMeals />
    </main>
  );
};

export default Main;
