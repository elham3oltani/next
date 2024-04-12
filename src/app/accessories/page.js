import Product from "@/components/modules/Product";
const page = async () => {
  const data = await getData();
  const product = data["janebi"];
  return <Product data={product} />;
};

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}`);
  return res.json();
}

export default page;
