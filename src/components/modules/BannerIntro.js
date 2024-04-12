"use client"
import React from "react";
import Image from "next/image";
import Bannerersal from "../../../public/images/banner-ersal.jpeg";
import Bannercctv2 from "../../../public/images/banner-cctv2.jpg";
const bannerIntro = () => {
  return (
    <section className="lg:flex-row w-full justify-center flex-col flex lg:my-8 my-4">
      <div className=" px-2">
        <Image src={Bannerersal} alt="banner cctv" className="w-full lg:w-full rounded-md" />
      </div>
      <div className="lg:px-4 px-2 lg:mt-0 mt-2">
        <Image src={Bannercctv2} alt="banner smart" className="lg:w-full rounded-md" />
      </div>
    </section>
  );
};

export default bannerIntro;
