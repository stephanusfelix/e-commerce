import React from "react";
function Title(props) {
  const style = {
    fontSize: "150%",
    fontWeight: "bolder",
    textAlign: "center",
  };
  return (
    <>
      <div>
        <div style={style}>{props.title}</div>
      </div>
    </>
  );
}

export default Title;
