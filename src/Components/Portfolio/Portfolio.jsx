import { useState } from "react";
import HeaderStyle from "../HeaderStyle/HeaderStyle";
import img1 from "./../../assets/imgs/cabin.4417330275f78faa31c3.png";
import img2 from "./../../assets/imgs/cake.6554473016d32b343f02.png";
import img3 from "./../../assets/imgs/circus.494a4a914b5471b41f3e.png";
import img4 from "./../../assets/imgs/game.a940b57aa7bab2eacc52.png";
import img5 from "./../../assets/imgs/safe.01792c0bdc342bf4bf9c.png";
import img6 from "./../../assets/imgs/submarine.48c9704ca7f8ce901038.png";
import Modal from "./../Modal/Modal";

export default function Portfolio() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [openFlag, setOpenFlag] = useState(false);

  function displayModal(src, title) {
    setUrl(src);
    setTitle(title);
    setOpenFlag(true);
  }

  function closeModal() {
    setOpenFlag(false);
    setUrl("");
  }

  const [imgs, setImgs] = useState([
    { name: "LOG CABIN", url: img1 },
    { name: "TASTY CAKE", url: img2 },
    { name: "CIRCUS TENT", url: img3 },
    { name: "CONTROLER", url: img4 },
    { name: "LOCKED SAFE", url: img5 },
    { name: "SUBMARINE", url: img6 },
  ]);

  return (
    <>
      <section className="portfolio-section flex justify-center items-center pt-32">
        <div className="container mx-auto flex flex-col items-center px-5">
          <h2 className="text-gray-900 text-5xl font-bold mb-8">Portfolio</h2>
          <HeaderStyle
            textColorClass={"text-black"}
            bgColorClassBefore={"before:bg-black"}
            bgColorClassAfter={"after:bg-black"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 pb-10">
            {imgs.map((img, index) => (
              <div className="card relative group cursor-pointer" key={index}>
                <div className="card-img">
                  <img className="rounded-xl" src={img.url} alt={img.name} />
                </div>
                <div
                  onClick={() => displayModal(img.url, img.name)}
                  className="card-icon w-full h-full flex justify-center items-center absolute bottom-0  bg-[#19BC9B] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500">
                  <i className="fa fa-plus text-6xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {openFlag ? (
        <Modal image={url} title={title} closeModal={closeModal} />
      ) : null}
    </>
  );
}
