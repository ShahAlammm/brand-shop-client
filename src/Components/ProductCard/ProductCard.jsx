import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ product, products, setProducts }) => {
  const { _id, name, brandName, photo, rating, price, type } = product || {};

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-assignment-10-97bkzvr6f-shah-alams-projects.vercel.app/product/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = products.filter(
                (newProduct) => newProduct._id !== _id
              );
              console.log(remaining);
              setProducts(remaining);
            }
          });
      }
    });
  };

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
            <div className="card-actions justify-end">
              <div className="btn-group btn-group-horizontal ">
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn bg-slate-200 font-bold text-lg text-red-500"
                >
                  X
                </button>
              </div>
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
