import meals from "../data/availableMeals";
import Meal from "./Meal";

const AvailableMeals = () => {
  const availableMeals = meals.map(meal => <Meal key={meal.id} {...meal} />);
  return (
    <section className="bg-black">
      <section className="relative bg-black bottom-[8.2rem] center pt-5">
        <ul className="bg-white w-[calc(100vw-1.5rem)] lg:w-[calc(100vw-25rem)] rounded-xl p-3 lg:p-5 lg:text-lg flex flex-col gap-3">
          {availableMeals}
        </ul>
      </section>
    </section>
  );
};

export default AvailableMeals;
