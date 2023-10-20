import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const photo = form.photo.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = {
      name,
      brandName,
      type,
      price,
      description,
      photo,
      rating,
    };

    // send data to the server
    fetch(
      "https://brand-shop-server-assignment-10-587c2cayb-shah-alams-projects.vercel.app/product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  const [rating, setRating] = useState();

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  return (
    <div className="bg-base-200 p-24 lg:p-64  font-bold font-serif">
      <h2 className="text-3xl font-extrabold">Add a Product</h2>
      <form onSubmit={handleAddProduct}>
        <div className="mb-8 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label>
              <select
                name="brandName"
                className="select select-bordered select-primary w-full"
              >
                <option value="" disabled selected>
                  Select Brand
                </option>
                <option value="Apple">Apple</option>
                <option value="Google">Google</option>
                <option value="Samsung">Samsung</option>
                <option value="Sony">Sony</option>
                <option value="Intel">Intel</option>
                <option value="Asus">Asus</option>
              </select>
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Type Name"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short Details"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-32">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <div className="input-group text-xl">
              <input
                className="w-1/12 h-10 text-xl"
                type="number"
                name="rating"
                defaultValue={rating}
                max={5}
                min={0}
              />
              <span>/ 5</span>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn text-white bg-blue-500 btn-block"
        />
      </form>
    </div>
  );
};

export default AddProduct;
