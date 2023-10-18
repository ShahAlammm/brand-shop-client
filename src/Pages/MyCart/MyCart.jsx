
const MyCart = () => {


  return (
    <div>
      {/* <div className="pt-28">
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
            <div className="container m-auto gap-6  grid lg:grid-cols-2 md:grid-cols-1 mt-10">
              {isShow
                ? addToCart.map((item) => (
                    <AddedCard key={item.id} item={item}></AddedCard>
                  ))
                : addToCart
                    .slice(0, 4)
                    .map((item) => (
                      <AddedCard key={item.id} item={item}></AddedCard>
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
      </div> */}
    </div>
  );
};

export default MyCart;
