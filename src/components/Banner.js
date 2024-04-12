'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Banner({data}) {
  console.log(data)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Carousel
        autoPlay={true}
        transitionDuration={3000}
        autoPlaySpeed={2000}
        interval={3000}
        rewindWithAnimation={true}
        infinite={true}
        focusOnSelect={true}
        transitionTime={3000}
        customTransition="transform 300ms ease-in-out"
        responsive={responsive}
        removeArrowOnDeviceType={["mobile", "tablet"]}
        arrows={true}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-10`}
              onClick={clickHandler}
            >
            </div>
          );
        }}
        renderArrowNext={true}
        keyBoardControl={true}
        className="w-full md:h-[300px] top-[60px] lg:top-0 xl:h-[400px] 2xl:h-[400px] lg:h-[350px] -z-20 relative object-cover"
      >
       {
        data ? 
        data.map((banner)=>(
          <img 
          key={banner.id}
          src={banner?.files}
          alt="banner mahan tasvir"
          className="w-[93%] mx-auto md:h-[400px] rounded-lg mt-0.5 2xl:h-[400px] xl:h-[400px] lg:h-[400px] h-[200px] object-fill "
        />
        ))
        : []
       }
      </Carousel>
    </>
  );
}

export default Banner;
