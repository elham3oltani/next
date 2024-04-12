"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductReview from "../modules/ProductReview";
const page = ({ data }) => {
  const dataProductItem = data["product_attribute"];
  let dataItem = dataProductItem?.map((item) => {
    const getFiles = { attribute: item?.attribute, value: item?.value };
    return getFiles || {};
  });

  const textBody = data.body;
  return (
    <Tabs className="bg-[#fff] px-4 mx-3 lg:px-8 pb-8 shadow-[2px_2px_30px_3px_rgba(0,0,0,0.1)] max-h-[1366] overflow-hidden items-center rounded-xl my-6 ">
      <TabList className="flex items-center justify-around border-b text-center lg:justify-end lg:pr-3">
        <Tab
          className="text-[#717171] focus:font-bold focus:text-basic cursor-pointer h-[70px] lg:mr-8 focus:border-b focus:border-basic w-42
           outline-none"
        >
          <span className="inline-block align-middle translate-y-[23px]">
            بررسی محصولات
          </span>
        </Tab>
        <Tab className="text-[#717171] cursor-pointer focus:font-bold focus:text-basic h-[70px] w-42 focus:border-b focus:border-basic outline-none">
          <span className="inline-block align-middle translate-y-[23px]">
            مشخصات فنی
          </span>
        </Tab>
      </TabList>

      <TabPanel className="mt-4">
        <ProductReview data={textBody} />
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col items-end justify-end">
          {dataItem?.map((item) => (
            <div key={item.id} className="lg:w-1/2 w-full text-right mt-2">
              <div className="my-2 lg:mr-6 justify-end flex-col items-end">
                <span className="text-silve block text-gray-400 px-2 py-1 mt-2 text-[16px]">
                  {item?.attribute}
                </span>
                <span className="font-bold block mt-2 px-2 py-1 border-y border-basic">
                  {" "}
                  {item?.value}{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default page;
