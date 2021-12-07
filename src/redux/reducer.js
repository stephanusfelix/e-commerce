const initialState = {
  items: [],
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
      state.items.push(action.payload.item);
      localStorage.setItem('item',JSON.stringify(state.items))
      alert("Item " + action.payload.item.title + " is added");
      return {
        ...state,
      };
    case "ADD_ITEMS":
      console.log('CALLED',action.payload.item)
      state.items = action.payload.item;
      return {
        ...state,
      }
    default:
      return {
        ...state,
      };
  }
};
export default counterReducer;
