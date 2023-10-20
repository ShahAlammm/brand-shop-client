import { Link } from "react-router-dom";

const AddedCard = ({item}) => {

    const { _id, photo, name, brandName, type, price } = item || {};

  return (
    <div className="pt-20">
      <div className="card card-side shadow-xl bg-base-200 h-64">
        <figure>
          <img className="p-4 md:w-80" src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            {name}
          </h2>
          <div className="font-bold">
            <p className="lg:mb-2 w-64">Product:  {type}</p>
            <p className="lg:mb-2 w-64">Brand:  {brandName}</p>
            <p className="lg:mb-2 w-64">Price:  <span className="text-red-500">{price}$</span></p>
          </div>
          <div className="card-actions">
            <Link to={`/details/${_id}`}>
              <button className="btn font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedCard;
