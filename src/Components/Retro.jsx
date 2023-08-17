import retro from "../images/image-retro-pcs.jpg";
import laptops from "../images/image-top-laptops.jpg";
import growth from "../images/image-gaming-growth.jpg";

const Retro = () => {
  return (
    <div className="px-4 flex flex-col md:flex-row mt-4 justify-evenly">
      <div className="flex py-6 md:py-6 gap-3 items-center">
        <img src={retro} alt="/" className="h-[190px] w-[130px]" />
        <div className="flex flex-col space-y-3 px-2 ">
          <h1 className="text-4xl text-[var(--Grayish-blue)]">01</h1>
          <h3 className="text-2xl text-[var(--Very-darkblue)] font-bold">
            Reviving Retro PCs
          </h3>
          <p className="text-[var(--Dark-grayishblue)] leading-6 text-[14px]">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex py-6 md:py-6 gap-3 items-center">
        <img src={laptops} alt="/" className="h-[190px] w-[130px]" />
        <div className="flex flex-col space-y-3 px-2 ">
          <h1 className="text-4xl text-[var(--Grayish-blue)]">02</h1>
          <h3 className="text-2xl text-[var(--Very-darkblue)] font-bold">
            Top 10 Laptops of 2022
          </h3>
          <p className="text-[var(--Dark-grayishblue)] leading-6 text-[14px]">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex py-6 md:py-6 gap-3 items-center">
        <img src={growth} alt="/" className="h-[190px] w-[130px]" />
        <div className="flex flex-col space-y-3 px-2">
          <h1 className="text-4xl text-[var(--Grayish-blue)]">03</h1>
          <h3 className="text-2xl text-[var(--Very-darkblue)] font-bold">
            The Growth of Gaming
          </h3>
          <p className="text-[var(--Dark-grayishblue)] leading-6 text-[14px]">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Retro;
