import Modal from "./Modal";

const Cart = props => {
  const cartItems = (
    <ul className="flex flex-col gap-2">
      {[
        { id: 1, name: "CDNLKM", amount: "One of One", price: "Priceless" },
      ].map(item => (
        <li className="py-2 border-b border-amber-900">
          <section className="font-bold lg:text-lg text-gray-800">
            {item.name}
          </section>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal className="">
      <div className="bg-white w-[calc(100%-1.5rem)] lg:w-[calc(100%-45rem)] p-3 rounded-xl flex flex-col gap-4">
        {cartItems}
        <div className="flex justify-between font-semibold text-lg">
          <span className="block">Total Amount</span>
          <span className="block">₦69.69</span>
        </div>
        <div className="flex justify-end gap-4">
          <button className="px-5 py-0.5 rounded-xl font-medium text-amber-900 border border-amber-900">
            Close
          </button>
          <button className="px-5 py-0.5 rounded-xl font-medium bg-amber-900 text-white">
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
