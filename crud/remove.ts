import {request} from '../request';
import CrudError from './crud';
const remove = async (url: string, params: any, config: any) => {
  if (!params) {
    throw new CrudError({
      method: 'DELETE',
      message: 'DELETE method requires params',
    });
  }
  return await request({url, params, method: 'DELETE', config});
};
export default remove;
