import React from "react";
function Desc(props){
  const style = {
    margin: '15px 0 0'
  }
  return (
    <>
      <div>
          <div style={style}>{props.desc}</div>
      </div>
    </>
  );
};

export default Desc;