import Input from "./Input";

const MealForm = props => {
  return (
    <form className="flex lg:block justify-between">
      <Input
        label="Amount"
        attributes={{
          id: props.name.split(" ").join("_").toLowerCase(),
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button className="w-20 lg:w-full bg-amber-900 text-white rounded-lg lg:mt-2 p-0.5">
        Add
      </button>
    </form>
  );
};

export default MealForm;
