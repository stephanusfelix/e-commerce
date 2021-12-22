import React, { useEffect, useState } from "react";
import "../styles/pages/adminRekap.scss";

function AdminRekap() {
  const [recapItem, setRecapItem] = useState([]);
  let [total,setTotal] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("k2_recap"));
    if (JSON.parse(localStorage.getItem("k2_recap"))) {
      setRecapItem(data);
      // eslint-disable-next-line
      data.map((item)=>{
        // eslint-disable-next-line
          setTotal(total+=(item.price*(parseInt(item.countCart))))
      })
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div id="main">
        <h1 id="title">Rekap Penjualan</h1>
        <table>
          <thead>
            <tr className="baris">
              <th>Product</th>
              <th>Waktu</th>
              <th>Harga</th>
              <th>Terjual</th>
              <th>Pendapatan</th>
            </tr>
          </thead>
          {recapItem.length > 0 ? (
            <>
              <tbody>
                {recapItem.map((item,index) => (
                  <tr key={index}>
                    <td>
                      <div>
                        <h2>{item.title}</h2>
                        <p>{item.category}</p>
                      </div>
                    </td>
                    <td className="data">{item.time}</td>
                    <td className="data">{item.price}</td>
                    <td className="data">${parseInt(item.countCart)}</td>
                    <td className="data">
                      ${parseInt(item.countCart) * item.price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} id="total">
                    <h2>TOTAL PENDAPATAN</h2>
                  </td>
                  <td className="data">${total}</td>
                </tr>
              </tbody>
            </>
          ) : (
            <></>
          )}
        </table>
      </div>
    </>
  );
}

export default AdminRekap;
