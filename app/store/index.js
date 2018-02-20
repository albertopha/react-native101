import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import images from './images';
import orientation from './screenRotation';

const reducer = combineReducers({images, orientation});
  
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware,
        createLogger()
    ))
);
  
  export default store;

  export * from './images';
  export * from './screenRotation';