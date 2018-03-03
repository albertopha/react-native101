// ACTION TYPES
const ADD_PAGE = 'ADD_PAGE';
const RESET_PAGE = 'RESET_PAGE';

// ACTION CREATORS
export function addPage (page) {                        //Adds page + 1
    return {
        type: ADD_PAGE, page
    };
}

export function resetPage (pageReset) {                      //Resets page = 1
    return {
        type: RESET_PAGE, pageReset
    }
}


// REDUCER
export default function reducer (state = 1, action) {
  switch (action.type) {

    case ADD_PAGE:
        return action.page;

    case RESET_PAGE:
        return action.pageReset;

    default:
      return state;
  }
}
