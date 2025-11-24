import appApi from './appApi';
import {get, create as post, remove, update} from './crud';
import {setUpRedux} from './redux';
import {create as createApiService, request} from './request';
export {
  appApi,
  createApiService,
  get,
  post,
  remove,
  request,
  setUpRedux,
  update,
};
