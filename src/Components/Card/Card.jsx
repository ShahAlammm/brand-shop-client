import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ brand }) => {

  const { photo, brandName, shortDescription } = brand || {};

  const [product, setProduct] = useState(null);

console.log(product)


  const handleDetails = (brandName) => {
      setProduct(brandName)
    };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div
        className="w-80 lg:w-[450px] m-auto mt-12 shadow-2xl shadow-slate-900 rounded-2xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="group relative block bg-black rounded-2xl">
          <img
            alt=""
            src={photo}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-50 rounded-2xl"
          />

          <div
            className="relative p-4 sm:p-6 lg:p-8"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
              Brand
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl font-serif">
              {brandName}
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-80">
                <h3 className="text-white mb-2 font-serif">
                  {shortDescription}
                </h3>
                <Link to={`/item/${brandName}`}>
                  <button
                    onClick={() => handleDetails(brandName)}
                    className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
                  >
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
