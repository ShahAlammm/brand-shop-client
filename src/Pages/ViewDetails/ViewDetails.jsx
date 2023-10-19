import { useLoaderData, useParams } from "react-router-dom";
import SimpleBanner from "../../Components/Header/Banner/SimpleBanner";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useState } from "react";

const ViewDetails = () => {

  const loadProducts = useLoaderData();

  const [products, setProducts] = useState(loadProducts);

  const { brandName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.brandName === brandName
    );


    const bannerData = {
      brandName: brandName,
    };

  return (
    <div>
      <SimpleBanner {...bannerData}></SimpleBanner>
      <div className="container grid items-center justify-center m-auto 2xl:grid-cols-2 gap-6 mt-8 ">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
