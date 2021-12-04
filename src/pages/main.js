import { React, useState, useEffect } from "react";
import "../styles/pages/main.scss";
import ItemCard from "../components/ItemCard.jsx";
import axios from "axios";

function Main(props) {
  const [data, setData] = useState();
  let url = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [url]);
  return (
    <>
      <div className="Homemain">
        <h2 className="Hometitle">Products</h2>
        <hr></hr>
        {data ? (
          <div className="Homelistproduct">
            {data.map((product, index) => (
              <ItemCard data={product} key={index} />
            ))}
          </div>
        ) : (
          <div className="spinner">
            <span>Loading</span>
            <div className="half-spinner"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
