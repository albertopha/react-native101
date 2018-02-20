// ACTION TYPES
const CHECK_ROTATION = 'CHECK_ROTATION';

// ACTION CREATORS
export function checkRotation (width, height) {
  if(width > height) {
      return {
          type: CHECK_ROTATION, orientation: true      //true for LANDSCAPE
      }
  } else {
    return { 
        type: CHECK_ROTATION, orientation: false       //false for PORTRARIT
    };
  }
}

// REDUCER
export default function reducer (state = '', action) {
  switch (action.type) {

    case CHECK_ROTATION:
      return action.orientation;

    default:
      return state;
  }
}
