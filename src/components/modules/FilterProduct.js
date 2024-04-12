"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const FilterProduct = ({data}) => {
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [isOpenModel, setIsModel] = useState(false);
  return (
    <section className="lg:w-[25%] w-full lg:mt-5 mt-10 lg:ml-10 lg:px-0 px-3">
      <div className="border border-[#ece3e3] outline-none rounded-md px-4 py-3">
        <div className="flex justify-between flex-row-reverse items-center">
          <span>بر اساس قیمت</span>
          <IoIosArrowDown
            onClick={() => setIsOpenPrice(!isOpenPrice)}
            size={20}
            className="text-basic"
          />
        </div>
        {isOpenPrice ? (
          <FilterPrice data={data} />
        ) : (
          ""
        )}
      </div>

      <div className="border border-[#ece3e3] outline-none rounded-md px-4 py-3 mt-4">
        <div className="flex justify-between flex-row-reverse items-center">
          <span> بر اساس برند</span>
          <IoIosArrowDown
            onClick={() => setIsOpenBrand(!isOpenBrand)}
            size={20}
            className="text-basic"
          />
        </div>
        {isOpenBrand ? (
          <ul className="mt-4 trantransition-all ease-in duration-75">
            <li className="flex flex-row-reverse mt-2">
              <input type="checkbox" />
              <span className="mr-1">LUX</span>
            </li>
            <li className="flex flex-row-reverse mt-2">
              <input type="checkbox" />
              <span className="mr-1">FONIX</span>
            </li>
            <li className="flex flex-row-reverse mt-2">
              <input type="checkbox" />
              <span className="mr-1">SMART</span>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className="border border-[#ece3e3] outline-none rounded-md px-4 py-3 mt-4">
        <div className="flex justify-between flex-row-reverse items-center">
          <span> بر اساس مدل</span>
          <IoIosArrowDown
            onClick={() => setIsModel(!isOpenModel)}
            size={20}
            className="text-basic"
          />
        </div>
        {isOpenModel ? (
          <ul className="mt-4 trantransition-all ease-in duration-75">
            <li className="flex flex-row-reverse mt-2">
              <input type="checkbox" />
              <span className="mr-1">HICKVISION</span>
            </li>
            <li className="flex flex-row-reverse mt-2">
              <input type="checkbox" />
              <span className="mr-1">FUNIC</span>
            </li>
            <li className="flex flex-row-reverse mt-2">
              <input type="checkbox" />
              <span className="mr-1">DAUHVA</span>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>


      <button className="bg-basic rounded-full border-none text-white w-full py-2 mt-4">
        حذف فیلتر ها
      </button>
    </section>
  );
};

export default FilterProduct;
