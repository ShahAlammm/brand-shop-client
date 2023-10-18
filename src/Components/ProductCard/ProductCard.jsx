const ProductCard = ({ product }) => {
  const { name, brandName, photo, rating } = product || {};
  return (
    <div>
      <div className="card card-side bg-base-200 shadow-xl w-full">
        <figure className="">
          <img src={photo} alt="Shoes" className="md:h-52 md:w-80" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Brand Name: {brandName}</p>
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
