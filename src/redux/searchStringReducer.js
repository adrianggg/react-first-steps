// selectors
//actions
const createActionName = actionName => `app/columns/${actionName}`;
const CHANGE_SEARCH_VALUE = createActionName('CHANGE_SEARCH_VALUE');

export const changeSearchValue = payload => ({ type: CHANGE_SEARCH_VALUE, payload });
const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case CHANGE_SEARCH_VALUE:
        return action.payload
      default:
        return statePart;
    }
  }

  export default searchStringReducer;