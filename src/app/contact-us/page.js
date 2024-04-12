import React from "react";
import installcctv from "../../../public/images/installcctv.png";
import sale from "../../../public/images/sale.png";
import services from "../../../public/images/services.png";
import location from "../../../public/images/loc.png";
import Image from "next/image";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn, MdPhoneIphone } from "react-icons/md";
const ContactUs = () => {
  return (
    <>
      <div className="lg:w-4/5 w-full lg:mx-auto my-8 h-auto">
        <h1 className="border-b-2 border-basic text-lg mt-20 lg:mt-10 mb-8 w-56 text-black py-2 text-center mx-auto ">
          خدمات ارتباطی
        </h1>
        <div className="grid lg:grid-cols-3 gap-4 ">
          <div className="my-3 mx-auto">
            <Image
              src={installcctv}
              alt="install"
              className="w-[220px] h-[220px] xl:w-[280px] xl:h-[280px] 2xl:w-[280px] 2xl:h-[280px] lg:w-[280px] lg:h-[280px]  "
            />
            <p className="text-center text-lg">درخواست نصاب</p>
          </div>
          <div className="my-3 mx-auto">
            <Image
              src={sale}
              alt="sale"
              className="w-[220px] h-[220px] xl:w-[280px] xl:h-[280px] 2xl:w-[280px] 2xl:h-[280px] lg:w-[280px] lg:h-[280px]  "
            />
            <p className="text-center text-lg">مشاوره فروش</p>
          </div>
          <div className="my-3 mx-auto">
            <Image
              src={services}
              alt="support"
              className="w-[220px] h-[220px] xl:w-[280px] xl:h-[280px] 2xl:w-[280px] 2xl:h-[280px] lg:w-[280px] lg:h-[280px]  "
            />
            <p className="text-center text-lg">پشتیبانی</p>
          </div>
        </div>
      </div>
      <div className="mb-16 mt-4 mx-auto w-full lg:w-4/5 text-black ">
        <div className="flex-col flex lg:flex-row-reverse items-center">
          <div>
            <Image
              src={location}
              alt="location"
              className="w-[170px] h-[170px]"
            />
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex my-4 lg:justify-end justify-center items-center">
              <span className="mr-1 text-center">
                کرمان خیابان ابوذر شمالی بین کوچه 65 و 67
              </span>
              <MdOutlineLocationOn size={25} className="text-basic" />
            </div>
            <div className="flex lg:justify-end justify-center items-center my-4 mr-1">
              <span className="mr-1">0913 198 0728</span>
              <MdPhoneIphone size={25} className="text-basic" />
            </div>
            <div className="flex lg:justify-end justify-center items-center my-4 mr-1">
              <span className="mr-1">034 3252 3720</span>
              <AiOutlinePhone size={25} className="text-basic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
