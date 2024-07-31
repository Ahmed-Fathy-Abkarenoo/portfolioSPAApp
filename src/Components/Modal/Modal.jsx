import HeaderStyle from "../HeaderStyle/HeaderStyle";
// import img1 from "./../../assets/imgs/cabin.4417330275f78faa31c3.png";

export default function Modal({ image, title, closeModal }) {
  return (
    <>
      <div className="modal-section h-full absolute top-0 z-50 bg-slate-600 bg-opacity-60 flex justify-center overflow-auto">
        <div className="w-3/5 bg-white rounded-xl flex flex-col">
          <div className="close-icon self-end px-2 pt-2 cursor-pointer">
            <i
              className="fa fa-close fa-xl text-black"
              onClick={closeModal}></i>
          </div>
          <div className="model flex flex-col items-center pt-2 px-20 ">
            <h3 className="text-5xl font-bold text-black mb-5">{title}</h3>
            <HeaderStyle
              textColorClass={"text-black"}
              bgColorClassBefore={"before:bg-black"}
              bgColorClassAfter={"after:bg-black"}
            />
            <div className="img-frame mt-12 mb-16">
              <img className="rounded-xl" src={image} alt="" />
            </div>
            <p className="text-black px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              eius qui, odio consequatur laudantium nulla earum debitis autem,
              quos eum iusto adipisci! Autem eius minus asperiores blanditiis
              voluptas molestias aut quas culpa unde similique velit ex
              voluptatem error deleniti expedita officiis corrupti quaerat saepe
              repellendus labore, facere quos distinctio qui.
            </p>
          </div>
          <div className="flex justify-center items-center mt-4">
            <i className="fa fa-close fa-xl text-white me-2"></i>
            <p>close window</p>
          </div>
        </div>
      </div>
    </>
  );
}
