
import Product from "../../components/modules/Product";

const BestSeleProduct = async () => {
 const data = await getData();
 const productNew = data["proposal"];

 return <Product data={productNew} />;
};


async function getData() {
 const res = await fetch(`${process.env.BASE_URL}`);
 return res.json();
}
export default BestSeleProduct;