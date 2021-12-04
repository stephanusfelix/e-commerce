import React from "react";
function Tag(props){
  const style = {
    color: 'white',
    backgroundColor:'black',
    width: 'fit-content',
    padding: '5px 10px',
    borderRadius: '15px'
  }
  return (
    <>
      <div>
          <div style={style}>{props.tag}</div>
      </div>
    </>
  );
};

export default Tag;