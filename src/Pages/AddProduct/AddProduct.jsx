const AddProduct = () => {


  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const photo = form.photo.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;

    const newCoffee = {
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
      photo,
    };

    console.log(newCoffee);

    // send data to the server
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-base-200 p-24 mt-10  font-bold font-serif">
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
            <label className="input-group">
              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                className="input input-bordered input-primary w-full"
              />
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
                name="shortDetails"
                placeholder="Short Details"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-32">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <input type="submit" value="Add Product" className="btn text-white bg-blue-500 btn-block" />
      </form>
    </div>
  );
};

export default AddProduct;
