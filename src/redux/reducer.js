const initialState = {
  item: [],
};

const ADD_ITEM = "ADD_ITEM";

function addItem(isAddItem) {
  return {
    type: ADD_ITEM,
    isAddItem,
  };
}

export function addNewItem(item) {
  return (dispatch) => {
    dispatch(addItem(item));
  };
}
const counterReducer = (
  state = {
    ...initialState,
  },
  action
) => {
  switch (action.type) {
    case "ADD_ITEM":
      let item = state.item;
      item.push(action.payload.item);
      localStorage.setItem("item", JSON.stringify(state.item));
      alert("Item " + action.payload.item.title + " is added");
      return {
        ...state,
      };
    case "ADD_ITEMS":
      console.log("CALLED", action.payload.item);
      state.item = action.payload.item;
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
export default counterReducer;
