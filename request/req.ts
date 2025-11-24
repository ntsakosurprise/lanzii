import ApiRequest from './request-handler';
const request = (props: any) => {
  const req: any = new ApiRequest(props);

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async resolve => {
  
    
    let requestOutcome = await req.callApi();
    resolve(requestOutcome);
    // .then((response: any) => {
    //   resolve(response);
    // })
    // .catch((err: any) => {
    //   resolve(err);
    // });

    // log(
    //   'events',
    //   `Handling Request For Service: ${
    //     base.trim() ? base : service
    //   }, with method: ${method}`,
    // );
    // setTimeout(() => {
    //   try {
    //     log(
    //       'events',
    //       `THE REQUEST SERVICE: ${service}, config: ${
    //         config.body
    //       }, config.headers: ${JSON.stringify(config.headers)}`,
    //     );
    //     let serviceUpdated = `${service}${qString}`;
    //     log('events', `Service Updated with query string : ${serviceUpdated}`);
    //     fetch(serviceUpdated, config)
    //       .then((response: any) => {
    //         //console.log('THE STATUS RESPONSE', response);
    //         console.log('THE RESPONSE', response);

    //         log('events', `Raw response: ${JSON.stringify(response)}`);
    //         if (response.status === 400) {
    //           return reject({
    //             message: 'An error occured',
    //             success: false,
    //             appNative: true,
    //           });
    //         }
    //         if (response.status === 404) {
    //           return reject({
    //             message: 'Client error',
    //             success: false,
    //             appNative: true,
    //           });
    //         }

    //         if (response?.status === 303) {
    //           return {
    //             data: {
    //               isNewUser: true,
    //               message: 'User successfully checked',
    //               success: true,
    //             },
    //           };
    //         }
    //         return response?.text ? response.text() : response.json();
    //       })
    //       .then(result => {
    //         console.log(
    //           'THE SUBSCRIBER RESPONSE',
    //           result,
    //           isJsonString(result),
    //         );
    //         resolve({
    //           error: false,
    //           payload: isJsonString(result) ? JSON.parse(result) : result,
    //         });
    //       })
    //       .catch(error => {
    //         log(
    //           'events',
    //           `Request for service: ${
    //             base.trim() ? base : service
    //           } has failed with error: ${error} ${error?.message}`,
    //         );
    //         if (error?.appNative) {
    //           console.log('ERROR WITH MESSAGE', error);

    //           return resolve({error: true, info: {...error}});
    //         }
    //         resolve({
    //           error: true,
    //           info: {message: 'Network Error', success: false},
    //         });
    //       });
    //   } catch (error) {
    //     log('events', `CAtch request failure: ${error}`);
    //     resolve({
    //       error: true,
    //       info: {success: false, message: 'A server error has occured'},
    //     });
    //   }
    // });
  });
};

export default request;
