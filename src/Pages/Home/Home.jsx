// import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Card from "../../Components/Card/Card";
import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const brands = useLoaderData([]);

  return (
    <div>
      <Banner></Banner>
      <div className="container m-auto text-center mt-10 lg:mt-24 ">
        <h1 className="text-6xl font-serif font-extrabold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">
          Your Trusted Brands
        </h1>
        <p className="font-serif font-bold mt-6 m-auto p-6">
          Embark on a journey of technological excellence with our curated
          selection of trusted brands, each a beacon of innovation and
          reliability. Apple stands at the forefront, offering unparalleled
          ingenuity and seamless integration. Google, a synonym for security and
          cutting-edge advancements, ensures your tech experience is always on
          the forefront of progress. Samsung's commitment to quality and
          durability guarantees longevity in every product, while Sony combines
          precision and style for a truly elevated tech lifestyle. Intel, a
          powerhouse in performance and security, fuels your devices with
          unwavering trust. Asus, known for its innovation, provides a diverse
          array of reliable solutions. Together, these brands form the
          foundation of our technology hub, promising a world where trust and
          innovation converge to redefine your digital experience.
        </p>
      </div>
      <div className="container m-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {brands?.map((brand) => (
          <Card key={brand.id} brand={brand}></Card>
        ))}
      </div>
      <div className="mt-16">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
