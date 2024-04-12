"use client";
import React, { useReducer, createContext } from "react";
const initialState = {
  selectedItemsProduct: [],
  selectesItemNewProduct: [],
  selectedItemBestSellingPro: [],
  selectedItemsAccesso: [],
  selectedProDetail: [],
  itemsCounter: 0,
  total: 0,
  chekout: false,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS-BEST-SELL":
      if (
        !state.selectedItemBestSellingPro.find(
          (item) => item.id === action.payload.id
        )
      ) {
        state.selectedItemBestSellingPro.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItemBestSellingPro: [...state.selectedItemBestSellingPro],
        ...sumItems(state.selectedItemBestSellingPro),
        chekout: false,
      };

    case "ADD_ITEMSPRODUCT_DET":
      if (
        !state.selectedProDetail.find((item) => item.id === action.payload.id)
      ) {
        state.selectedProDetail.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedProDetail: [...state.selectedProDetail],
        ...sumItems(state.selectedProDetail),
        chekout: false,
      };

    case "ADD_ITEMS-PRODUCT":
      if (
        !state.selectedItemsProduct.find(
          (item) => item.id === action.payload.id
        )
      ) {
        state.selectedItemsProduct.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItemsProduct: [...state.selectedItemsProduct],
        ...sumItems(state.selectedItemsProduct),
        chekout: false,
      };

    case "ADD_ITEMS-ACCESS0":
      if (
        !state.selectedItemsAccesso.find(
          (item) => item.id === action.payload.id
        )
      ) {
        state.selectedItemsAccesso.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItemsAccesso: [...state.selectedItemsAccesso],
        ...sumItems(state.selectedItemsAccesso),
        chekout: false,
      };

    case "ADD_ITEMS_NEW":
      if (
        !state.selectesItemNewProduct.find(
          (item) => item.id === action.payload.id
        )
      ) {
        state.selectesItemNewProduct.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectesItemNewProduct: [...state.selectesItemNewProduct],
        ...sumItems(state.selectesItemNewProduct),
        chekout: false,
      };

    case "REMOVE-ITEM-BEST-SELL":
      const newSelectedItems = state.selectedItemBestSellingPro.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItemBestSellingPro: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };

    case "REMOVE-ITEM-PRODUCT":
      const newSelectedItemsProduct = state.selectedItemsProduct.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItemsProduct: [...newSelectedItemsProduct],
        ...sumItems(newSelectedItemsProduct),
      };

    case "REMOVE-ITEM-PRODUCT_DET":
      const newSelectedItemsProductDet = state.selectedProDetail.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedProDetail: [...newSelectedItemsProductDet],
        ...sumItems(newSelectedItemsProductDet),
      };

    case "REMOVE-ITEM-ACCEESO":
      const newSelectedItemsAccesso = state.selectedItemsAccesso.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItemsAccesso: [...newSelectedItemsAccesso],
        ...sumItems(newSelectedItemsAccesso),
      };

    case "REMOVE-ITEM-FROM-NEW":
      const newSelectedItemsBrand = state.selectesItemNewProduct.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectesItemNewProduct: [...newSelectedItemsBrand],
        ...sumItems(newSelectedItemsBrand),
      };

    case "INCRESS-BEST-SELL":
      const indexI = state.selectedItemBestSellingPro.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemBestSellingPro[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItemBestSellingPro),
      };

    case "INCRESS-ACCESSO":
      const indexIo = state.selectedItemsAccesso.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsAccesso[indexIo].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItemsAccesso),
      };
    case "INCRESS-NEW":
      const indexIB = state.selectesItemNewProduct.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectesItemNewProduct[indexIB].quantity++;
      return {
        ...state,
        ...sumItems(state.selectesItemNewProduct),
      };

    case "INCRESS-PRODUCT":
      const indexIP = state.selectedItemsProduct.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsProduct[indexIP].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItemsProduct),
      };

    case "INCRESS-PRODUCT-DET":
      const indexIPD = state.selectedProDetail.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProDetail[indexIPD].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedProDetail),
      };

    case "DECRESS-BEST-SELL":
      const indexD = state.selectedItemBestSellingPro.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemBestSellingPro[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItemBestSellingPro),
      };
    case "DECRESS-NEW":
      const indexDB = state.selectesItemNewProduct.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectesItemNewProduct[indexDB].quantity--;
      return {
        ...state,
        ...sumItems(state.selectesItemNewProduct),
      };

    case "DECRESS-PRODUCT":
      const indexIPM = state.selectedItemsProduct.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsProduct[indexIPM].quantity--;
      return {
        ...state,
        ...sumItems(state.selectesItemNewProduct),
      };

    case "DECRESS-PRODUCT-DET":
      const indexIPDM = state.selectedProDetail.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProDetail[indexIPDM].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedProDetail),
      };

    case "DECRESS-ACCESSO":
      const indexDO = state.selectedItemsAccesso.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItemsAccesso[indexDO].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItemsAccesso),
      };

    case "CHECKOUT":
      return {
        selectedItemsAccesso: [],
        selectesItemNewProduct: [],
        selectedItemBestSellingPro: [],
        itemsCounter: 0,
        total: 0,
        chekout: true,
      };
    case "CLEAR":
      return {
        selectedItemsAccesso: [],
        selectesItemNewProduct: [],
        selectedItemBestSellingPro: [],
        itemsCounter: 0,
        total: 0,
        chekout: false,
      };
    default:
      return state;
  }
};
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
