import { useEffect, useState } from "react";
import AddedCard from "../../Components/AddToCartCard/AddedCard";

const MyCart = () => {


  const [addToCart, setAddToCard] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const addToCard = JSON.parse(localStorage.getItem("addToCard"));
    if (addToCard) {
      setAddToCard(addToCard);
    } else {
      setNoFound("No Product Added !");
    }
  }, []);

// For Remove All
  const handleRemove = () => {
    localStorage.clear();
    setAddToCard([]);
    setNoFound("No Data Found !");
  };

//  For Single Product Remove
  const handleDelete = (_id) => {
    const updatedCart = addToCart.filter((item) => item._id !== _id);
    localStorage.setItem("addToCard", JSON.stringify(updatedCart));
    setAddToCard(updatedCart);
    if (updatedCart.length === 0) {
      setNoFound("No Data Found !");
    }
  };

  return (
    <div>
      <div className="pt-28">
        {noFound ? (
          <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
        ) : (
          <div>
            <div className="flex items-center justify-center">
              <div>
                {addToCart.length > 0 && (
                  <button
                    onClick={handleRemove}
                    className="btn btn-success font-bold mx-auto"
                  >
                    Delete all
                  </button>
                )}
              </div>
            </div>
            <div className="container m-auto gap-6 p-2 grid xl:grid-cols-2 md:grid-cols-1">
              {isShow
                ? addToCart.map((item) => (
                    <AddedCard key={item.id} item={item} handleDelete={handleDelete}></AddedCard>
                  ))
                : addToCart
                    .slice(0, 4)
                    .map((item) => (
                      <AddedCard key={item.id} item={item} handleDelete={handleDelete}></AddedCard>
                    ))}
            </div>
            <div className="flex items-center justify-center mt-8 mb-10">
              {addToCart.length > 4 && (
                <button
                  onClick={() => setIsShow(!isShow)}
                  className="btn btn-secondary font-bold mx-auto"
                >
                  {isShow ? "see less" : "see more"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
