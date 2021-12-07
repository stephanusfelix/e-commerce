import React from "react";
import { Picture , Title,Tag ,Desc,ButtonGroup} from "./productCard/index.js";
const ProductCard = (props) => {
  const data = props.data;
  const style = {
    width: "90%",
    maxWidth :"300px",
    padding: "25px",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 16px 0px",
    borderRadius: "10px",
    margin: "20px",
    overflow:'hidden'
  };
  return (
    <>
      <div style={style}>
        <Picture/>
        <Title title="barang"/>
        <Tag tag="women's chlotes"/>
        <Desc desc="asdadasdadasdasdaad"/>
        <ButtonGroup/>
      </div>
    </>
  );
};

export default ProductCard;
