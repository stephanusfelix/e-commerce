import React from "react";
function Picture(props) {
  const style = {
    margin: "15px 0 0",
    width: "300px",
  };
  return (
    <>
      <div>
        <div style={style}>
          <img src=".../gam.jpg" alt="productPicture" />
        </div>
      </div>
    </>
  );
}

export default Picture;
