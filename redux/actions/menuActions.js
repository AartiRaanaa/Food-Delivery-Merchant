// actions/menuActions.js
export const addMenuItem = (menuItem) => ({
    type: 'ADD_MENU_ITEM',
    payload: menuItem,
  });
  
  export const editMenuItem = (menuItem) => ({
    type: 'EDIT_MENU_ITEM',
    payload: menuItem,
  });
  
  export const deleteMenuItem = (menuItem) => ({
    type: 'DELETE_MENU_ITEM',
    payload: menuItem,
  });
  