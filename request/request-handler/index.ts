import {getQueryString, getRequestBody} from '../../utils/index.ts';
import ApiResponse from '../response-handler';

class ApiRequest {
  apiConfig: any = {};
  refinedConfig = null;
  constructor(requestConfig: any) {
    this.apiConfig = requestConfig;
  }

  async callApi() {
    let resp: any = await this.callWithFetch(this.formatRequest());
    return resp;
  }

  callWithFetch(request: any) {
    const {service, config} = request;
    const res = new ApiResponse();

    return new Promise(resolve => {
      
      fetch(service, config)
        .then(response => {

          let transformedResponse = res.analyseTransformResponse(response);
          return transformedResponse;
        })
        .then(result => {
          // console.log('THE finalResponse RESPONSE', result);
          resolve(result);
        })
        .catch((err: any) => {
          console.log('THE CAOUGHT ERROR', err);
          if (!err.native) {
            console.log('THE ERROR IS NONE NATIVE');
            res.throwApiError({
              message: err?.message,
              errorType: 'network',
              statusCode: 0,
            });
            // reject(
            //   new ResponseError({
            //     message: err?.message,
            //     errorType: 'network',
            //     statusCode: 0,
            //   }),
            // );
          } else {
            console.log('THE ERROR RESOLVES');
            resolve(err);
          }
        })
        .catch(err => {
          resolve({
            payload: {
              message: err?.message,
            },
            statusCode: err.statusCode,
            errorType: err?.errorType,
            error: err?.error,
          });
        });
    });
  }
  validateConfig() {}
  formatRequest() {
    const {service, method, params, config} = this.apiConfig;
    let requestConfig = {
      ...config,
      method,
    };
    let serviceRefined = service;
    if (method.toLowerCase() === 'get') {
      if (params) {
        let qString = getQueryString(params, false);
        serviceRefined = `${serviceRefined}${qString}`;
      }
    } else {
      requestConfig.body = getRequestBody(params);
    }

    return {
      service: serviceRefined,
      config: requestConfig,
    };
  }
}

export default ApiRequest;
