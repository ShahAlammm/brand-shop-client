import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image from "../../../../public/simpleBanner.json";
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "800px",
};

const SimpleBanner = ({ brandName }) => {
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    setSlideImages(image);
  }, []);

  const filteredProducts = slideImages.filter(
    (image) => image.brandName === brandName
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
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default SimpleBanner;
