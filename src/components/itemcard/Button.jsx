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
  const style3 = {
    ...style,
    backgroundColor: "blue",
    borderRadius:'5px',
    border: "1px solid blue",
    color: "white",
  };
  let styles = {};
  if (props.theme === "blue") {
    styles = style2;
  } else if (props.theme === "white") {
    styles = style1;
  }else if (props.theme === "white1") {
    styles = style3;
  }
  return (
    <>
      <button
        onClick={props.click}
        style={styles}
        disabled={props.disable}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
