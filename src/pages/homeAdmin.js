import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table";
import { useHistory } from "react-router-dom";

function HomeAdmin(props) {
  let url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  let history = useHistory();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      history.push(`/`);
    }
    if (!JSON.parse(localStorage.getItem("k2_items"))) {
      let datas = [];
      axios
        .get(url)
        .then((response) => {
          // eslint-disable-next-line
          response.data.map((item) => {
            datas.push({ ...item, total: 20 });
          });
          localStorage.setItem("k2_items", JSON.stringify(datas));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setData(JSON.parse(localStorage.getItem("k2_items")));
    }
    // eslint-disable-next-line
  }, [url]);

  return (
    <div>
      <h1>Product</h1>
      {data.length > 1 ? <Table items={data} /> : <></>}
    </div>
  );
}

export default HomeAdmin;
