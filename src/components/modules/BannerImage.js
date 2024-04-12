import React from "react";
import Image from "next/image";
import Bannercctv from "../../../public/images/banner cctv.jpg";
import Bannersmart from "../../../public/images/banner_smart.jpg";
const BannerImage = () => {
  return (
    <section className="lg:flex-row w-full justify-center flex-col flex lg:my-8 my-4">
    <div className=" px-2">
      <Image src={Bannercctv} alt="banner cctv" className="w-full lg:w-full rounded-md" />
    </div>
    <div className="lg:px-4 px-2 lg:mt-0 mt-2">
      <Image src={Bannersmart} alt="banner smart" className="lg:w-full rounded-md" />
    </div>
  </section>
  );
};

export default BannerImage;
