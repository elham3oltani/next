const shortText = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = `${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]} `;
  return newTitle;
};

const IsInCartBestSelling = (state, id) => {
  const result = !!state.selectedItemBestSellingPro.find((item) => item.id === id);
  return result;
};


const quantityCountBestSelling = (state, id) => {
  const index = state.selectedItemBestSellingPro.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItemBestSellingPro[index].quantity;
  }
};

const IsInCartProduct = (state, id) => {
  const result = !!state.selectedItemsProduct.find((item) => item.id === id);
  return result;
};

const quantityCountProduct = (state, id) => {
  const index = state.selectedItemsProduct.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItemsProduct[index].quantity;
  }
};
const IsInCartProductDet = (state, id) => {
  const result = !!state.selectedProDetail.find((item) => item.id === id);
  return result;
};



const IsInCartNewProduct = (state, id) => {
    const result = !!state.selectesItemNewProduct.find((item) => item.id === id);
    return result;
  };
  const quantityCountNewProduct = (state, id) => {
    const index = state.selectesItemNewProduct.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    } else {
      return state.selectesItemNewProduct[index].quantity;
    }
  };


const IsInCartBrand = (state, id) => {
  const result = !!state.selectedItemsBeter.find((item) => item.id === id);
  return result;
};






const quantityCountBrand = (state, id) => {
    const index = state.selectedItemsBeter.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    } else {
      return state.selectedItemsBeter[index].quantity;
    }
  };

const numberWithComma = (number) => {
  const parse = parseInt(number);
  return parse.toLocaleString();
};

export { shortText,IsInCartProduct,IsInCartProductDet,quantityCountProduct,IsInCartBestSelling,IsInCartNewProduct,quantityCountNewProduct, quantityCountBestSelling,quantityCountBrand, IsInCartBrand, numberWithComma };

 
  