// ACTION TYPES
const GET_IMAGE = 'GET_IMAGE';

// ACTION CREATORS
export function getImage (image) {
  return { 
      type: GET_IMAGE, image 
  };
}

// REDUCER
export default function reducer (state = {}, action) {
  switch (action.type) {

    case GET_IMAGE:
      return action.image;

    default:
      return state;
  }
}
