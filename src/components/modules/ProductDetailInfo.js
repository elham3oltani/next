import React, { useContext } from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdEventAvailable, MdPriceCheck } from "react-icons/md";
import { IsInCartProductDet } from "../helper/functions";
import { numberWithComma } from "../helper/functions";
import { CartContext } from "../context/CartContextProvider";
const ProductDetailInfo = ({ data }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      {data?.map((item) => (
        <div
          key={item.id}
          className="mx-2 mt-8 flex text-sm flex-col items-end justify-end px-4 pt-1 pb-2 rounded-2xl shadow-[2px_2px_30px_3px_rgba(0,0,0,0.1)] border"
        >
          <div className="flex border-b w-full flex-row-reverse justify-between items-center">
            <p className="py-1.5 text-lg">اطلاعات محصول</p>
          </div>
          <div className="flex my-2  items-center">
            <p className="mx-1">
              {item.numbers >= 1 ? (
                <>
                  <span className="">موجود در انبار</span>
                </>
              ) : (
                <span className="text-basic">ناموجود</span>
              )}
             
            </p>
            <MdEventAvailable size={25} className="text-green-500" />
          </div>
          <div className="flex my-2 items-center">
            <p className="mx-1">ارسال از یک روز کاری دیگر</p>
            <FaShippingFast size={25} className="text-blue-500" />
          </div>
          <div className="flex my-2 items-center">
            <p className="mx-1 flex items-center font-bold text-lg text-orange-500 justify-center">
              <span className="mx-1 text-black">تومان</span>
              <span className="text-basic"> {numberWithComma(item.price)}</span>
            </p>
            <MdPriceCheck size={25} className="text-blue-500" />
          </div>
          <div className="flex w-full">
            {IsInCartProductDet(state, item.id) ? (
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE-ITEM-PRODUCT_DET",
                    payload: item,
                  })
                }
                className="bg-green-500 w-full py-2 px-2 mx-2 my-2 rounded-lg text-white"
              >
                به سبد خرید اضافه شد
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "ADD_ITEMSPRODUCT_DET", payload: item })
                }
                className="bg-basic w-full py-2 px-2 mx-2 my-2 rounded-lg text-white"
              >
                اضافه به سبد خرید
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDetailInfo;
