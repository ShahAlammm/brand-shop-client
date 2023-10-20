import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bannerImage from '../../../../public/banner.json'


const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "1000px",
  with: "1430px",
};

// const spanStyle = {
//     padding: "20px",
//     background: "#efefef",
//     color: "#000000",}


const Banner = () => {

  const [slideImages,setSlideImages] =useState([]);

  useEffect(() => {
    setSlideImages(bannerImage)
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
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  {/* <span style={spanStyle}>{slideImage.caption}</span> */}
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
