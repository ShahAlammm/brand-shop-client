import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "800px",
  };


// const spanStyle = {
//     padding: "20px",
//     background: "#efefef",
//     color: "#000000",}

// const slideImages = [
//     {
//       url: "https://i.ibb.co/WVBh5Nb/banner-1.jpg",
//       caption: "",
//     },
//     {
//       url: "https://i.ibb.co/yNC4BH5/bann-3.jpg",
//       caption: "",
//     },
//     {
//       url: "https://i.ibb.co/GfDPKhg/ban-6.jpg",
//       caption: "",
//     },
//     {
//       url: "https://i.ibb.co/B2T1K0S/banner-3.webp",
//       caption: "",
//     },
//     {
//       url: "https://i.ibb.co/NSHQ9MT/banner-2.webp",
//       caption: "",
//     },
//     {
//       url: "https://i.ibb.co/1MVksDg/bann-4.jpg",
//       caption: "",
//     },
//   ];


const Banner = () => {

  const slideImages = useLoaderData([])
  console.log(slideImages)

    useEffect(() => {
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
