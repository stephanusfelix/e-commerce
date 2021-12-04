import React from "react";
function Image(props) {
  const style = {
    maxWidth: "350px",
    width: "auto 50%",
    maxHeight: "350px",
    height: "auto",
    display: "block",
    margin: "auto",
  };

  const imageBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "350px",
    height: "350px",
  };
  return (
    <>
      <div style={imageBox}>
        <img style={style} src={props.image} alt="brand" />
      </div>
    </>
  );
}

export default Image;
