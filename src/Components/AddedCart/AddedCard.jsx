import { Link } from "react-router-dom";

const AddedCard = () => {
  return (
    <div>
      <div className="pt-20">
        <div className="card card-side shadow-xl bg-base-200 h-64">
          <figure>
            {/* <img className="w-80 h-64" src={image} alt="" /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              {/* {title} */}
            </h2>
            <div>
              {/* <p className="lg:mb-2 w-64">{style}</p> */}
            </div>
            <div className="card-actions">
              {/* <Link to={`/item/${id}`}> */}
                <button className="btn font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white">
                  View Details
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedCard;
