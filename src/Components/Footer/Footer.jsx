export default function Footer() {
  return (
    <>
      <section className="footr-section bg-[#2C3D4F] pt-11">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:gap-5 gap-y-16 text-center my-11 pb-7">
          <div className="location">
            <h4 className="text-[27px] font-bold mb-4">LOCATION</h4>
            <p>
              2215 John Daniel Drive <br /> Clark, MO 65243
            </p>
          </div>
          <div className="around">
            <h4 className="text-[27px] font-bold mb-12">AROUND THE WEB</h4>
            <ul className="social-icons flex justify-center gap-4 lg:gap-12  *:border *:rounded-full *:w-14 *:h-14 *:flex *:items-center *:justify-center">
              <li className="hover:bg-white group transition-all duration-500">
                <a href="">
                  <i className="fa-brands fa-facebook-f fa-lg group-hover:text-black transition-all duration-500"></i>
                </a>
              </li>
              <li className="hover:bg-white group transition-all duration-500">
                <a href="">
                  <i className="fa-brands fa-twitter fa-lg group-hover:text-black transition-all duration-500"></i>
                </a>
              </li>
              <li className="hover:bg-white group transition-all duration-500">
                <a href="">
                  <i className="fa-brands fa-linkedin-in fa-lg group-hover:text-black transition-all duration-500"></i>
                </a>
              </li>
              <li className="hover:bg-white group transition-all duration-500">
                <a href="">
                  <i className="fa-brands fa-youtube fa-lg group-hover:text-black transition-all duration-500"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="about">
            <h4 className="text-[27px] font-bold mb-4">ABOUT FREELANCER</h4>
            <p className="font-bold">
              Freelance is a free to use, MIT licensed Tailwindcss theme created
              by Ahmed Fathy
            </p>
          </div>
        </div>
        <div className="copyrigh text-center bg-[#1A252F] py-4">
          <p>Copyright © Ahmed Fathy 2024</p>
        </div>
      </section>
    </>
  );
}
