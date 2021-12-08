import { React, useState, useEffect } from "react";
import "../styles/pages/main.scss";
import ItemCard from "../components/ItemCard.jsx";
import Spinner from "../components/loading/Spinner";
import axios from "axios";

function Main(props) {
  const [data, setData] = useState([]);
  let url = "https://fakestoreapi.com/products";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoaded(true);
        console.log(response.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      });
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
                <ItemCard data={product} key={index} />
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
