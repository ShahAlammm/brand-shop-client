import { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import image from "../../../../public/simpleBanner.json";
import { Slide } from "react-slideshow-image";

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
        <div className="slide-container lg:pt-24">
          <Slide>
            {filteredProducts.map((slideImage, index) => (
              <div key={index}>
                <div className="h-96 lg:h-[700px] justify-center items-center flex">
                  <img className="w-full h-96 lg:h-[700px]" src={slideImage.url} alt="" />
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
