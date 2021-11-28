import React from "react";
import "../styles/components/itemcard.scss";
import { ButtonGroup, Desc, Image, Title, Category } from "./itemcard/index.js";
const Navbar = (props) => {
  const data = props.data;
  // const style = {
  //   background: "#fff",
  //   textAlign: "center",
  //   padding: "15px",
  //   borderRadius: "6px",
  //   boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  //   position: "relative",
  //   margin: "20px auto",
  //   width: "90%",
  //   maxWidth: "400px",
  //   overflow: "hidden",
  // };
  return (
    <>
      {/* <div style={style}> */}
      <div className="Product-card">
        <div className="Product-image">
          <Image className="image" image={data.image} />
        </div>

        <div className="Product-text">
          <div className="Product-category">
            <span className="bg">
              <Category category={data.category} />
            </span>
          </div>
          <div className="Product-title">
            <Title title={data.title} />
          </div>
        </div>
        <div className="Product-description">
          <Desc description={data.description} />
        </div>
        <ButtonGroup id={data.id} save={data} />
      </div>
    </>
  );
};

export default Navbar;
