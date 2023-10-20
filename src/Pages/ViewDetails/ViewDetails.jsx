import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import SimpleBanner from "../../Components/Header/Banner/SimpleBanner";
import ProductCard from "../../Components/ProductCard/ProductCard";
import {  useState } from "react";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const loadProducts = useLoaderData();

  const navigate = useNavigate();

  const [products, setProducts] = useState(loadProducts);

  const { brandName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.brandName === brandName
  );

  const bannerData = {
    brandName: brandName,
  };

  const handleSweetAlert = () => {
    Swal.fire({
      title: "Product not available!",
      text: "You won't be able to buy this!",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Go to Home",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <div>
      <SimpleBanner {...bannerData}></SimpleBanner>
      <div className="container grid items-center justify-center m-auto 2xl:grid-cols-2 gap-6 mt-8 ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              products={products}
              setProducts={setProducts}
            ></ProductCard>
          ))
        ) : (
          <>{handleSweetAlert()}</>
        )}
      </div>
    </div>
  );
};

export default ViewDetails;
