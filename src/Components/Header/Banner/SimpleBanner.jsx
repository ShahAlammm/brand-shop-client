import { useEffect, useState } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
};

// const spanStyle = {
//   padding: "20px",
//   // background: "#efefef",
//   color: "#000000",
// };

const SimpleBanner = ({ brandName }) => {


  const [slideImages, setSlideImages] = useState([]);

const name = brandName;

useEffect(()=>{

  fetch("/public/image.json")
  .then(res=>res.json())
  .then(data=>{setSlideImages(data)})

},[])



  const filteredProducts = slideImages?.filter(
    (image) => image?.brandName === name
  );


  return (
    <div>
      <div>
        <div className="slide-container">
          <Slide>
            {filteredProducts.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage?.url})`,
                  }}
                >
                  {/* <span className="text-4xl" style={spanStyle}>
                    {slideImage.caption}
                  </span> */}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default SimpleBanner;
