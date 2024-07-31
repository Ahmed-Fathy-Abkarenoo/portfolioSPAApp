import HeaderStyle from "../HeaderStyle/HeaderStyle";
import Logo from "./../../assets/imgs/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg";

export default function Home() {
  return (
    <>
      <section className="home-section w-full h-screen bg-[#19BC9B] flex justify-center items-center">
        <div className="container mx-auto flex flex-col items-center">
          <img className="w-[40%] lg:w-[18%] rounded-full" src={Logo} />
          <h1 className="text-2xl md:text-4xl font-bold mt-14 mb-4 text-center">
            START FRAMEWORK
          </h1>
          <HeaderStyle
            textColorClass={"text-white"}
            bgColorClassBefore={"before:bg-white"}
            bgColorClassAfter={"after:bg-white"}
          />
          <p className="mt-5 text-sm md:font-medium">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </section>
    </>
  );
}
