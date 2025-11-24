import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';
const setUpRedux: any = (config: any) => {
  const reducers = combineReducers({...config.reducers});
  return createStore(reducers, applyMiddleware(thunk));
};

export default setUpRedux;
