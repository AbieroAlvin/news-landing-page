import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Retro from "./Components/Retro";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <div className="h-screen w-full font-primary bg-[var(--Off-white)] px-4 md:px-10 mx-auto md:max-w-[1240px] ">
        <Navbar />
        <section className="grid md:grid-cols-[1.9fr_1fr] grid-cols-1 grid-rows-1 px-4 gap-6">
          <Hero />
          <SideBar />
        </section>
        <div className="mb-6">
          <Retro />
        </div>
      </div>
    </>
  );
}

export default App;
