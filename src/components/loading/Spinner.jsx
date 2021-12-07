import React from "react";
import "../../styles/components/loading.scss";

function Spinner() {
  return (
    <>
      <div className="main-spinner">
        <div className="spinner">
          <span>Loading</span>
          <div className="half-spinner"></div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
