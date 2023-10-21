import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  const { _id, name, brandName, photo, rating, price, type } = product || {};



  return (
    <div>
      <div className="card card-side bg-base-200 shadow-xl shadow-blue-400 lg:h-72  min-w-full">
        <figure className="">
          <img src={photo} alt="" className="p-3 md:w-80" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="space-y-4">
              <h2 className="card-title">{name}</h2>
              <p className="font-bold">Brand Name: {brandName}</p>
              <p className="font-bold">Type: {type}</p>
              <p className="font-bold">Price: {price}$</p>
            </div>
          </div>
          <div className="rating mt-1">
            <p>Rating: {rating}/5</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-secondary">Update</button>
            </Link>
            <Link to={`/details/${_id}`}>
              <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white">
                details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
