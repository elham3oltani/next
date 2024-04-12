"use client";
import React, { useEffect, useState, useContext, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { useMediaQuery } from "react-responsive";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import log from "../../../public/images/logoRed.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartContext } from "../context/CartContextProvider";

const Header = () => {
  const { state } = useContext(CartContext);
  const [nav, setNav] = useState(false);
  const dropdownRef = useRef();
  const pathname = usePathname();
  const handleNavbar = ({ data }) => {
    setNav(!nav);
  };
  useEffect(() => {
    setNav(false);
  }, [pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });

  useEffect(() => {
    const handleCLickOutside = () => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleCLickOutside);

    return () => {
      document.removeEventListener("mousedown", handleCLickOutside);
    };
  }, []);

  const dropdown = [
    { href: "camera", name: " دوربین مداربسته" },
    { href: "dozdgir", name: " دزدگیر اماکن" },
    { href: "gate", name: "گیت فروشگاهی" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40 && window.screenY < 90) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="text-bold">
      <div className="lg:flex flex-row-reverse justify-between lg:py-1.5 items-center lg:border-b px-8">
        <div className="flex items-center justify-center">
          <div className="lg:relative lg:flex z-50 px-2 w-full hidden">
            <input
              type="text"
              placeholder="محصول مورد نظر خودت را پیدا کن"
              className="text-sm placeholder:text-[12px] w-full text-right lg:pr-12 pr-12 rounded-full bg-[#e6e6e6] h-[35px] outline-none"
            />

            <div className="">
              <Link
                href=""
                className="right-[9px] absolute p-2 bg-red-500 mt-2 rounded-full bottom-[-1px]"
              >
                <LuSearch size={24} className="text-white " />
              </Link>
            </div>
          </div>
          <Link href="/" className="hidden lg:flex">
            <Image
              src={log}
              alt="logo"
              className="h-[60px] w-[200px] object-cover overflow-hidden"
            />
          </Link>
        </div>

        <div className="lg:flex hidden ml-8 ">
          <Link
            href="signup"
            className="bg-opacity-20 mr-3 text-center p-2 border border-basic rounded-full w-12 h-12"
          >
            {" "}
            <AiOutlineUser size={30} className="text-[#6c6c6c]" />
          </Link>
          <Link
            href="shopping"
            className="relative hidden lg:block border border-basic text-center w-12 h-12 bg-opacity-20 p-2 rounded-full"
          >
            <AiOutlineShoppingCart size={30} className="text-[#6c6c6c]" />
            <span className="rounded-full h-[15px] w-[15px] text-[12px] -top-1.5 left-1 absolute bg-basic text-white text-center ">
              {state.itemsCounter}
            </span>
          </Link>
          {/* <div onClick={() => setNav(!nav)} className="xl:hidden">
            {nav ? <IoClose size={30} /> : <HiOutlineMenu size={30} />}
          </div> */}
        </div>
      </div>

      <nav
        className={`${
          header
            ? "top-0 py-2 lg:fixed hidden z-30 transition-all shadow-lg duration-300 bg-body bg-opacity-90 text-[#414141] w-full lg:flex flex-row-reverse justify-center items-center"
            : " lg:flex hidden text-[#414141] font-bold shadow-[5px_35px_60px_-15px_rgba(0,0,0,0.3)] flex-row-reverse justify-center items-center py-2 "
        }`}
      >
        <Link href="/" className="mx-4 px-1 py-1 text-basic-hover ">
          صفحه اصلی
        </Link>
        <div className="relative">
          <button
            className="mx-4 flex items-center duration-300  hover:text-basic-hover transition-all ease-in"
            onClick={() => setIsOpen(!isOpen)}
          >
            محصولات
            <span className="bottom-0.5 ">
              <IoIosArrowDown
                className={isOpen ? "animate-bounce text-basic" : "text-basic"}
              />
            </span>
          </button>
          {isOpen ? (
            <div
              ref={dropdownRef}
              className="flex flex-col justify-start w-[150px] absolute z-10 mr-3 text-sm bg-white mt-4 shadow-xl rounded-md px-0.5 py-1"
            >
              {dropdown.map((item, index) => {
                return (
                  <div key={index} onClick={() => setIsOpen(false)}>
                    <Link
                      href={item.href}
                      className="flex w-full justify-center items-center py-1.5 hover:text-basic-hover hover:bg-basic hover:bg-opacity-20 hover:rounded-full my-1 hover:shadow-md mx-auto"
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>

        <Link
          href="/accessories"
          className="mx-4 hover:text-basic-hover transition-all ease-in duration-150"
        >
          لوازم جانبی
        </Link>

        <Link
          href="/about-us"
          className="mx-4 px-1 py-1 hover:text-basic-hover transition-all ease-in-out duration-150  "
        >
          درباره ما
        </Link>
        <Link
          href="/contact-us"
          className="mx-4 px-1 py-1 hover:text-basic-hover transition-all duration-150"
        >
          تماس با ما
        </Link>
      </nav>

      {nav ? (
        <div
          className="bg-black/80 overflow-hidden w-full h-screen fixed top-0 left-0 z-20 shadow-[5px_35px_60px_-15px_rgba(0,0,0,0.3)] lg:hidden xl:hidden flex"
          onClick={() => {
            setNav(!nav);
          }}
        ></div>
      ) : (
        ""
      )}
      <div className="lg:hidden xl:hidden fixed z-10 w-full flex justify-between flex-row-reverse item-center shadow-xl bg-white  ">
        <div className="flex items-center mr-3">
          <HiMenu
            size={30}
            className=" text-[#514e4e] "
            onClick={handleNavbar}
          />
        </div>
        <div>
          <Link href="/">
            <Image src={log} alt="logo" className="w-[100px] h-[60px]" />
          </Link>
        </div>
        {/* {localStorage.getItem("token") === null ? ( */}
        <div className="rounded-md flex text-[#514e4e] items-center  ml-3">
          <Link href="/signup">
            <FaUser size={20} className="" />
          </Link>
        </div>
      </div>

      <div className="lg:hidden xl:hidden flex">
        <div
          className={
            nav
              ? "fixed top-0 -translate-x-10 duration-700 -right-10  w-[250px] h-screen bg-white text-black z-50"
              : "fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-50"
          }
        >
          <div className="flex justify-center border-b mx-2">
            <Link href="/" className="">
              <Image
                src={log}
                alt="logo"
                className="h-[60px] w-[140px] object-cover overflow-hidden"
              />
            </Link>
          </div>
          <nav className="">
            <ul className="flex flex-col relative text-right top-1">
              <li className="flex items-center justify-end my-1.5 py-1 mx-2 rounded-md px-1">
                <Link className="w-full" href="/">
                  صفحه اصلی
                </Link>
              </li>
              {dropdown.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center justify-end py-1 mx-2 rounded-md px-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="flex w-full justify-end items-center py-1 hover:shadow-md mx-auto"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              <li className="flex items-center justify-end ease-in-out duration-200 delay-100 my-1 py-1.5 mx-2 rounded-md px-1">
                <Link className="w-full" href="/acceessories">
                  لوازم جانبی
                </Link>
              </li>
              <li className="flex items-center justify-end ease-in-out duration-200 delay-100 py-1.5 mx-2 rounded-md px-1">
                <Link className="w-full" href="/about-us">
                  درباره ما
                </Link>
              </li>
              <li className="flex items-center justify-end  ease-in-out duration-200 delay-100 my-1 py-1.5 mx-2 rounded-md px-1">
                <Link className="w-full" href="/contact-us">
                  تماس با ما
                </Link>
              </li>
              <li className="flex items-center justify-end ease-in-out duration-200 delay-100 my-1 py-1.5 mx-2 rounded-md px-1">
                <Link className="w-full" href="/shopping">
                  سبد خرید
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
