import HeaderStyle from "../HeaderStyle/HeaderStyle";

export default function About() {
  return (
    <>
      <section className="about-section h-screen bg-[#19BC9B] flex justify-center items-center">
        <div className="container mx-auto grid grid-cols-1 justify-items-center pt-24">
          <h2 className="text-5xl font-bold lg:mb-8 mb-2">ABOUT</h2>
          <HeaderStyle
            textColorClass={"text-white"}
            bgColorClassBefore={"before:bg-white"}
            bgColorClassAfter={"after:bg-white"}
          />
          <div className="content w-3/4 md:w-2/3 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 md:mt-12 mt-6 text-left">
            <div className="col">
              <p className="text-white text-xl font-normal">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col">
              <p className="text-white text-xl font-normal">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
