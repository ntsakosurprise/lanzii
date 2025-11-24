import {create as apiCreate} from './request';

class AppApi {
  constructor() {}

  createApiService(
    apiServiceConfig: any,
    onRequest: any = (props: any) => {
      return props;
    },
  ) {
    return apiCreate(apiServiceConfig, onRequest);
  }
}

export default new AppApi();
