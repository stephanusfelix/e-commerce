export function filterResponse(res = [], stock = []) {
  let temp = [];
  if (stock.length > 0) {
    res.map((item, index) => {
      const newItem = Object.assign({}, item, {
        countCart: 0,
        totalStock: 20,
        totalSales: 0,
        totalPriceCart: 0,
        totalPriceSales: 0,
      });
      temp.push(newItem);
      stock.map((items) => {
        if (item.id == items.id) {
          temp[index] = Object.assign({}, item, {
            countCart: items.countCart,
            totalStock: items.totalStock,
            totalSales: items.totalSales,
            totalPriceCart: (items.countCart * item.price).toFixed(2),
            totalPriceSales: (items.totalSales * item.price).toFixed(2),
          });
        }
      });
    });
  } else {
    res.map((item, index) => {
      const newItem = Object.assign({}, item, {
        countCart: 0,
        totalStock: 20,
        totalSales: 0,
        totalPriceCart: 0,
        totalPriceSales: 0,
      });
      temp.push(newItem);
    });
  }
  return temp;
}
