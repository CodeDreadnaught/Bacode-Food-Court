const HeroSectionMessage = () => {
  return (
    <div className="center relative bottom-32 pb-2">
      <section className="bg-black w-[calc(100%-1.6rem)] lg:w-[calc(100%-45rem)] p-3 lg:p-7 text-white text-center rounded-xl shadow-[0_0_2px_rgba(255,255,255,0.5)]">
        <h1 className="font-semibold text-2xl lg:text-3xl">
          Craving Variety ?
        </h1>
        <p className="my-4 text-[1.0625rem]">
          Bacode Food Court offers a wide range of cuisines under one roof.
        </p>
        <p className="text-[1.0625rem]">
          Browse menus, place orders and enjoy convenient delivery from the
          comfort of your home.
        </p>
      </section>
      <div className="absolute bg-black bottom-0 h-[5.8rem] w-full -z-[1]"></div>
    </div>
  );
};

export default HeroSectionMessage;
