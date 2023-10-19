import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, brandName, photo, rating, price, description } = product || {};
  return (
    <div>
      <div className="card card-side bg-base-200 shadow-xl h-64 w-full">
        <figure className="">
          <img src={photo} alt="Shoes" className="md:h-52 md:w-80" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <h2 className="card-title">{name}</h2>
              <p className="font-bold">Brand Name: {brandName}</p>
              <p className="font-bold">Price: {price}$</p>
            </div>
            <div className="card-actions justify-end">
              <div className="btn-group btn-group-horizontal ">
                <Link to={"updateCoffee/${_id}"}>
                  <button className="btn bg-slate-200">Edit</button>
                </Link>
                <button
                  // onClick={() => handleDelete(_id)}
                  className="btn bg-slate-200 font-bold text-lg text-red-500"
                >
                  X
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold h-6 overflow-y-auto">{description}</p>
          </div>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="rating"
                  className={`mask mask-star-2 bg-orange-400`}
                  value={value}
                  checked={value === rating}
                  readOnly
                />
              </label>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
