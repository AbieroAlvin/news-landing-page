import heroDesk from "../images/image-web-3-desktop.jpg";
import heroMobile from "../images/image-web-3-mobile.jpg";

const Hero = () => {
  return (
    <div>
      <div>
        <img src={heroDesk} alt="/" className="hidden md:block" />
        <img src={heroMobile} alt="/" className="md:hidden" />
      </div>
      <div className="flex flex-col md:flex-row py-6 items-center">
        <div>
          <h1 className="text-[2.5rem] md:pr-2 pr-4 leading-[2.55rem] font-bold md:text-6xl">
            The Bright Future of Web 3.0
          </h1>
        </div>
        <div className="text-left md:pl-8 ">
          <p className="text-gray-500 py-4 md:pt-0 md:pb-4 text-[1rem] md:text-lg leading-6">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="text-[var(--Off-white)] bg-[var(--Soft-red)] uppercase py-2 px-8 cursor-pointer hover:scale-105 md:mt-6">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
