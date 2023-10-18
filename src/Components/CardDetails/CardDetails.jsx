import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
// eslint-disable-next-line react/prop-types
const CardDetails = ({ details }) => {
  const { title, id, detail, price, image, text } = details || {};

  const handleMyCart = () => {
    const addedMyCartArray = [];
    const addedItems = JSON.parse(localStorage.getItem("addToCart"));
    if (!addedItems) {
      addedMyCartArray.push(details);
      localStorage.setItem("addToCart", JSON.stringify(addedMyCartArray));
      Swal("Good job!", "Add To Cart successfully!", "success");
    } else {
      const isExists = addedItems.find((detail) => detail.id == id);
      if (!isExists) {
        addedMyCartArray.push(...addedItems, details);
        localStorage.setItem("addToCart", JSON.stringify(addedMyCartArray));
        Swal("Good job!", "Add To Cart successfully!", "success");
      } else {
        Swal("opps!", "You have already Add To Cart!", "error");
      }
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="pt-6">
        <div
          className="hero h-[900px] "
          style={{
            backgroundImage: `url(${image})`,

          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="max-w-md text-white"
            >
              <h1 className="mb-5 text-5xl font-extrabold font-serif">{title}</h1>
              <p className="mb-5">
                {detail}
              </p>
              <h1 className="text-xl font-serif">{text}</h1>
              <button onClick={handleMyCart} className="btn mt-5 text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white">
                Booking Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
