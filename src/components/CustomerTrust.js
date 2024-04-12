import React from "react";
import trustPhoto from "../../public/images/trust.png";
import Image from "next/image";
import saler from "../../public/images/saler.webp";
import waranti from "../../public/images/waranti.png";
import quality from "../../public/images/quality1.png";
const CustomerTrust = () => {
  return (
    <div className="lg:w-3/4 w-full lg:mx-auto my-20 flex flex-col lg:flex-row-reverse justify-between">
      <div className="lg:w-[30%] w-full">
        <Image
          src={trustPhoto}
          alt="دوربین مداربسته"
          className="w-[200px] lg:w-full mx-auto lg:h-[400px] h-[280px]"
        />
      </div>
      <div className="flex mt-4 flex-col">
        <h1 className="lg:text-[40px] lg:px-2 px-3 text-[20px] text-right lg:w-[400px]">
          چرا به ماهان تصویر اعتماد کنیم
        </h1>
        <p className="lg:w-[400px] text-justify px-3 lg:text-right lg:px-2">
          ماهان تصویر بستریست که در آن می توانید تمامی مراحل افزایش امنیت
          فروشگاه ، امنیت مجموعه ، امنیت منازل و .... خود را شامل مشاوره ،
          انتخاب و خرید آنلاین دوربین های مداربسته و سیستم های حفاظتی را با کمک
          مشاوران و فروشندگان این مجموعه به بهترین شکل ممکن انجام دهید
        </p>
        <div className="lg:flex hidden items-center justify-between mt-6">
          <div className="bg-[#e0e0e0] flex justify-center flex-col py-1 items-center rounded-lg w-[120px]">
            <Image src={saler} alt="saler" className="w-[40px]" />
            <p className="text-basic">مشاوره فروش</p>
          </div>
          <div className="bg-[#e0e0e0] flex justify-center flex-col py-1 items-center rounded-lg w-[120px]">
          <Image src={quality} alt="quality" className="w-[40px]" />
          <p className="text-basic">کیفیت مناسب</p>
          </div>
          <div className="bg-[#e0e0e0] flex justify-center flex-col py-1 items-center rounded-lg w-[120px]">
          <Image src={waranti} alt="guranti" className="w-[40px]" />
          <p className="text-basic">ضمانت</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTrust;
