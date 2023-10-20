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
    <div className="h-screen container m-auto">
      <div className="pt-24 lg:pt-32">
        <div className="card w-1/3 bg-base-100 shadow-xl justify-center items-center m-auto">
          <figure className="px-10 pt-10">
            <img src={photo} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="text-xl font-bold flex gap-x-8">
                <h1>Price: {price}$</h1>
                <p>Rating: {rating}/5</p>
              </div>
            <div className="card-actions">

              <button onClick={handleAddToCart} className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
