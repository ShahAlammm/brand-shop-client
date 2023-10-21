import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bannerImage from "../../../../public/banner.json";


const Banner = () => {
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    setSlideImages(bannerImage);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div data-aos="fade-down" data-aos-duration="2000">
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div className="h-96 lg:h-[800px] justify-center items-center flex">
                  <img className="w-full h-96 lg:h-[800px]" src={slideImage.url} alt="" />
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Banner;
