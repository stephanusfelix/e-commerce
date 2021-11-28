import React from "react";
import ClampLines from "react-clamp-lines";
function Desc(props) {
  return (
    <>
      {/* <div>
        <div style={style}>{props.description}</div>
      </div> */}

      <ClampLines
        text={props.description}
        id="really-unique-id"
        lines={4}
        ellipsis="..."
        buttons={false}
        innerElement="p"
      />
    </>
  );
}

export default Desc;
