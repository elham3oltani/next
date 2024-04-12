import React from "react";
import AttributesProduct from "../AttributesProduct";
import NewestProduct from "./NewestProduct";
import BannerImage from "../modules/BannerImage";
import BestSeleProduct from "./BestSeleProduct";
import BannerIntro from "../modules/BannerIntro";
import CustomerTrust from "../CustomerTrust";
import EconomicPackage from "./EconomicPackage";
const index = () => {
  return (
    <>
      <AttributesProduct />
      <NewestProduct />
      <BannerIntro />
      <BestSeleProduct />
      <BannerImage />
      <EconomicPackage />
      <CustomerTrust />
     
    </>
  );
};

export default index;
