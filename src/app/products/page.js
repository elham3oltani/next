"use client";
import React from "react";
import Product from "../../components/modules/Product";
import FilterProduct from "../../components/modules/FilterProduct";
import { useParams } from "next/navigation";

const products = async ({ searchParams }) => {
  const params = useParams();
  const data = await getData();
  return (
    <>
      <h1>{params.slug}</h1>
      <div className="mx-28 my-10 overflow-hidden">
        {/* top order */}
        <div className="flex">
          {/* single product */}
          <div className="w-[70%]">
            <Product />
          </div>
          {/* filter product */}
          <FilterProduct data={data} />
        </div>
      </div>
    </>
  );
};
export default products;
export async function getData() {
  const res = await fetch(`${process.env.BASE_URL}`).then((res) =>
  res.json()
);
  const data = res.json();
  return data;
}
