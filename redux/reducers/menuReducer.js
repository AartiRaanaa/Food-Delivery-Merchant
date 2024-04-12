// reducers/menuReducer.js
const initialState = {
    menuItems: [],
  };
  
  const menuReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MENU_ITEM':
        return {
          ...state,
          menuItems: [...state.menuItems, action.payload],
        };
      case 'EDIT_MENU_ITEM':
        // Implement edit functionality
        return state;
      case 'DELETE_MENU_ITEM':
        // Implement delete functionality
        return state;
      default:
        return state;
    }
  };
  
  export default menuReducer;
  