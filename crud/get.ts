import {request} from '../request';
const get = async (url: string, params?: any, base?: any) => {
  return await request({
    service: url,
    params: !params ? null : params,
    method: 'GET',
    base,
  });
};

export default get;
