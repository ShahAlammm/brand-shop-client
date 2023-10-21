import { Link } from "react-router-dom";

const AddedCard = ({ item, handleDelete }) => {
  const { _id, photo, name, brandName, type, price, rating } = item || {};

  return (
    <div className="pt-10">
      <div className="hero lg:h-96 bg-base-200 shadow-orange-300 shadow-2xl rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={photo}
            className="max-w-sm lg:h-80 rounded-lg shadow-blue-600 shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <div className="font-bold space-y-2 py-6">
            <p className="">
              Brand: {brandName}
            </p>
            <p>Type: {type}</p>
            <p>Rating: {rating}/5</p>
            <p className="text-red-500">Price: {price}$</p>
            </div>
            <Link to={`/details/${_id}`}>
              <button className="btn font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white">
                View Details
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-error font-bold ml-5"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedCard;
