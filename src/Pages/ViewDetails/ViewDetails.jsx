import { useLoaderData, useParams } from "react-router-dom";
import SimpleBanner from "../../Components/Header/Banner/SimpleBanner";
import ProductCard from "../../Components/ProductCard/ProductCard";


const ViewDetails = () => {

  const { brandName } = useParams();
  const products = useLoaderData();

  const filteredProducts = products.filter(product => product.brandName === brandName);

  return (
    <div>
      <SimpleBanner></SimpleBanner>
      <div className="grid items-center justify-center m-auto lg:grid-cols-2 gap-5 mt-8 ">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
