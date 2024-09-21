import meals from "../data/availableMeals";

const AvailableMeals = () => {
  const availableMeals = meals.map(meal => (
    <li key={meal.id} {...meal} className="lg:flex justify-between">
      <section>
        <p className="font-semibold text-center">{meal.name}</p>
        <p className="lg:mt-2 text-orange-900 font-bold text-center lg:text-left">
          ₦{meal.price}
        </p>
      </section>
      <section className="flex lg:block justify-between">
        <section>Amount</section>
        <button className="w-20 lg:w-full bg-amber-900 text-white rounded-lg lg:mt-2 p-0.5">
          Add
        </button>
      </section>
    </li>
  ));
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
