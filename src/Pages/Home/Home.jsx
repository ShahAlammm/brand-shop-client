import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Card from "../../Components/Card/Card";

const Home = () => {

  const brands  = useLoaderData([])
  return (
    <div className="container m-auto">
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {
          brands?.map(brand=> <Card key={brand.id} brand={brand}></Card>)
        }
      </div>
    </div>
  );
};

export default Home;
