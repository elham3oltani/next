import React from "react";
import Cart from "../modules/Cart";
import Link from "next/link";
const EconomicPackage = async () => {
  let data = await getData();
const dataEconomic=data[0]
console.log
  return (
    <div className="mx-2 w-[93%] lg:mx-auto pb-8 pt-6 px-2 bg-basic mt-8 rounded-xl h-[20%] shadow-lg">
      <div className="">
        <div className="flex items-end justify-evenly lg:items-center px-1 md:px-3 lg:mx-8 flex-col lg:flex-row-reverse lg:justify-between lg:mt-4">
          <h1 className="text-xl text-center lg:mx-0 mx-auto w-full lg:w-fit lg:rounded-none rounded-xl bg-basic text-white lg:text-white font-bold">
            {" "}
            پکیج های اقتصادی ماهان تصویر
          </h1>
          <Link
            href="/AllProductPackage"
            className="mt-4 lg:mt-0 rounded-full lg:flex shadow-lg border text-white text-sm px-1.5 py-2"
          >
            مشاهده همه
          </Link>
        </div>
        <Cart data={dataEconomic} />
      </div>
    </div>
  );
};

async function getData() {
  const res = await fetch("https://backend.mahantasvir.ir/product/economical--package");
  return res.json();
}
export default EconomicPackage;
