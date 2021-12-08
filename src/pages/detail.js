import { React, useState, useEffect } from "react";
import axios from "axios";
import "../styles/pages/detail.scss";
import Spinner from "../components/loading/Spinner";
import { useHistory } from "react-router";
import { Image, Title, Category, Price } from "../components/itemcard/index.js";

function Detail(props) {
  var id = props.match.params.id;
  const token = useState(false);
  //test
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState([]);
  const history = useHistory();
  const [currentStock, setCurrentStock] = useState(100);

  const addToCart = () => {
    if (token === true) {
      console.log("kirim ke halaman chart");
    } else {
      history.push("/login");
    }
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => {
        setProduct(response.data);
        setIsLoaded(true);
        console.log(response.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      });
  }, [id]);

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

  if (product) {
    return (
      <>
        <section className="product">
          <div className="Product-card">
            <div className="Product-image">
              <Image className="image" image={product.image} />
            </div>

            <div className="Product-text">
              <span className="Text-category">
                <Category category={product.category} />
              </span>
              <div className="Product-title">
                <Title title={product.title} />
              </div>
              <div className="Product-category">
                <div className="Text-price">
                  <Price price={product.price} />
                </div>
              </div>
              <div className="Product-quantity">
                <input
                  type="number"
                  value={currentStock}
                  min={0}
                  onChange={(v) => setCurrentStock(v.target.value)}
                  style={{ width: 50 }}
                />
                <button type="button" className="buy--btn" onClick={addToCart}>
                  ADD TO CART
                </button>
              </div>

              <div className="Product-description">
                <h1>Product Detail</h1>
                <div className="description">{product.description}</div>
              </div>
            </div>
          </div>

          {/* <div className="product__photo">
            <div className="photo-container">
              <div className="photo-main">
                <Image className="image" image={product.image} />
              </div>
            </div>
          </div>
          <div className="product__info">
            <div className="title">
              <span>
                <Category category={product.category} />
              </span>
              <h1>{product.title}</h1>
            </div>
            <div className="price">
              <span>
                <Price price={product.price} />
              </span>
            </div>
            <div className="variant">
              <h3>SELECT A QUANTITY</h3>
            </div>
            <button className="buy--btn">ADD TO CART</button>
            <div className="description">
              <h3>DESKRIPSI</h3>
              <ul>(ISI)</ul>
            </div>
          </div> */}
        </section>
      </>
    );
  }
}

export default Detail;
