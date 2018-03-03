
// ACTION TYPES
const GET_CURRENT_QUERY = 'GET_CURRENT_QUERY';

// ACTION CREATORS
export function getCurrentQuery (query) {
    return {
        type: GET_CURRENT_QUERY, query
    };
}


// REDUCER
export default function reducer (state = "", action) {
  switch (action.type) {

    case GET_CURRENT_QUERY:
    return action.query;

    default:
      return state;
  }
}
