import {request} from '../request';
import CrudError from './crud';
const create = async (url: string, params: any, config: any) => {
  if (!params) {
    throw new CrudError({
      method: 'POST',
      message: 'POST method requires params',
    });
  }
  return await request({
    service: url,
    params: {...params},
    method: 'POST',
    config,
  });
};

export default create;
