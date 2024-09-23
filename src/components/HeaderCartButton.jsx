import CartIcon from "../assests/cart-icon.svg";

const HeaderCartButton = props => {
  return (
    <button
      className="m-w-30 flex items-center gap-2 py-1 px-2 lg:px-2.5 rounded-lg bg-amber-950"
      onClick={() => props.onShowCart(true)}
    >
      <section className="size-6">
        <img
          src={CartIcon}
          alt="Cart Icon"
          className="size-full object-cover"
        />
      </section>
      <section>Your Cart</section>
      <section className="bg-amber-900 py-0.5 px-2 rounded-lg">5</section>
    </button>
  );
};

export default HeaderCartButton;
