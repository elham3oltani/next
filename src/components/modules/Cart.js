"use client";

import { useContext } from "react";
import { TbTrashX } from "react-icons/tb";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  IsInCartNewProduct,
  quantityCountNewProduct,
  numberWithComma,
} from "../helper/functions";
import { HiPlus, HiMinus } from "react-icons/hi";
import { CartContext } from "../context/CartContextProvider";
import { ImSpinner6 } from "react-icons/im";
const Cart = ({ data }) => {
  const { state, dispatch } = useContext(CartContext);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
  

     <div className="lg:px-16">
         <Carousel
         // removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
          autoPlay={true}
          className="mx-auto pt-4 "
          keyBoardControl={true}
          customTransition="all .3"
          transitionDuration={1000}
          transitionTime={500}
          interval={500}
          arr
        >
         
          {data ? (
            data.map((product) => (
              <div
                key={product.id}
                className="bg-white lg:my-3 h-full mx-auto xl:w-[250px] xl:h-[355px]
                 lg:w-[235px] lg:h-[355px] md:w-[225px] md:h-[325px] ml:w-[80%] ml:h-[300px]
                  mm:w-[92%] mm:h-[272px] ms:w-[92%] ms:h-[272px] shadow-lg flex
                  justify-between flex-col overflow-hidden rounded-[10px]"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="cursor-pointer relative">
                    <img
                      src={product.files}
                      className="object-cover mt-4 p-0 mx-auto md:w-fit md:h-[180px]
                       xl:w-fit xl:h-[180px] lg:w-fit lg:h-[180px] w-full h-[120px]"
                      alt={product.name}
                    />
                  </div>
                </Link>
                <div
                  className="flex justify-center text-[#929090] flex-col py-1
                 items-center mt-2 overflow-hidden "
                >
                  <div className="mt-3 flex flex-col justify-center">
                    <p className="mt-1 text-black text-sm lg:text-lg text-center">
                      {product.name}
                    </p>
                    <div className="flex items-center mt-2 justify-center">
                      <span className="text-center text-basic font-bold">
                        {numberWithComma(product.price)}
                      </span>
                      <span className="text-[12px]">تومان</span>
                    </div>
                  </div>
                </div>
                <div className="text-center flex items-center justify-center overflow-hidden text-[#fff] mx-2 border-t py-2">
                  {quantityCountNewProduct(state, product.id) === 1 && (
                    <button
                      className="p-1 mx-3 rounded-full flex items-end justify-center bg-basic h-7 w-7"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE-ITEM-FROM-NEW",
                          payload: product,
                        })
                      }
                    >
                      <TbTrashX className="" size={21} />
                    </button>
                  )}
                  {quantityCountNewProduct(state, product.id) > 1 && (
                    <button
                      onClick={() =>
                        dispatch({ type: "DECRESS-NEW", payload: product })
                      }
                      className="mx-3 p-1 h-7 bg-basic w-7 flex items-end justify-center rounded-full text-2xl"
                    >
                      {" "}
                      <HiMinus size={17} />
                    </button>
                  )}
                  {quantityCountNewProduct(state, product.id) > 0 && (
                    <span className="text-black">
                      {quantityCountNewProduct(state, product.id)}
                    </span>
                  )}
                  {IsInCartNewProduct(state, product.id) ? (
                    <button
                      onClick={() =>
                        dispatch({ type: "INCRESS-NEW", payload: product })
                      }
                      className="p-1 mx-3 rounded-full flex items-end justify-center bg-basic h-7 w-7"
                    >
                      <HiPlus />
                    </button>
                  ) : (
                    <button
                      className="text-[#717171] "
                      onClick={() =>
                        dispatch({ type: "ADD_ITEMS_NEW", payload: product })
                      }
                    >
                      اضافه به سبد خرید
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <ImSpinner6 size={30} className="animate-spin mx-auto" />
          )}
        </Carousel>
     </div>
     
  );
};

export default Cart
