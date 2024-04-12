"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-carousel-minimal";
import { useMediaQuery } from "react-responsive";
export default function App(props) {
const imgBasic=props.dataInfo?.files
  const dataProductImg = props.dataImg;
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const dotsStyle = {
    marginBottom: "5rem",
  };
  const dataImg = dataProductImg.map((img) => {
    image: img.files;
  });
  let data = dataProductImg?.map((image) => {
    const getFiles = { image: image?.files };
    return getFiles || {};
  });

  return (
    <div className="App">
      <div className="w-full md:w-[300px] mobilel:w-[350px] mx-auto 2xl:w-[400px] xl:w-[400px] lg:w-[400px] h-auto p-4 py-2 mt-2">
        {dataImg.length > 0 ? (
          <div className="border-l">
            <Carousel
              className="max-w-[500px] w-[500px] max-h-[400px] mx-auto"
              data={data}
              time={false}
              width="500px"
              height="300px"
              radius="5px"
              slideNumber={false}
              automatic={false}
              dots={true}
              dotsStyle={dotsStyle}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="white"
              slideImageFit="cover"
              thumbnails={isTablet ? true : false}
              thumbnailWidth="80px"
              showNavBtn={false}
            />
          </div>
        ) : (
          <div>
            <img alt="product" src={imgBasic} />
          </div>
        )}
      </div>
    </div>
  );
}
