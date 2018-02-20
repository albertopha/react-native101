const api = require('../../utilities/api');

// ACTION TYPES
const GET_IMAGES = 'GET_IMAGES';

// ACTION CREATORS
export function getImages (images) {
  return { 
      type: GET_IMAGES, images 
  };
}

// THUNK CREATORS
export function fetchImages() {
    return dispatch => {
        return api.getImages()
            .then(images => {
                dispatch(getImages(images));
            });
    };
};

export function fetchSpecificImages(query) {
    return dispatch => {
        return api.getSpecificImages(query)
            .then(images => {
                dispatch(getImages(images))
            });
    };
};

// REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_IMAGES:
      return action.images;

    default:
      return state;
  }
}
