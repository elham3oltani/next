import Product from "../../components/modules/Product";
const page = async () => {
  const data = await getData();
  return (
    <>
      <Product data={data[0]} />
     
    </>
  );
};
async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/product/cctv`);
  return res.json();
}

export default page;
