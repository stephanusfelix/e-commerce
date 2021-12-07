import React from "react";
import Button from './Button'
import { connect } from "react-redux";
function ButtonGroup(props){
  const style = {
    display: 'flex'
  }
  const newsTab = () => {
    window.open(props.url);
  }
  return (
    <>
      <div style={style}>
          <Button theme={'white'} click={newsTab}>Detail</Button>
          <Button theme={'green'} click={()=>props.add(props.save)}>Add to Card</Button>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return{
    add: (news) => dispatch({type: 'ADD_NEWS',payload: {news:news}})
  }
}
export default connect(null,mapDispatchToProps)(ButtonGroup);