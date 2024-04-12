import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TbClockHour8, TbMailCheck } from "react-icons/tb";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import logo from "../../../public/images/LOGO TRANC.png";
import neshanmeli from "../../../public/images/neshan meli.jpeg";
import enamad from "../../../public/images/enamad.jpeg";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#474747] w-full pt-6 text-sm">
      {/* first part of footer */}
      <div className="lg:flex grid grid-cols-2 text-center justify-evenly text-white">
        <div className="flex flex-col items-center">
          <span className="lg:w-16 lg:h-16 h-12 w-12 bg-basic flex items-center
           justify-center rounded-full">
            <SlLocationPin className=" justify-center " size={30} />
          </span>
          <p className="text-[12px] text-white lg:text-right mt-2">
            کرمان خیابان ابوذر شمالی بین کوچه ۶۵ و ۶۷
          </p>
        </div>

        <div className="flex flex-col items-center">
          <span className="lg:w-16 lg:h-16 h-12 w-12 bg-basic flex items-center
           justify-center rounded-full">
            {" "}
            <LiaPhoneVolumeSolid className="justify-center" size={30} />
          </span>
          <div className="font-bold mt-2">
            <p className="text-[12px]"> 034-32523720 </p>
            <p className="text-[12px]"> 0913 198 0728 </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:mt-0 mt-4">
          <span className="lg:w-16 w-12 h-12 lg:h-16 bg-basic  flex items-center justify-center rounded-full">
            <TbMailCheck className="" size={30} />
          </span>
          <p className="mt-2 text-[12px]">mahantasvir@gmail.com</p>
        </div>
        <div className="flex flex-col items-center lg:mt-0 mt-4">
          <span className="lg:w-16 lg:h-16 h-12 w-12 bg-basic flex items-center justify-center rounded-full">
            <TbClockHour8 className="justify-center" size={30} />
          </span>
          <p className="mt-2 text-[12px]">ساعت کاری : 9:30 صبح الی 13:30 ظهر</p>
          <p className="text-[12px]">عصرها 16 الی 20</p>
        </div>
      </div>
      {/* second of footer */}
      <div className="bg-[#2b2b2b] py-2 lg:flex-row-reverse text-white mt-4 flex-col text-center lg:flex justify-evenly items-center">
        <div>
          <div className="bg-white w-[180px] lg:w-[200px] mx-auto rounded-lg justify-center flex flex-col items-center mb-2">
            <Image
              src={logo}
              alt="logo mahan tasvir"
              className="rounded-lg w-full"
            />
          </div>
          <p>با ماهان تصویر با کیفیت و ارزان بخرید</p>
        </div>

        <div className="text-center">
          <ul>
            <li className="my-2">
              <Link href="/camera">دوربین مداربسته</Link>
            </li>
            <li className="my-2">
              <Link href="/dozdgir">دزدگیر اماکن</Link>
            </li>
            <li className="my-2">
              <Link href="/gate">گیت فروشگاهی</Link>
            </li>
            <li className="my-2">
              <Link href="/accessories">لوازم جانبی</Link>
            </li>
            <li className="my-2">
              <Link href="/about-us">درباره ما</Link>
            </li>
            <li className="my-2">
              <Link href="/contact-us">تماس با ما</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>ماهان تصویر در شبکه های اجتماعی</p>
          <div className="flex items-center justify-center mt-2">
          
            <Link href="https://www.instagram.com/mahan.tasvir?igsh=MWM5Zjl5dG40YmZjZg=="><IoLogoInstagram className="lg:text-[30px] text-[25px]" /></Link>
            <Link href=""><IoLogoWhatsapp className="lg:text-[30px] text-[25px] mx-3" /></Link>
            <Link href="https://t.me/mahantasvirr"><FaTelegram className="lg:text-[30px] text-[25px]" /></Link>
          </div>
        </div>
        <div className="flex">
          <Image src={enamad} alt="اینماد" className="hidden lg:inline w-[200px] mr-2 h-[120px] my-2 rounded-md" />
          <div>
            <Image src={neshanmeli} alt="نشان ملی" className="w-[200px] hidden lg:inline h-[120px] my-2 rounded-md" />
          </div>
        </div>
      </div>
      <div className="bg-[#474747] text-white ">
        <p className="py-3 text-right text-[12px] px-1 mr-2">
          کلیه ی حقوق مادی و معنوی متعلق به فروشگاه ماهان تصویر بوده و برای این
          سایت محفوظ میباشد
        </p>
      </div>
    </div>
  );
};

export default Footer;
