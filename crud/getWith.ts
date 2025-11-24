import {request} from '../request';
const getWith = async (url: string, config: any, params?: any) => {
  
  return await request({
    service: url,
    params: !params ? null : params,
    method: 'GET',
    config,
  });
};

export default getWith;
