import React from "react";
function Button(props) {
  const style = {
    cursor: "pointer",
    padding: "15px 25px",
    margin: " 0",
  };
  const style1 = {
    ...style,
    backgroundColor: "blue",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
    border: "1px solid blue",
    color: "white",
  };
  const style2 = {
    ...style,
    border: "1px solid blue",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    color: "blue",
    backgroundColor: "white",
  };
  let styles = {};
  if (props.theme === "blue") {
    styles = style2;
  } else if (props.theme === "white") {
    styles = style1;
  }
  return (
    <>
      <button onClick={props.click} style={styles}>
        {props.children}
      </button>
    </>
  );
}

export default Button;
