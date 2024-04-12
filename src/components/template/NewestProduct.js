import Link from "next/link";
import Cart from "../modules/Cart";

 const BestSeleProduct = async () => {
  const data = await getData();
  const productNew = data["productNew"];

  return (
    <div className="lg:w-[93%] pb-8 pt-6 px-2 mx-2 lg:mx-auto bg-[#ff7d7d] mt-8 rounded-xl h-[20%] shadow-lg">
      <div className="">
        <div className="flex items-end justify-evenly lg:items-center px-1 md:px-3 lg:mx-8 flex-col lg:flex-row-reverse lg:justify-between lg:mt-4">
          <h1 className="text-xl text-center lg:mx-0 mx-auto lg:rounded-none rounded-xl lg:bg-transparent text-white font-bold">
            {" "}
           جدیدترین محصولات
          </h1>
          {/* <div className="hidden lg:inline border md:w-[65%] w-[70%]"></div> */}
          <Link
            href="/AllProductNew"
            className="mt-4 lg:mt-0 rounded-full lg:flex shadow-lg border text-[#fff] text-sm px-1.5 py-2"
          >
            مشاهده همه
          </Link>
        </div>
        <Cart data={productNew} />
      </div>
    </div>
  );
};

 async function getData() {
  const res = await fetch("https://backend.mahantasvir.ir");
  return res.json();
}
export default BestSeleProduct;