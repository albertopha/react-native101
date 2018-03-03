import { resetPage } from './';

const api = require('../../utilities/api');
const { getCurrentQuery } = require('./query');

// ACTION TYPES
const GET_IMAGES = 'GET_IMAGES';
const GET_NEW_IMAGES = 'GET_NEW_IMAGES';

// ACTION CREATORS
export function getImages (images) {
  return { 
      type: GET_IMAGES, images 
  };
};

export function getNewImages (images) {
    return {
        type: GET_NEW_IMAGES, images
    };
};

// THUNK CREATORS
export function fetchImages(query, page) {
    return dispatch => {
        return api.getImages(query, page)
            .then(images => {
                dispatch(getImages(images));
                if(!query) dispatch(getCurrentQuery(""));
                else dispatch(getCurrentQuery(query));
            });
    };
};

export function fetchSpecificImages(query) {
    return dispatch => {
        return api.getSpecificImages(query)
            .then(images => {
                dispatch(resetPage(1))
                dispatch(getCurrentQuery(query))
                dispatch(getNewImages(images))
            });
    };
};

// REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_IMAGES:
      return [...state, ...action.images.hits];
    
    case GET_NEW_IMAGES:
      return action.images.hits

    default:
      return state;
  }
}
