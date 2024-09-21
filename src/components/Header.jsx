import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <header>
      <nav className="px-2.5 lg:px-10 bg-amber-900 text-white h-[8.5dvh] flex items-center justify-between fixed w-full z-[1]">
        <section>
          <a href="/" className="font-semibold lg:text-lg">
            Bacode Food Court
          </a>
        </section>
        <section>
          <HeaderCartButton />
        </section>
      </nav>
    </header>
  );
};

export default Header;
