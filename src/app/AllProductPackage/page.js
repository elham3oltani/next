
import Product from "../../components/modules/Product";

const BestSeleProduct = async () => {
 const data = await getData();
 const productPackage = data[0];

 return <Product data={productPackage} />;
};


async function getData() {
 const res = await fetch(`${process.env.BASE_URL}`);
 return res.json();
}
export default BestSeleProduct;