import Banner from "./Banner";

const BasicPage =async () => {
    const data = await getData();
    const dataBanner = data[1];

    return <>
    <Banner data={dataBanner} />

    </>;

};
async function getData() {
    const res = await fetch("https://backend.mahantasvir.ir");
    return res.json();
  }
export default BasicPage;