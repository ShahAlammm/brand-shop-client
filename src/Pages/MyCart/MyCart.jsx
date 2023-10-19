import { useEffect, useState } from "react";
import AddedCard from "../../Components/AddToCartCard/AddedCard";

const MyCart = () => {


  const [booking, setBooking] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const addToCard = JSON.parse(localStorage.getItem("addToCard"));
    if (addToCard) {
      setBooking(addToCard);
    } else {
      setNoFound("No Data Found !");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setBooking([]);
    setNoFound("No Data Found !");
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
                {booking.length > 0 && (
                  <button
                    onClick={handleRemove}
                    className="btn btn-success font-bold mx-auto"
                  >
                    Delete all
                  </button>
                )}
              </div>
            </div>
            <div className="container m-auto gap-6  grid lg:grid-cols-2 md:grid-cols-1 mt-10">
              {isShow
                ? booking.map((item) => (
                    <AddedCard key={item.id} item={item}></AddedCard>
                  ))
                : booking
                    .slice(0, 4)
                    .map((item) => (
                      <AddedCard key={item.id} item={item}></AddedCard>
                    ))}
            </div>
            <div className="flex items-center justify-center mt-8 mb-10">
              {booking.length > 4 && (
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
