// import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Card from "../../Components/Card/Card";
import { useLoaderData } from "react-router-dom";


const Home = () => {

  const brands = useLoaderData([]);

  return (
    <div className="">
      <Banner></Banner>
      <div className="container m-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {brands?.map((brand) => (
          <Card key={brand.id} brand={brand}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
