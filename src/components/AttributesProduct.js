"use client";
import React from "react";
import Image from "next/image";
import medal from "../../public/images/medal.png";
import discount from "../../public/images/discount.png";
import freeDelivery from "../../public/images/free-delivery.png";
import service from "../../public/images/service.png";

const AttributesProduct = () => {
  return (
    <div className="flex flex-wrap flex-row-reverse rounded-lg justify-around items-center lg:w-4/5 w-full mx-auto mt-20 lg:mt-12 mb-6 lg:mb-10">
      <div className="flex flex-col items-center justify-center w-[130px] bg-[#f7f7f7] rounded-lg mb-2">
        <Image src={medal} alt="ضمانت اصالت کالا" className="lg:w-16 w-10" />
        <p className="text-[12px]">ضمانت اصالت کالا</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[130px] bg-[#f7f7f7] rounded-lg mb-2">
        <Image src={discount} alt="تخفیفات ویژه<" className="lg:w-16 w-10" />
        <p className="text-[12px]">تخفیفات ویژه</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[130px] bg-[#f7f7f7] rounded-lg mb-2">
        <Image
          alt="ارسال رایگان<"
          src={freeDelivery}
          className="lg:w-16 w-10"
        />
        <p className="text-[12px]">ارسال رایگان</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[130px] bg-[#f7f7f7] rounded-lg mb-2">
        <Image alt="پشتیبانی" src={service} className="lg:w-16 w-10" />
        <p className="text-[12px]">پشتیبانی</p>
      </div>
    </div>
  );
};

export default AttributesProduct;
