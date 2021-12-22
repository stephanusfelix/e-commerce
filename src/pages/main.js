import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/pages/main.scss";
import ItemCard from "../components/ItemCard.jsx";
import Spinner from "../components/loading/Spinner";
import { filterResponse } from "../config/filterResponse";
import axios from "axios";
import { useSelector } from "react-redux";

function Main(props) {
  const [data, setData] = useState([]);
  let url = "https://fakestoreapi.com/products";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const stock = useSelector((state) => state.data.data);

  let history = useHistory();
  if (JSON.parse(localStorage.getItem("admin"))) {
    history.push(`/homeAdmin`);
  }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("k2_items"))) {
      let datas = [];
      axios
        .get(url)
        .then((response) => {
          setIsLoaded(true);
          response.data.map((item) => {
            datas.push({ ...item, total: 20 });
          });
          localStorage.setItem("k2_items", JSON.stringify(datas));
          setData(datas);
        })
        .catch((error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        });
    } else {
      console.log("disini", JSON.parse(localStorage.getItem("k2_items")));
      setData(JSON.parse(localStorage.getItem("k2_items")));
      setIsLoaded(true);
    }
  }, [url]);

  if (error) {
    return (
      <div className="errormessage">
        <h1>
          <strong>404 |</strong> Not Found
        </h1>
        Keterangan : {error.message}
      </div>
    );
  }
  if (!isLoaded) {
    return <Spinner />;
  }

  if (data) {
    return (
      <>
        <div className="Homemain">
          <h2 className="Hometitle">Products</h2>
          <hr></hr>
          {data ? (
            <div className="Homelistproduct">
              {data.map((product, index) => (
                <ItemCard product={product} key={index} />
              ))}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </>
    );
  }
}

export default Main;
