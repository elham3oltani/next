import { BiCategory } from "react-icons/bi";

const SortByProduct = () => {
    return (
        <section className="border w-full border-[#ece3e3] px-4 hidden lg:flex flex-col-reverse lg:flex-row-reverse py-1 cursor-pointer h-12 items-center text-[#a4a4a7] mt-5 rounded-md">
        <div className="flex flex-row-reverse items-center ">
          <BiCategory size={30} className="text-basic" />
          <p className="text-[#414141] font-bold">نمایش بر اساس</p>
        </div>
        <div className="flex justify-around items-center w-full lg:w-[80%]">
          <div className="overflow-hidden">
            <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">
              جدیدترین
            </p>
          </div>
          <div>
            <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">
              پرفروش ترین
            </p>
          </div>
          <div>
            <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">
              ارزان ترین
            </p>
          </div>
          <div>
            <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">
              گران ترین
            </p>
          </div>
          <div>
            <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">
              محبوب ترین
            </p>
          </div>
        </div>
      </section>
    );
};

export default SortByProduct;