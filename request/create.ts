// import { loggas, logger } from "kotii-logger";
import {getWith, create as post, remove, update} from '../crud';
const create = (config: any, onRequest: any) => {
  console.log('THE CONFIG BASE', config);
  const {base} = config;

  return {
    get: async (endpoint: string, params?: any) => {
      return await getWith(`${base}${endpoint}`, onRequest(config), params);
    },
    post: async (endpoint: string, params: any) => {
      // logger.log(
      //   'events',
      //   `The Post Request Enpoint ${endpoint},the base ${base}, the full: ${base}${endpoint}`,
      // );
      return await post(`${base}${endpoint}`, params, onRequest(config));
    },
    put: async (endpoint: string, params: any) => {
      
      return await update(`${base}${endpoint}`, params, onRequest(config));
    },
    delete: async (endpoint: string, params: any) => {
      return await remove(`${base}${endpoint}`, params, onRequest(config));
    },
  };
};

export default create;
