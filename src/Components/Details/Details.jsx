import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
  const details = useLoaderData();

  const { _id, photo, description, rating, price, name } = details || {};

  const handleAddToCart = () => {
    const addedProductArray = [];

    const addToCard = JSON.parse(localStorage.getItem("addToCard"));
    if (!addToCard) {
      addedProductArray.push(details);
      localStorage.setItem("addToCard", JSON.stringify(addedProductArray));
      swal("Good job!", "Added product successfully!", "success");
    } else {
      const isExists = addToCard.find((detail) => detail._id === _id);
      if (!isExists) {
        addedProductArray.push(...addToCard, details);
        localStorage.setItem("addToCard", JSON.stringify(addedProductArray));
        swal("Good job!", "Added product successfully!", "success");
      } else {
        swal("opps!", "You already added this product!", "error");
      }
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={photo}
            className="max-w-sm rounded-lg shadow-cyan-400  shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6 text-xl">{description}</p>
            <div className="font-bold flex gap-12 mb-8">
              <p className="text-xl">
                Price : <span className="text-red-500">{price}$</span>
              </p>
              <p className="text-xl">Rating : {rating}/5</p>
            </div>
            <button
              onClick={handleAddToCart}
              className="btn  btn-active btn-secondary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
