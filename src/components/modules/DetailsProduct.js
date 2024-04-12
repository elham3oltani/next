"use client";
import ProductDetailInfo from "../../components/modules/ProductDetailInfo";
import ProductDetailItem from "../../components/modules/ProductDetailItem";
import ProductDetailImages from "../../components/modules/ProductDetailImages";
import MoreInfoDetProduct from "../../components/template/MoreInfoDetProduct";
import React from "react";
const ProductDet = ({ data }) => {
  //console.log(JSON.parse(props.data).flat()[0]) //because the response was not proper i have to make this
  //const {files } = JSON.parse(props.data).flat()[1];
  const dataProduct=data[0][0]
  const productInfo = dataProduct;
  const productAttr = dataProduct;
  const productImg = dataProduct["product_image"] ? dataProduct["product_image"]  : [];
  const name=productInfo?.name
  const body=productInfo ? productInfo.body : ""

  return (
    <>
      <section className="xl:mx-[120px] lg:mx-[60px] md:mx-[40px] sm:mx-[30px] mt-16">
        <div className="flex items-center px-1 md:px-3 flex-row-reverse justify-between lg:mt-4">
          <h1 className="w-full text-xl text-center lg:mx-0 mx-auto lg:w-fit py-2 lg:rounded-none rounded-xl lg:bg-transparent bg-basic lg:text-black text-white font-bold">
          {name}
          </h1>
          <div className="hidden lg:inline border-b border-basic w-[80%]"></div>
        </div>
        <div className="bg-[#fff] py-4 shadow-[2px_2px_30px_3px_rgba(0,0,0,0.1)] max-h-[1366] overflow-hidden flex flex-col lg:flex-row-reverse justify-between items-center rounded-xl my-6 ">
          <div className="lg:w-[40%] w-full">
             <ProductDetailImages dataImg={productImg} dataInfo={productInfo} /> 
          </div>
          <div className="lg:w-[35%] w-full">
            <ProductDetailItem data={productInfo} />
          </div>
          <div className="lg:w-[20%] px-1 lg:px-0 lg:ml-6 w-full">
            <ProductDetailInfo data={data[0]} />
          </div>
        </div>
        <MoreInfoDetProduct data={productInfo} />
      </section>
    </>
  );
};

export default ProductDet;