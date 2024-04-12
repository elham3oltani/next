import DetailsProduct from "../../../components/modules/DetailsProduct"

export default async function Detail({ params: { idProduct } }) {
  const data = await getData(idProduct);
  return <DetailsProduct data={data} />;
}

export async function getData(idProduct) {
  const res = await fetch(`${process.env.BASE_URL}/single/${idProduct}`);
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.BASE_URL}/product/cctv`).then((res) =>
    res.json()
  );
  
  return res.map((idProduct) => {id: idProduct.id?.toString() || []})
}