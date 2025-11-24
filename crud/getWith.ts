import {request} from '../request';
const getWith = async (url: string, config: any, params?: any) => {
  console.log('getWithConfig', config, url);
  return await request({
    service: url,
    params: !params ? null : params,
    method: 'GET',
    config,
  });
};

export default getWith;
