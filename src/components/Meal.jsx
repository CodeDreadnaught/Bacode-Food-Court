import MealForm from "./MealForm";

const Meal = props => {
  return (
    <li className="lg:flex justify-between">
      <section>
        <p className="font-semibold text-center">{props.name}</p>
        <p className="lg:mt-2 text-orange-900 font-bold text-center lg:text-left">
          ₦{props.price}
        </p>
      </section>
      <MealForm {...props} />
    </li>
  );
};

export default Meal;
