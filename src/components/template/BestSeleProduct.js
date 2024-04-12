import Link from "next/link";
import React from 'react';
import Cart from '../modules/Cart';
const NewestProduct = async () => {
  const data = await getData();
  const productProposal = data["proposal"];

  return (
    <div className="lg:w-[93%] pb-8 pt-6 px-2 mx-2 lg:mx-auto bg-[#b3b3b3] mt-8 rounded-xl h-[20%] shadow-lg">
      <div className="">
        <div className="flex items-end justify-evenly lg:items-center px-1 md:px-3 lg:mx-8 flex-col lg:flex-row-reverse lg:justify-between lg:mt-4">
          <h1 className="text-xl text-center lg:mx-0 mx-auto w-full lg:w-fit lg:rounded-none rounded-xl lg:bg-transparent text-white lg:text-white font-bold">
            {" "}
            پر فروش ترین محصولات
          </h1>
          {/* <div className="hidden lg:inline border md:w-[65%] w-[70%]"></div> */}
          <Link
            href="/AllProductBest"
            className="mt-4 lg:mt-0 rounded-full lg:flex shadow-lg border text-[#fff] text-sm px-1.5 py-2"
          >
            مشاهده همه
          </Link>
        </div>
        <Cart data={productProposal} />
      </div>
    </div>
  );
};
 async function getData() {
  const res = await fetch(`${process.env.BASE_URL}`);
  return res.json();
}
export default NewestProduct;