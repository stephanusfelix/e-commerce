import { createSlice } from "@reduxjs/toolkit";

const stock = JSON.parse(localStorage.getItem("k2_items"));
// const stock = JSON.parse(localStorage.getItem("k1_items"));
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: stock?.length > 0 ? stock : [],
  },
  reducers: {
    addToCartData: (state, action) => {
      let temp = [];
      let filterTemp = state.data.filter(
        (item) => item.id === action.payload.id
      );
      if (filterTemp.length > 0) {
        if (state.data.length > 0) {
          state.data.map((item) => {
            if (item.id === action.payload.id) {
              temp.push({
                id: item.id,
                countCart:
                  parseInt(action.payload.countCart) + parseInt(item.countCart),
                total: parseInt(action.payload.total),
                totalSales:
                  parseInt(action.payload.totalSales) +
                  parseInt(item.totalSales),
              });
            } else {
              temp.push(item);
            }
          });
        }
      } else {
        temp = temp.concat(state.data);
        temp.push(action.payload);
      }
      localStorage.setItem("k2_items", JSON.stringify(temp));
      // localStorage.setItem("k1_items", JSON.stringify(temp));
      return { data: temp };
    },
    checkoutData: (state, action) => {
      let temp = [];
      let filterTemp = state.data.filter(
        (item) => item.id == action.payload.id
      );
      if (filterTemp.length > 0) {
        if (state.data.length > 0) {
          state.data.map((item) => {
            if (item.id == action.payload.id) {
              temp.push({
                ...item,
                countCart: 0,
                totalPriceCart: 0,
                totalStock:
                  parseInt(item.totalStock) -
                  parseInt(action.payload.countCart),
                totalSales:
                  parseInt(item.totalSales) +
                  parseInt(action.payload.countCart),
                totalPriceSales: (
                  parseInt(item.totalSales) +
                  parseInt(action.payload.countCart) * item.price
                ).toFixed(2),
              });
            } else {
              temp.push({ ...item });
            }
          });
        }
      }
      localStorage.setItem("k2_items", JSON.stringify(temp));
      return { data: temp };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCartData, checkoutData } = dataSlice.actions;

export default dataSlice.reducer;
