const SideBar = () => {
  return (
    <div className="bg-[var(--Very-darkblue)] text-[var(--Grayish-blue)] p-6 flex flex-col md:justify-evenly">
      <h1 className="text-3xl md:text-4xl text-[var(--Soft-orange)] ">New</h1>
      <div className="pt-2 pb-4 border-b-2 border-b-[var(--Grayish-blue)]">
        <h2 className="text-xl font-semibold text-[var(--Off-white)] mb-2">
          New Hydrogen VS Electric Cars
        </h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className=" py-4 border-b-2 border-b-[var(--Grayish-blue)]">
        <h2 className="text-xl font-semibold text-[var(--Off-white)] mb-2">
          The Downsides of AI Artistry
        </h2>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className=" py-4">
        <h2 className="text-xl font-semibold text-[var(--Off-white)] mb-2">
          Is VC Funding Drying Up?
        </h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
