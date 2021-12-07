import React from "react";
function Button(props) {

  const style = {
    cursor: "pointer",
    borderRadius: "5px",
    padding: "10px 15px",
    margin:'20px 15px 0 0'
  };
  const style1 = {
    ...style,
    backgroundColor: "blue",
    border: "none",
    color: "white",
  };
  const style2 = {
      ...style,
      border: '1px solid blue',
      color: 'blue',
      backgroundColor: 'white'
  };
  const style3 = {
    ...style,
    border: '1px solid green',
    color: 'white',
    backgroundColor: 'green'
};
  let styles = {};
  if(props.theme === 'blue'){
   styles = style2;
  }else if(props.theme === "white"){
    styles = style1;
  }
  else if(props.theme === "green"){
    styles = style3;
  }
  return (
    <>
     <button onClick={props.click} style={styles}>{props.children}</button>
    </>
  );
}

export default Button;
