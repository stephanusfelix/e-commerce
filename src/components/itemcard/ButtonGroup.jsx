import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function ButtonGroup(props) {
  const id = props.id;
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    outline: "none",
    border: "none",
    padding: "0",
    marginTop: "10%",
  };
  return (
    <>
      <div style={style}>
        <Link to={`/${id}`}>
          <Button theme={"blue"}>Detail</Button>
        </Link>

        <Button theme={"white"} click={() => props.add(props.save)}>
          Add to Chart
        </Button>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (news) => dispatch({ type: "ADD_NEWS", payload: { news: news } }),
  };
};
export default connect(null, mapDispatchToProps)(ButtonGroup);
