import {request} from '../request';
import CrudError from './crud';
const update = async (url: string, params: any, config: any) => {
  if (!params) {
    throw new CrudError({
      method: 'PUT',
      message: 'PUT method requires params',
    });
  }
  return await request({
    service: url,
    params: {...params},
    method: 'PUT',
    config,
  });
};

export default update;
